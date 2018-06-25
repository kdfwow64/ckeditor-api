<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

$this->title = 'Редактирование страницы - Пользовательское соглашение';
?>
<div class="partners-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <div class="partners-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'termsofservicetitle') ?>
    <?= $form->field($model, 'termsofservice')->widget(\dosamigos\ckeditor\CKEditor::className(), [
        'options' => ['rows' => 2],
        'preset' => 'full',
        'clientOptions' => [
            'extraPlugins' => 'colordialog,embed,font,colorbutton',
        ]
    ]) ?>


    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>

</div>
