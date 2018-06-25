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
App::uses('HtmlHelper', 'View/Helper');

/**
 * Application-wide HtmlHelper extension
 */
class AppHtmlHelper extends HtmlHelper
{

    /**
     * Utility method to retrieve the current installation's webroot URL with 
     * its trailing slash
     * @return string The webroot URL
     */
    public function getWebroot()
    {
        return FULL_BASE_URL . $this->request->webroot;
    }

    /**
     * Very simple CSS minification method
     * @param string $css The CSS to minify
     * @return string The minified CSS
     */
    public function minifyCss($css = '')
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

        $css = preg_replace('#\s+#', ' ', $css);
        $css = preg_replace('#/\*.*?\*/#s', '', $css);

        foreach ($replacements as $search => $replace)
        {
            $css = str_replace($search, $replace, $css);
        }

        return trim($css);
    }

    /**
     * Inserts the application's default meta tags
     */
    public function appMeta()
    {
        echo $this->meta($this->getWebroot() . 'favicon.ico', $this->getWebroot() . 'favicon.ico?v=1', array('type' => 'icon'));
        echo $this->meta(array('name' => 'robots', 'content' => 'noindex, nofollow, noodp, nocache, noarchive, noydir'));
        echo $this->meta(array('name' => 'generator', 'content' => 'ClientEngage Visitor Chat v' . AppVersion::Version));
    }

}