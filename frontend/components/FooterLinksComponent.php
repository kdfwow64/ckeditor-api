<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 29.12.16
 * Time: 12:58
 */

namespace app\components;

use common\models\FooterLinks;
use Yii;
use yii\base\Component;


class FooterLinksComponent extends Component
{
    private $_footerLinks;

    public function init()
    {
        $cacheKey = [
            FooterLinks::className(),
            'footerLinks'
        ];

        $content = Yii::$app->cache->get($cacheKey);

        if (!$content) {
            $content = FooterLinks::find()
                ->where(['status'=>1])
                ->orderBy('sort_order ASC')
                ->asArray()
                ->all();

            if ($content) {
                Yii::$app->cache->set($cacheKey, $content, 60*60*24);
            }
        }
        $this->_footerLinks = $content;
        parent::init();
    }

    public function getFooterLinks() {
        return $this->_footerLinks;
    }
}