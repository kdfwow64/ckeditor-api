<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\widgets\Pjax;

/* @var $this yii\web\View */
/* @var $model common\models\CategoryAttribute */
/* @var $form yii\widgets\ActiveForm */
?>

<?php
$this->registerJs(
    '$("document").ready(function(){
        $("#new_category_attribute").on("pjax:end", function() {
            $.pjax.reload({container:"#grid-category-attributes"});
        });
    });'
);
?>

<div class="category-attribute-form">
    <?php Pjax::begin(['id' => 'new_category_attribute']) ?>
        <?php $form = ActiveForm::begin(['options' => ['data-pjax' => true]]); ?>

        <?= $form->field($model, 'attribute_id')->dropDownList($attributes, ['prompt'=>'Select attribute']) ?>

        <div class="form-group">
            <?= Html::submitButton(Yii::t('app', 'Add'), ['class' => 'btn btn-success']) ?>
        </div>

        <?php ActiveForm::end(); ?>
    <?php Pjax::end(); ?>
</div>
