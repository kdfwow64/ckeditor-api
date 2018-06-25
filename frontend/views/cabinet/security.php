<?php
//$this->title = 'Безопасность';
?>

<div class="fp-wrapper">
    <div class="fp-wrapper-anim">

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-lg-10 col-lg-offset-1">
                        <div class="cn-block crp-block">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="cn-block-label">
                                        <h2>
                                            Security settings
                                        </h2>
                                    </div>
                                </div>
                            </div>


                            <div class="row slide-wrap crr-create-new">
                                <?php $form = \yii\widgets\ActiveForm::begin() ?>
                                <div class="col-mod-xs-10">
                                    <div class="col-mod-xs-10 col-mod-md-6 col-mod-md-offset-2">
                                        <?= \common\widgets\Alert::widget() ?>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-md-6 col-mod-md-offset-2">
                                        <?= $form->field($model, 'oldpassword')->input('text', ['class' => '', 'placeholder' => 'Enter the current password']) ?>
                                    </div>

                                    <div class="col-mod-xs-10 col-mod-md-6 col-mod-md-offset-2">
                                        <?= $form->field($model, 'password')->input('text', ['class' => '', 'placeholder' => 'Enter the new password']) ?>
                                    </div>

                                    <div class="col-mod-xs-10 col-mod-md-6 col-mod-md-offset-2">
                                        <?= $form->field($model, 'passwordcheck')->input('text', ['class' => '', 'placeholder' => 'Enter the password again']) ?>
                                    </div>

                                    <div class="col-mod-xs-10 crp-cntl-block">
                                        <input type="submit" value="Save">
                                    </div>
                                </div>
                                <?php $form::end() ?>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
