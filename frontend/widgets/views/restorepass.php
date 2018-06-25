<div class="popup-wrap repass">
    <div class="popup-box">
        <h3>Забыли пароль</h3>
			<span class="close">
				<i class="fa fa-times"></i>
			</span>
        <div class="form-group">
            <?php \yii\widgets\Pjax::begin(); ?>
                    <div class="row">
                        <div class="col-lg-12">
                            <?php if (Yii::$app->session->getFlash('restorepass_success')): ?>
                                <div class="alert alert-success" role="alert">
                                    <?= Yii::$app->session->getFlash('restorepass_success') ?>
                                </div>
                            <?php endif; ?>
                            <?php if (Yii::$app->session->getFlash('restorepass_error')): ?>
                                <div class="alert alert-danger" role="alert">
                                    <?= Yii::$app->session->getFlash('restorepass_error') ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
            <?php $form = \yii\widgets\ActiveForm::begin(['id' => 'form-restorepass', 'options' => ['data-pjax' => true]]); ?>
            <?= $form->field($model, 'email')->textInput(['placeholder'=>$model->attributeLabels()['email']])->label(false);  ?>
            <input type="submit" value="Отправить">
            <?php \yii\widgets\ActiveForm::end(); ?>
            <?php \yii\widgets\Pjax::end(); ?>

        </div>
    </div>
</div>





