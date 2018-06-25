<?php
namespace frontend\widgets;
use common\models\Claim;
use yii\base\Widget;

class Claimmodalwidget extends Widget
{


    public function run()
    {
        $model = new Claim();
        if ($model->load(\Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                \Yii::$app->session->setFlash('claim_success', 'Сообщение успешно отправлено');
                $model = new Claim();
            } else {
                \Yii::$app->session->setFlash('claim_error', 'Произошла ошибка.');
            }
        }
        return $this->render('claimmodalwidget', [
                'model' => $model,
            ]);
    }
}

?>
