<?php

/**
 * This is core configuration file.
 *
 * Use it to configure core behavior of Cake.
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
 * @since         CakePHP(tm) v 0.2.9
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
/**
 * Debug configuration
 */
Configure::write('debug', 0);

/**
 * Error Handler Configuration
 */
Configure::write('Error', array(
    'handler' => 'ErrorHandler::handleError',
    'level' => E_ALL & ~E_STRICT & ~E_DEPRECATED,
    'trace' => true
));


/**
 * Exception handler configuration
 */
Configure::write('Exception', array(
    'handler' => 'ErrorHandler::handleException',
    'renderer' => 'ExceptionRenderer',
    'log' => true
));

/**
 * Application encoding
 */
Configure::write('App.encoding', 'UTF-8');

/**
 * Require rewrite configuration
 */
require APP . 'Config' . DS . 'rewrite-core.php';

/**
 * Configure admin prefix-routing
 */
Configure::write('Routing.prefixes', array('admin'));


/**
 * Defines the default error type when using the log() function. Used for
 * differentiating error logging and debugging. Currently PHP supports LOG_DEBUG.
 */
define('LOG_ERROR', LOG_ERR);

/**
 * Configure Session
 */
/* Configure::write('Session', array(
  'defaults' => 'php',
  'cookie' => 'CLIENTENGAGEVC'
  )); */
Configure::write('Session', array(
    'defaults' => 'database',
    'handler' => array(
        'model' => 'SystemSession'
    ),
    'cookie' => 'CLIENTENGAGEVC',
    'autoRegenerate' => false,
    'checkAgent' => false
));

/**
 * Security level
 */
Configure::write('Security.level', 'medium');

/**
 * Require security configuration
 */
require APP . 'Config' . DS . 'security-core.php';

/**
 * Require version file
 */
require APP . 'Config' . DS . 'version.php';

/**
 * Set application timezone to UTC
 */
date_default_timezone_set('UTC');


/**
 * Cache Configuration
 */
$cacheEngine = 'File'; // Default caching engine
if (extension_loaded('apc') && function_exists('apc_dec') && (php_sapi_name() !== 'cli' || ini_get('apc.enable_cli')))
{
    $cacheEngine = 'Apc';
}


$cacheExpiration = '+999 days';
if (Configure::read('debug') > 0)
{
    $cacheExpiration = '+10 seconds';
}

$cachePrefix = 'cevc_';

/**
 * Configure framework cache
 */
Cache::config('_cake_core_', array(
    'engine' => $cacheEngine,
    'prefix' => $cachePrefix . 'app_core_',
    'path' => CACHE . 'persistent' . DS,
    'serialize' => ($cacheEngine === 'File'),
    'duration' => $cacheExpiration
));

/**
 * Configure model cache
 */
Cache::config('_cake_model_', array(
    'engine' => $cacheEngine,
    'prefix' => $cachePrefix . 'app_model_',
    'path' => CACHE . 'models' . DS,
    'serialize' => ($cacheEngine === 'File'),
    'duration' => $cacheExpiration
));

