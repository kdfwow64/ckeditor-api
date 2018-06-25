<?php

namespace frontend\models\cabinet;

use Yii;
use yii\base\Model;

/**
 * ContactForm is the model behind the contact form.
 */
class PasswordchangeForm extends Model
{
    public $password;
    public $passwordcheck;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['password','passwordcheck'],'required'],
            ['password', 'string', 'min' => 6],
            ['passwordcheck', 'string', 'min' => 6],
            ['passwordcheck', 'compare', 'compareAttribute' => 'password', 'message' => 'Пароли не совпадают'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'password' => 'Пароль',
            'passwordcheck' => 'Пароль еще раз',
        ];
    }

    public function changePassword()
    {
        Yii::$app->user->identity->setPassword($this->password);
        return Yii::$app->user->identity->save(false);
    }
}
