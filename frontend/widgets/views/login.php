<div class="popup-wrap login">
    <div class="popup-box">
        <h3>Войти</h3>
			<span class="close">
				<i class="fa fa-times"></i>
			</span>
        <div class="form-group">
            <?php \yii\widgets\Pjax::begin(); ?>
                    <div class="row">
                        <div class="col-lg-12">
                            <?php if (Yii::$app->session->getFlash('modallogin_success')): ?>
                                <div class="alert alert-success" role="alert">
                                    <?= Yii::$app->session->getFlash('modallogin_success') ?>
                                </div>
                                <?php return \Yii::$app->response->redirect(['cabinet/index']); ?>
                            <?php endif; ?>
                            <?php if (Yii::$app->session->getFlash('modallogin_error')): ?>
                                <div class="alert alert-danger" role="alert">
                                    <?= Yii::$app->session->getFlash('modallogin_error') ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
            <?php $form = \yii\widgets\ActiveForm::begin(['id' => 'login-form', 'options' => ['data-pjax' => true]]); ?>
             <?= $form->field($model, 'username')->textInput(['placeholder'=>$model->attributeLabels()['username']])->label(false) ?>
             <?= $form->field($model, 'password')->passwordInput(['placeholder'=>$model->attributeLabels()['password']])->label(false) ?>
            <input type="submit" placeholder="">
            <a href="#" onclick="openPopup('repass')">Забыли пароль?</a>
            <?php \yii\widgets\ActiveForm::end(); ?>
                                <?php \yii\widgets\Pjax::end(); ?>

        </div>
    </div>
</div>




