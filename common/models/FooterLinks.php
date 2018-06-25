<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "footer_links".
 *
 * @property int $id
 * @property string $title
 * @property string $link
 * @property string $img
 * @property int $status
 */
class FooterLinks extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'footer_links';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'link'], 'required'],
            [['status','sort_order'], 'integer'],
            [['title', 'img'], 'string', 'max' => 100],
            [['link'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title' => Yii::t('app', 'Title'),
            'link' => Yii::t('app', 'Link'),
            'img' => Yii::t('app', 'Img'),
            'status' => Yii::t('app', 'Active'),
            'sort_order' => Yii::t('app', 'Sort order'),
        ];
    }
}
