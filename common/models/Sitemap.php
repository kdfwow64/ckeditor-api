<?php

namespace common\models;

use Yii;
use yii\base\Model;
use yii\helpers\Url;

class Sitemap extends Model
{
    public function getUrl()
    {
        $urls = [];

        // Static pages
        $arr_stat_page = [
            'ads', 'profiles', 'resume', 'login', 'signup'
        ];
        foreach ($arr_stat_page as $url_stat) {
            $urls[] = [Url::to($url_stat), 'daily', '0.9'];
        }

        // add Ads post
        $url_users = User::find()
            ->all();
        foreach ($url_users as $url_user) {
            $urls[] = [Url::to('user/' . $url_user['id']), 'daily', '0.7'];
        }

        // add Ads post
        $url_posts = Ads::find()
            ->where(['active' => Ads::ACTIVE_TRUE])
            ->all();

        foreach ($url_posts as $url_post) {
            if ($url_post['type_ad'] == Ads::TYPE_ADS)
                $urls[] = [Url::to('ads/' . $url_post['slug']), 'daily', '0.8'];

            if ($url_post['type_ad'] == Ads::TYPE_RESUME)
                $urls[] = [Url::to('resume/' . $url_post['slug']), 'daily', '0.8'];
        }

        return $urls;
    }

    //Forms an XML file, returns as a variable
    public function getXml($urls)
    {
        $param = '';
        $host = 'https://'.$_SERVER['HTTP_HOST'].'/'; // site domain

        $param .= '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
        $param .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">' . PHP_EOL;

        $param .= '<url>
                <loc>' .  $host . '</loc>
                <lastmod>'. date('Y-m-d') .'</lastmod>
                <changefreq>daily</changefreq>
                <priority>1</priority>
            </url>' . PHP_EOL;

        foreach ($urls as $url) {
            $param .= '<url>
                    <loc>' . $host . $url[0] . '</loc>
                    <lastmod>' . date('Y-m-d') . '</lastmod>
                    <changefreq>' . $url[1] . '</changefreq>
                    <priority>0.9</priority>
                </url>' . PHP_EOL;
        }
        $param .= '</urlset>';

        return $param;
    }

    //Returns an XML file
    public function showXml($xml_sitemap)
    {
        // set the format of the content
        Yii::$app->response->format = \yii\web\Response::FORMAT_XML;
        //again because may not work
        header("Content-type: text/xml");
        echo $xml_sitemap;
        Yii::$app->end();
    }
}
