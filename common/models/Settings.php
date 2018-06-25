<?php

namespace common\models;

use Eventviva\ImageResize;
use Yii;
use yii\base\Model;
use yii\behaviors\SluggableBehavior;
use yii\web\UploadedFile;

class Settings extends Model
{
    public $site_name;
    public $adminEmail;
    public $mainpageuser;
    public $mainslide1File;
    public $mainslide2File;
    public $mainslide3File;
    public $mainslide4File;
    public $mainslide5File;
    public $vacancyfotoFile;
    public $profilefotoFile;
    public $resumefotoFile;
    public $mainslide1;
    public $mainslide2;
    public $mainslide3;
    public $mainslide4;
    public $mainslide5;
    public $slidetext1;
    public $slidetext2;
    public $slidetext3;
    public $slidetext4;
    public $slidetext5;
    public $vacancyfoto;
    public $profilefoto;
    public $resumefoto;
    public $vacancytext;
    public $profiletext;
    public $resumetext;
    public $facebook_link;
    public $in_link;
    public $gp_link;
    public $vk_link;
    public $tw_link;
    public $new_link;
    public $mending_link;
    public $ga;
    public $footer;
    public $fb_sc_f;
    public $fjsc;
    public $fcc;
    public $slidetime;
    public $seotitle;
    public $seodescription;
    public $seoimg;
    public $seoimgfile;
    public $favicon_file;
    public $favicon;
    public $logo_img_file;
    public $logo_img;
    public $termsofservice;
    public $termsofservicetitle;
    public $topblocktitle;
    public $topblocktext;
    public $cookies_interval;
    public $cookies_text;
    public $site_color_1;
    public $site_color_2;
    public $offersDefaultPhoto;
    public $requestDefaultPhoto;

    public function rules()
    {
        return [
            [['adminEmail', 'slidetime', 'site_name'], 'required'],
            [['adminEmail'], 'email'],
            [['mainpageuser'], 'boolean'],
            [['slidetime', 'cookies_interval'], 'integer'],
            [
                [
                    'mainslide1', 'mainslide2', 'mainslide3', 'mainslide4', 'mainslide5', 'vacancyfoto', 'profilefoto', 'resumefoto',
                    'vacancytext', 'profiletext', 'resumetext', 'facebook_link', 'in_link', 'gp_link', 'vk_link', 'tw_link', 'new_link', 'mending_link',
                    'ga', 'footer', 'fb_sc_f', 'fjsc', 'fcc', 'slidetext1', 'slidetext2', 'slidetext3', 'slidetext4', 'slidetext5', 'seoimg', 'favicon', 'seodescription',
                    'seotitle', 'termsofservice', 'termsofservicetitle', 'topblocktitle', 'topblocktext', 'cookies_text', 'site_name', 'site_color_1', 'site_color_2', 'logo_img',
                ], 'string',
            ],
            [['mainslide1File', 'mainslide2File', 'mainslide3File', 'mainslide4File', 'mainslide5File', 'vacancyfotoFile', 'profilefotoFile', 'resumefotoFile', 'seoimgfile', 'favicon_file', 'logo_img_file','offersDefaultPhoto','requestDefaultPhoto'], 'file'],
        ];
    }

    public function __construct()
    {
        $property = get_object_vars($this);
        if ($property) {
            foreach ($property as $key => $pr) {
                $this->{$key} = isset(Yii::$app->params[$key]) ? Yii::$app->params[$key] : '';
            }
        }
        $this->init();
    }

    function object2file()
    {
        $value     = [
            'site_name'           => $this->site_name,
            'adminEmail'          => $this->adminEmail,
            'termsofservicetitle' => $this->termsofservicetitle,
            'termsofservice'      => $this->termsofservice,
            'topblocktitle'       => $this->topblocktitle,
            'topblocktext'        => $this->topblocktext,
            'facebook_link'       => $this->facebook_link,
            'in_link'             => $this->in_link,
            'seodescription'      => $this->seodescription,
            'seotitle'            => $this->seotitle,
            'gp_link'             => $this->gp_link,
            'vk_link'             => $this->vk_link,
            'tw_link'             => $this->tw_link,
            'new_link'            => $this->new_link,
            'mending_link'        => $this->mending_link,
            'ga'                  => $this->ga,
            'footer'              => $this->footer,
            'fb_sc_f'             => $this->fb_sc_f,
            'fjsc'                => $this->fjsc,
            'fcc'                 => $this->fcc,
            'slidetext1'          => $this->slidetext1,
            'slidetext2'          => $this->slidetext2,
            'slidetext3'          => $this->slidetext3,
            'slidetext4'          => $this->slidetext4,
            'slidetext5'          => $this->slidetext5,
            'slidetime'           => $this->slidetime,
            'mainpageuser'        => $this->mainpageuser,
            'vacancytext'         => $this->vacancytext,
            'profiletext'         => $this->profiletext,
            'resumetext'          => $this->resumetext,
            'mainslide1'          => $this->uploadImage(UploadedFile::getInstance($this, 'mainslide1File'), 'mainslide1'),
            'seoimg'              => $this->uploadImage(UploadedFile::getInstance($this, 'seoimgfile'), 'seoimg'),
            'favicon'             => $this->uploadFavicon((isset(Yii::$app->params['favicon']) ? Yii::$app->params['favicon'] : ''), 'Settings[favicon_file]'),
            'logo_img'            => $this->uploadFavicon((isset(Yii::$app->params['logo_img']) ? Yii::$app->params['logo_img'] : ''), 'Settings[logo_img_file]'),
            'mainslide2'          => $this->uploadImage(UploadedFile::getInstance($this, 'mainslide2File'), 'mainslide2'),
            'mainslide3'          => $this->uploadImage(UploadedFile::getInstance($this, 'mainslide3File'), 'mainslide3'),
            'mainslide4'          => $this->uploadImage(UploadedFile::getInstance($this, 'mainslide4File'), 'mainslide4'),
            'mainslide5'          => $this->uploadImage(UploadedFile::getInstance($this, 'mainslide5File'), 'mainslide5'),
            'vacancyfoto'         => $this->uploadImage(UploadedFile::getInstance($this, 'vacancyfotoFile'), 'vacancyfoto'),
            'profilefoto'         => $this->uploadImage(UploadedFile::getInstance($this, 'profilefotoFile'), 'profilefoto'),
            'resumefoto'          => $this->uploadImage(UploadedFile::getInstance($this, 'resumefotoFile'), 'resumefoto'),
            'cookies_interval'    => $this->cookies_interval,
            'cookies_text'        => $this->cookies_text,
            'site_color_1'        => $this->site_color_1,
            'site_color_2'        => $this->site_color_2,
            'offersDefaultPhoto'  => $this->uploadFavicon((isset(Yii::$app->params['offersDefaultPhoto']) ? Yii::$app->params['offersDefaultPhoto'] : ''), 'Settings[offersDefaultPhoto]'),
            'requestDefaultPhoto' => $this->uploadFavicon((isset(Yii::$app->params['requestDefaultPhoto']) ? Yii::$app->params['requestDefaultPhoto'] : ''), 'Settings[requestDefaultPhoto]'),
        ];
        $str_value = json_encode($value);

        $f = fopen(__DIR__ . '/../config/panelsettings_json.txt', 'w+');
        fwrite($f, $str_value);
        fclose($f);
    }

    public function uploadImage($img, $name = '')
    {
        if ($img) {
            $name  = '/uploads/images/' . $img->baseName . '_' . substr(md5(microtime() . rand(0, 9999)), 4, 3) . '.' . $img->extension;
            $image = new ImageResize($img->tempName);
            $image->save(__DIR__ . '/../../frontend/web' . $name);

            return $name;
        } else {
            return isset(Yii::$app->params[$name]) ? Yii::$app->params[$name] : '';
        }
    }

    public function uploadFavicon($old_img, $name = '')
    {
        $imageFile = UploadedFile::getInstanceByName($name);
        if ($imageFile) {
            $new_name   = \Yii::$app->security->generateRandomString(10);
            $orign_dir  = '/uploads/images/';
            $orign_name = $orign_dir . $new_name . '.' . $imageFile->extension;
            $imageFile->saveAs(__DIR__ . '/../../frontend/web' . $orign_name);

            return $orign_name;
        } else {
            return $old_img;
        }
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'site_name'           => 'Название сайта',
            'adminEmail'          => 'Емейл для уведомлений',
            'termsofservicetitle' => 'Заголовок страницы',
            'termsofservice'      => 'Текст',
            'topblocktitle'       => 'Всплывающий блок заголовок',
            'topblocktext'        => 'Всплывающий блок текст',
            'facebook_link'       => 'facebook_link',
            'in_link'             => 'linkedin',
            'gp_link'             => 'Google+',
            'vk_link'             => 'Vkontakte',
            'tw_link'             => 'Twitter',
            'new_link'            => 'Link',
            'seotitle'            => 'Основной заголовок H1',
            'seodescription'      => 'Основной description',
            'seoimg'              => 'Логотип для шарига',
            'seoimgfile'          => 'Логотип для шарига',
            'favicon'             => 'Фавикон для сайта',
            'favicon_file'        => 'Фавикон для сайта',
            'logo_img'            => 'Логотип для сайта',
            'logo_img_file'       => 'Логотип для сайта',
            'ga'                  => 'Ga (header)',
            'footer'              => 'Footer code',
            'slidetime'           => 'Задержка слайдов',
            'fjsc'                => '- Facebook Javascript SDK code',
            'fcc'                 => '- Facebook comments code',
            'fb_sc_f'             => '- Facebook or Social code (footer)',
            'mainpageuser'        => 'Отображение полльзователей на главной',
            'slidetext1'          => 'Текст слайда 1',
            'slidetext2'          => 'Текст слайда 2',
            'slidetext3'          => 'Текст слайда 3',
            'slidetext4'          => 'Текст слайда 4',
            'slidetext5'          => 'Текст слайда 5',
            'mainslide1'          => 'Слайд 1 на главной',
            'mainslide2'          => 'Слайд 2 на главной',
            'mainslide3'          => 'Слайд 3 на главной',
            'mainslide4'          => 'Слайд 4 на главной',
            'mainslide5'          => 'Слайд 5 на главной',
            'vacancyfoto'         => 'Фото на странице предложений',
            'vacancytext'         => 'H1 страницы предложений',
            'profilefoto'         => 'Фото на странице профили',
            'profiletext'         => 'H1 страницы профили',
            'resumefoto'          => 'Фото на странице заявок',
            'resumetext'          => 'H1 страницы заявок',
            'mainslide1File'      => 'Слайд 1 на главной',
            'mainslide2File'      => 'Слайд 2 на главной',
            'mainslide3File'      => 'Слайд 3 на главной',
            'mainslide4File'      => 'Слайд 4 на главной',
            'mainslide5File'      => 'Слайд 5 на главной',
            'vacancyfotoFile'     => 'Фото на странице предложений',
            'profilefotoFile'     => 'Фото на странице профили',
            'resumefotoFile'      => 'Фото на странице заявок',
            'cookies_interval'    => 'Время жизни Cookie банера (в часах)',
            'cookies_text'        => 'Cookie текст',
            'site_color_1'        => Yii::t('backend', 'site color_1'),
            'site_color_2'        => Yii::t('backend', 'site color_2'),
            'offersDefaultPhoto'  => Yii::t('backend', 'offers default photo'),
            'requestDefaultPhoto' => Yii::t('backend', 'request default photo'),
        ];
    }
}
