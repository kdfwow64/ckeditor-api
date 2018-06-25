<?php

/**
 * 
 * ClientEngage: ClientEngage Visitor Chat (http://www.clientengage.com)
 * Copyright 2013, ClientEngage (http://www.clientengage.com)
 *
 * You must have purchased a valid license from CodeCanyon in order to have 
 * the permission to use this file.
 * 
 * You may only use this file according to the respective licensing terms 
 * you agreed to when purchasing this item on CodeCanyon.
 * 
 * 
 * 
 *
 * @author          ClientEngage <contact@clientengage.com>
 * @copyright       Copyright 2013, ClientEngage (http://www.clientengage.com)
 * @link            http://www.clientengage.com ClientEngage
 * @since           ClientEngage - Visitor Chat v 1.0
 * 
 */
App::uses('Controller', 'Controller');

/**
 * Application-wide controller
 */
class AppController extends Controller
{

    /**
     * Indicates whether a saving operation was blocked due to the system being in demo-mode
     * @var boolean
     */
    public static $demoBlocked = false;

    /**
     * Indicates whether the demo-block should be ignored for the current operation
     * @var boolean
     */
    public static $demoBlockIgnore = false;

    /**
     * Sets the application-wide default layout
     * @var string
     */
    public $layout = 'system';

    /**
     * Initialises the app-wide pagination-options array
     * @var array
     */
    public $paginate = array();

    /**
     * Contains the app-wide helpers array
     * @var array 
     */
    public $helpers = array(
        'Html' => array('className' => 'AppHtml'),
        'Form' => array('className' => 'AppForm'),
        'Session',
        'Text',
        'Layout',
    );

    /**
     * Contains the app-wide components array
     * @var array 
     */
    public $components = array(
        'Session',
        'App',
        'Auth' => array(
            'flash' => array(
                'key' => 'auth',
                'element' => Flash::Error,
                'params' => null
            ),
            'loginAction' => array(
                'controller' => 'users',
                'action' => 'login',
                'admin' => false
            ),
            'autoRedirect' => false,
            'loginRedirect' => array('controller' => 'dashboard', 'action' => 'index', 'admin' => true),
            'authError' => 'Access not allowed.',
            'authenticate' => array(
                'Form' => array(
                    'fields' => array('username' => 'email'),
                    'scope' => array('User.active' => true)
                )
            ),
        ),
    );

    public function __construct($request = null, $response = null)
    {
        parent::__construct($request, $response);
        Configure::write('Config.language', AppConfig::read('System.language'));
        Configure::write('Config.timezone', AppConfig::read('System.timezone'));

        if (isset($this->request->params['controller']) && $this->request->params['controller'] == 'installer' && file_exists(APP . 'Config' . DS . 'clientengage-installation.ini'))
        {
            $this->redirect(array('controller' => 'dashboard', 'action' => 'index', 'admin' => true)); // Fixes first login after installation
        }

        if (Configure::check('App.baseUrl') && strlen(env('REQUEST_URI')) < strlen(Configure::read('App.baseUrl')))
        {
            // Fixes non-rewriting environments
            $this->redirect(Router::url('/', true));
        }
    }

    /**
     * Handles the rendering all jsonp responses
     * @param array $data Array of data to be rendered
     */
    public function __renderJsonp($data = array())
    {
        $this->autoRender = false;
        $this->response->type('js');
        if (Configure::read('debug') > 0)
        {
            $diagnostics = array();
            $included = get_included_files();
            foreach ($included as $k => $file)
                $included[$k] = str_replace(ROOT . DS, '', $file);
            $diagnostics['num_included_files'] = count($included);

            $diagnostics['queries'] = ClassRegistry::init('Discussion')->getDataSource()->getLog(false, false);

            $diagnostics['included_files'] = $included;
            $diagnostics['memory_usage'] = round(memory_get_usage() / 1048576, 3);
            $diagnostics['memory_peak_usage'] = round(memory_get_peak_usage() / 1048576, 3);

            $data['diagnostics'] = $diagnostics;
        }
        $return = sprintf('%s(%s)', h($this->request->query('callback')), json_encode($data));
        $this->response->body($return);
    }

    /**
     * Application-wide pre-render processing
     */
    public function beforeRender()
    {
        if (self::$demoBlocked === true)
        {
            $this->Session->setFlash(__('You cannot perform any changes in the demonstration system'));
        }

        if (($flash = $this->Session->read('Message.flash')) !== null && $flash['element'] == 'default')
        {
            $flash['element'] = Flash::Warning;
            $this->Session->write('Message.flash', $flash);
        }

        if ($this->request->is('ajax'))
        {
            Configure::write('debug', 0);
            $this->layout = 'ajax';
        }
    }

    /**
     * AppController's beforeFilter()
     */
    public function beforeFilter()
    {
        $this->Auth->authError = __('Access not allowed.');

        if ($this->name == 'CakeError')
        {
            $this->layout = 'default';
        }

        if ($this->request->query('remove_frame') !== null)
        {
            CakeSession::write('Demo.remove_frame', true);
        }

        $this->recordDiscussionActivity(); // Record activity before rendering output    
        $this->recordUserActivity(); // Record activity before rendering output    

        $this->response->header('P3P', 'CP="This is not a P3P policy. More details: ' . Router::url(array('controller' => 'contents', 'action' => 'p3p'), true) . '"');
    }

    public function afterFilter()
    {
        
    }

    public function beforeRedirect($url, $status = null, $exit = true)
    {
        if (self::$demoBlocked === true)
        {
            $this->Session->setFlash(__('You cannot perform any changes in the demonstration system'));
        }

        parent::beforeRedirect($url, $status, $exit);
    }

    /**
     * Indicates whether the user's activity was recorded for the current request
     * @var boolean 
     */
    private static $discussionActivityRecorded = false;

    /**
     * Records the current user's activity on every request
     * @return void 
     */
    private function recordDiscussionActivity()
    {
        if (self::$discussionActivityRecorded || $this->viewClass !== 'View' || $this->viewPath == 'Errors')
        {
            return;
        }

        // Record discussion activity (only if not authenticated & discussion in progress)
        if (!AuthComponent::user() && CakeSession::check('visitor.discussion_id'))
        {
            ClassRegistry::init('Discussion')->recordActivity(CakeSession::read('visitor.discussion_id'));
            self::$discussionActivityRecorded = true;
        }
    }

    /**
     * Indicates whether the user's activity was recorded for the current request
     * @var boolean 
     */
    private static $userActivityRecorded = false;
    public static $doNotRecordActivity = false;

    /**
     * Records the current user's activity on every request
     * @return void 
     */
    private function recordUserActivity()
    {
        // Record admin-activity
        if (AppAuth::user('operator_online') !== true || self::$doNotRecordActivity || !AuthComponent::user() || self::$userActivityRecorded || $this->viewClass !== 'View' || $this->viewPath == 'Errors') // only record for views, not media
        {
            return; // Not logged in/already recorded/not a view/is error nothing to log
        }

        $user_id = AppAuth::user('id');
        ClassRegistry::init('User')->recordActivity($user_id, true);

        self::$userActivityRecorded = true;
    }

    /**
     * Stores the current request's callback-function (if jsonp).
     */
    public function __storeCallbackFunction()
    {
        if (isset($this->request->query['callback']))
        {
            $used = CakeSession::check('used_callbacks') ? CakeSession::read('used_callbacks') : array();
            $used[] = $this->request->query('callback');
            CakeSession::write('used_callbacks', array_unique($used));
        }
    }

    /**
     * If teh current request is a jsonp request, this method checks if the 
     * passed callback-parameter is consistent and then checks whether the same 
     * callback method has already been used (so as to avoid re-submissions).
     * @return boolean Success
     * @throws MethodNotAllowedException
     */
    public function __checkCallbackUniqueness()
    {

        if (!isset($this->request->query['callback']))
        {
            return true;
        }

        $rev = strrev($this->request->query['callback']);
        $mult = substr($rev, 0, 1);
        $sec = substr($rev, 1, 10);

        $test = 'visitorChat_' . strrev($mult . $sec . ($mult * $sec));

        if ($test != $this->request->query['callback'])
        {
            throw new MethodNotAllowedException('Inconsistent request...');
        }


        if (!is_array(CakeSession::read('used_callbacks')))
        {
            return true;
        }

        if (in_array($this->request->query('callback'), CakeSession::read('used_callbacks')))
        {
            throw new MethodNotAllowedException('Inconsistent request...');
        }
    }

    public function checkAccess($area)
    {
        if (!AppAuth::checkAccess($area))
        {
            $this->Session->setFlash(__('You do not have access to this area.'), Flash::Error);
            $this->redirect(array('controller' => 'dashboard', 'action' => 'index', 'admin' => true), 403);
        }
    }

}
