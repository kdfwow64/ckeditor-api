<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "ads_attribute_value".
 *
 * @property integer $ads_id
 * @property integer $attribute_id
 * @property integer $attribute_value_id
 *
 * @property AttributeValues $attributeValue
 * @property Ads $ads
 * @property Attributes $attribute
 */
class AdsAttributeValue extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'ads_attribute_value';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['ads_id', 'attribute_id', 'attribute_value_id'], 'required'],
            [['ads_id', 'attribute_id', 'attribute_value_id'], 'integer'],
            //[['attribute_value_id'], 'exist', 'skipOnError' => true, 'targetClass' => AttributeValues::className(), 'targetAttribute' => ['attribute_value_id' => 'id']],
            [['ads_id'], 'exist', 'skipOnError' => true, 'targetClass' => Ads::className(), 'targetAttribute' => ['ads_id' => 'id']],
            [['attribute_id'], 'exist', 'skipOnError' => true, 'targetClass' => Attributes::className(), 'targetAttribute' => ['attribute_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ads_id' => Yii::t('app', 'Ads ID'),
            'attribute_id' => Yii::t('app', 'Attribute ID'),
            'attribute_value_id' => Yii::t('app', 'Attribute Value ID'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAttributeValue()
    {
        return $this->hasOne(AttributeValues::className(), ['id' => 'attribute_value_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAds()
    {
        return $this->hasOne(Ads::className(), ['id' => 'ads_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAttributeAds()
    {
        return $this->hasOne(Attributes::className(), ['id' => 'attribute_id']);
    }
}
