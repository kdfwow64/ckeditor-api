<?php
namespace common\components;

/**
 * Created by PhpStorm.
 * User: p_shidlovsky
 * Date: 12.10.16
 * Time: 15:17
 */
class Sendsms
{

    private static $url = 'https://gate.smsclub.mobi/http/?';
    private static $username = '';    // string User ID (phone number)
    private static $password = '';        // string Password
    private static $from = 'Zakaz';        // string, sender id (alpha-name) (as long as your alpha-name is not spelled out, it is necessary to use it)


    public static function SendTo($to,$text)
    {
        $url_result = self::$url.'username='.self::$username.'&password='.self::$password.'&from='.urlencode(self::$from).'&to='.$to.'&text='.urlencode(iconv("utf-8", "windows-1251", $text));
        if($curl = curl_init())
        {
            curl_setopt($curl, CURLOPT_URL, $url_result);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
            $out = curl_exec($curl);
            curl_close($curl);
            return $out;
        }else{
            return false;
        }


    }


}