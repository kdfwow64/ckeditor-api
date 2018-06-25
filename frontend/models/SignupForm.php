<?php

namespace frontend\models;

use common\models\SecuritySettings;
use Yii;
use yii\base\Model;
use common\models\User;

/**
 * Signup form
 */
class SignupForm extends Model
{
    public $firstname;
    public $lastname;
    public $email;
    public $password;
    public $check;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['firstname', 'trim'],
            ['firstname', 'required'],
            ['firstname', 'string', 'min' => 2, 'max' => 255],

            ['lastname', 'trim'],
            ['lastname', 'required'],
            ['lastname', 'string', 'min' => 2, 'max' => 255],

            ['email', 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'string', 'max' => 255],
            ['email', 'unique', 'targetClass' => '\common\models\User', 'message' => 'Email already in use by another user'],

            ['password', 'required'],
            ['password', 'string', 'min' => 6],

            [['check'], 'boolean'],
            ['check', 'required', 'requiredValue' => 1,
                'when' => function ($model) {
                    return $model->check == '0';
                },
                'whenClient' => "function (attribute, value) {
                    return $('#signupform-check').attr('checked') != 'checked';
                }",
                'message' => 'Confirm your agreement with the user agreement'
            ],

        ];
    }


    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function signup()
    {
        if (!$this->validate()) {
            return null;
        }

        $user = new User();
        $user->firstname = $this->firstname;
        $user->lastname = $this->lastname;
        $user->email = $this->email;
        $user->activate_hash = \Yii::$app->security->generateRandomString(12);
        $user->setPassword($this->password);
        $user->generateAuthKey();


        if ($user->save()) {
            $security = new SecuritySettings();
            $security->user_id = $user->id;
            $security->save();

            $link = 'https://' . $_SERVER['HTTP_HOST'] . '/activation/' . $user->activate_hash;
            \Yii::$app
                ->mailer
                ->compose()
                ->setFrom([Yii::$app->keyStorage->get('frontend.email_noreply') => 'Noreplay ' . $_SERVER['HTTP_HOST']])
                ->setTo($user->email)
                ->setSubject('Activate account on site: ' . $_SERVER['HTTP_HOST'])
                ->setTextBody('Follow the link to activate your account - ' . $link)
                ->setHtmlBody('Go to <a href="' . $link . '">link</a> to activate your account.')
                ->send();
            return $user;
        } else {
            return null;
        }

    }


    public function attributeLabels()
    {
        return [
            'username' => 'Login',
            'firstname' => 'First name',
            'lastname' => 'Last name',
            'phone' => 'Phone',
            'email' => 'Email',
            'check' => 'I agree',
            'referal' => 'E-mail invited',
            'password' => 'Password',
            'passwordconfirm' => 'Confirm password',
        ];
    }
}
