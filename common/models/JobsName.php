<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;

/**
 * This is the model class for table "jobs_name".
 *
 * @property integer $id
 * @property string $title_ru
 * @property integer $jobcat_id
 */
class JobsName extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'jobs_name';
    }

    public function behaviors()
    {
        return [
            [
                'class' => SluggableBehavior::className(),
                'attribute' => 'title_ru',
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
            [['jobcat_id'], 'required'],
            [['title_ru'], 'string'],
            [['title_en'], 'string'],
            [['slug'], 'string'],
            [['jobcat_id'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title_ru' => 'Заголовок',
            'jobcat_id' => 'Id категории',
        ];
    }
}
