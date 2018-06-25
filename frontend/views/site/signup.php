<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\SignupForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = 'Registration';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="modal-wrap">
    <div class="modal-title">
        <strong><?= Html::encode($this->title) ?></strong>
        <a href="/">Home page
            <div class="icn icn-tr-arrow-right"></div>
        </a>
    </div>
    <p>
        <?= Yii::$app->keyStorage->get('frontend.registration_form_text')?>
    </p>
    <?= \common\widgets\Alert::widget() ?>
    <?php $form = ActiveForm::begin(['id' => 'form-signup']); ?>
    <?= $form->field($model, 'firstname')->textInput(['autofocus' => true, 'placeholder' => $model->attributeLabels()['firstname']])->label(false); ?>
    <?= $form->field($model, 'lastname')->textInput(['placeholder' => $model->attributeLabels()['lastname']])->label(false); ?>
    <?= $form->field($model, 'email')->textInput(['placeholder' => $model->attributeLabels()['email']])->label(false); ?>
    <?= $form->field($model, 'password')->passwordInput(['placeholder' => $model->attributeLabels()['password']])->label(false); ?>
    <br>
    <?= $form->field($model, 'check', ['template' => "{input}\n {label} <a href='/page/polzovatelskoe-soglasenie' target='_blank' > with terms of service </a> \n {error} \n"])->checkbox([], false) ?>
        <div class="col-xs-12">
            <script src="//ulogin.ru/js/ulogin.js"></script>
            <div id="uLogin_ea250723" data-uloginid="ea250723" data-ulogin="display=panel;theme=flat;fields=first_name,last_name,email,bdate,photo_big,city,country;providers=facebook,vkontakte,linkedin,googleplus;hidden=;redirect_uri=https%3A%2F%2F<?= $_SERVER['HTTP_HOST'] ?>%2Fulogin;mobilebuttons=0;"></div>
        </div>
    <input type="submit" value="Sign up">
    <?php ActiveForm::end(); ?>
</div>


