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
App::uses('Model', 'Model');

/**
 * Application-wide model
 */
class AppModel extends Model
{

    /**
     * Contains the behaviours that are attached to this model
     * @var array 
     */
    public $actsAs = array('Containable', 'Setnull');

    /**
     * Indicates this model's recursion level
     * @var int 
     */
    public $recursive = -1;

    /**
     * Handles application-wide data manipulation before saving
     * @param array $options The save-options array
     * @return boolean True of sucessful, else false
     */
    public function beforeSave($options = array())
    {
        if (Configure::read('demo') === true && AppController::$demoBlockIgnore === false && $this->alias != 'Session')
        {
            AppController::$demoBlocked = true;
            return false;
        }

        if ($this->hasField('user_id') && !isset($this->data[$this->alias]['id']) && !array_key_exists('user_id', $this->data[$this->alias]))
        {
            $this->data[$this->alias]['user_id'] = AuthComponent::user('id');
        }

        return true;
    }

    public function beforeDelete($cascade = true)
    {
        AppController::$demoBlockIgnore;

        if (Configure::read('demo') === true && AppController::$demoBlockIgnore === false && $this->alias != 'Session')
        {
            AppController::$demoBlocked = true;
            return false;
        }
        return true;
    }

    public function beforeFind($queryData)
    {
        return $queryData;
    }

    public function afterFind($data)
    {
        if (Configure::read('demo') === true)
        {
            foreach ($data as &$record)
            {
                if (isset($record[$this->alias]['remote_address']))
                {
                    $record[$this->alias]['remote_address'] = 'BLANKED in Demo';
                }
            }
        }
        return $data;
    }

}