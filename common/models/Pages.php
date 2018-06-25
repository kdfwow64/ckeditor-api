<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "seo".
 *
 * @property integer $id
 * @property string $title
 * @property string $text
 * @property string $slug
 * @property string $footer
 * @property string $sort_order
 */
class Pages extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'pages';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'text','slug','sort_order'], 'required'],
            [['text','title','slug'], 'string'],
            [['status','footer','sort_order'], 'integer'],
            [['slug'], 'unique'],
        ];
    }

    public function beforeSave($insert)
    {
        $this->slug = \common\helpers\Setup::generateUniquePageUrl($this->slug);
        return true;
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Заголовок',
            'text' => 'Содержание',
            'footer' => 'Ссылка в футере',
            'status' => 'Active',
            'slug' => 'Url адресс',
            'sort_order' => Yii::t('app', 'Sort order'),
        ];
    }
}