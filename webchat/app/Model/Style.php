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
 * Style Model
 *
 */
class Style extends AppModel
{

    public $name = 'Style';

    /**
     * Display field
     *
     * @var string
     */
    public $displayField = 'title';

    /**
     * Validation rules
     *
     * @var array
     */
    public $validate = array(
        'title' => array(
            'notempty' => array(
                'rule' => array('notempty'),
                'message' => 'Please enter a title',
            ),
            'maxlength' => array(
                'rule' => array('maxlength', 255),
                'message' => 'The title may not exceed 255 characters',
            ),
        ),
        'css' => array(
            'notempty' => array(
                'rule' => array('notempty'),
                'message' => 'Please enter your custom CSS styles',
            ),
        ),
    );

    public function afterSave($created)
    {
        parent::afterSave($created);
        Cache::delete('CssStyleCache_http');
        Cache::delete('CssStyleCache_https');
        Cache::delete('ChatJSCache_http');
        Cache::delete('ChatJSCache_https');
    }

}
