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
App::uses('TimeHelper', 'View/Helper');

/**
 * Application-wide TimeHelper extension
 */
class AppTimeHelper extends TimeHelper
{

    public function timeAgoInWords($dateTime = null, $options = array())
    {
        CakeTime::$wordFormat = AppLanguages::getDateFormat(DateFormats::WordFormat);
        if ($dateTime === null)
            return __('never');

        return parent::timeAgoInWords($dateTime, $options);
    }

    public function format($format, $date = null, $invalid = false, $timezone = null)
    {
        return parent::i18nFormat($date, $format, $invalid, $timezone);
    }

    public function nice($dateString = null, $timezone = null, $format = null)
    {
        return parent::i18nFormat($dateString, AppLanguages::getDateFormat(DateFormats::Nice), false, $timezone);
    }

    public function niceShort($dateString = null, $timezone = null)
    {
        return parent::i18nFormat($dateString, AppLanguages::getDateFormat(DateFormats::NiceShort), false, $timezone);
    }

    public function toAtom($dateString = null, $timezone = null)
    {
        return parent::toAtom($dateString, $timezone);
    }

}