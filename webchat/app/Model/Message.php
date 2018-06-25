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
 * Message Model
 *
 * @property Discussion $Discussion
 * @property User $User
 */
class Message extends AppModel
{

    public $name = 'Message';

    /**
     * Display field
     *
     * @var string
     */
    public $displayField = 'message';

    /**
     * Validation rules
     *
     * @var array
     */
    public $validate = array(
        'message' => array(
            'notempty' => array(
                'rule' => array('notempty'),
            ),
            'maxlength' => array(
                'rule' => array('maxLength', 750),
            )
        ),
        'referer' => array(
        ),
    );

    /**
     * belongsTo associations
     *
     * @var array
     */
    public $belongsTo = array(
        'Discussion' => array(
            'className' => 'Discussion',
            'foreignKey' => 'discussion_id',
            'conditions' => '',
            'fields' => '',
            'order' => ''
        ),
        'User' => array(
            'className' => 'User',
            'foreignKey' => 'user_id',
            'conditions' => '',
            'fields' => '',
            'order' => ''
        )
    );

    public function __construct($id = false, $table = null, $ds = null)
    {
        parent::__construct($id, $table, $ds);

        $this->validate['message']['notempty']['message'] = AppConfig::read('Translations.ValidationMessageRequired');
        $this->validate['message']['maxlength']['message'] = AppConfig::read('Translations.ValidationMessageMaxLength');
    }

    public function afterSave($created)
    {
        parent::afterSave($created);
        $discussion_id = $this->field('discussion_id');
        $discussion = $this->Discussion->find('first', array('conditions' => array('Discussion.id' => $discussion_id), 'fields' => array('id')));

        if (!empty($discussion)) // Update modified
        {
            $this->Discussion->save($discussion);
        }
    }

}
