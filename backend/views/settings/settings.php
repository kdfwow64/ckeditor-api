<?php
/**
 * @author Eugene Terentev <eugene@terentev.net>
 */
$this->title = Yii::t('app', 'Настройки сайта');
?>

<div class="box-body">
    <?php echo \common\components\keyStorage\FormWidget::widget([
        'model' => $model,
        'formClass' => '\yii\bootstrap\ActiveForm',
        'submitText' => Yii::t('app', 'Сохранить'),
        'submitOptions' => ['class' => 'btn btn-primary']
    ]); ?>
</div>


