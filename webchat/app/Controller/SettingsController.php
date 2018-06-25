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
 * Settings Controller
 *
 * @property Setting $Setting
 */
class SettingsController extends AppController
{

    public $name = 'Settings';

    public function beforeFilter()
    {
        parent::beforeFilter();

        if (isset($this->request->params['action']) && in_array($this->request->params['action'], array('admin_index')))
        {
            $this->checkAccess('administration');
        }
    }

    public function admin_index()
    {
        $this->set('title_for_layout', __('Settings'));
        $this->set('styles', ClassRegistry::init('Style')->find('list'));

        if (isset($this->request->data['btn_test-email']))
        {
            if (isset($this->request->data['test-email']) && trim($this->request->data['test-email']) != '')
            {
                $this->__sendTestEmail();
            }
            else
            {
                $this->Session->setFlash(__('Please provide an email address to send the test-email to.'));
            }
            return;
        }

        $id = $this->Setting->find('first');
        $id = $id['Setting']['id'];
        $this->Setting->id = $id;
        if (!$this->Setting->exists())
        {
            throw new NotFoundException(__('Invalid configuration'));
        }
        if ($this->request->is('post') || $this->request->is('put'))
        {
            if ($this->__validateTranslations() && $this->Setting->save($this->request->data))
            {
                Cache::clear(false, '_cake_model_');
                Cache::clear(false, '_cake_core_');
                Cache::clear();

                $this->Session->setFlash(__('The configuration has been saved'), Flash::Success);
                $this->redirect(array('action' => 'index'));
            }
            else
            {
                $this->Session->setFlash(__('The configuration could not be saved. Please, try again.'), Flash::Warning);
            }
        }
        else
        {
            $this->request->data = $this->Setting->read(null, $id);
            $this->request->data['Setting']['Translationstrings'] = json_decode($this->request->data['Setting']['Translations'], true);
        }
    }

    private function __validateTranslations()
    {
        $translations = $this->request->data('Setting.Translationstrings');
        foreach ($translations as $tKey => $tVal)
        {
            if (trim($tVal) == '')
            {
                $this->Setting->validationErrors['Translationstrings'][$tKey] = array(__('Please enter a translation'));
            }
        }

        $this->request->data['Setting']['Translations'] = json_encode($translations);

        return empty($this->Setting->validationErrors);
    }

    private function __sendTestEmail()
    {
        try
        {
            App::uses('CakeEmail', 'Network/Email');

            $recipient = $this->request->data('test-email');
            $cEmail = new CakeEmail(array(
                'host' => $this->request->data('Configuration.Email-host'),
                'port' => $this->request->data('Configuration.Email-port'),
                'username' => $this->request->data('Configuration.Email-username'),
                'password' => $this->request->data('Configuration.Email-password'),
                'transport' => 'Smtp',
            ));
            $cEmail->to($recipient)
                    ->subject(__('ClientEngage Email Delivery Test'))
                    ->from('admin@example.com', 'VisitorChat Delivery-System')
                    ->send();
        }
        catch (SocketException $ex)
        {
            $this->Session->setFlash(__('The SMTP connection could not be established. Please check your details or select the mail() function and click "Save Configuration".'), Flash::Error);
            return;
        }

        $this->Session->setFlash(__('The test message was sent via SMTP. Please check if you received the message. <strong> If you do not receive the test email, it is important that you review the SMTP details or use the mail() function instead and then click "Save Configuration".</strong>'));

        return;
    }

}
