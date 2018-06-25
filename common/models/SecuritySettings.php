<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "security_settings".
 *
 * @property int $user_id
 * @property int $email
 * @property int $birthday
 * @property int $email_ads
 */
class SecuritySettings extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'security_settings';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id'], 'required'],
            [['user_id', 'email', 'birthday', 'email_ads'], 'integer'],
            [['user_id'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'user_id' => Yii::t('app', 'User ID'),
            'email' => Yii::t('app', 'Email'),
            'birthday' => Yii::t('app', 'Birthday'),
            'email_ads' => Yii::t('app', 'Show Email in Ads'),
        ];
    }
}
