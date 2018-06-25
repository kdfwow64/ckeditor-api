<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\Seo */
/* @var $form yii\widgets\ActiveForm */
if($model->isNewRecord){
    $model->status = 1;
    $model->sort_order = 0;
}
?>

<div class="pages-form">

    <?php $form = ActiveForm::begin(); ?>

    <?php echo $form->field($model, 'status')->checkbox(['checked' => true]) ?>
    <?php echo $form->field($model, 'footer')->checkbox(['checked' => true]) ?>
    <div class="row">
        <div class="col-xs-9 col-sm-6">
            <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>
        </div>
        <div class="col-xs-9 col-sm-6">
            <?= $form->field($model, 'slug')->textInput(['maxlength' => true])->label('Url: https://'.$_SERVER['HTTP_HOST']."/page/"); ?>
        </div>
    </div>

    <?= $form->field($model, 'text')->widget(\dosamigos\ckeditor\CKEditor::className(), [
        'options' => ['rows' => 2],
        'preset' => 'full',
        'clientOptions' => [
            'extraPlugins' => 'colordialog,embed,font,colorbutton',
        ]
    ]) ?>

    <div class="row">
        <div class="col-xs-9 col-sm-2">
            <?= $form->field($model, 'sort_order')->textInput(['maxlength' => true,'type'=>'number']) ?>
        </div>
    </div>
    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
