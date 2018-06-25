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
 * Users Controller
 *
 * @property User $User
 */
class UsersController extends AppController
{

    public $name = 'Users';

    /**
     * index method
     *
     * @return void
     */
    public function admin_index()
    {
        $this->set('title_for_layout', __('Users'));

        $this->User->recursive = 0;
        $this->set('users', $this->paginate());
    }

    /**
     * view method
     *
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function admin_view($id = null)
    {
        $this->set('title_for_layout', __('View User'));

        $this->User->id = $id;
        if (!$this->User->exists())
        {
            throw new NotFoundException(__('Invalid user'));
        }
        $this->set('user', $this->User->find('first', array('conditions' => array('User.id' => $id))));
    }

    /**
     * add method
     *
     * @return void
     */
    public function admin_add()
    {
        $this->set('title_for_layout', __('Add User'));

        if ($this->request->is('post'))
        {
            $this->User->create();
            if ($this->User->save($this->request->data))
            {
                $this->Session->setFlash(__('The user has been saved'), Flash::Success);
                $this->redirect(array('action' => 'view', $this->User->id));
            }
            else
            {
                $this->Session->setFlash(__('The user could not be saved. Please, try again.'), Flash::Warning);
            }
        }
    }

    /**
     * edit method
     *
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function admin_edit($id = null)
    {
        $this->set('title_for_layout', __('Edit User'));

        $this->User->id = $id;
        if (!$this->User->exists())
        {
            throw new NotFoundException(__('Invalid user'));
        }
        if ($this->request->is('post') || $this->request->is('put'))
        {
            if ($this->User->saveAll($this->request->data))
            {
                $this->Session->setFlash(__('The user has been saved'), Flash::Success);
                $this->redirect(array('action' => 'view', $this->User->id));
            }
            else
            {
                $this->Session->setFlash(__('The user could not be saved. Please, try again.'), Flash::Warning);
            }
        }
        else
        {
            $this->request->data = $this->User->find('first', array('conditions' => array('User.id' => $id)));
        }
    }

    /**
     * delete method
     *
     * @throws MethodNotAllowedException
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function admin_delete($id = null)
    {
        if (!$this->request->is('post'))
        {
            throw new MethodNotAllowedException();
        }
        $this->User->id = $id;
        if (!$this->User->exists())
        {
            throw new NotFoundException(__('Invalid user'));
        }

        if ($this->User->find('count') < 2)
        {
            $this->Session->setFlash(__('You cannot delete the only administrator'));
            $this->redirect($this->referer());
        }

        if ($this->User->delete())
        {
            $this->Session->setFlash(__('User deleted'), Flash::Success);
            $this->redirect(array('action' => 'index'));
        }
        $this->Session->setFlash(__('User was not deleted'), Flash::Error);
        $this->redirect(array('action' => 'index'));
    }

    public function login()
    {
        $this->set('title_for_layout', __('Login'));

        $this->__login();
        $this->render('login');
    }

    public function beforeFilter()
    {
        parent::beforeFilter();
        $this->Auth->allow('login', 'logout', 'forgotten_password');

        if (isset($this->request->params['action']) && in_array($this->request->params['action'], array('admin_index', 'admin_view', 'admin_delete', 'admin_add', 'admin_edit')))
        {
            $this->checkAccess('administration');
        }
    }

    private function __login()
    {
        $this->layout = 'default';

        if (AuthComponent::user())
        {
            $this->redirect(array('controller' => 'dashboard', 'action' => 'index', 'admin' => true));
        }

        if ($this->request->is('post'))
        {
            $this->User->set($this->request->data);
            if ($this->Auth->login())
            {
                if (Configure::read('demo') === true)
                {
                    CakeSession::write('Auth.User.operator_online', true);
                }

                $this->Session->setFlash(__('You successfully logged in.'), Flash::Success);
                if (!empty($this->request->params['admin']))
                {
                    $this->redirect(array('controller' => 'dashbaord', 'action' => 'index', 'admin' => true));
                }
                else
                {
                    $this->redirect($this->Auth->redirectUrl());
                }
            }
            else
            {
                unset($this->request->data['User']['password']);
                $this->Session->setFlash(__('The username/password you provided were incorrect.'));
            }
        }
        $this->set('title_for_layout', __('Login'));
    }

    public function forgotten_password()
    {
        $this->layout = 'default';

        if (AuthComponent::user())
            $this->redirect(array('controller' => 'projects', 'action' => 'index'));

        if ($this->request->is('post'))
        {
            if (trim($this->request->data('User.email')) != '')
            {
                $user = $this->User->find('first', array(
                    'conditions' => array('User.email' => $this->request->data('User.email')),
                    'fields' => array('id', 'email', 'username')));

                if (empty($user))
                {
                    $this->Session->setFlash(__('No user matching the email address could be found'), Flash::Error);
                    return;
                }

                $user['User']['temp_password'] = $this->__genTempPassword(5);
                $user['User']['password'] = $user['User']['temp_password'];
                $user['User']['password_confirm'] = $user['User']['temp_password'];

                $this->User->id = $user['User']['id'];
                $this->User->set($user);

                if ($this->User->save())
                {
                    $email = AppLib::prepareEmail();

                    $email->to($user['User']['email'], $user['User']['username'])
                            ->subject(__('Visitor Chat: Password Reset'))
                            ->send(String::insert(__("Dear :username, \n\nYour temporary password is: :temp_password"), array('username' => $user['User']['username'], 'temp_password' => $user['User']['temp_password'])));

                    $this->Session->setFlash(__('You have been sent an email with a temporary password. Please check your inbox.'), Flash::Success);
                    $this->redirect(array('controller' => 'users', 'action' => 'login', 'admin' => false));
                }
                else
                {
                    $this->Session->setFlash(__('An error occurred whilst re-setting your password. Please try again.'), Flash::Error);
                    return;
                }
            }
        }
    }

    private function __genTempPassword($length = 10)
    {
        $chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $string = '';
        for ($i = 0; $i < $length; $i++)
        {
            $string .= $chars[mt_rand(0, strlen($chars) - 1)];
        }
        return $string;
    }

    /**
     * Manages operators' online/offline-stati.
     * @throws MethodNotAllowedException
     */
    public function admin_operator_status()
    {
        if (Configure::read('demo') === true)
        {
            $this->Session->setFlash(__('You cannot change the operator-status to "offline" in the demonstration system.'), Flash::Error);
            $this->redirect($this->referer());
        }

        if (!isset($this->request->params['named']['status']))
        {
            throw new MethodNotAllowedException();
        }

        AppController::$doNotRecordActivity = true;
        if ($this->request->params['named']['status'] == 'online')
        {
            CakeSession::write('Auth.User.operator_online', true);
            $this->Session->setFlash(String::insert(__('You are now online. You will not be notified of any messages until you navigate to the dashboard. Click here to navigate to the dashboard: :dashboard_link'), array('dashboard_link' => '<a href="' . Router::url(array('controller' => 'dashboard', 'action' => 'index')) . '">' . __('Dashboard') . '</a>')), Flash::Success);
            $this->User->recordActivity(AppAuth::user('id'), true);
            $this->redirect(array('controller' => 'dashboard', 'action' => 'index', 'admin' => true));
        }

        CakeSession::write('Auth.User.operator_online', false);
        $this->Session->setFlash(__('You are now offline.'), Flash::Success);
        $this->User->recordActivity(AppAuth::user('id'), false);
        $this->redirect(array('controller' => 'dashboard', 'action' => 'index', 'admin' => true));
    }

    public function logout()
    {
        AppController::$doNotRecordActivity = true;

        $this->Session->setFlash(__('You have successfully logged out.'), Flash::Info);

        if (Configure::read('demo') !== true)
        {
            $this->User->recordActivity(AppAuth::user('id'), false);
        }

        $this->redirect($this->Auth->logout());
    }

    public function admin_profile()
    {
        $this->set('title_for_layout', __('Your Profile'));

        $this->User->id = AppAuth::user('id');
        if (!$this->User->exists())
        {
            throw new NotFoundException(__('Invalid user'));
        }
        if ($this->request->is('post') || $this->request->is('put'))
        {
            $this->request->data['User']['id'] = $this->User->id;
            unset($this->request->data['User']['role']);
            if ($this->User->save($this->request->data))
            {
                $this->Session->setFlash(__('The changes to your profile were saved'), Flash::Success);
                $this->Session->write('Auth', $this->User->read(null, AppAuth::user('id')));
                $this->redirect(array('action' => 'profile'));
            }
            else
            {
                $this->Session->setFlash(__('Your profile could not be saved. Please, try again.'), Flash::Warning);
            }
        }
        else
        {
            $this->request->data = $this->User->find('first', array('conditions' => array('User.id' => AppAuth::user('id'))));
        }
        $this->set('title_for_layout', __('Your Profile'));
        $user = $this->User->find('first', array('conditions' => array('User.id' => AppAuth::user('id'))));
        $this->set(compact('user'));
    }

    /**
     * This method is accessed by the desktop client to 
     * gather the respective admin's profile information (username, etc.).
     */
    public function admin_get_profile()
    {
        $this->autoRender = false;
        $this->response->type('json');

        $this->response->body(json_encode(AppAuth::user()));
    }

}
