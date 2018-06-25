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
 * Styles Controller
 *
 * @property Style $Style
 */
class StylesController extends AppController
{

    public $name = 'Styles';

    public function beforeFilter()
    {
        parent::beforeFilter();

        if (isset($this->request->params['action']) && in_array($this->request->params['action'], array('admin_index', 'admin_view', 'admin_delete', 'admin_add', 'admin_edit')))
        {
            $this->checkAccess('administration');
        }
    }

    /**
     * admin_index method
     *
     * @return void
     */
    public function admin_index()
    {
        $this->Style->recursive = 0;
        $this->set('styles', $this->paginate());
    }

    /**
     * admin_add method
     *
     * @return void
     */
    public function admin_add()
    {
        if ($this->request->is('post'))
        {
            $this->Style->create();
            if ($this->Style->save($this->request->data))
            {
                $this->Session->setFlash(__('The style has been saved'), Flash::Success);
                $this->redirect(array('action' => 'index'));
            }
            else
            {
                $this->Session->setFlash(__('The style could not be saved. Please, try again.'), Flash::Error);
            }
        }
    }

    /**
     * admin_edit method
     *
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function admin_edit($id = null)
    {
        if (!$this->Style->exists($id))
        {
            throw new NotFoundException(__('Invalid style'), Flash::Error);
        }
        if ($this->request->is('post') || $this->request->is('put'))
        {
            if ($this->Style->save($this->request->data))
            {
                $this->Session->setFlash(__('The style has been saved'), Flash::Success);
                $this->redirect(array('action' => 'index'));
            }
            else
            {
                $this->Session->setFlash(__('The style could not be saved. Please, try again.'), Flash::Error);
            }
        }
        else
        {
            $options = array('conditions' => array('Style.' . $this->Style->primaryKey => $id));
            $this->request->data = $this->Style->find('first', $options);
        }
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
        $this->Style->id = $id;
        if (!$this->Style->exists())
        {
            throw new NotFoundException(__('Invalid style'), Flash::Error);
        }

        $this->request->onlyAllow('post', 'delete');
        if ($this->Style->delete())
        {
            $this->Session->setFlash(__('Style deleted'), Flash::Success);
            $this->redirect(array('action' => 'index'));
        }
        $this->Session->setFlash(__('Style was not deleted'), Flash::Error);
        $this->redirect(array('action' => 'index'));
    }

}
