<?php
//$this->title = 'Поиск работы';
$this->registerJsFile('/design/js/create-resume-admin.js', ['depends' => 'yii\web\JqueryAsset']);
?>

<div class="fp-wrapper" id="adminuserprofile" data-userid="<?=$user->id?>">
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
                                            <?= Yii::t('app', 'My Landlords') ?>
                                        </h2>
                                        <span class="cn-block-label-info">
											<?= Yii::t('app', 'You can place up to 3 ads') ?>
										</span>
                                    </div>
                                </div>
                            </div>
                            <?php if ($uservacancymodels) : ?>
                                <?php foreach ($uservacancymodels as $uservacancy) : ?>
                                    <div class="cr-item-wrap resume-item-block">
                                        <div class="slide-wrap crr-item-00<?= $uservacancy->id ?>">
                                            <div class="row">
                                                <div class="col-mod-md-6 col-mod-xs-10">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-6 col-md-8">
                                                            <div class="crr-vacname">
                                                                <?= $uservacancy->title ?>
                                                            </div>
                                                            <div class="crr-price">
                                                                <?= $uservacancy->price ? $uservacancy->price . '<small> ' . \Yii::$app->currency->getCurrencyById($uservacancy->currency)['value'] . '</small>' : '' ?>
                                                            </div>
                                                            <div class="crr-userinfo">
                                                                <div class="crr-userinfo-point">
                                                                    <div class="icn icn-location-red"></div>
                                                                    <?= $uservacancy->countryName->name_en ?>, <?= $uservacancy->cityName->name_en ?>
                                                                </div>
                                                                <div class="crr-userinfo-point">
                                                                    <div class="icn icn-date-red"></div>
                                                                    Accommodation date:
                                                                    <span>
                                                                        <?= date('d.m.Y', $uservacancy->updated_at) ?>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-mod-md-4 col-mod-xs-10">
                                                    <div class="row crr-resume-setting">
                                                        <div class="col-mod-xs-10 col-mod-sm-5">
                                                            <div class="form-group">
                                                                <label for="">
                                                                    Job Status
                                                                </label>
                                                                <?php echo \yii\helpers\Html::activeDropDownList($uservacancy, 'active', [
                                                                    '1' => 'Active',
                                                                    '0' => 'Disabled',
                                                                ], ['class' => 'placeholder_ change-active-button', 'data-id' => $uservacancy->id, 'data-type' => 'resume']) ?>
                                                            </div>
                                                        </div>
                                                        <div class="col-mod-xs-10 col-mod-sm-5">
                                                            <div class="form-group">
                                                                <label for="">
                                                                    Update date
                                                                </label>
                                                                <?php if (time() >= $uservacancy->updated_at + 604800) : ?>
                                                                    <button type="button"
                                                                            class="button record-renew-button"
                                                                            data-id="<?= $uservacancy->id ?>"
                                                                            data-type="resume">
                                                                        Update
                                                                    </button>
                                                                <?php else : ?>
                                                                    <button type="button"
                                                                            class="button record-renew-disabled">
                                                                        Update
                                                                    </button>
                                                                <?php endif; ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="crr-resume-ctrl">
                                                        <a href="#" data-methodform="delete-item">
                                                            Delete
                                                        </a>
                                                        |
                                                        <?= \yii\helpers\Html::a('Edit', ['cabinet/resume-update', 'id' => $uservacancy->id]) ?>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="crr-item-delete-wrap shadow-elem">
                                                <div class="crr-item-delete-inner">
                                                    <h4>
                                                        Do you <strong> accurately </strong> want to delete the resume??
                                                    </h4>
                                                    <br>
                                                    <br>
                                                    <a href="#">
                                                        <button class="button  delete-submit-record-button"
                                                                data-methodform="delete-submit"
                                                                data-id="<?= $uservacancy->id ?>" data-type="resume">
                                                            Delete
                                                        </button>
                                                    </a>
                                                    <button class="button gray" data-methodform="delete-cancel">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                            <div class="row slide-wrap crr-add-more">
                                <div class="col-mod-xs-10">
                                    <div class="col-mod-xs-10 col-mod-sm-3">
                                        <?= \yii\helpers\Html::a('Add', ['cabinet/ads-create-search'], ['class' => 'button gray']) ?>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
