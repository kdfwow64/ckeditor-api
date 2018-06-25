<div class="popup-wrap registration">
    <div class="popup-box scrollbar-custom">
        <h3>Зарегистрироваться</h3>
			<span class="close">
				<i class="fa fa-times"></i>
			</span>
        <div class="form-group">
            <?php \yii\widgets\Pjax::begin(); ?>
                    <div class="row">
                        <div class="col-lg-12">
                            <?php if (Yii::$app->session->getFlash('modalreg_success')): ?>
                                <div class="alert alert-success" role="alert">
                                    <?= Yii::$app->session->getFlash('modalreg_success') ?>
                                </div>
                                <?php return \Yii::$app->response->redirect(['cabinet/index']); ?>
                            <?php endif; ?>
                            <?php if (Yii::$app->session->getFlash('modalreg_error')): ?>
                                <div class="alert alert-danger" role="alert">
                                    <?= Yii::$app->session->getFlash('modalreg_error') ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
            <?php $form = \yii\widgets\ActiveForm::begin(['id' => 'form-signup', 'options' => ['data-pjax' => true]]); ?>
             <?= $form->field($model, 'username')->textInput(['placeholder'=>$model->attributeLabels()['username']])->label(false) ?>
             <?= $form->field($model, 'firstname')->textInput(['placeholder'=>$model->attributeLabels()['firstname']])->label(false) ?>
             <?= $form->field($model, 'lastname')->textInput(['placeholder'=>$model->attributeLabels()['lastname']])->label(false) ?>
            <?= $form->field($model, 'email')->textInput(['placeholder'=>$model->attributeLabels()['email']])->label(false)  ?>
            <?= $form->field($model, 'phone')->label(false)->widget(\yii\widgets\MaskedInput::className(), [
                                        'mask' => '+7(000)000-00-00',
                                        'options' =>[
                                            'placeholder'=>$model->attributeLabels()['phone'],
                                        ]
                                    ]) ?>
            <?= $form->field($model, 'password')->passwordInput(['placeholder'=>$model->attributeLabels()['password']])->label(false) ?>
            <?= $form->field($model, 'referal')->textInput(['placeholder'=>$model->attributeLabels()['referal']])->label(false)  ?>
            <input type="submit" value="Зарегистрироваться">
            <?php \yii\widgets\ActiveForm::end(); ?>
            <?php \yii\widgets\Pjax::end(); ?>

        </div>
    </div>
</div>





