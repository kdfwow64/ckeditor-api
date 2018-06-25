<?php
namespace frontend\widgets;

use common\models\Coupons;
use common\models\Feedback;
use yii\base\Widget;

class Feedbackmodalwidget extends Widget
{


    public function run()
    {
        $model = new Feedback();
        if ($model->load(\Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                \Yii::$app->session->setFlash('feed_success', Yii::t('app', 'Your message was successfully sent'));
                $model = new Feedback();
            } else {
                \Yii::$app->session->setFlash('feed_error', Yii::t('app', 'Something wrong'));
            }
        }
        return $this->render('feedbackmodalwidget', [
            'model' => $model,
        ]);
    }
}

?>
