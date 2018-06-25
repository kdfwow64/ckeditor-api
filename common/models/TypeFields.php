<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "type_fields".
 *
 * @property integer $id
 * @property string $name
 *
 * @property Attributes[] $attributes
 */
class TypeFields extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'type_fields';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name'], 'string', 'max' => 20],
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
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
//    public function getAttributes()
//    {
//        return $this->hasMany(Attributes::className(), ['type_field_id' => 'id']);
//    }
}
