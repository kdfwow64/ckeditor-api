<?php

namespace frontend\models\cabinet;

use common\models\User;
use Yii;
use yii\base\Model;

/**
 * ContactForm is the model behind the contact form.
 */
class PasswordchangeForm extends Model
{

    public $oldpassword;
    public $password;
    public $passwordcheck;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['oldpassword', 'password', 'passwordcheck'], 'required'],
            ['oldpassword', 'findPasswords'],
            ['password', 'string', 'min' => 6],
            ['passwordcheck', 'string', 'min' => 6],
            ['passwordcheck', 'compare', 'compareAttribute' => 'password', 'message' => 'Passwords do not match'],
        ];
    }

    public function findPasswords($attribute, $params)
    {
        $user = User::findOne(Yii::$app->user->getId());
        $password = $user->password_hash;
        if (!Yii::$app->security->validatePassword($this->oldpassword, $password))
            $this->addError($attribute, 'Old password incorrect');
    }


    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'oldpassword' => Yii::t('app', 'Current password'),
            'password' => Yii::t('app', 'New password'),
            'passwordcheck' => Yii::t('app', 'Repeat new password'),
        ];
    }

    public function changePassword()
    {
        Yii::$app->user->identity->setPassword($this->password);
        if(Yii::$app->user->identity->save(false)){
            Yii::$app->session->setFlash('success','Password changed');
            return true;
        }else{
            Yii::$app->session->setFlash('error','An error has occurred');
            return false;
        }

    }
}
