<?php
namespace frontend\assets;

use yii\web\AssetBundle;

class JustifiedGalleryAsset extends AssetBundle
{
    public $sourcePath = '@bower/justifiedGallery';
    public $css = [
        'dist/css/justifiedGallery.min.css',
    ];
    public $js = [
        'dist/js/jquery.justifiedGallery.min.js'
    ];
    public $depends = [
        'yii\web\JqueryAsset',
    ];
}