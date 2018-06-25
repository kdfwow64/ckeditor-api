<?php
$this->registerJsFile('/design/js/create-resume.js', ['depends' => 'yii\web\JqueryAsset']);
$type_name = ['resume' => 'Applicants', 'vacancies' => 'Vacancies'];
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
                                            Mailing settings
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <?php if ($userfavoritemodels) { ?>
                                <?php foreach ($userfavoritemodels as $uservacancy) { ?>
                                    <div class="cr-item-wrap resume-item-block">
                                        <div class="slide-wrap crr-item-00<?= $uservacancy->id ?>">
                                            <div class="row">
                                                <div class="col-mod-md-8 col-mod-md-offset-1 col-mod-xs-10">
                                                    <div class="col-mod-xs-10">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                Mailing type:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= $type_name[$uservacancy->type] ?>
                                                            </div>
                                                            <hr>
                                                        </div>
                                                    </div>
                                                    <div class="col-mod-md-5 col-mod-xs-10">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                Industry:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= isset($jobcat[$uservacancy->cat_id]) ? $jobcat[$uservacancy->cat_id] : '-' ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-mod-md-5 col-mod-xs-10">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                Profession:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= $uservacancy->keyword ? $uservacancy->keyword : '-' ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-mod-md-5 col-mod-xs-10">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                Country:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= isset($countries_select[$uservacancy->country]) ? $countries_select[$uservacancy->country] : '-' ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-mod-md-5 col-mod-xs-10">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                City:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= isset($uservacancy->cities[$uservacancy->city]) ? $uservacancy->cities[$uservacancy->city] : '-' ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-mod-md-5 col-mod-xs-10">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                Language:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= $uservacancy->lang ? $uservacancy->lang : '-' ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-mod-md-5 col-mod-xs-10">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                Employment:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= $uservacancy->working ? $uservacancy->working : '-' ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-mod-xs-10">

                                                    <div class="crr-resume-ctrl">
                                                        <a href="<?=\yii\helpers\Url::toRoute([$uservacancy->type.'/index'
                                                            ,'countryget'=>$uservacancy->countryget?$uservacancy->countryget:null
                                                            ,'cityget'=>$uservacancy->cityget?$uservacancy->cityget:null
                                                            ,'typeget'=>$uservacancy->typeget?$uservacancy->typeget:null
                                                            ,'keyword'=>$uservacancy->keyword?$uservacancy->keyword:null
                                                            ,'working'=>$uservacancy->working?$uservacancy->working:null
                                                            ,'lang'=>$uservacancy->lang?$uservacancy->lang:null
                                                        ])?>">
                                                            View
                                                        </a>
                                                        |
                                                        <a href="#" data-methodform="delete-item">
                                                            Delete
                                                        </a>
                                                        |
                                                        <a href="#" data-methodform="open-form"
                                                           data-open="crr-edit-00<?= $uservacancy->id ?>">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="crr-item-delete-wrap shadow-elem">
                                                <div class="crr-item-delete-inner">
                                                    <h4>
                                                        You sure <strong>want</strong> to delete mailing?
                                                    </h4>
                                                    <br>
                                                    <br>
                                                    <a href="#">
                                                        <button class="button  delete-submit-record-button"
                                                                data-methodform="delete-submit"
                                                                data-id="<?= $uservacancy->id ?>"
                                                                data-type="favoritefilter">
                                                            Delete
                                                        </button>
                                                    </a>
                                                    <button class="button gray" data-methodform="delete-cancel">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row slide-wrap crr-edit-00<?= $uservacancy->id ?> shadow-elem">
                                            <?php \yii\widgets\Pjax::begin(['id' => 'pjax' . $uservacancy->id]); ?>
                                            <?php $form = \yii\widgets\ActiveForm::begin(['options' => ['data-pjax' => 'true']]) ?>
                                            <?= $form->field($uservacancy, 'model_id')->hiddenInput(['value' => $uservacancy->id])->label(false); ?>

                                            <?php if (Yii::$app->session->getFlash('error' . $uservacancy->id)): ?>
                                                <div class="alert alert-danger" role="alert">
                                                    <?= Yii::$app->session->getFlash('error' . $uservacancy->id) ?>
                                                </div>
                                            <?php endif; ?>
                                            <?php if (Yii::$app->session->getFlash('success' . $uservacancy->id)): ?>
                                                <div class="alert alert-success" role="alert">
                                                    <?= Yii::$app->session->getFlash('success' . $uservacancy->id) ?>
                                                </div>
                                            <?php endif; ?>

                                            <div
                                                class="col-mod-xs-12 col-mod-md-8 col-mod-md-offset-1 col-mod-lg-6 col-mod-lg-offset-2">
                                                <div class="form-inline tac">
                                                    <?= $form->field($uservacancy, 'type')->radioList(['vacancies' => 'Vacancies', 'resume' => 'Applicants'])->label(false); ?>
                                                </div>
                                                <div class="col-mod-xs-10 col-mod-sm-5">
                                                    <?= $form->field($uservacancy, 'cat_id')->dropDownList($jobcat, ['class' => 'placeholder uservacancyform-cat_id', 'prompt' => 'Choose from the list']) ?>
                                                </div>
                                                <div class="col-mod-xs-10 col-mod-sm-5">
                                                    <?= $form->field($uservacancy, 'keyword')->input('text', ['class' => '', 'placeholder' => 'Enter the Job title']) ?>
                                                </div>
                                                <div class="col-mod-xs-10 col-mod-sm-5">
                                                    <?= $form->field($uservacancy, 'country')->dropDownList($countries_select, ['class' => 'placeholder country_select', 'prompt' => 'Choose from the list']) ?>
                                                </div>
                                                <div class="col-mod-xs-10 col-mod-sm-5">
                                                    <?= $form->field($uservacancy, 'city')->dropDownList($uservacancy->cities, ['disabled' => $uservacancy->country ? false : 'disabled', 'class' => 'placeholder city_select', 'prompt' => 'Choose from the list']) ?>
                                                </div>
                                                <div class="col-mod-xs-10 col-mod-sm-5">
                                                    <?= $form->field($uservacancy, 'lang')->dropDownList($languages, ['class' => 'placeholder', 'prompt' => 'Choose from the list']) ?>
                                                </div>
                                                <div class="col-mod-xs-10 col-mod-sm-5">
                                                    <?= $form->field($uservacancy, 'working')->dropDownList([
                                                        'Full time employment' => 'Full time employment',
                                                        'Remote work' => 'Remote work',
                                                        'Part-time employment' => 'Part-time employment',
                                                        'One-time task' => 'One-time task',
                                                    ],
                                                        ['class' => 'placeholder', 'prompt' => 'Choose from the list']) ?>
                                                </div>
                                                <div class="col-mod-xs-10 crp-cntl-block">
                                                    <input type="submit" value="Save">
                                                    <button type="button" data-methodform="open-form"
                                                            data-open="crr-item-00<?= $uservacancy->id ?>"
                                                            clear-this="true"
                                                            class="button gray">Cancel
                                                    </button>
                                                </div>
                                            </div>

                                            <?php $form::end() ?>
                                            <?php \yii\widgets\Pjax::end(); ?>
                                        </div>
                                        <hr>
                                    </div>
                                <?php } ?>
                            <?php } ?>

                            <div class="row slide-wrap crr-add-more">
                                <div class="col-mod-xs-10">
                                    <div class="col-mod-xs-10 col-mod-sm-3">
                                        <button data-methodform="open-form" type="button" data-open="crr-create-new"
                                                class="button gray">
                                            Add
                                        </button>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-sm-5">
                                        <?php
                                        $error = false;
                                        if (Yii::$app->session->getFlash('error')) {
                                            $error = true;
                                        } ?>
                                        <?= \common\widgets\Alert::widget() ?>
                                    </div>
                                </div>
                            </div>


                            <div
                                class="row slide-wrap crr-create-new <?php if (!$error /*&& $uservacancymodels*/) { ?>shadow-elem<?php } ?>">
                                <?php $form = \yii\widgets\ActiveForm::begin() ?>
                                <div
                                    class="col-mod-xs-12 col-mod-md-8 col-mod-md-offset-1 col-mod-lg-6 col-mod-lg-offset-2">
                                    <div class="form-inline tac">
                                        <?= $form->field($userfavoritemodel, 'type')->radioList(['vacancies' => 'Vacancies', 'resume' => 'Applicants'])->label(false); ?>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-sm-5">
                                        <?= $form->field($userfavoritemodel, 'cat_id')->dropDownList($jobcat, ['class' => 'placeholder uservacancyform-cat_id', 'prompt' => 'Choose from the list']) ?>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-sm-5">
                                        <?= $form->field($userfavoritemodel, 'keyword')->input('text', ['class' => '', 'placeholder' => 'Enter the Job title']) ?>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-sm-5">
                                        <?= $form->field($userfavoritemodel, 'country')->dropDownList($countries_select, ['class' => 'placeholder country_select', 'prompt' => 'Choose from the list']) ?>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-sm-5">
                                        <?= $form->field($userfavoritemodel, 'city')->dropDownList($userfavoritemodel->cities, ['disabled' => $userfavoritemodel->country ? false : 'disabled', 'class' => 'placeholder city_select', 'prompt' => 'Choose from the list']) ?>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-sm-5">
                                        <?php
                                        ?>
                                        <?= $form->field($userfavoritemodel, 'lang')->dropDownList($languages, ['class' => 'placeholder', 'prompt' => 'Choose from the list']) ?>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-sm-5">
                                        <?= $form->field($userfavoritemodel, 'working')->dropDownList([
                                                        'Full time employment' => 'Full time employment',
                                                        'Remote work' => 'Remote work',
                                                        'Part-time employment' => 'Part-time employment',
                                                        'One-time task' => 'One-time task',
                                                    ],
                                        ['class' => 'placeholder', 'prompt' => 'Choose from the list']) ?>
                                    </div>
                                    <div class="col-mod-xs-10 crp-cntl-block">
                                        <input type="submit" value="Save">
                                        <button data-methodform="open-form" type="button" data-open="crr-add-more"
                                                clear-this="true"
                                                class="button gray">Cancel
                                        </button>
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
