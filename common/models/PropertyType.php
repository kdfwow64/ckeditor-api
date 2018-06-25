<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;

/**
 * This is the model class for table "property_type".
 *
 * @property integer $id
 * @property string $title_ru
 * @property string $title_en
 * @property string $slug
 */
class PropertyType extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'property_type';
    }

    public function behaviors()
    {
        return [
            [
                'class' => SluggableBehavior::className(),
                'attribute' => 'title_en',
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
            [['title_ru', 'title_en'], 'string'],
            [['slug'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title_ru' => Yii::t('app', 'Title Ru'),
            'title_en' => Yii::t('app', 'Title En'),
            'slug' => Yii::t('app', 'Slug'),
        ];
    }

    public function getAttributesCategory()
    {
        return $this->hasMany(Attributes::className(), ['id' => 'attribute_id'])
            ->viaTable(CategoryAttribute::tableName(), ['category_id' => 'id']);
    }
}
