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
 * Messages Controller
 *
 * @property Message $Message
 */
class MessagesController extends AppController
{

    public $name = 'Messages';

    public function beforeFilter()
    {
        parent::beforeFilter();
        $this->Auth->allow(array('send', 'read'));
        $this->response->header('Access-Control-Allow-Origin', '*');

        if (isset($this->request->params['action']) && in_array($this->request->params['action'], array('admin_send', 'read', 'send')))
        {
            AppController::$demoBlockIgnore = true;
        }

        $this->__checkCallbackUniqueness();
    }

    public function afterFilter()
    {
        parent::afterFilter();

        $this->__storeCallbackFunction();

        if ($this->resetComposingState)
        {
            $this->Message->Discussion->id = CakeSession::read('visitor.discussion_id');
            $this->Message->Discussion->set(array(
                'composing_user_date' => null,
                'composing_user_id' => null,
            ));
            $this->Message->Discussion->save();
        }
    }

    /**
     * Manages the sending of visitor-messages and also returns an array of any
     * new messages since the last request.
     * @return string jsonp response
     * @throws MethodNotAllowedException
     */
    public function send()
    {
        if (CakeSession::check('visitor.discussion_id') !== true)
        {
            throw new MethodNotAllowedException('There is no active discussion in progress.');
        }

        if (!$this->request->is('get'))
        {
            throw new MethodNotAllowedException();
        }

        if (!$this->Message->Discussion->checkOperatorsOnline())
        {
            $this->__renderJsonp(array(
                'success' => false,
                'errors' => empty($this->Message->validationErrors) ? $this->Message->validationErrors : array('server' => array(AppConfig::read('Translations.OperatorOfflineMessage')))
            ));
            return;
        }

        App::import('Utility', 'Sanitize');
        $message = Sanitize::clean($this->request->query['data'], array('remove_html' => true, 'escape' => false, 'encode' => false));

        $message['Message']['message'] = trim($message['Message']['message']);
        $message['Message']['current_page'] = urldecode(urldecode($message['Message']['current_page']));
        $message['Message']['discussion_id'] = CakeSession::read('visitor.discussion_id');
        $message['Message']['user_id'] = null; // visitors do not have an id
        $this->Message->create();
        $this->Message->set($message);

        if ($this->Message->save())
        {
            App::uses('CakeTime', 'Utility');

            $this->__renderJsonp(array(
                'data' => array(
                    'User' => array('username' => CakeSession::read('visitor.username'), 'avatar' => md5(CakeSession::read('visitor.email')), 'is_admin' => false),
                    'Message' => array_merge($message['Message'], array(
                        'id' => $this->Message->id,
                        'created' => CakeTime::format('m/d/Y H:i:s e', $this->Message->field('created'), false, 'UTC')
                    ))),
                'messages' => $this->__getMessagesSinceLastRead(),
                'success' => true, 'errors' => array()));
            return;
        }

        $this->__renderJsonp(array(
            'success' => false,
            'errors' => empty($this->Message->validationErrors) ? $this->Message->validationErrors : array('server' => array(__('A server error occured.')))
        ));
    }

    /**
     * Manages the sending of administrator-messages
     */
    public function admin_send()
    {
        $this->autoRender = false;
        $this->response->type('json');

        if ($this->request->is('post'))
        {
            $this->Message->create();

            App::import('Utility', 'Sanitize');
            $this->request->data = Sanitize::clean($this->request->data, array('remove_html' => true, 'escape' => false, 'encode' => false));

            $this->request->data['Message']['message'] = trim($this->request->data['Message']['message']);
            if ($this->Message->save($this->request->data))
            {
                $message = $this->Message->find('first', array(
                    'conditions' => array('Message.id' => $this->Message->id),
                    'contain' => array('User.username', 'User.email')));

                App::uses('CakeTime', 'Utility');
                $message['Message']['created'] = CakeTime::format('m/d/Y H:i:s e', $message['Message']['created'], false, 'UTC');
                $message['User']['avatar'] = md5($message['User']['email']);
                unset($message['User']['email']);

                $this->response->body(json_encode(array(
                    'success' => true,
                    'data' => $message
                )));
            }
        }
    }

    /**
     * Used to re-set the composing state after read-operations
     * @var bool Whether to reset
     */
    private $resetComposingState = false;

    /**
     * Main read-action for visitors. Returns all messages acording to the
     * passed criteria.
     * @return string jsonp response
     * @throws MethodNotAllowedException
     */
    public function read()
    {
        if (CakeSession::check('visitor.discussion_id') !== true)
        {
            $this->__renderJsonp(array('success' => false, 'messages' => array(), 'error' => 'notactive'));
            return;
        }

        if (!$this->request->is('get'))
        {
            throw new MethodNotAllowedException();
        }

        $this->Message->Discussion->bindModel(array('belongsTo' => array('User' => array('foreignKey' => 'composing_user_id'))));
        $discussion = $this->Message->Discussion->find('first', array(
            'conditions' => array('Discussion.id' => CakeSession::read('visitor.discussion_id')),
            'fields' => array('composing_user_date'),
            'contain' => array('User.username')
        ));

        $composing = array();
        $composing['composing'] = time() - (3) < strtotime($discussion['Discussion']['composing_user_date']) ? true : false;
        $composing['composing_username'] = $composing['composing'] ? ( isset($discussion['User']['username']) ? $discussion['User']['username'] : null ) : null;

        if ($composing['composing']) // no need to reset if not composing
        {
            $this->resetComposingState = true;
        }

        $this->__renderJsonp(array(
            'success' => true,
            'messages' => $this->__getMessagesSinceLastRead(),
            'composing' => $composing['composing'],
            'composing_username' => $composing['composing_username'],
        ));
    }

    /**
     * Private method for finding all new messages matching the criteria
     * @return array Messages
     */
    private function __getMessagesSinceLastRead()
    {
        $params = array_merge(array('last_id' => 0, 'is_new_page' => 'false', 'first_id' => 0, 'load_more' => "false"), $this->request->query['data']);

        $messages = array();
        if ($params['is_new_page'] == "true") // page reload: get the last 20 only...
        {
            $messages = $this->Message->find('all', array(
                'conditions' => array(
                    'Message.discussion_id' => CakeSession::read('visitor.discussion_id'),
                    'Message.id >' => $params['last_id'],
                ),
                'fields' => array('id', 'message', 'created'),
                'limit' => 20,
                'order' => 'Message.id DESC',
                'contain' => array('User.username', 'User.email')
            ));
        }
        else if ($params['load_more'] == "true") // loadMore: get the 20 before the lowest ID
        {
            $messages = $this->Message->find('all', array(
                'conditions' => array(
                    'Message.discussion_id' => CakeSession::read('visitor.discussion_id'),
                    'Message.id <' => $params['first_id'],
                ),
                'fields' => array('id', 'message', 'created'),
                'limit' => 20,
                'order' => 'Message.id DESC',
                'contain' => array('User.username', 'User.email')
            ));
        }
        else
        {
            $messages = $this->Message->find('all', array(
                'conditions' => array(
                    'Message.discussion_id' => CakeSession::read('visitor.discussion_id'),
                    'Message.id >' => $params['last_id'],
                ),
                'fields' => array('id', 'message', 'created'),
                'contain' => array('User.username', 'User.email')
            ));
        }

        App::uses('CakeTime', 'Utility');
        foreach ($messages as &$message)
        {
            if (!isset($message['User']['username']))
            {
                $message['User']['username'] = CakeSession::read('visitor.username');
                $message['User']['avatar'] = md5(strtolower(trim(CakeSession::read('visitor.email'))));
                $message['User']['is_admin'] = false;
            }
            else
            {
                $message['User']['avatar'] = md5(strtolower(trim($message['User']['email'])));
                $message['User']['is_admin'] = true;
            }
            unset($message['User']['id'], $message['User']['email']);

            $message['Message']['created'] = CakeTime::format('m/d/Y H:i:s e', $message['Message']['created'], false, 'UTC');
        }

        return $messages;
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
        $this->Message->id = $id;
        if (!$this->Message->exists())
        {
            throw new NotFoundException(__('Invalid message'), Flash::Error);
        }
        $this->request->onlyAllow('post', 'delete');
        if ($this->Message->delete())
        {
            $this->Session->setFlash(__('Message deleted'), Flash::Success);
            $this->redirect(array('action' => 'index'));
        }
        $this->Session->setFlash(__('Message was not deleted'), Flash::Error);
        $this->redirect(array('action' => 'index'));
    }

}
