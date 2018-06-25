<?php

namespace app\components;

use common\models\Pages;
use Yii;
use yii\base\Component;


class TextFooterLinksComponent extends Component
{
    private $_textFooterLinks;

    public function init()
    {
        $cacheKey = [
            Pages::className(),
            'textFooterLinks'
        ];

        $content = Yii::$app->cache->get($cacheKey);
        if (!$content) {
            $content = Pages::find()
                ->select('footer,slug,title')
                ->where(['status'=>1])
                ->orderBy('sort_order ASC')
                ->asArray()
                ->all();

            if ($content) {
                Yii::$app->cache->set($cacheKey, $content, 60*60*24);
            }
        }
        $this->_textFooterLinks = $content;
        parent::init();
    }

    public function getTextFooterLinks() {
        return $this->_textFooterLinks;
    }
}