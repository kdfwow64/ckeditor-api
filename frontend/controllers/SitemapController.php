<?php

namespace frontend\controllers;

use common\models\Sitemap;
use Yii;
use yii\console\Controller;
use yii\helpers\ArrayHelper;

class SitemapController extends Controller
{
    public function actionSitemap()
    {
        $sitemap = new Sitemap();

        // We get all links
        $urls = $sitemap->getUrl();

        // Create an XML file
        $xml_sitemap = $sitemap->getXml($urls);

        $file = Yii::$app->basePath . '/web/sitemap.xml';
        $current = $xml_sitemap;
        file_put_contents($file, $current);
    }
}


