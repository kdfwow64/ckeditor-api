<?php

/**
 * TODO: If IIS --> Router::connectNamed(true, array('separator'=>';')); 
 */
/**
 * Loads the Installer routes
 */
if (CakePlugin::loaded('Installer'))
    CakePlugin::routes('Installer');

/**
 * Loads the Updater routes
 */
if (CakePlugin::loaded('Updater'))
    CakePlugin::routes('Updater');
/**
 * Routing configuration
 */
Router::redirect('/', array('controller' => 'dashboard', 'action' => 'index', 'admin' => true));
Router::connect('/admin', array('controller' => 'dashboard', 'action' => 'index', 'admin' => true));
Router::connect('/login', array('controller' => 'users', 'action' => 'login'));
Router::connect('/admin/login', array('controller' => 'users', 'action' => 'login', 'admin' => true));
Router::connect('/contents/*', array('controller' => 'contents', 'action' => 'view'));
Router::connect('/chat', array('controller' => 'contents', 'action' => 'chat_javascript'));
Router::connect('/admin/admin_chat', array('controller' => 'contents', 'action' => 'chat_javascript', 'admin' => true));
Router::connect('/chat.js', array('controller' => 'contents', 'action' => 'chat_javascript'));
Router::connect('/admin/admin_chat.js', array('controller' => 'contents', 'action' => 'chat_javascript', 'admin' => true));
Router::connect('/styles', array('controller' => 'contents', 'action' => 'chat_stylesheet'));
Router::connect('/styles.css', array('controller' => 'contents', 'action' => 'chat_stylesheet'));


/**
 * Loads the CakePHP default routes.
 */
require CAKE . 'Config' . DS . 'routes.php';