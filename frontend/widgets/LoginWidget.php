<?php
namespace frontend\widgets;

use frontend\models\LoginForm;
use yii\base\Widget;

class LoginWidget extends Widget
{
    public function init()
    {
        parent::init();
    }

    public function run()
    {
        $model = new LoginForm();
        if ($model->load(\Yii::$app->request->post())) {
            if ($model->login()) {
                \Yii::$app->session->setFlash('modallogin_success', 'Вход выполнен');
            } else {
                \Yii::$app->session->setFlash('modallogin_error', 'Неверный логин или пароль');
            }
        }

        return $this->render('login', [
            'model' => $model,
        ]);
    }

}