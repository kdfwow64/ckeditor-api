<?php
namespace frontend\assets;

use yii\web\AssetBundle;

class LightGalleryAsset extends AssetBundle
{
    public $sourcePath = '@bower/lightgallery';
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css',
        '//cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.19/css/lightgallery.min.css',
    ];
    public $js = [
        ['https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/js/lightslider.min.js', 'async' => false],
        ['https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js', 'async' => false],
        ['https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.19/js/lightgallery-all.min.js', 'async' => false],
        ['/design/js/view-resume.js', 'async' => false],
    ];
    public $depends = [
        'yii\web\JqueryAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];
}
