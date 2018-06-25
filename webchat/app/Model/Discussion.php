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
App::uses('AppModel', 'Model');

/**
 * Discussion Model
 *
 * @property Message $Message
 */
class Discussion extends AppModel
{

    public $name = 'Discussion';

    /**
     * Display field
     *
     * @var string
     */
    public $displayField = 'username';

    /**
     * Validation rules
     *
     * @var array
     */
    public $validate = array(
        'uid' => array(
            'uuid' => array(
                'rule' => array('uuid'),
            ),
        ),
        'username' => array(
            'notempty' => array(
                'rule' => array('notempty'),
            ),
            'maxlength' => array(
                'rule' => array('maxLength', 45),
            )
        ),
        'email' => array(
            'notempty' => array(
                'rule' => array('notempty'),
            ),
            'email' => array(
                'rule' => array('email'),
            ),
            'maxlength' => array(
                'rule' => array('maxLength', 85),
            )
        ),
        'remote_address' => array(
            'ip' => array(
                'rule' => array('ip'),
                'message' => 'The IP address is invalid',
            ),
        ),
    );

    /**
     * hasMany associations
     *
     * @var array
     */
    public $hasMany = array(
        'Message' => array(
            'className' => 'Message',
            'foreignKey' => 'discussion_id',
            'dependent' => true,
            'conditions' => '',
            'fields' => '',
            'order' => '',
            'limit' => '',
            'offset' => '',
            'exclusive' => '',
            'finderQuery' => '',
            'counterQuery' => ''
        )
    );

    public function __construct($id = false, $table = null, $ds = null)
    {
        parent::__construct($id, $table, $ds);

        $this->validate['email']['notempty']['message'] = AppConfig::read('Translations.ValidationEmailRequired');
        $this->validate['email']['email']['message'] = AppConfig::read('Translations.ValidationEmailInvalid');
        $this->validate['email']['maxlength']['message'] = AppConfig::read('Translations.ValidationEmailMaxLength');

        $this->validate['username']['notempty']['message'] = AppConfig::read('Translations.ValidationUsernameRequired');
        $this->validate['username']['maxlength']['message'] = AppConfig::read('Translations.ValidationUsernameMaxLength');
    }

    public function beforeSave($options = array())
    {
        parent::beforeSave($options);

        if (!isset($this->data['Discussion']['id']))
        {
            App::uses('String', 'Utility');
            $this->data['Discussion']['uid'] = String::uuid();
        }

        if (isset($this->data['Discussion']['email']))
        {
            $this->data['Discussion']['email'] = trim(strtolower($this->data['Discussion']['email']));
        }

        return true;
    }

    public function afterSave($created)
    {
        if (Configure::read('demo') === true && $created === true)
        {
            $message = array();
            $message['message'] = String::insert('Hello :username, thanks for viewing the VisitorChat demo. Don\'t forget to give the admin-dashboard a try by opening the following page in a new tab: http://visitorchat-demo.clientengage.com/admin', array('username' => $this->data['Discussion']['username']));

            $message['user_id'] = 1;
            $message['discussion_id'] = $this->id;

            $this->Message->create();
            $this->Message->save($message);
        }

        parent::afterSave($created);
    }

    public function recordActivity($discussion_id)
    {
        AppController::$demoBlockIgnore = true;

        $this->id = $discussion_id;

        if (!$this->exists())
        {
            throw new MethodNotAllowedException("Cannot update activity: no active discussion in progress.");
        }

        $this->set(array(
            'modified' => $activity = date('Y-m-d H:i:s')
        ));

        $this->save(null, array('callbacks' => false, 'validate' => false));
    }

    /**
     * Indicates whether any of the administrators are currently online.
     * @return bool True if online, false if offline
     */
    public function checkOperatorsOnline()
    {
        if (Configure::read('demo') === true)
        {
            return true;
        }
        return $this->Message->User->hasAny(array('User.last_activity > ' => date('Y-m-d H:i:s', strtotime('-5 minutes'))));
    }

}
