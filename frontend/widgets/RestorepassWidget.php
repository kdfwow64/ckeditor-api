<?php
namespace frontend\widgets;

use frontend\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\SignupForm;
use yii\base\Widget;

class RestorepassWidget extends Widget
{
    public function init()
    {
        parent::init();
    }

    public function run()
    {
        $model = new PasswordResetRequestForm();
        if ($model->load(\Yii::$app->request->post())) {
            if ($model->reset()) {
                \Yii::$app->session->setFlash('restorepass_success', 'На Ваш email отправлен временный пароль для входа в кабинет');
            } else {
                \Yii::$app->session->setFlash('restorepass_error', 'Пользователь для восстановления пароля не найден');
            }
        }

        return $this->render('restorepass', [
            'model' => $model,
        ]);
    }

}