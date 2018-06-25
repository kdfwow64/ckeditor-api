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
 * Enquiry Model
 *
 */
class Enquiry extends AppModel
{

    public $name = 'Enquiry';

    /**
     * Display field
     *
     * @var string
     */
    public $displayField = 'email';

    /**
     * Validation rules
     *
     * @var array
     */
    public $validate = array(
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
        'message' => array(
            'notempty' => array(
                'rule' => array('notempty'),
            ),
            'maxlength' => array(
                'rule' => array('maxLength', 1500),
            )
        ),
    );

    public function __construct($id = false, $table = null, $ds = null)
    {
        parent::__construct($id, $table, $ds);

        $this->validate['email']['notempty']['message'] = AppConfig::read('Translations.ValidationEmailRequired');
        $this->validate['email']['email']['message'] = AppConfig::read('Translations.ValidationEmailInvalid');
        $this->validate['email']['maxlength']['message'] = AppConfig::read('Translations.ValidationEmailMaxLength');

        $this->validate['username']['notempty']['message'] = AppConfig::read('Translations.ValidationUsernameRequired');
        $this->validate['username']['maxlength']['message'] = AppConfig::read('Translations.ValidationUsernameMaxLength');

        $this->validate['message']['notempty']['message'] = AppConfig::read('Translations.ValidationEnquiryRequired');
        $this->validate['message']['maxlength']['message'] = AppConfig::read('Translations.ValidationEnquiryMaxLength');
    }

    public function beforeSave($options = array())
    {
        parent::beforeSave($options);

        if (isset($this->data['Enquiry']['email']))
        {
            $this->data['Enquiry']['email'] = trim(strtolower($this->data['Enquiry']['email']));
        }

        return true;
    }

    public function afterSave($created)
    {
        parent::afterSave($created);

        if (AppConfig::read('Email.send_notifications') !== true || $created !== true)
        {
            return;
        }

        $content = String::insert(__("You just received a new enquiry through Visitor Chat. \nView the enquiry: :enquiry_url \n\n\nSender: :sender_name \nEmail: :sender_email \n\nMessage: \n:enquiry"), array(
                    'enquiry_url' => Router::url(array('controller' => 'enquiries', 'action' => 'view', $this->id, 'admin' => true), true),
                    'sender_name' => $this->data['Enquiry']['username'],
                    'sender_email' => $this->data['Enquiry']['email'],
                    'enquiry' => $this->data['Enquiry']['message'],
        ));

        $email = AppLib::prepareEmail();
        $email->to(AppConfig::read('Email.email'), AppConfig::read('Email.sender'))
                ->from($this->data['Enquiry']['email'], $this->data['Enquiry']['username'])
                ->subject(String::insert(__('Visitor Chat: You Received a New Enquiry from :username'), array('username' => $this->data['Enquiry']['username'])))
                ->viewVars(array('content' => $content))
                ->send($content);
    }

}
