<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;
use trntv\filekit\behaviors\UploadBehavior;

/**
 * This is the model class for table "resume".
 *
 * @property integer $id
 * @property integer $user_id
 * @property string $title
 * @property string $desc
 * @property string $contact_phone
 * @property string $contact_email
 * @property string $contact_name
 * @property integer $price
 * @property string $country
 * @property string $city
 * @property integer $cat_id
 * @property integer $type_id
 * @property string $working
 * @property string $lang
 * @property integer $active
 * @property integer $admin_check
 * @property integer $created_at
 * @property integer $updated_at
 * @property string $slug
 * @property integer $views
 *
 * @property AdsAttributeValue[] $adsAttributeValues
 */
class Resume extends \yii\db\ActiveRecord
{
    public $attachments = [];

    const LIMIT = 3;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'resume';
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
            [['user_id', 'title', 'desc', 'contact_phone', 'contact_email', 'contact_name', 'country', 'city', 'price', 'cat_id', 'created_at', 'updated_at'], 'required'],
            [['user_id', 'price', 'cat_id', 'type_id', 'working', 'lang', 'active', 'admin_check', 'created_at', 'updated_at'], 'integer'],
            [['desc'], 'string'],
            [['title'], 'string', 'max' => 500],
            [['contact_phone', 'contact_email', 'country', 'city'], 'string', 'max' => 100],
            [['contact_name'], 'string', 'max' => 50],
            [['working'], 'string', 'max' => 255],
            [['lang'], 'string', 'max' => 5000],
            [['attachments'], 'safe']
        ];
    }

    public function getCountryName()
    {
        $country = NetCountry::findOne(['id' => $this->country]);
        if ($country) {
            return $country->name_en;
        }
    }

    public function getCityName()
    {
        $city = NetCity::findOne(['id' => $this->city]);
        if ($city) {
            return $city->name_en;
        }
    }

    public function getUser()
    {
        return User::findOne(['id' => $this->user_id]);
    }

    public function getAuthor()
    {
        return $this->hasOne(User::className(), ['id' => 'created_by']);
    }

    /*
     *
     */
    public function getAdsAttachment()
    {
        return $this->hasMany(AdsAttachment::className(), ['ads_id' => 'id']);
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
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAdsAttachments()
    {
        return $this->hasMany(AdsAttachment::className(), ['ads_id' => 'id']);
    }
}
