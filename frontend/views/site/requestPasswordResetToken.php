<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\PasswordResetRequestForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = 'Забыли пароль';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="modal-wrap">
    <div class="modal-title">
        <strong><?= Html::encode($this->title) ?></strong>
        <a href="/">Назад на главную
            <div class="icn icn-tr-arrow-right"></div>
        </a>
    </div>
    <p>
        Введите Email пользователя для восстановления пароля.
    </p>
    <?= \common\widgets\Alert::widget() ?>
    <?php $form = ActiveForm::begin(['id' => 'request-password-reset-form']); ?>
    <?= $form->field($model, 'email')->textInput(['autofocus' => true, 'placeholder' => $model->attributeLabels()['email']])->label(false); ?>

    <input type="submit" value="Восстановить">
    <?php ActiveForm::end(); ?>
</div>

