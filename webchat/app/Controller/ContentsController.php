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

class ContentsController extends AppController
{

    public $name = 'Contents';
    public $uses = array();

    public function beforeFilter()
    {
        $this->Auth->allow(array('blank', 'view', 'chat_javascript', 'chat_stylesheet'));
        Configure::write('debug', 0);
    }

    public function admin_about()
    {
        $this->set('title_for_layout', __('About ClientEngage Visitor Chat'));
    }

    public function blank()
    {
        $this->layout = 'plain';
    }

    public function chat_stylesheet()
    {
        $this->layout = 'plain';
        $this->response->type('css');

        $cacheName = 'CssStyleCache' . ($this->request->is('ssl') ? '_https' : '_http');

        if (($style = Cache::read($cacheName)) === false)
        {
            $style = ClassRegistry::init('Style')->findById(AppConfig::read('Chat.style_id'));
            $style = str_replace('{BaseURL}', $this->__getWebroot(), (isset($style['Style']['css']) ? $style['Style']['css'] : ''));
            $style = $this->__minifyCss($style);

            if ($style)
            {
                Cache::write($cacheName, $style);
            }
        }
        $this->set('style', $style);
    }

    private function __getWebroot()
    {
        return FULL_BASE_URL . $this->request->webroot;
    }

    /**
     * Very simple CSS minification
     * @param string $css The CSS to minify
     * @return string The minified CSS
     */
    private function __minifyCss($css = '')
    {
        $replacements = array(
            '; ' => ';',
            ': ' => ':',
            ' {' => '{',
            '{ ' => '{',
            ', ' => ',',
            '} ' => '}',
            ';} ' => '}'
        );

        $css = preg_replace('#/\*.*?\*/#s', '', preg_replace('#\s+#', ' ', $css));

        foreach ($replacements as $search => $replace)
        {
            $css = str_replace($search, $replace, $css);
        }

        return trim($css);
    }

    public function chat_javascript()
    {
        $this->autoRender = false;
        $this->layout = 'ajax';
        $this->response->type('js');

        $cacheName = 'ChatJSCache' . ($this->request->is('ssl') ? '_https' : '_http');

        if (($chatJS = Cache::read($cacheName)) === false)
        {
            $content = $this->render('chat_javascript');
            $content = str_replace('console.log', '//console.log', $content);

            App::import('Vendor', 'jsmin', array('file' => 'jsmin/jsmin.php'));
            $content = JsMin::minify($content);

            $thirdPartyCopyright = <<<TPCR
/**
 * The code below this is not covered by the CodeCanyon Regular License.
 * Feel free to re-use the code below as per your requirements whilst following  
 * the respective licensing terms.
 */
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
TPCR;

            $content = str_replace('if(false)alert();', $thirdPartyCopyright, $content);

            $copyright = <<<CR
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
CR;

            $chatJS = $copyright . $content;

            if ($chatJS)
            {
                Cache::write($cacheName, $chatJS);
            }
        }

        $this->response->body($chatJS);
    }

    public function admin_chat_javascript()
    {
        $this->autoRender = false;
        $this->layout = 'ajax';
        $this->response->type('js');

        if (($chatJS = Cache::read('AdminChatJSCache_' . AppAuth::user('id'), 'adminjs')) === false)
        {
            $content = $this->render('admin_chat_javascript');
            $content = str_replace('console.log', '//console.log', $content);

            App::import('Vendor', 'jsmin', array('file' => 'jsmin/jsmin.php'));
            $content = JsMin::minify($content);

            $copyright = <<<CR
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
CR;

            $chatJS = $copyright . $content;

            if ($chatJS)
            {
                Cache::write('AdminChatJSCache_' . AppAuth::user('id'), $chatJS, 'adminjs');
            }
        }

        $this->response->body($chatJS);
    }

    public function view($view = null)
    {
        $this->layout = 'plain';
        $this->render($view);
    }

}
