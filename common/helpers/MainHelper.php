<?php
namespace common\helpers;

use Yii;
use yii\helpers\Inflector;

class MainHelper
{
    /**
     * It allows you to get the name of the css class.
     * You can add the appropriate class to the body tag for dynamic change the template's appearance.
     * Note: Use this fucntion only if you override the skin through configuration. 
     * Otherwise you will not get the correct css class of body.
     * 
     * @return string
     */
    public static function newKey($array)
    {
        $newAttributesValue = [];
        $k = @array_keys($array);
        for ($i = 0; $i < count($k); $i++) {
            $new_key = Inflector::variablize($k[$i]);
            $newAttributesValue[$new_key] = $array[$k[$i]];
        }

        return $newAttributesValue;
    }
}
