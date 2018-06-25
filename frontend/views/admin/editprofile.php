<?php

/* @var $this yii\web\View */

$this->title = 'Profile settings ' . $user->firstname . ' ' . $user->lastname;
$this->registerJsFile('/design/js/create-profile-admin.js', ['depends' => 'yii\web\JqueryAsset']);

?>
<script>
    var countries =<?=$countries?>;
</script>

<div class="fp-wrapper cr-profile" id="adminuserprofile" data-userid="<?= $user->id ?>">
    <div class="fp-wrapper-anim">
        <section
            class="usp-top" <?= $user->photoprofile ? 'style="background-image:url(\'' . $user->photoprofile . '\')"' : ''; ?>>
            <?php $form = \yii\widgets\ActiveForm::begin([
                'enableClientValidation' => false,
                'enableAjaxValidation' => false,
                'options' => ['enctype' => 'multipart/form-data']
            ]) ?>
            <div class="usp-top-ctrl">
                <div class="icn icn-upload-white choose"></div>
                |
                <div class="icn icn-close-white cancel"></div>
                <?= \yii\helpers\Html::activeInput('file', $userprofile1, 'photoprofilefile', ['hidden' => 'hidden', 'class' => 'shadow-elem']) ?>
            </div>
            <div class="usp-top-cont">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-2">
                            <div
                                class="ava-block crp-photo-upload <?= $user->photo ? 'choosed' : ''; ?>" <?= $user->photo ? 'style="background-image:url(\'' . $user->photo . '\')"' : ''; ?> >
                                <div
                                    class="crp-photo-icon <?php if ($user->photo) { ?>hidden dragged<?php } ?>"></div>
                                <div class="crp-photo-loader hidden"></div>
                                <?= \yii\helpers\Html::activeInput('file', $userprofile1, 'photofile', ['hidden' => 'hidden']) ?>
                                <div class="crp-phu-ctrl">
                                    <div class="icn icn-upload-white choose"></div>
                                    |
                                    <div class="icn icn-close-white cancel"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-10">
                            <div class="usp-name">
                                <?= \yii\helpers\Html::activeInput('text', $userprofile1, 'fio', ['required' => 'required', 'placeholder' => $userprofile1->getAttributeLabel('fio')]) ?>
                                <button type="submit" class=" nostyle-btn icn icn-save-green profile-submit"></button>
                            </div>
                            <ul class="usp-infowrite-wrap">
                                <li class="usp-infowrite">
                                    <div class="form-group">
                                        <label for="">Date of birth</label>
                                        <?= \yii\helpers\Html::activeInput('text', $userprofile1, 'birthday_formatted', ['class' => 'date-custom', 'placeholder' => '18.05.1985']) ?>
                                    </div>
                                </li>
                                <li class="usp-infowrite">
                                    <div class="form-group" id="profilecountryblock">
                                        <label for="">Country</label>
                                        <?= \yii\helpers\Html::activeInput('text', $userprofile1, 'country', ['id' => 'profilecountry', 'placeholder' => $userprofile1->getAttributeLabel('country')]) ?>

                                    </div>
                                </li>
                                <li class="usp-infowrite">
                                    <div class="form-group" id="profilecityblock">
                                        <label for="">City</label>
                                        <?= \yii\helpers\Html::activeInput('text', $userprofile1, 'city', ['id' => 'profilecity', 'placeholder' => $userprofile1->getAttributeLabel('city')]) ?>
                                    </div>
                                </li>
                                <li class="usp-infowrite">
                                    <div class="form-group">
                                        <label for="">E-mail</label>
                                        <?= \yii\helpers\Html::activeInput('email', $userprofile1, 'email', ['required' => 'required', 'placeholder' => $userprofile1->getAttributeLabel('email')]) ?>
                                    </div>
                                </li>
                                <li class="usp-infowrite">
                                    <div class="form-group">
                                        <label for="">Phone number</label>
                                        <?= \yii\helpers\Html::activeInput('phone', $userprofile1, 'phone', ['placeholder' => '+7(000)000-00-00']) ?>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <?php $form::end() ?>
        </section>

        <section>

            <div class="container">

                <div class="row">
                    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                        <?php if (Yii::$app->session->getFlash('editprofile1error')): ?>
                            <div class="alert alert-danger" role="alert">
                                <?= Yii::$app->session->getFlash('editprofile1error') ?>
                            </div>
                        <?php endif; ?>
                        <?php if (Yii::$app->session->getFlash('userworkerror')): ?>
                            <div class="alert alert-danger" role="alert">
                                <?= Yii::$app->session->getFlash('userworkerror') ?>
                            </div>
                        <?php endif; ?>
                        <?= \common\widgets\Alert::widget() ?>

                        <div class="cn-block crp-block">
                            <div class="cn-block-label">
                                <h2>
                                    Professional information
                                </h2>
                            </div>
                            <div class="usp-block-wrap">
                                <div class="usp-block-display">
                                    <div class="usp-block-edit">
                                        <div class="icn icn-edit-gray"></div>
                                    </div>
                                    <div class="usp-block-infoline">
                                        <div class="usp-block-infotag">
                                            Notary and Legal Advisor
                                        </div>
                                        <div class="usp-block-infoval">
                                            <?php if ($userprofile2->work_position == "yes") : ?>
                                                <i class="fa fa-check" aria-hidden="true" style="color: green;"></i>
                                            <?php else : ?>
                                                <i class="fa fa-times" aria-hidden="true" style="color: red;"></i>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                    <div class="usp-block-infoline">
                                        <div class="usp-block-infotag">
                                            Real Estate Appraisal
                                        </div>
                                        <div class="usp-block-infoval">
                                            <?php if ($userprofile2->ready_tomove == "yes") : ?>
                                                <i class="fa fa-check" aria-hidden="true" style="color: green;"></i>
                                            <?php else : ?>
                                                <i class="fa fa-times" aria-hidden="true" style="color: red;"></i>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                    <div class="usp-block-infoline">
                                        <div class="usp-block-infotag">
                                            Mortgage Broker
                                        </div>
                                        <div class="usp-block-infoval">
                                            <?php if ($userprofile2->permission_es == "yes") : ?>
                                                <i class="fa fa-check" aria-hidden="true" style="color: green;"></i>
                                            <?php else : ?>
                                                <i class="fa fa-times" aria-hidden="true" style="color: red;"></i>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                    <div class="usp-block-infoline">
                                        <div class="usp-block-infotag">
                                            Licensed Real Estate Agent
                                        </div>
                                        <div class="usp-block-infoval">
                                            <?php if ($userprofile2->drive_license == "yes") : ?>
                                                <i class="fa fa-check" aria-hidden="true" style="color: green;"></i>
                                            <?php else : ?>
                                                <i class="fa fa-times" aria-hidden="true" style="color: red;"></i>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                    <div class="usp-block-infoline">
                                        <p>
                                            <?= $userprofile2->about ?>
                                        </p>
                                    </div>
                                </div>
                                <div class="usp-block-editform shadow-elem">
                                    <?php $form = \yii\widgets\ActiveForm::begin() ?>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6">
                                            <?= $form->field($userprofile2, 'permission_es')
                                                ->dropDownList([
                                                    'yes' => 'Yes',
                                                    'no' => 'No'
                                                ], ['class' => 'placeholder', 'prompt' => 'Choose from the list']) ?>
                                            <?= $form->field($userprofile2, 'ready_tomove')
                                                ->dropDownList([
                                                    'yes' => 'Yes',
                                                    'no' => 'No'
                                                ], ['class' => 'placeholder', 'prompt' => 'Choose from the list']) ?>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <?= $form->field($userprofile2, 'work_position')
                                                ->dropDownList([
                                                    'yes' => 'Yes',
                                                    'no' => 'No'
                                                ], ['class' => 'placeholder', 'prompt' => 'Choose from the list']) ?>
                                            <?= $form->field($userprofile2, 'drive_license')
                                                ->dropDownList([
                                                    'yes' => 'Yes',
                                                    'no' => 'No'
                                                ], ['class' => 'placeholder', 'prompt' => 'Choose from the list']) ?>
                                        </div>
                                        <div class="col-xs-12">
                                            <?= $form->field($userprofile2, 'about')->textarea(['cols' => 30, 'rows' => 10, 'class' => '', 'placeholder' => 'Здесь вы можете рассказать о своих профессиональных увлечениях и хобби, интересах и профессиональных целях.']) ?>
                                        </div>
                                        <div class="col-xs-12 crp-cntl-block">
                                            <div class="form-group">
                                                <input type="submit" value="Save">
                                                <button class="usp-block-close-edit button gray">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                    <?php $form::end() ?>
                                </div>
                            </div>
                        </div>

                        <div class="cn-block crp-block">
                            <div class="cn-block-label">
                                <h2>
                                    Language proficiency
                                </h2>
                            </div>
                            <?php $form = \yii\widgets\ActiveForm::begin(['id' => 'langformblock']) ?>
                            <div class="row">
                                <div class="crp-lang-wrap">
                                    <?php if (isset($userlangmodel->langarray)) {
                                        foreach ($userlangmodel->langarray as $key => $l) {
                                            ?>
                                            <div class="crp-lang-point" data-key="<?= str_replace('id', '', $key) ?>">
                                                <div class="col-xs-12 col-sm-6">
                                                    <?php $languages = \common\models\Languages::find()->orderBy('name')->all();
                                                        $languages = \yii\helpers\ArrayHelper::map($languages, 'name', 'name');
                                                    ?>

                                                    <?= $form->field($userlangmodel, 'lang[id' . $key . ']')->dropDownList($languages, ['prompt' => 'Choose language', 'class' => 'placeholder', 'value' => $l['lang']]); ?>
                                                </div>
                                                <div class="col-xs-12 col-sm-6">
                                                    <?= $form->field($userlangmodel, 'level[id' . $key . ']')->dropDownList([
                                                        'First level' => 'Elementary',
                                                        'Average level' => 'Limited',
                                                        'Above average' => 'Professional',
                                                        'High level' => 'Advanced',
                                                        'Fluency' => 'Fluent',
                                                        'Native language' => 'Native/ bilingual',
                                                    ], ['prompt' => 'Select a level', 'class' => 'placeholder noselect', 'value' => $l['level']]); ?>
                                                </div>
                                                <div class="crp-delete-lang">
                                                    <div class="icn icn-close-gray">

                                                    </div>
                                                </div>
                                            </div>
                                        <?php }
                                    } ?>


                                    <?php
                                    /*
                                    $startkey = isset($key) ? intval(str_replace('id', '', $key) + 1) : 0;
                                    ?>
                                    <div class="crp-lang-point" data-key="<?= $startkey ?>">
                                        <div class="col-xs-12 col-sm-6">
                                            <?= $form->field($userlangmodel, 'lang[id' . $startkey . ']')->dropDownList([
                                                'Английский' => 'Английский',
                                                'Китайский' => 'Китайский',
                                                'Французский' => 'Французский',
                                                'Испанский' => 'Испанский',
                                                'Арабский' => 'Арабский',
                                                'Немецкий' => 'Немецкий',
                                                'Русский' => 'Русский',
                                            ], ['prompt' => 'Выберите уровень', 'class' => 'placeholder']); ?>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <?= $form->field($userlangmodel, 'level[id' . $startkey . ']')->dropDownList([
                                                'Начальный уровень' => 'Начальный уровень',
                                                'Средний уровень' => 'Средний уровень',
                                                'Выше среднего' => 'Выше среднего',
                                                'Высокий уровень' => 'Высокий уровень',
                                                'Свободное владение' => 'Свободное владение',
                                                'Родной язык' => 'Родной язык',
                                            ], ['prompt' => 'Выберите уровень', 'class' => 'placeholder']); ?>

                                        </div>
                                        <div class="crp-delete-lang">
                                            <div class="icn icn-close-gray">

                                            </div>
                                        </div>
                                    </div>
                                    */ ?>


                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 crp-cntl-block">
                                    <div class="form-group">
                                        <input type="submit" value="Save">
                                        <button class="crp-add-lang">Add more</button>
                                    </div>
                                </div>
                            </div>
                            <?php $form::end() ?>
                            <div class="hidden-lag shadow-elem">
                                <div class="crp-lang-point" data-key="0011">
                                    <div class="col-xs-12 col-sm-6">
                                        <?php
                                        $languages = \common\models\Languages::find()->orderBy('name')->all();
                                        $languages = \yii\helpers\ArrayHelper::map($languages, 'name', 'name');

                                        ?>
                                        <?= $form->field($userlangmodel, 'lang[000]')->dropDownList($languages, ['prompt' => 'Select a level', 'class' => 'placeholder']); ?>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <?= $form->field($userlangmodel, 'level[000]')->dropDownList([
                                            'First level' => 'Elementary',
                                            'Average level' => 'Limited',
                                            'Above average' => 'Professional',
                                            'High level' => 'Advanced',
                                            'Fluency' => 'Fluent',
                                            'Native language' => 'Native/ bilingual',
                                        ], ['prompt' => 'Select a level', 'class' => 'placeholder noselect', 'value' => '']); ?>
                                    </div>
                                    <div class="crp-delete-lang">
                                        <div class="icn icn-close-gray">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>

