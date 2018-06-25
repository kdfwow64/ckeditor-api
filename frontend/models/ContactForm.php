<?php

namespace frontend\models;

use Yii;
use yii\base\Model;

/**
 * ContactForm is the model behind the contact form.
 */
class ContactForm extends Model
{
    public $name;
    public $email;
    public $phone;
    public $body;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['name', 'email', 'phone', 'body'], 'required'],
            // email has to be a valid email address
            ['email', 'email'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'name' => Yii::t('app', 'Name'),
            'email' => Yii::t('app', 'Email'),
            'phone' => Yii::t('app', 'Phone number'),
            'body' => Yii::t('app', 'Comments'),
        ];
    }

    /**
     * Sends an email to the specified email address using the information collected by this model.
     *
     * @param string $email the target email address
     * @return boolean whether the email was sent
     */
    public function sendEmail($email)
    {
        $text = Yii::t('app', 'Name').": $this->name <br>";
        $text .= Yii::t('app', 'Email').": $this->email <br>";
        $text .= Yii::t('app', 'Phone number').": $this->phone <br>";
        $text .= Yii::t('app', 'Comments').": $this->body <br>";
        
        return Yii::$app->mailer->compose()
            ->setTo($email)
            ->setFrom(['noreplay@'.str_replace('www.','' , $_SERVER['HTTP_HOST']) => 'Noreplay'])
            ->setSubject(Yii::t('app', 'Feedback from').' '.$this->name)
            ->setHtmlBody($text)
            ->send();
    }
}
