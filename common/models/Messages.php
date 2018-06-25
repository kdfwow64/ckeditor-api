<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "messages".
 *
 * @property integer $id
 * @property integer $from
 * @property integer $to
 * @property string $message
 * @property integer $created
 */
class Messages extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'messages';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['from', 'to', 'message', 'created','group_id'], 'required'],
            [['from', 'to', 'created','group_id','new_to','new_from'], 'integer'],
            [['message'], 'string'],
        ];
    }

    public function getFromuser(){
        return $this->hasOne(User::className(),['id'=>'from']);
    }

    public function getTouser(){
        return $this->hasOne(User::className(),['id'=>'to']);
    }

    public function getNew(){
        if($this->from==Yii::$app->user->getId() && $this->new_from==1){
            return 1;
        }
        if($this->to==Yii::$app->user->getId() && $this->new_to==1){
            return 1; 
        }

        return 0;
    }


    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'from' => 'From',
            'to' => 'To',
            'message' => 'Message',
            'created' => 'Created',
        ];
    }
}
