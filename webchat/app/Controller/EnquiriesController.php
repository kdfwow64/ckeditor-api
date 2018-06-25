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
 * Enquiries Controller
 *
 * @property Enquiry $Enquiry
 */
class EnquiriesController extends AppController
{

    public $name = 'Enquiries';

    public function beforeFilter()
    {
        parent::beforeFilter();
        $this->Auth->allow(array('submit'));

        if (isset($this->request->params['action']) && in_array($this->request->params['action'], array('submit')))
        {
            AppController::$demoBlockIgnore = true;
        }

        if (isset($this->request->params['action']) && in_array($this->request->params['action'], array('admin_index', 'admin_view', 'admin_delete', 'admin_deleteselected', 'admin_togglestatus')))
        {
            $this->checkAccess('enquiries');
        }
    }

    /**
     * Public enquiry-submission action for visitors.
     * @return string jsonp response
     * @throws MethodNotAllowedException
     */
    public function submit()
    {
        if (!isset($this->request->query['data']))
        {
            throw new MethodNotAllowedException('No data submitted...');
        }

        if (!CakeSession::check('visitor.has_session'))
        {
            throw new MethodNotAllowedException('No active session...');
        }

        App::import('Utility', 'Sanitize');
        $enquiry = Sanitize::clean($this->request->query['data'], array('remove_html' => true, 'escape' => false, 'encode' => false));

        $enquiry['Enquiry']['remote_address'] = $this->request->clientIp(false);
        $enquiry['Enquiry']['user_agent'] = env('HTTP_USER_AGENT');
        $enquiry['Enquiry']['visitor_languages'] = implode(',', $this->request->acceptLanguage());
        $enquiry['Enquiry']['referer'] = urldecode(urldecode(CakeSession::read('visitor.referer')));
        $enquiry['Enquiry']['current_page'] = urldecode(urldecode($enquiry['Enquiry']['current_page']));

        $this->Enquiry->create();
        if ($this->Enquiry->save($enquiry))
        {
            $this->__renderJsonp(array(
                'success' => true,
                'errors' => array()
            ));
        }
        else
        {
            $this->__renderJsonp(array(
                'success' => false,
                'errors' => !empty($this->Enquiry->validationErrors) ? $this->Enquiry->validationErrors : array('server' => array('generalerror' => __('A server error occured.')))
            ));
        }
    }

    /**
     * admin_index method
     *
     * @return void
     */
    public function admin_index()
    {
        $this->Enquiry->recursive = 0;
        $this->paginate = array(
            'order' => 'Enquiry.created DESC'
        );
        $this->set('enquiries', $this->paginate());
    }

    /**
     * admin_view method
     *
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function admin_view($id = null)
    {
        if (!$this->Enquiry->exists($id))
        {
            throw new NotFoundException(__('Invalid enquiry'), Flash::Error);
        }

        $this->Enquiry->id = $id;
        $this->Enquiry->set('read', true);
        $this->Enquiry->save();

        $options = array('conditions' => array('Enquiry.' . $this->Enquiry->primaryKey => $id));
        $this->set('enquiry', $this->Enquiry->find('first', $options));
    }

    public function admin_toggle_status($id)
    {
        if (!$this->Enquiry->exists($id))
        {
            throw new NotFoundException(__('Invalid enquiry'), Flash::Error);
        }

        $this->Enquiry->id = $id;
        $curVal = $this->Enquiry->field('read');
        $this->Enquiry->set('read', !$curVal);
        $this->Enquiry->save();

        $this->Session->setFlash(__('The Read-Status of the enquiry was successfully changed.'), Flash::Success);
        $this->redirect(array('controller' => 'enquiries', 'action' => 'index'));
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
        $this->Enquiry->id = $id;
        if (!$this->Enquiry->exists())
        {
            throw new NotFoundException(__('Invalid enquiry'), Flash::Error);
        }

        $this->request->onlyAllow('post', 'delete');
        if ($this->Enquiry->delete())
        {
            $this->Session->setFlash(__('Enquiry deleted'), Flash::Success);
            $this->redirect(array('action' => 'index'));
        }

        $this->Session->setFlash(__('Enquiry was not deleted'), Flash::Error);
        $this->redirect(array('action' => 'index'));
    }

    /**
     * Delete method for selected enquiries
     * @throws MethodNotAllowedException
     */
    public function admin_deleteselected()
    {
        if (!$this->request->is('post') || !isset($this->request->data['Meta']['del']))
        {
            throw new MethodNotAllowedException();
        }

        $toDelete = $this->request->data['Meta']['del'];
        if ($this->Enquiry->deleteAll(array('Enquiry.id' => $toDelete), true, true))
        {
            $this->Session->setFlash(String::insert(__n('You have successfully deleted :count enquiry', 'You have successfully deleted :count enquiries', count($toDelete)), array('count' => count($toDelete))), Flash::Success);
        }
        else
        {
            $this->Session->setFlash(__('The delete operation could not be completed'), Flash::Error);
        }
        $this->redirect(array('action' => 'index'));
    }

}
