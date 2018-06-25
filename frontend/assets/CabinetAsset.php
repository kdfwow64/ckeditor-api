<?php

namespace frontend\assets;

use yii\bootstrap\BootstrapPluginAsset;
use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class CabinetAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
        '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        '//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
        '/design/cabinet/css/cab-style.css',
        '/design/cabinet/css/cab-media.css',
        '/design/cabinet/css/custom.css',
        '/design/cabinet/css/owl.carousel.css',
    ];
    public $js = [
        '/design/cabinet/js/clipboard.min.js',
        '/design/cabinet/js/round-chart.js',
        '/design/cabinet/js/main.js',
        '/design/cabinet/js/owl.carousel.min.js',
        '/design/cabinet/js/cab-index.js',
        
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];
}
