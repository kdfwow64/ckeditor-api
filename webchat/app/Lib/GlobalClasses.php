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

/**
 * Enumeration of Flash-Message types
 */
final class Flash
{

    /**
     * Indicates that an error occured
     */
    const Error = 'flashmessages/error';

    /**
     * Generic flash style for informational purposes
     */
    const Info = 'flashmessages/info';

    /**
     * Indicates that the performed operation was successful
     */
    const Success = 'flashmessages/success';

    /**
     * Indiates a warning
     */
    const Warning = 'flashmessages/warning';

}

/**
 * Contains the base directory of all uploads (with trailing directory separator)
 */
define('UPLOADBASE', APP . 'uploads' . DS);

/**
 * Contains all available languages
 */
class AppLanguages
{

    /**
     * Returns an array of all currently available languages
     * @return array
     */
    public static function getAll()
    {
        return array(
            'en-gb' => __('English (British)'),
            'en-us' => __('English (United States)'),
            'deu' => __('German (Germany)'),
                //'por' => __('Portuguese'),
                //'rus' => __('Russian'),
                //'fra' => __('French'),
                //'spa' => __('Spanish'),
                //'dut' => __('Dutch'),
                //'pol' => __('Polish'),
                //'swe' => __('Swedish'),
                //'dan' => __('Danish'),
        );
    }

    /**
     * Sets the locale according to the currently set language
     */
    public static function setLocale()
    {
        $lang = Configure::read('Config.language');

        foreach (self::$dateFormats as $format)
            if (in_array($lang, $format['aliases']))
                setlocale(LC_TIME, $format['locales']);
    }

    /**
     * Contains locale fallbacks and DateTime formats
     * @var array 
     */
    private static $dateFormats = array(
        'en' => array(
            'aliases' => array('en-gb', 'en-us'),
            'locales' => array('en-gb', 'en-us', 'en', 'eng'),
            'default' => '',
            'nice' => '%a, %e. %b. %Y, %H:%M',
            'wordFormat' => 'j/n/y',
            'niceShort' => '%d/%m, %H:%M',
            'projectDate' => '%a, %e. %b. %Y',
        ),
        'deu' => array(
            'aliases' => array('deu'),
            'locales' => array('deu', 'de_de'),
            'default' => '',
            'nice' => '%a, %e. %b. %Y, %H:%M',
            'wordFormat' => 'j.n.y',
            'niceShort' => '%d/%m, %H:%M',
            'projectDate' => '%a, %e. %b. %Y',
        ),
        'por' => array(
            'aliases' => array('por'),
            'locales' => array('por', 'Portuguese_Portugal'),
            'default' => '',
            'nice' => '%e %B, %Y, %H:%M',
            'wordFormat' => 'j/n/y',
            'niceShort' => '%d/%m, %H:%M',
            'projectDate' => '%e %B, %Y',
        ),
        'rus' => array(
            'aliases' => array('rus'),
            'locales' => array('rus', 'Russian_Russia'),
            'default' => '',
            'nice' => '%d.%m.%Y, %H:%M',
            'wordFormat' => 'j.n.y',
            'niceShort' => '%d.%m., %H:%M',
            'projectDate' => '%d.%m.%Y',
        ),
    );

    /**
     * Returns the respective DateTime format for the currently set system language
     * @param string $type DateTime format type to return
     * @return string The DateTime format
     */
    public static function getDateFormat($type = 'nice')
    {
        $lang = Configure::read('Config.language');

        foreach (self::$dateFormats as $format)
        {
            if (in_array($lang, $format['aliases']))
            {
                return $format[$type];
            }
        }

        $default = array(
            'nice' => '%d.%m.%Y, %H:%M',
            'wordFormat' => 'j.n.y',
            'niceShort' => '%d.%m., %H:%M'
        );

        return $default['nice'];
    }

}

/**
 * A collection of different DateTime formats
 */
class DateFormats
{

    const Nice = 'nice';
    const NiceShort = 'niceShort';
    const WordFormat = 'wordFormat';

}

/**
 * A collection of app-wide utility functions for working with data types
 */
class AppLib
{

    /**
     * ClientEngage Website Url
     */
    const AppUrl = 'http://www.clientengage.com';

    /**
     * Returns a readily useable CakeEmail object
     * @return CakeEmail
     */
    public static function prepareEmail()
    {
        App::uses('CakeEmail', 'Network/Email');

        $config = array('template' => 'default', 'layout' => 'default');

        if (Configure::read('debug') > 0)
        {
            $config = Hash::merge($config, array('log' => true));
        }

        if (AppConfig::read('Email.transport') == 'smtp')
        {
            $config = Hash::merge($config, array(
                        'host' => AppConfig::read('Email.host'),
                        'port' => AppConfig::read('Email.port'),
                        'username' => AppConfig::read('Email.username'),
                        'password' => AppConfig::read('Email.password'),
                        'transport' => 'Smtp',
            ));
        }

        $email = new CakeEmail($config);

        if (Configure::read('debug') > 0)
        {
            $email->transport('Debug');
        }

        // TODO: check comp.'ty
        $email->from(AppConfig::read('Email.email') != null ? AppConfig::read('Email.email') : 'admin@example.com', AppConfig::read('Email.sender') != null ? AppConfig::read('Email.sender') : 'Chat-Admin')
                ->emailFormat('both')
                ->setHeaders(array('X-Mailer' => 'ClientEngage Mailer'))
                ->returnPath(AppConfig::read('Email.email'), AppConfig::read('Email.sender'));

        return $email;
    }

}

/**
 * Handles the application configuration
 */
class AppConfig
{

    private static $isSetup = false;

    /**
     * Reads the application configuration
     * @param string $configKey The configuration key to be read
     * @return dynamic The configuration
     */
    public static function read($configKey = null)
    {
        if (!self::$isSetup)
        {
            if (($config = Cache::read('AppConfigurationCache')) === false)
            {
                $config = ClassRegistry::init('Setting')->find('first');
                if ($config)
                {
                    Cache::write('AppConfigurationCache', $config);
                }
            }

            if (isset($config['Setting']) && is_array($config['Setting']))
            {
                foreach ($config['Setting'] as $k => $val)
                {
                    $cKey = str_replace('-', '.', $k);
                    Configure::write('AppConfig.' . $cKey, $val);
                }
            }
            Configure::write('AppConfig.Translations', json_decode(Configure::read('AppConfig.Translations'), true));

            self::$isSetup = true;
        }

        return Configure::read('AppConfig.' . $configKey);
    }

}

App::uses('AuthComponent', 'Controller/Component');

/**
 * Convenience-wrapper for AuthComponent
 */
class AppAuth extends AuthComponent
{

    /**
     * Checks whether the current user may access a specific area
     * @param string $area
     * @return boolean
     */
    public static function checkAccess($area)
    {
        if (AppAuth::user('role') === 'admin')
        {
            return true;
        }

        if (AppAuth::user('permissions') === null)
        {
            return false;
        }

        return in_array($area, AppAuth::user('permissions'));
    }

}
