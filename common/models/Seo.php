<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "seo".
 *
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property string $link
 */
class Seo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'seo';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'description', 'link'], 'required'],
            [['description','keywords'], 'string'],
            [['title'], 'string', 'max' => 1000],
            [['link'], 'string', 'max' => 1300],
            [['link'], 'unique'],
        ];
    }

    public static function findByurl($url)
    {
        $seo = self::find()->where(['link'=>$url])->one();

        if(!$seo){
            if($url == "/"){
                return null;
            }
            $url = explode('?',$url)[0];
            $seo = self::find()->where(['like','link',$url])->one();

        }
        return $seo;
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Заголовок',
            'description' => 'Описание',
            'keywords' => 'Кейвордс',
            'link' => 'Ссылка',
        ];
    }
}