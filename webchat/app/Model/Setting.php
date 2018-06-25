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
 * Setting Model
 *
 */
class Setting extends AppModel
{

    public $name = 'Setting';

    /**
     * Validation rules
     *
     * @var array
     */
    public $validate = array(
        'System-language' => array(
            'notempty' => array(
                'rule' => array('notempty'),
                'message' => 'Please select the system language.'
            )
        ),
        'System-timezone' => array(
            'notempty' => array(
                'rule' => array('notempty'),
                'message' => 'Please select the system timezone.'
            )
        ),
        'Chat-session_duration' => array(
            'notempty' => array(
                'rule' => array('numeric'),
                'allowEmpty' => false,
                'message' => 'Please indicate the session duration.'
            )
        ),
        'Email-email' => array(
            'notEmptyIfRequired' => array(
                'rule' => 'checkRequiredEmail'
            )
        ),
        'Email-sender' => array(
            'notEmptyIfRequired' => array(
                'rule' => 'checkRequiredEmailName'
            )
        ),
    );

    public function __construct($id = false, $table = null, $ds = null)
    {
        parent::__construct($id, $table, $ds);
    }

    public function afterSave($created)
    {
        parent::afterSave($created);
        Cache::delete('AppConfigurationCache');
        Cache::delete('CssStyleCache_http');
        Cache::delete('CssStyleCache_https');
        Cache::delete('ChatJSCache_http');
        Cache::delete('ChatJSCache_https');
        Cache::clearGroup('adminjs');
    }

    public function checkRequiredEmailName($message)
    {
        if (isset($this->data[$this->alias]['Email-send_notifications']) && $this->data[$this->alias]['Email-send_notifications'] && trim($message['Email-sender']) == '')
        {
            return __('Please enter the sender name.');
        }

        return true;
    }

    public function checkRequiredEmail($message)
    {
        if (isset($this->data[$this->alias]['Email-send_notifications']) && $this->data[$this->alias]['Email-send_notifications'] && trim($message['Email-email']) == '')
        {
            return __('Please enter an email address.');
        }

        return true;
    }

}
