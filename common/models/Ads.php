<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;
use trntv\filekit\behaviors\UploadBehavior;

/**
 * This is the model class for table "ads".
 *
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property string $desc
 * @property string $contact_phone
 * @property string $contact_email
 * @property string $contact_name
 * @property int $price
 * @property int $currency
 * @property int $price_negotiable
 * @property string $country
 * @property string $city
 * @property int $cat_id
 * @property int $type_id
 * @property string $working
 * @property string $lang
 * @property int $active
 * @property int $admin_check
 * @property int $created_at
 * @property int $updated_at
 * @property string $slug
 * @property int $views
 * @property string $type_ad
 *
 * @property AdsAttributeValue[] $adsAttributeValues
 */
class Ads extends \yii\db\ActiveRecord
{
    const ACTIVE_TRUE = 1;
    const ACTIVE_FALSE = 0;

    const TYPE_ADS = 1;
    const TYPE_RESUME = 2;

    const TYPE_ADS_NAME = 'Landlords';
    const TYPE_RESUME_NAME = 'Tenants';

    const SOURCE_BASE_URL = '/uploads/source';
    const THUMB_BASE_URL = '/uploads/thumb';

    public $attachments = [];

    public static $radius = ['5', '10', '15', '20', '25', '30', '35', '40'];

    public static $provided = [
        '1' => 'Agency',
        '0' => 'Owner'
    ];

    public static $currency = [
        '&euro;' => 'EURO (&euro;)',
        '&#36;' => 'Dollar (&#36;)',
        '&pound;' => 'Pound sterling (&pound;)'
    ];

    const LIMIT = 3;

    const SALE = 1;
    const BUY = 2;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'ads';
    }

    public static function provided(){
        return [
            '1' => Yii::t('app', 'Agency'),
            '0' => Yii::t('app', 'Owner')
        ];
    }

    public function behaviors()
    {
        return [
            [
                'class' => SluggableBehavior::className(),
                'attribute' => 'title',
                'ensureUnique' => true,
                // 'slugAttribute' => 'slug',
            ],
            [
                'class' => UploadBehavior::className(),
                'attribute' => 'attachments',
                'multiple' => true,
                'uploadRelation' => 'adsAttachments',
                'pathAttribute' => 'path',
                'baseUrlAttribute' => 'base_url',
                'orderAttribute' => 'order',
                'typeAttribute' => 'type',
                'sizeAttribute' => 'size',
                'nameAttribute' => 'name',
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'title', 'desc', 'contact_phone', 'contact_email', 'contact_name', 'country', 'city', 'cat_id', 'created_at', 'updated_at'], 'required'],
            [['user_id', 'price', 'currency', 'price_negotiable', 'cat_id', 'type_id', 'working', 'lang', 'active',
                'admin_check', 'created_at', 'updated_at'], 'integer'],
            [['desc', 'type_ad'], 'string'],
            [['title'], 'string', 'max' => 500],
            [['contact_phone', 'contact_email', 'country', 'city'], 'string', 'max' => 100],
            [['contact_name'], 'string', 'max' => 50],
            [['working'], 'string', 'max' => 255],
            [['lang'], 'string', 'max' => 5000],
            [['attachments'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'user_id' => Yii::t('app', 'User ID'),
            'title' => Yii::t('app', 'Title'),
            'desc' => Yii::t('app', 'Description'),
            'contact_phone' => Yii::t('app', 'Phone number'),
            'contact_email' => Yii::t('app', 'Email'),
            'contact_name' => Yii::t('app', 'Contact Name'),
            'price' => Yii::t('app', 'Salary €'),
            'currency' => Yii::t('app', 'Currency'),
            'price_negotiable' => Yii::t('app', 'Price Negotiable'),
            'country' => Yii::t('app', 'Country'),
            'city' => Yii::t('app', 'City'),
            'cat_id' => Yii::t('app', 'Category'),
            'type_id' => Yii::t('app', 'Purpose'),
            'working' => Yii::t('app', 'Property owner'),
            'lang' => Yii::t('app', 'Language knowledge'),
            'active' => Yii::t('app', 'Active status'),
            'admin_check' => Yii::t('app', 'Admin Check'),
            'created_at' => Yii::t('app', 'Created At'),
            'updated_at' => Yii::t('app', 'Updated At'),
            'slug' => Yii::t('app', 'Slug'),
            'views' => Yii::t('app', 'Views'),
            'type_ad' => Yii::t('app', 'Type Ad'),
        ];
    }

    /**
     * @return bool
     */
    public function beforeDelete()
    {
        if (!parent::beforeDelete()) {
            return false;
        }

        foreach ($this->adsAttachments as $file) {
            FileStorageItem::find()->where(['path' => $file])->one()->delete();

            if (file_exists(Yii::getAlias('@webroot/uploads/thumb/' . $file->path))) {
                unlink(Yii::getAlias('@webroot/uploads/thumb/' . $file->path));
            }
            if (file_exists(Yii::getAlias('@webroot/uploads/source/' . $file->path))) {
                unlink(Yii::getAlias('@webroot/uploads/source/' . $file->path));
            }
        }

        AdsAttachment::deleteAll('ads_id = :ads_id', [':ads_id' => $this->id]);
        AdsAttributeValue::deleteAll('ads_id = :ads_id', [':ads_id' => $this->id]);
        return true;
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAdsAttachment()
    {
        return $this->hasOne(AdsAttachment::className(), ['ads_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAdsAttachments()
    {
        return $this->hasMany(AdsAttachment::className(), ['ads_id' => 'id'])->
        orderBy([
            'order' => SORT_ASC,
            'id' => SORT_ASC
        ]);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAdsAttributeValue()
    {
        return $this->hasMany(AdsAttributeValue::className(), ['ads_id' => 'id']);
    }

    /**
     * @return string
     */
    public function getCountryName()
    {
        return $this->hasOne(NetCountry::className(), ['id' => 'country']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCityName()
    {
        return $this->hasOne(NetCity::className(), ['id' => 'city']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCurrencyName()
    {
        return $this->hasOne(Currency::className(), ['id' => 'currency']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAuthor()
    {
        return $this->hasOne(User::className(), ['id' => 'created_by']);
    }

    /**
     * @return string
     */
    public function getPriceAd()
    {
        if ($this->price == NULL || $this->price == '' || $this->price_negotiable == 1) {
            $val = '<div class="negotiable">' . Yii::t('app', 'negotiable') . '</div>';
        } else {
            $val = '<strong>' . $this->price . '</strong> ' . \Yii::$app->currency->getCurrencyById($this->currency)['value'];
        }

        return $val;
    }
}
