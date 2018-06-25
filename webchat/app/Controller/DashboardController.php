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

class DashboardController extends AppController
{

    public $name = 'Dashboard';
    public $uses = array();

    public function __construct($request = null, $response = null)
    {
        parent::__construct($request, $response);
    }

    public function beforeFilter()
    {
        parent::beforeFilter();
        $this->Auth->allow(array('cron_run'));
    }

    public function admin_index()
    {
        $this->set('title_for_layout', __('Admin Dashboard'));
    }

    public function admin_ping()
    {
        $this->autoRender = false;
        $this->response->type('json');
        $this->response->body(json_encode(array('success' => true)));
    }

}