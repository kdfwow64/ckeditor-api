<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "attributes".
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $prompt_desc
 * @property int $type_field_id
 * @property string $slug
 *
 * @property AttributeValues[] $attributeValues
 * @property TypeFields $typeField
 * @property CategoryAttribute[] $categoryAttributes
 */
class Attributes extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'attributes';
    }

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            [
                'class' => SluggableBehavior::className(),
                'attribute' => 'name',
                'slugAttribute' => 'slug',
                'ensureUnique' => true,
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'description', 'prompt_desc', 'type_field_id'], 'required'],
            [['description'], 'string'],
            [['type_field_id'], 'integer'],
            [['name'], 'string', 'max' => 100],
            [['prompt_desc'], 'string', 'max' => 50],
            [['slug'], 'string', 'max' => 150],
            [['type_field_id'], 'exist', 'skipOnError' => true, 'targetClass' => TypeFields::className(), 'targetAttribute' => ['type_field_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Name'),
            'description' => Yii::t('app', 'Description'),
            'prompt_desc' => Yii::t('app', 'Prompt Description'),
            'type_field_id' => Yii::t('app', 'Type Field ID'),
            'slug' => Yii::t('app', 'Slug'),
            'typeField.name' => Yii::t('app', 'Field type')
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAttributeValues()
    {
        return $this->hasMany(AttributeValues::className(), ['attribute_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTypeField()
    {
        return $this->hasOne(TypeFields::className(), ['id' => 'type_field_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategoryAttributes()
    {
        return $this->hasMany(PropertyType::className(), ['attribute_id' => 'id']);
    }
}
