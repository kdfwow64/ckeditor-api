<?php
namespace frontend\models;

use common\models\DocumentOrder;
use common\models\User;

/**
 * Signup form
 */
class DocumentorderForm extends DocumentOrder
{

    public function __construct($config = [])
    {
        if(!\Yii::$app->user->isGuest && $user =\Yii::$app->user->identity ){
            $this->firstname = $user ->firstname;
            $this->lastname = $user ->lastname;
            $this->patronymic = $user ->patronymic;
            $this->phone = $user ->phone;
            $this->email = $user ->email;
        }
        parent::__construct($config);
    }

    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function registerdocument()
    {
        if (!$this->validate()) {
            return null;
        }
        if($this->save()){
            \Yii::$app
            ->mailer
            ->compose()
            ->setFrom([Yii::$app->keyStorage->get('frontend.email_noreply') => 'Noreplay'])
            ->setTo(Yii::$app->keyStorage->get('frontend.email_noreply'))
            ->setSubject('Заказ документа на сайте: ' . \Yii::$app->name)
            ->setTextBody('Новая заявка на получение документов. Перейдите в админ панель для просмотра детальной информации.')
            ->setHtmlBody('Новая заявка на получение документов. Перейдите в админ панель для просмотра детальной информации.')
            ->send();


            return $this;
        }else{
            return null;
        }

    }

}
