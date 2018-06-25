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
 * Layout helper
 */
class LayoutHelper extends AppHelper
{

    public $helpers = array(
        'Html' => array('className' => 'AppHtml'),
        'Text',
        'Time' => array('className' => 'AppTime'),
        'Form' => array('className' => 'AppForm'));

    function __construct(View $view, $settings = array())
    {
        parent::__construct($view, $settings);
    }

    /**
     * Returns the verbose version of a boolean value
     * @param boolean $bool The boolean value to be rendered verbose
     * @return string Yes or No (in the respective locale)
     */
    public function boolYesNo($bool = null)
    {
        if ($bool === null)
            return '<span class="label">' . __('N/A') . '</span>';
        if ($bool === true)
            return '<span class="label label-success">' . __('Yes') . '</span>';
        else
            return '<span class="label label-important">' . __('No') . '</span>';
    }

    /**
     * Syste,-wide default display for DateTime values
     * @param string $time The DateTime to be rendered
     * @return string Rendered display version of the DateTime
     */
    public function displayTimeDefault($time = null)
    {
        if ($time === null)
            return '';
        else
            return '<span data-original-title="' . $this->Time->timeAgoInWords($time) . '" data-rel="tooltip">' . $this->Time->niceShort($time) . '</span>';
    }

    /**
     * Renders a list of the visitor's languages
     * @param type $languages
     * @return type
     */
    public function renderVisitorLanguages($languages = '')
    {
        $cat = new L10n();
        $langs = $cat->catalog(explode(',', $languages));
        $formatted = array();
        foreach ($langs as $lang => $info)
        {
            $formatted[$lang] = $info['language'];
        }

        return $this->Text->toList(array_values($formatted), __('and'));
    }

    /**
     * Inverse of the above
     * @param type $time
     * @return string
     */
    public function displayTimeAgoDefault($time = null)
    {
        if ($time === null)
            return '';
        else
            return '<span data-original-title="' . $this->Time->niceShort($time) . '" data-rel="tooltip">' . $this->Time->timeAgoInWords($time) . '</span>';
    }

    /**
     * 
     * @param string $text The string to be rendered in a help icon
     * @return string The HTML markup of the help icon & tooltip
     */
    public function renderHelpIcon($text = '')
    {
        $out = ' <i class="ico-information" data-rel="tooltip" tabindex="100" data-original-title="' . $text . '"></i>';
        return $out;
    }

    /**
     * Utility method for rendering UserAgent strings
     * @param type $useragent
     * @param type $showTooltip
     * @return string
     */
    public function renderUserAgent($useragent = null, $showTooltip = true)
    {
        App::import('Vendor', 'PHPUserAgent', array('file' => 'php-user-agent' . DS . 'lib' . DS . 'phpUserAgent.php'));

        $phpUserAgent = new phpUserAgent($useragent);
        $browserData = $phpUserAgent->toArray();

        if (empty($browserData))
            return $useragent;
        else
        {
            $toolTip = '';
            if ($showTooltip)
                $toolTip = ' data-original-title="' . $useragent . '" rel="popover" data-rel="tooltip"  style="display: inline-block; cursor: help;"';
            $out = '<div' . $toolTip . '>';
            $out .= __('Browser') . ': ' . ucfirst($browserData['browser_name']) . ' (version: ' . $browserData['browser_version'] . ') | ';
            $out .= __('Operating System') . ': ' . ucfirst($browserData['operating_system']);
            $out .= '</div>';
            return $out;
        }
    }

    /**
     * Utility method for preparing the message text (smilies & auto-linking)
     * @param type $text
     * @return type
     */
    public function prepareMessageText($text = '')
    {
        if ($text == '')
            return $text;


        $smiliesMap = array(
            array('s' => array(' :-) ', ' :) '), 'r' => 'smiling'),
            array('s' => array(' :-( ', ' :( '), 'r' => 'frowning'),
            array('s' => array(' :-/ ', ' :/ '), 'r' => 'unsure'),
            array('s' => array(' ;-) ', ' ;) '), 'r' => 'winking'),
            array('s' => array(' :-D ', ' :D '), 'r' => 'grinning'),
            array('s' => array(' B-) ', ' B) '), 'r' => 'cool'),
            array('s' => array(' :-P ', ' :P '), 'r' => 'tongue_out'),
            array('s' => array(' :-| ', ' :| '), 'r' => 'speechless'),
            array('s' => array(' :-O ', ' :O '), 'r' => 'gasping'),
            array('s' => array(' X-( ', ' X( '), 'r' => 'angry'),
            array('s' => array(' O:-) ', ' O:) '), 'r' => 'angel'),
        );

        $text = ' ' . $text . ' ';

        foreach ($smiliesMap as $map)
        {
            foreach ($map['s'] as $search)
            {
                $smilieImg = ' ' . $this->Html->image('smilies/' . $map['r'] . '.png', array('alt' => trim($search))) . ' ';
                $text = str_replace($search, $smilieImg, $text);
            }
        }

        $text = $this->Text->autoLinkUrls($text, array('escape' => false, 'target' => '_blank'));
        $text = $this->Text->autoLinkEmails($text, array('escape' => false, 'target' => '_blank'));

        return trim($text);
    }

    /**
     * Utility method for rendering the Gravatar & visitorname
     * @param string $username
     * @param string $email
     * @param int $size The size of the Gravatar
     * @return string
     */
    public function renderVisitorname($username = '', $email = '', $size = 40)
    {
        $avatar = $this->Html->image('https://www.gravatar.com/avatar/' . md5(strtolower($email)) . '?s=' . $size . '&d=identicon', array('alt' => $username, 'class' => 'avatar_image', 'width' => $size, 'height' => $size));
        return $avatar . ' <span class="visitorname">' . $username . '</span>';
    }

    /**
     * Utility method for rendering individual Gravatars
     * @param string $username
     * @param string $email
     * @param int $size The size of the Gravatar
     * @return string
     */
    public function renderGravatar($username = '', $email = '', $size = 40)
    {
        return $this->Html->image('https://www.gravatar.com/avatar/' . md5(strtolower($email)) . '?s=' . $size . '&d=identicon', array('alt' => $username, 'class' => 'avatar_image', 'width' => $size, 'height' => $size));
    }


}
