<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;

/**
 * This is the model class for table "net_city".
 *
 * @property integer $id
 * @property integer $country_id
 * @property string $name_ru
 * @property string $name_en
 * @property string $region
 * @property string $postal_code
 * @property string $latitude
 * @property string $longitude
 */
class NetCity extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'net_city';
    }

    public function behaviors()
    {
        return [
            [
                'class' => SluggableBehavior::className(),
                'attribute' => 'name_ru',
                'ensureUnique' => true,
                // 'slugAttribute' => 'slug',
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['country_id'], 'integer'],
            [['name_ru','name_en','country_id'], 'required'],
            [['slug'], 'string'],
            [['name_ru', 'name_en'], 'string', 'max' => 100],
            [['region'], 'string', 'max' => 2],
            [['postal_code', 'latitude', 'longitude'], 'string', 'max' => 10],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'country_id' => 'Country ID',
            'name_ru' => 'Name Ru',
            'name_en' => 'Name En',
            'region' => 'Region',
            'postal_code' => 'Postal Code',
            'latitude' => 'Latitude',
            'longitude' => 'Longitude',
        ];
    }
}
