<?php

namespace frontend\models;

use common\components\Sendsms;
use Yii;
use yii\base\Model;
use common\models\User;
use yii\validators\EmailValidator;

/**
 * Password reset request form
 */
class PasswordResetRequestForm extends Model
{
    public $email;
    private $_user;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['email', 'trim'],
            ['email', 'email'],
            ['email', 'required'],
        ];
    }

    
    protected function getUser()
    {
        if ($this->_user === null) {
            $this->_user = User::findByEmailOrPhone($this->email);
        }
        return $this->_user;
    }

    public function reset()
    {
        if ($this->validate()) {
            $user = $this->getUser();
            if ($user) {
                $validator = new EmailValidator();

                $newpassword = Yii::$app->security->generateRandomString(8);
                $user->setPassword($newpassword);
                if ($user->save(false)) {
                    if ($validator->validate($this->email, $error)) {
                        $this->sendEmail($this->email, 'Your new password to enter the office: ' . $newpassword);
                    }
                    /* else {
                        Sendsms::SendTo($this->email,'Ваш новый пароль для входа в кабинет: '.$newpassword );
                    }*/
                    return true;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * Sends an email with a link, for resetting the password.
     *
     * @return boolean whether the email was send
     */
    public function sendEmail($email, $text)
    {
        return Yii::$app->mailer->compose()
            ->setTo($email)
            ->setFrom([Yii::$app->keyStorage->get('frontend.email_noreply') => 'Noreplay'])
            ->setSubject('Access to the office ' . $_SERVER['HTTP_HOST'])
            ->setHtmlBody($text)
            ->send();
    }

    public function attributeLabels()
    {
        return [
            'email' => 'User E-mail'
        ];
    }
}
