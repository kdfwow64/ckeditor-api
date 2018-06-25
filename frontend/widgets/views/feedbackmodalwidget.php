<?php
use yii\widgets\Pjax;
use yii\widgets\ActiveForm;
?>

<div id="feedback-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal">&times;</div>
                <h4 class="modal-title"><?=Yii::t('app', 'Feedback')?></h4>
            </div>
            <?php Pjax::begin(['id' => 'mainfeedbackmodal']); ?>
            <?php $form = ActiveForm::begin(['id' => 'feedbackmodal-form', 'options' => ['class' => 'feedback_form', 'data-pjax' => true]]) ?>
            <div class="error_flash_block">
                <?php if (Yii::$app->session->getFlash('feed_success')): ?>
                    <div class="alert alert-success" role="alert">
                        <?= Yii::$app->session->getFlash('feed_success') ?>
                    </div>
                <?php endif; ?>
                <?php if (Yii::$app->session->getFlash('feed_error')): ?>
                    <div class="alert alert-danger" role="alert">
                        <?= Yii::$app->session->getFlash('feed_error') ?>
                    </div>
                <?php endif; ?>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <?= $form->field($model, 'theme')->textInput(['placeholder' => Yii::t('app', 'Topic'), 'class' => ''])->label(false) ?>
                    <?= $form->field($model, 'email')->textInput(['placeholder' => Yii::t('app', 'E-mail'), 'class' => ''])->label(false) ?>
                    <?= $form->field($model, 'name')->textInput(['placeholder' => Yii::t('app', 'Name'), 'class' => ''])->label(false) ?>
                    <?= $form->field($model, 'text')->textarea(['class' => '','cols'=>30,'rows'=>10, 'placeholder' => Yii::t('app', 'Message')])->label(false) ?>
                </div>
            </div>
            <div class="modal-footer">
                <input type="submit" value="<?=Yii::t('app', 'Send')?>" class="button">
            </div>
            <?php ActiveForm::end(); ?>
            <?php Pjax::end(); ?>
        </div>

    </div>
</div>





