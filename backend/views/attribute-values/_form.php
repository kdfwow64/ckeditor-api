<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\AttributeValues */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="attribute-values-form">

    <?php $form = ActiveForm::begin(); ?>

    <?php $readonly = false;
    if ($attribute_id) {
        $model->attribute_id = $attribute_id;
        $readonly = true;
    }
    ?>
    <?= $form->field($model, 'attribute_id')->textInput(['readonly' => $readonly]) ?>

    <?= $form->field($model, 'value')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
