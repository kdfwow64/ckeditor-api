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
App::uses('AppController', 'Controller');

/**
 * Discussions Controller
 *
 * @property Discussion $Discussion
 */
class DiscussionsController extends AppController
{

    public $name = 'Discussions';

    public function beforeFilter()
    {
        parent::beforeFilter();
        $this->Auth->allow(array('signup', 'status', 'signout', 'session_redir', 'composing'));
        $this->response->header('Access-Control-Allow-Origin', '*');

        if (isset($this->request->params['action']) && in_array($this->request->params['action'], array('admin_close', 'admin_read', 'admin_read_more', 'session_redir', 'signout', 'signup', 'status', 'composing', 'admin_composing')))
        {
            AppController::$demoBlockIgnore = true;
        }

        $this->__checkCallbackUniqueness();

        if (isset($this->request->params['action']) && in_array($this->request->params['action'], array('admin_index', 'admin_view', 'admin_delete', 'admin_deleteselected')))
        {
            $this->checkAccess('past_discussions');
        }
    }

    public function afterFilter()
    {
        parent::afterFilter();

        $this->__storeCallbackFunction();
    }

    /**
     * Creates the session and redirects the visitor back to the originating
     * page (this method is necessary for Safari browsers)
     * @throws MethodNotAllowedException
     */
    public function session_redir()
    {
        $this->autoRender = false;

        if ($this->request->is('post'))
        {
            CakeSession::write('visitor.open_state', true);
            CakeSession::write('visitor.has_session_saf', true);
            $this->redirect($this->request->data('referer'));
        }
        else
        {
            throw new MethodNotAllowedException();
        }
    }

    /**
     * Manages the signing-out procedure
     * @return string jsonp response
     */
    public function signout()
    {
        if (!CakeSession::check('visitor.discussion_id'))
        {
            $this->__renderJsonp(array(
                'success' => false,
                'errors' => array('operatoroffline' => array(__('You cannot sign-out since no discussion is in progress.')))
            ));
            return;
        }

        if ($this->request->query('data.sign_out') == "true")
        {
            $referer = CakeSession::read('visitor.referer');

            $discussion_id = CakeSession::read('visitor.discussion_id');
            CakeSession::delete('visitor');
            CakeSession::write('visitor.referer', $referer);

            if ($this->Discussion->hasAny(array('Discussion.id' => $discussion_id)))
            {
                $this->Discussion->id = $discussion_id;
                $this->Discussion->set('visitor_exited', true); // one minute higher than
                $this->Discussion->save();
            }

            $this->__renderJsonp(array('success' => true, 'errors' => array()));
            return;
        }

        $this->__renderJsonp(array('success' => false, 'errors' => array('Sign-out command not sent.')));
    }

    /**
     * Manages the sign-up procedure
     * @return string jsonp response
     * @throws MethodNotAllowedException
     */
    public function signup()
    {
        if (CakeSession::check('visitor.discussion_id'))
        {
            $this->__renderJsonp(array(
                'success' => false,
                'errors' => array('server' => array(__('It appears that a discussion is already in progress.')))
            ));
            return;
        }

        if (!$this->request->is('get'))
        {
            throw new MethodNotAllowedException();
        }

        if (!$this->Discussion->checkOperatorsOnline())
        {
            $this->__renderJsonp(array(
                'success' => false,
                'errors' => array('server' => array(AppConfig::read('Translations.OperatorOfflineMessage')))
            ));
            return;
        }

        App::import('Utility', 'Sanitize');
        $discussion = Sanitize::clean($this->request->query['data'], array('remove_html' => true, 'escape' => false, 'encode' => false));
        $discussion['Discussion']['username'] = trim($discussion['Discussion']['username']);
        $discussion['Discussion']['email'] = trim(strtolower($discussion['Discussion']['email']));
        $discussion['Discussion']['remote_address'] = $this->request->clientIp(false);
        $discussion['Discussion']['user_agent'] = env('HTTP_USER_AGENT');
        $discussion['Discussion']['visitor_languages'] = implode(',', $this->request->acceptLanguage());
        $discussion['Discussion']['referer'] = urldecode(urldecode(CakeSession::read('visitor.referer')));
        $this->Discussion->create();
        $this->Discussion->set($discussion);

        if ($this->Discussion->save())
        {
            CakeSession::write('visitor', array_merge($discussion['Discussion'], array('discussion_id' => $this->Discussion->id)));
            $this->__renderJsonp(array('success' => true, 'errors' => array()));
            return;
        }

        $this->__renderJsonp(array(
            'success' => false,
            'errors' => !empty($this->Discussion->validationErrors) ? $this->Discussion->validationErrors : array('server' => array('generalerror' => __('A server error occured.')))
        ));
    }

    public function composing()
    {
        if (CakeSession::check('visitor.discussion_id') !== true)
        {
            throw new MethodNotAllowedException('There is no active discussion in progress.');
        }

        if (!$this->request->is('get'))
        {
            throw new MethodNotAllowedException();
        }

        $this->Discussion->id = CakeSession::read('visitor.discussion_id');
        $this->Discussion->set(array('composing_visitor_date' => date('Y-m-d H:i:s')));
        $this->Discussion->save();

        $this->__renderJsonp(array(
            'success' => true,
        ));
    }

    public function admin_composing()
    {
        $this->autoRender = false;
        $this->response->type('json');


        if (!$this->request->data('discussion_id'))
        {
            throw new MethodNotAllowedException('No discussion passed.');
        }

        if (!$this->request->is('post'))
        {
            throw new MethodNotAllowedException();
        }

        $this->Discussion->id = $this->request->data('discussion_id');
        $this->Discussion->set(array('composing_user_date' => date('Y-m-d H:i:s')));
        $this->Discussion->set(array('composing_user_id' => AppAuth::user('id')));
        $this->Discussion->save();

        $this->response->body(json_encode(array('success' => true)));
    }

    /**
     * Sends the current chat-status to the visitor
     * @return string jsonp response
     * @throws MethodNotAllowedException
     */
    public function status()
    {
        if (!$this->request->is('get'))
        {
            throw new MethodNotAllowedException();
        }

        if (!CakeSession::check('visitor.referer') && isset($this->request->query['data']['referer']) && trim($this->request->query['data']['referer']) != '')
        {
            CakeSession::write('visitor.referer', $this->request->query['data']['referer']);
        }

        if (!CakeSession::check('visitor.has_session'))
        {
            CakeSession::write('visitor.has_session', true);
        }

        if (isset($this->request->query['data']['open_state']))
        {
            if ($this->request->query['data']['open_state'] == "true")
            {
                CakeSession::write('visitor.open_state', true);
            }
            else
            {
                CakeSession::write('visitor.open_state', false);
            }
        }

        $return = array(
            'success' => true,
            'has_session_saf' => CakeSession::read('visitor.has_session_saf'),
            'signed_up' => CakeSession::check('visitor.discussion_id'),
            'username' => CakeSession::check('visitor.username') ? CakeSession::read('visitor.username') : '',
            'avatar' => CakeSession::check('visitor.email') ? md5(strtolower(trim(CakeSession::read('visitor.email')))) : '',
            'open_state' => CakeSession::read('visitor.open_state'),
            'online' => $this->Discussion->checkOperatorsOnline()
        );

        $this->__renderJsonp($return);
    }

    /**
     * Adds a given ID to the list of active discussions
     * @param int $id
     * @return void
     */
    private function __addActiveDiscussion($id)
    {
        if ($id == null)
        {
            return;
        }

        $active = $this->__getActiveDiscussions();
        $active[] = $id;

        CakeSession::write('User.active_discussions', array_unique($active));
    }

    /**
     * Removes a given ID from the list of active discussions
     * @param int $id
     * @return void
     */
    private function __removeActiveDiscussion($id)
    {
        if ($id == null)
        {
            return;
        }

        $active = $this->__getActiveDiscussions();

        if (($key = array_search($id, $active)) !== false)
        {
            unset($active[$key]);
        }

        CakeSession::write('User.active_discussions', array_unique($active));
    }

    /**
     * Returns a list of all active discussions
     * @return array list of active discussions
     */
    private function __getActiveDiscussions()
    {
        if (!CakeSession::check('User.active_discussions'))
        {
            CakeSession::write('User.active_discussions', array());
        }

        return CakeSession::read('User.active_discussions');
    }

    /**
     * Allows the closing of active discussions
     */
    public function admin_close()
    {
        $this->autoRender = false;
        $this->response->type('json');

        $this->__removeActiveDiscussion($this->request->data('discussion_id'));

        $this->response->body(json_encode(array('success' => true)));
    }

    /**
     * Main administrator action for returning all active discussions with their
     * respective messages
     */
    public function admin_read()
    {
        $this->autoRender = false;
        $this->response->type('json');

        $since = date("Y-m-d H:i:s", strtotime('-10 minutes', time()));

        $activeIds = $this->__getActiveDiscussions();

        $conditions = array('OR' => array(array('Discussion.modified > ' => $since, 'Discussion.visitor_exited' => false)));
        if (!empty($activeIds))
        {
            $conditions = Hash::merge($conditions, array('OR' => array('Discussion.id' => $activeIds)));
        }

        $discussions = $this->Discussion->find('all', array('conditions' => $conditions));
        foreach ($discussions as &$discussion)
        {
            $modified = strtotime($discussion['Discussion']['modified']);
            $diff = strtotime('-10 minutes', time()) - $modified;
            $minutes = $diff / 60;
            $discussion['Discussion']['has_expired'] = ($minutes >= 0) || $discussion['Discussion']['visitor_exited'];

            $discussion['Discussion']['composing'] = time() - (3) < strtotime($discussion['Discussion']['composing_visitor_date']) ? true : false;

            $this->__addActiveDiscussion($discussion['Discussion']['id']);
            $reqLAST = Hash::extract($this->request->data, 'Discussion.{n}[discussion_id=' . $discussion['Discussion']['id'] . '].last_id');
            $lastId = (empty($reqLAST)) ? 0 : $reqLAST[0];

            $messages = array();
            if (isset($this->request->data['is_new_page']) && $this->request->data['is_new_page'] == 'true')
            {
                $messages = $this->Discussion->Message->find('all', array(
                    'conditions' => array('Message.discussion_id' => $discussion['Discussion']['id'], 'Message.id >' => $lastId),
                    'contain' => array('User.username', 'User.email'),
                    'limit' => 20,
                    'order' => 'Message.id DESC' // get last 20
                ));
            }
            else // get all newest
            {
                $messages = $this->Discussion->Message->find('all', array(
                    'conditions' => array('Message.discussion_id' => $discussion['Discussion']['id'], 'Message.id >' => $lastId),
                    'contain' => array('User.username', 'User.email'),
                ));
            }
            $discussion['Message'] = $messages;
        }

        App::import('Vendor', 'PHPUserAgent', array('file' => 'php-user-agent' . DS . 'lib' . DS . 'phpUserAgent.php'));
        App::uses('CakeTime', 'Utility');
        foreach ($discussions as &$disc)
        {
            foreach ($disc['Message'] as &$message)
            {
                if (!isset($message['User']['username']))
                {
                    $message['User']['username'] = $disc['Discussion']['username'];
                    $message['User']['avatar'] = md5(strtolower(trim($disc['Discussion']['email'])));
                }
                else
                {
                    $message['User']['avatar'] = md5(strtolower(trim($message['User']['email'])));
                }
                unset($message['User']['email']);

                $message['Message']['created'] = CakeTime::format('m/d/Y H:i:s e', $message['Message']['created'], false, 'UTC');
            }

            $disc['Discussion']['created'] = CakeTime::format('m/d/Y H:i:s e', $disc['Discussion']['created'], false, 'UTC');
            $disc['Discussion']['modified'] = CakeTime::format('m/d/Y H:i:s e', $disc['Discussion']['modified'], false, 'UTC');

            $phpUserAgent = new phpUserAgent($disc['Discussion']['user_agent']);
            $browserData = $phpUserAgent->toArray();
            $browserData['raw_user_agent'] = $disc['Discussion']['user_agent'];
            $browserData['browser_name'] = ucfirst($browserData['browser_name']);
            $browserData['operating_system'] = ucfirst($browserData['operating_system']);
            $disc['Discussion']['user_agent'] = $browserData;

            $cat = new L10n();
            $langs = $cat->catalog(explode(',', $disc['Discussion']['visitor_languages']));
            $formatted = array();
            foreach ($langs as $lang => $info)
            {
                $formatted[$lang] = $info['language'];
            }

            $disc['Discussion']['visitor_languages'] = $formatted;
        }

        $this->response->body(json_encode(array('success' => true, 'discussions' => $discussions)));
    }

    /**
     * Administrator action which returns "paged" message-blocks for
     * any given discussion & "first_id"
     */
    public function admin_read_more()
    {
        $this->autoRender = false;
        $this->response->type('json');

        $discussion_id = $this->request->data['discussion_id'];
        $first_id = $this->request->data['first_id'];


        $messages = $this->Discussion->Message->find('all', array(
            'conditions' => array('Message.discussion_id' => $discussion_id, 'Message.id <' => $first_id),
            'contain' => 'User.username',
            'limit' => 20,
            'order' => 'Message.id DESC' // get previous 20
        ));

        $this->Discussion->id = $discussion_id;
        $username = $this->Discussion->field('username');

        App::uses('CakeTime', 'Utility');
        foreach ($messages as &$message)
        {
            if (!isset($message['User']['username']))
            {
                $message['User']['username'] = $username;
            }

            $message['Message']['created'] = CakeTime::format('m/d/Y H:i:s e', $message['Message']['created'], false, 'UTC');
        }

        $this->response->body(json_encode(array('success' => true, 'messages' => $messages)));
    }

    /**
     * admin_index method
     *
     * @return void
     */
    public function admin_index()
    {
        $this->Discussion->recursive = 0;
        $this->paginate = array(
            'order' => 'Discussion.created DESC'
        );
        $this->set('discussions', $this->paginate());
    }

    /**
     * admin_view method
     *
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function admin_view($id = null)
    {
        if (!$this->Discussion->exists($id))
        {
            throw new NotFoundException(__('Invalid discussion'), Flash::Error);
        }
        $options = array('conditions' => array('Discussion.' . $this->Discussion->primaryKey => $id), 'contain' => array('Message' => array('User.username', 'User.email')));
        $this->set('discussion', $this->Discussion->find('first', $options));
    }

    /**
     * admin_delete method
     *
     * @throws NotFoundException
     * @throws MethodNotAllowedException
     * @param string $id
     * @return void
     */
    public function admin_delete($id = null)
    {
        $this->Discussion->id = $id;
        if (!$this->Discussion->exists())
        {
            throw new NotFoundException(__('Invalid discussion'), Flash::Error);
        }
        $this->request->onlyAllow('post', 'delete');
        if ($this->Discussion->delete())
        {
            $this->Session->setFlash(__('Discussion deleted'), Flash::Success);
            $this->redirect(array('action' => 'index'));
        }
        $this->Session->setFlash(__('Discussion was not deleted'), Flash::Error);
        $this->redirect(array('action' => 'index'));
    }

    /**
     * Delete method for selected discussions
     * @throws MethodNotAllowedException
     */
    public function admin_deleteselected()
    {
        if (!$this->request->is('post') || !isset($this->request->data['Meta']['del']))
        {
            throw new MethodNotAllowedException();
        }

        $toDelete = $this->request->data['Meta']['del'];
        if ($this->Discussion->deleteAll(array('Discussion.id' => $toDelete), true, true))
        {
            $this->Session->setFlash(String::insert(__n('You have successfully deleted :count discussion', 'You have successfully deleted :count discussions', count($toDelete)), array('count' => count($toDelete))), Flash::Success);
        }
        else
        {
            $this->Session->setFlash(__('The delete operation could not be completed'), Flash::Error);
        }
        $this->redirect(array('action' => 'index'));
    }

}
