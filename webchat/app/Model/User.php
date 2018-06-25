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
 * User Model
 *
 * @property NotificationUser $NotificationUser
 */
class User extends AppModel
{

    public $name = 'User';

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
        'username' => array(
            'notempty' => array(
                'rule' => array('notempty'),
                'message' => 'Please enter a username.'
            ),
        ),
        'email' => array(
            'email' => array(
                'rule' => array('email'),
                'message' => 'Please enter a valid email address.'
            ),
            'unique' => array(
                'rule' => 'isUnique',
                'message' => 'This email address has already been taken.'
            )
        ),
        'password' => array(
            'notempty' => array(
                'rule' => array('notempty'),
                'message' => 'Please enter your password.',
                'allowEmpty' => false,
                'on' => 'create'
            ),
            'match' => array(
                'rule' => array('confirmPassword'),
                'message' => 'Passwords do not match.'),
            'minlength' => array(
                'rule' => array('minLength', 4),
                'message' => 'Must be at least 4 characters long.'
            )
        ),
        'password_confirm' => array(
            'minlength' => array(
                'rule' => array('minLength', 4),
                'message' => 'Must be at least 4 characters long.'),
            'match' => array(
                'rule' => array('confirmPassword'),
                'message' => 'Passwords do not match.'),
        ),
        'active' => array(
            'boolean' => array(
                'rule' => array('boolean'),
                'message' => 'Please enter a valid boolean value.',
            ),
        ),
        'role' => array(
            'roleexists' => array(
                'rule' => array('inList', array('admin', 'operator'), true),
                'message' => 'Please select a valid role.',
            ),
        ),
    );

    function confirmPassword($data, $settings)
    {
        $valid = false;

        if (isset($this->data['User']['password_confirm']) && isset($this->data['User']['password']) && $this->data['User']['password_confirm'] == $this->data['User']['password'])
        {
            $valid = true;
        }

        return $valid;
    }

    public function beforeSave($options = array())
    {
        if (isset($this->data['User']['email']))
        {
            $this->data['User']['email'] = trim(strtolower($this->data['User']['email']));
        }

        if (isset($this->data['User']['permissions']) && is_array($this->data['User']['permissions']))
        {
            $this->data['User']['permissions'] = json_encode($this->data['User']['permissions']);
        }

        if (isset($this->data['User']['password']))
            if ($this->data['User']['password'] != '')
            {
                $this->data['User']['password'] = AuthComponent::password($this->data['User']['password']);
                if (!isset($this->data['User']['temp_password']))
                {
                    $this->data['User']['temp_password'] = null;
                }
            }
            else
            {
                unset($this->data['User']['password']);
            }

        return parent::beforeSave($options);
    }

    public function afterFind($data)
    {

        foreach ($data as &$user)
        {
            if (isset($user['User']['permissions']))
            {
                $user['User']['permissions'] = json_decode($user['User']['permissions'], true) === null ? array() : json_decode($user['User']['permissions'], true);
            }
        }

        return parent::afterFind($data);
    }

    public function beforeValidate($options = array())
    {
        if (isset($this->data['User']['id']))
        {
            if (!isset($this->data['User']['password']) || trim($this->data['User']['password']) == '')
            {
                unset($this->data['User']['password']);
            }
            if (!isset($this->data['User']['password_confirm']) || trim($this->data['User']['password_confirm']) == '')
            {
                unset($this->data['User']['password_confirm']);
            }
        }

        return parent::beforeValidate($options);
    }

    /**
     * Records the current user's activity on every request
     * @return void 
     */
    public function recordActivity($user_id, $record = true)
    {
        if (trim($user_id) == '')
        {
            return;
        }

        AppController::$demoBlockIgnore = true;

        $this->id = $user_id;

        $activity = null;

        if ($record)
        {
            $activity = date('Y-m-d H:i:s');
        }

        $this->set(array(
            'last_activity' => $activity,
            'modified' => $this->field('modified')
        ));

        $this->save(null, array('callbacks' => false, 'validate' => false));

        AppController::$demoBlockIgnore = false;
    }

}
