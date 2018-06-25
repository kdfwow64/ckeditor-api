<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\FooterLinks */
/* @var $form yii\widgets\ActiveForm */
if($model->isNewRecord){
     $model->sort_order = 0;
}
?>

<div class="footer-links-form">

    <?php $form = ActiveForm::begin(); ?>

    <?php echo $form->field($model, 'status')->checkbox(['checked' => true]) ?>
    <div class="row">
        <div class="col-xs-9 col-sm-6">
            <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>
        </div>
        <div class="col-xs-9 col-sm-6">
            <?= $form->field($model, 'link')->textInput(['maxlength' => true,'placeholder'=>'https://']) ?>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-9 col-sm-6">
            <?= $form->field($model, 'img')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-3">
            <?php
            if ($model->img)
                echo Html::img($model->img, ['style' => 'width:50px;']);
            echo '<br>';
            ?>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-9 col-sm-2">
            <?= $form->field($model, 'sort_order')->textInput(['maxlength' => true,'type'=>'number']) ?>
        </div>
        <div class="col-xs-9 col-sm-3"></div>
    </div>
    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
