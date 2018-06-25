<?php

use common\widgets\Alert;
use yii\helpers\Html;

$this->registerJsFile('/design/js/create-resume.min.js', ['depends' => 'yii\web\JqueryAsset']);
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
                                            <?= Yii::t('app', 'My property search') ?>
                                        </h2>
										<span class="cn-block-label-info">
											<?= Yii::t('app', 'You can place up to 3 ads') ?>
										</span>
                                    </div>
                                </div>
                            </div>
                            <?php if ($uservacancymodels) { ?>
                                <?php foreach ($uservacancymodels as $uservacancy) { ?>
                                    <div class="cr-item-wrap resume-item-block">
                                        <div class="slide-wrap crr-item-00<?= $uservacancy->id ?>">
                                            <div class="row">
                                                <div class="col-xs-12" style="padding-top: 10px;">
                                                    <div class="cn-block-label-pnt-wrap">
                                                            <span class="cn-block-label-pnt-title">
                                                                <?= Yii::t('app', 'Property type') ?>
                                                            </span>
                                                        <span class="cn-block-label-pnt-value">
                                                                <?= $jobcat[$uservacancy->cat_id] ?>
                                                            </span>
                                                    </div>
                                                    <div class="cn-block-label-pnt-wrap">
                                                            <span class="cn-block-label-pnt-title">
                                                                <?= Yii::t('app', 'Purpose') ?>
                                                            </span>
                                                        <span class="cn-block-label-pnt-value">
                                                                <?= $works_name_id[$uservacancy->type_id] ?>
                                                            </span>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 col-xs-4">
                                                    <?php if (isset($uservacancy->adsAttachments[0]))
                                                        $url = $uservacancy->adsAttachments[0]->base_url . '/' . $uservacancy->adsAttachments[0]->path;
                                                    else $url = 'http://www.borderless-house.com/icon/ic-house-brown.svg';
                                                    ?>
                                                    <img class="mp-cont-point-img" src="<?= $url ?>">
                                                </div>

                                                <div class="col-md-6 col-xs-8">
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
                                                <div class="col-md-4 col-xs-12">
                                                    <div class="row crr-resume-setting">
                                                        <div class="col-mod-xs-10 col-mod-sm-5">
                                                            <div class="form-group">
                                                                <label for="">
                                                                    Ad Status
                                                                </label>
                                                                <?php echo Html::activeDropDownList($uservacancy, 'active', [
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
                                                                <?php if (time() >= $uservacancy->updated_at + 604800) { ?>
                                                                    <button type="button"
                                                                            class="button record-renew-button"
                                                                            data-id="<?= $uservacancy->id ?>"
                                                                            data-type="ads">
                                                                         Update
                                                                    </button>
                                                                <?php } else { ?>
                                                                    <button type="button"
                                                                            class="button record-renew-disabled">
                                                                         Update
                                                                    </button>
                                                                <?php } ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="crr-resume-ctrl">
                                                        <a href="javascript:void(0)" data-methodform="delete-item">
                                                            Delete
                                                        </a>
                                                        |
                                                        <?= Html::a('Edit', ['cabinet/resume-update', 'id' => $uservacancy->id]) ?>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="crr-item-delete-wrap shadow-elem">
                                                <div class="crr-item-delete-inner">
                                                    <h4>
                                                        Do you <strong> accurately </strong> want to delete the ad?
                                                    </h4>
                                                    <br>
                                                    <br>
                                                    <a href="#">
                                                        <button class="button  delete-submit-record-button"
                                                                data-methodform="delete-submit"
                                                                data-id="<?= $uservacancy->id ?>" data-type="ads">
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
                                <?php } ?>
                            <?php } ?>
                            <div class="row slide-wrap crr-add-more">
                                <div class="col-mod-xs-10">
                                    <div class="col-mod-xs-10 col-mod-sm-3">
                                        <?= Html::a('Add', ['cabinet/ads-create-search'], ['class' => 'button gray']) ?>
                                    </div>
                                    <div class="col-mod-xs-10 col-mod-sm-5">
                                        <?php
                                        $error = false;
                                        if (Yii::$app->session->getFlash('error')) {
                                            $error = true;
                                        } ?>
                                        <?= Alert::widget() ?>
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
