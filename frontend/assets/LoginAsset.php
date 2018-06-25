<?php

namespace frontend\assets;

use yii\bootstrap\BootstrapPluginAsset;
use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class LoginAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
        '//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
        '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        '/design/css/fonts.min.css',
        '/design/css/icons.min.css',
        '/design/css/login-style.min.css',
        '/design/css/login-media.min.css',
    ];
    public $js = [
        '/design/js/owl.carousel.min.js',
        '/design/js/index.min.js',
//        '/design/js/main-page.js',
//        '/design/js/linkedin.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];
}

