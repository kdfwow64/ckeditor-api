<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

//$this->title = 'Вход';
$this->params['breadcrumbs'][] = $this->title;
?>
<!--<script type="text/javascript" src="http://platform.linkedin.com/in.js">-->
<!--    api_key:86lse2c2lbseq0-->
<!--    lang:ru_RU-->
<!--</script>-->

<div class="modal-wrap">
    <div class="modal-title">
        <strong><?= Html::encode($this->title) ?></strong>
        <a href="/">Home page
            <div class="icn icn-tr-arrow-right"></div>
        </a>
    </div>
    <?= \common\widgets\Alert::widget() ?>
    <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>
    <?= $form->field($model, 'email')->textInput(['autofocus' => true, 'placeholder' => $model->attributeLabels()['email']])->label(false); ?>
    <?= $form->field($model, 'password')->passwordInput(['placeholder' => $model->attributeLabels()['password']])->label(false); ?>
    <?= Html::a('Forgot password?', ['site/request-password-reset']) ?>
    <script src="//ulogin.ru/js/ulogin.js"></script>
    <ul class="login-soc">
        <li class="title">
            Sign in with:
        </li>
        <div id="uLogin_ea250723" data-uloginid="ea250723"
             data-ulogin="display=panel;theme=flat;fields=first_name,last_name,email,bdate,photo_big,city,country;providers=facebook,vkontakte,linkedin,googleplus;hidden=;redirect_uri=https%3A%2F%2F<?= $_SERVER['HTTP_HOST'] ?>%2Fulogin;mobilebuttons=0;">
        </div>
        <div class="ulogin-button-linkedin shadow-elem" title="LinkedIn"
             style="margin: 0px 10px 10px 0px; padding: 0px; outline: none; border: none; border-radius: 0px; cursor: pointer; float: left; position: relative; display: inherit; width: 32px; height: 32px; left: 0px; top: 0px; box-sizing: content-box; background: url('https://ulogin.ru/version/2.0/img/providers-32-flat.png?version=img.2.0.0') 0px -410px / 32px no-repeat;"></div>
        <style>
            .shadow-elem {
                display: none !important; 
            }
        </style>

    </ul>

    <input type="submit" value="Login">
    <?php ActiveForm::end(); ?>
</div>




