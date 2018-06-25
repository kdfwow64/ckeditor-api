<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\NetCity */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="net-city-form">

    <?php $form = ActiveForm::begin(); ?>

    <?php
        $country = \common\models\NetCountry::find()->asArray()->orderBy('name_ru')->all();
        $country = \yii\helpers\ArrayHelper::map($country, 'id', 'name_ru');
    ?>
    <?= $form->field($model, 'country_id')->dropDownList($country,['prompt'=>'Выберите старну']) ?>

    <?= $form->field($model, 'name_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'name_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'latitude')->textInput() ?>

    <?= $form->field($model, 'longitude')->textInput() ?>


    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
