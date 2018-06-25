<?php

/*

 */

namespace common\helpers;

use common\models\Pages;
use yii\helpers\ArrayHelper;


class Setup {

    public static function generateUniquePageUrl($location){
        $output = '';
        $dateTime = date('m-y') . "-" . time();
        $url = self::str2url($location);
        $link = mb_substr(self::str2url($url), 0, 180, 'utf-8');
        //if(Pages::find()->where(['slug' => $link])->exists()){
        //    $output = $link . '-' . $dateTime;
        //}else
        $output = $link;
        return $output;
    }

    //This method will translit all other language characters to English character
    public static function str2url($str){
        // Translate to translit
        $str = self::_translit2en($str);
        // To lower string
        $str = strtolower($str);
        // Delete first and last '-'
        $str = trim($str, " ");
        // Disappear all others with nothign
        $str = preg_replace('~[^-a-z0-9_]+~u', '-', $str);
        //$str = trim($str, " ");
        // Delete in string: --,---, ----
        $str = str_replace(['--','---','----','- -'],'-',$str);
        return $str;
    }


    private static function _translit2en($string){
        $converter = [
            //russian
            'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'e',
            'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm',
            'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't',  'у' => 'u',
            'ф' => 'f', 'х' => 'h', 'ц' => 'c', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 'ь' => '',
            'ы' => 'y', 'ъ' => '', 'э' => 'e', 'ю' => 'yu', 'я' => 'ya',

            //russian uppercase
            'А' => 'A', 'Б' => 'B', 'В' => 'V', 'Г' => 'G', 'Д' => 'D', 'Е' => 'E', 'Ё' => 'E',
            'Ж' => 'Zh', 'З' => 'Z', 'И' => 'I', 'Й' => 'Y', 'К' => 'K', 'Л' => 'L', 'М' => 'M',
            'Н' => 'N', 'О' => 'O', 'П' => 'P', 'Р' => 'R', 'С' => 'S', 'Т' => 'T',  'У' => 'U',
            'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C', 'Ч' => 'Ch', 'Ш' => 'Sh', 'Щ' => 'Sch', 'Ь' => '',
            'Ы' => 'Y', 'Ъ' => '', 'Э' => 'E', 'Ю' => 'Yu', 'Я' => 'Ya',

            //Azeri and Turkish lowercase
            'ə' => 'e', 'ü' => 'u', 'ö' => 'o', 'ğ' => 'gh', 'ı' => 'i', 'ç' => 'ch', 'ş' => 'sh', 'i' => 'i',

            //Azeri and Turkish uppercase
            'Ə' => 'E', 'Ü' => 'U', 'Ö' => 'O', 'Ğ' => 'GH', 'I' => 'I', 'Ç' => 'CH', 'Ş' => 'SH', 'İ' => 'i',
        ];
        return strtr($string, $converter);
    }



}