<?php
namespace frontend\widgets;

use frontend\models\SignupForm;
use yii\base\Widget;

class RegisterWidget extends Widget
{
    public function init()
    {
        parent::init();
    }

    public function run()
    {
        $model = new SignupForm();
        if ($model->load(\Yii::$app->request->post())) {
            if ($user = $model->signup()) {
                $model = new SignupForm();
                if (\Yii::$app->getUser()->login($user)) {
//                    $model = new SignupForm();
                    \Yii::$app->session->setFlash('modalreg_success','Регистрация выполнена');

                }
            }
        }

        return $this->render('register', [
            'model' => $model,
        ]);
    }

}