<?php

namespace frontend\assets;

use yii\bootstrap\BootstrapPluginAsset;
use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
//    public $jsOptions = [
//        'async' => 'async',
//    ];
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        ['css/normalize.css','media'=>'screen'],
        ['css/reset.css','media'=>'screen'],
        '//fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic',
//        ['css/selectize.css','media'=>'screen'],
        ['css/styles.css','media'=>"screen"],
        //'css/google_keyb_popup.css',
        //  'css/keyb_main.css',
    ];
    public $js = [
        //'js/google_keyb_popup.js',
        '//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
//        '//cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/js/standalone/selectize.min.js',
        //'/js/google_analytics.js',
        //['/js/analytics.js', 'async' => false],
        ['/js/publishertag.js', 'async' => false],
        ['js/main.js', 'async' => false],
        //['js/vk_loader.js', 'async' => false],
        //'js/kb_module.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];
}


