<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "category_attribute".
 *
 * @property integer $category_id
 * @property integer $attribute_id
 *
 * @property Attributes $attribute
 * @property PropertyType $category
 */
class CategoryAttribute extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'category_attribute';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['category_id', 'attribute_id'], 'required'],
            [['category_id', 'attribute_id'], 'integer'],
            [['attribute_id'], 'exist', 'skipOnError' => true, 'targetClass' => Attributes::className(), 'targetAttribute' => ['attribute_id' => 'id']],
            [['category_id'], 'exist', 'skipOnError' => true, 'targetClass' => PropertyType::className(), 'targetAttribute' => ['category_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'category_id' => Yii::t('app', 'Category ID'),
            'attribute_id' => Yii::t('app', 'Attribute ID'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAttributeVal()
    {
        return $this->hasOne(Attributes::className(), ['id' => 'attribute_id'])->with('attributeValues', 'typeField');
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(PropertyType::className(), ['id' => 'category_id']);
    }
}
