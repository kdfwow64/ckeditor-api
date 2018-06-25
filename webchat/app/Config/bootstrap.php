<?php

/**
 * This file is loaded automatically by the app/webroot/index.php file after core.php
 *
 * This file should load/create any application wide configuration settings, such as 
 * Caching, Logging, loading additional configuration files.
 *
 * You should also use this file to include any files that provide global functions/constants
 * that your application uses.
 *
 * PHP 5
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright 2005-2012, Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright 2005-2012, Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Config
 * @since         CakePHP(tm) v 0.10.8.2117
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
/**
 * Set-up the default caching engine
 */
Cache::config('default', array('engine' => 'File'));

/**
 * Set-up caching for admin JS
 */
Cache::config('adminjs', array('engine' => 'File', 'groups' => array('adminjs')));

/**
 * Core dispatchers
 */
Configure::write('Dispatcher.filters', array(
    'AssetDispatcher',
    'CacheDispatcher'
));

/**
 * Default logging configuration
 */
App::uses('CakeLog', 'Log');
CakeLog::config('debug', array(
    'engine' => 'FileLog',
    'types' => array('notice', 'info', 'debug'),
    'file' => 'debug',
));
CakeLog::config('error', array(
    'engine' => 'FileLog',
    'types' => array('warning', 'error', 'critical', 'alert', 'emergency'),
    'file' => 'error',
));


/**
 * Loads the App-wide utility library
 */
App::import(null, 'GlobalClasses');

/**
 * Loads the installer if necessary
 */
if (!file_exists(APP . 'Config' . DS . 'clientengage-installation.ini'))
{
    CakePlugin::load('Installer', array('routes' => true, 'bootstrap' => true));
}

/**
 * Loads the updater if necessary
 */
if (file_exists(APP . 'Config' . DS . 'clientengage-update-required.ini'))
{
    CakePlugin::load('Updater', array('routes' => true, 'bootstrap' => true));
}

// echo AuthComponent::password('asdf'); die;