<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\User */
/* @var $form yii\widgets\ActiveForm */

?>

<div class="user-form">
    <?php $form = ActiveForm::begin(); ?>
    <?= $form->field($model, 'firstname')->textInput() ?>
    <?= $form->field($model, 'lastname')->textInput() ?>
    <?= $form->field($model, 'phone')->textInput() ?>
    <?php //= $form->field($model, 'phone')->widget(\yii\widgets\MaskedInput::className(),['mask'=>'+38(999)999-99-99']) ?>
    <?= $form->field($model, 'email')->textInput() ?>
    <?= $form->field($model, 'about')->textInput() ?>
    <?= $form->field($model, 'active')->checkbox()?>
    <?php
        if($model->photo)
            echo Html::img($model->photo,['style'=>'width:200px;']);
    ?>
    <br>
    <br>
    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>
    <?php ActiveForm::end(); ?>
</div>
