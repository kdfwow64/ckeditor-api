<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 29.12.16
 * Time: 12:58
 */

namespace app\components;

use Yii;
use yii\base\Component;
use common\models\Currency;
use yii\helpers\ArrayHelper;

class CurrencyData extends Component
{
    private $_currency;

    public function init()
    {
        $cacheKey = [
            Currency::className(),
            'currency'
        ];

        $content = Yii::$app->cache->get($cacheKey);

        if (!$content) {
            $content = Currency::find()
                ->asArray()
                ->all();

            if ($content) {
                Yii::$app->cache->set($cacheKey, $content, 60*60*24);
            }
        }
        $this->_currency = $content;
        parent::init();
    }

    public function getCurrency() {
        return $this->_currency;
    }

    public function getCurrencyById($id) {
        return ArrayHelper::index($this->_currency, 'id')[$id];
    }
}