<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;

//$this->title = 'Контакты';
$this->params['breadcrumbs'][] = $this->title;
?>
<section>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="mc-sect-label">
                    <h2>Контакты</h2>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="mc-block">
                    <div class="row">
                        <div class="col-xs-12 col-md-7">
                            <div class="cp-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.682200055627!2d30.529550915357998!3d50.4283924794723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0ffff5b2f9%3A0x1cb3b23f588eaca0!2z0LLRg9C70LjRhtGPINCE0LLQs9C10L3QsCDQmtC-0L3QvtCy0LDQu9GM0YbRjywgMzEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1481217420119"
                                    width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-5">
                            <div class="cp-form form-group">
                                <?=\common\widgets\Alert::widget()?>
                                <?php $form = ActiveForm::begin(['id' => 'contact-form']); ?>
                                <h3>Написать нам</h3>
                                <?= $form->field($model, 'name')->textInput(['placeholder'=>$model->attributeLabels()['name']])->label(false); ?>
                                <?= $form->field($model, 'email')->textInput(['placeholder'=>$model->attributeLabels()['email']])->label(false); ?>
                                <?= $form->field($model, 'phone')->textInput(['placeholder'=>$model->attributeLabels()['phone']])->label(false); ?>
                                <?= $form->field($model, 'body')->textInput(['placeholder'=>$model->attributeLabels()['body']])->label(false); ?>
                                <input type="submit" value="Отправить">
                                <?php ActiveForm::end(); ?>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

