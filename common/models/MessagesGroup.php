<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "messages_group".
 *
 * @property integer $id
 * @property integer $from
 * @property integer $to
 */
class MessagesGroup extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'messages_group';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['from', 'to', 'created'], 'required'],
            [['from', 'to', 'created'], 'integer'],
        ];
    }

    public function getFromuser()
    {
        return $this->hasOne(User::className(), ['id' => 'from']);
    }

    public function getTouser()
    {
        return $this->hasOne(User::className(), ['id' => 'to']);
    }

    public function getLastmessage()
    {
        return $this->hasOne(Messages::className(), ['group_id' => 'id'])->orderBy('id DESC');
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
        ];
    }
}
