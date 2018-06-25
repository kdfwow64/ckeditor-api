<?php

use frontend\assets\LightGalleryAsset;
use frontend\models\cabinet\UseradsForm;

/* @var $this yii\web\View */
LightGalleryAsset::register($this);

$this->registerJsFile('/design/js/view-resume.js', ['depends' => 'yii\web\JqueryAsset']);

$this->params = ['claim' => [
    'type' => 'Vacancy complaint',
    'name' => $model->title,
    'user' => $model->user->firstname . ' ' . $model->user->lastname,
    'user_id' => $model->user->id,
    'resume_id' => $model->id,
]];
?>
<div class="fp-wrapper vw-vacancy">
    <div class="fp-wrapper-anim">
        <section>
            <div class="container">
                <div class="row">
                    <?php if (Yii::$app->keyStorage->get('ads.top_ad_page')) : ?>
                        <div class="col-xs-12 col-lg-10 col-lg-offset-1" style="margin-top: 20px;">
                            <?= Yii::$app->keyStorage->get('ads.top_ad_page')?>
                        </div>
                    <?php endif; ?>
                    <div class="col-xs-12 col-lg-10 col-lg-offset-1">
                        <div class="cn-block crp-block">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="cn-block-top-ctrl">
                                        <div class="cn-block-top-goback">
                                            <a href="/ads">
                                                <div class="icn icn-tr-arrow-left"></div>
                                                <span><?= Yii::t('app', 'Back') ?></span>
                                            </a>
                                        </div>
                                        <div class="cn-block-top-flr">
                                            <a href="#" class="cn-block-top-strike" data-toggle="modal"
                                               data-target="#claim-modal"><?= Yii::t('app', 'Complain') ?>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="cn-block-label">
                                        <div class="cn-block-label-pnt-wrap">
                                        <span class="cn-block-label-pnt-value">
                                            <?= $model->title ?>
                                        </span>
                                        </div>
                                        <span class="cn-block-label-info">
                                        <?= Yii::t('app', 'Author') ?>: <a href="<?= \yii\helpers\Url::toRoute(['profiles/view', 'id' => $model->user->id]) ?>">
                                            <?= $model->user->firstname ?> <?= $model->user->lastname ?>
                                        </a>
                                    </span>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="vv-top-info">
                                        <div class="cn-block-label-pnt-wrap">
                                        <span class="cn-block-label-pnt-title">
                                            <?= Yii::t('app', 'Property type') ?>
                                        </span>
                                            <span class="cn-block-label-pnt-value">
                                            <?= $jobcat[$model->cat_id] ?>
                                        </span>
                                        </div>
                                        <div class="cn-block-label-pnt-wrap">
                                        <span class="cn-block-label-pnt-title">
                                            <?= Yii::t('app', 'Purpose') ?>
                                        </span>
                                            <span class="cn-block-label-pnt-value">
                                            <?= $works_name[$model->type_id] ?>
                                        </span>
                                        </div>
                                        <div class="cn-block-label-pnt-wrap">
                                        <span class="cn-block-label-pnt-title">
                                            <?= Yii::t('app', 'Price') ?>
                                        </span>
                                            <span class="cn-block-label-pnt-value">
                                            <?= $model->price ?><small> <?= \Yii::$app->currency->getCurrencyById($model->currency)['value'] ?></small>
                                        </span>
                                        </div>
                                        <div style="float: right">
                                        <span class="cn-block-label-pnt-title">
                                            <?= Yii::t('app', 'Date of placement') ?>
                                        </span>
                                            <span class="cn-block-label-pnt-value">
                                            <?= date('d.m.Y', $model->created_at) ?>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="vv-info-point-wrap">
                                        <div class="row">
                                            <div class="col-xs-12 col-md-4">
                                                <?php if (count($model->adsAttachments) > 0) : ?>
                                                    <ul id="animatedGallery" style="overflow: hidden; height: 400px;">
                                                        <?php foreach ($model->adsAttachments as $item) : ?>
                                                            <li data-thumb="<?= $item->thumbUrl ?>" data-src="<?= $item->url ?>">
                                                                <img src="<?= $item->url ?>" style="max-width: 100%"/>
                                                            </li>
                                                        <?php endforeach; ?>
                                                    </ul>
                                                <?php else : ?>
                                                    <img class="mp-cont-point-img" src="http://www.borderless-house.com/icon/ic-house-brown.svg">
                                                <?php endif; ?>
                                            </div>
                                            <div class="col-xs-12 col-md-8">
                                                <div class="row" style="margin-bottom: 40px;">
                                                    <div class="col-mod-xs-10 col-mod-md-5 vv-info-point-line">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                <?= Yii::t('app', 'Country') ?>, <?= Yii::t('app', 'City') ?>:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= $model->countryName->name_en ?>, <?= $model->cityName->name_en ?>
                                                            </div>
                                                        </div>
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                <?= Yii::t('app', 'Language') ?>:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= (json_decode($model->lang) != false) && is_array(json_decode($model->lang)) ? implode(', ', json_decode($model->lang)) : json_decode($model->lang); ?>
                                                            </div>
                                                        </div>
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                <?= Yii::t('app', 'Provided by') ?>:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= UseradsForm::$provided[$model->working] ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-mod-xs-10 col-mod-md-5 vv-info-point-line">
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                <?= Yii::t('app', 'Contact name') ?>:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= $model->contact_name ?>
                                                            </div>
                                                        </div>
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                <?= Yii::t('app', 'Contact E-mail') ?>:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= $model->contact_email ?>
                                                            </div>
                                                        </div>
                                                        <?php if ($model->contact_phone) : ?>
                                                        <div class="vv-info-point">
                                                            <div class="vv-info-point-title">
                                                                <?= Yii::t('app', 'Contact Phone') ?>:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?= $model->contact_phone ?>
                                                            </div>
                                                        </div>
                                                        <?php endif; ?>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <?php foreach ($attributesValue as $key => $value) : ?>
                                                    <div class="col-xs-6">
                                                        <div class="vv-info-point-attr">
                                                            <div class="vv-info-point-title">
                                                                <?= Yii::t('app', $attributesKeys[$key]['label']) ?>:
                                                            </div>
                                                            <div class="vv-info-point-value">
                                                                <?php if (count($value) > 1) {
                                                                    $attr_array = []; ?>
                                                                    <?php foreach ($value as $key_attr => $value_attr) : ?>
                                                                        <?php array_push($attr_array, $attributesKeys[$key]['items'][$value_attr['attribute_value_id']]) ?>
                                                                    <?php endforeach; ?>
                                                                    <?= implode(', ', $attr_array) ?>
                                                                <?php } else { ?>
                                                                    <?= $attributesKeys[$key]['items'][$value[0]['attribute_value_id']] ?>
                                                                <?php } ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <?php endforeach; ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="vv-info-text-wrap">
                                        <div class="vv-info-text-title">
                                    <span>
                                        <?= Yii::t('app', 'Basic information') ?>
                                    </span>
                                            <div class="mp-watch-box __red">
                                                <i class="fa fa-eye"></i>
                                                <?= $model->views; ?>
                                            </div>
                                            <?php if (!Yii::$app->user->isGuest) : ?>
                                                <div class="vv-info-contact">
                                                    <button class="button" data-toggle="modal"
                                                            data-target="#contact-user">
                                                        <?= Yii::t('app', 'Respond') ?>
                                                    </button>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                        <div class="vv-info-text-inner">
                                            <p style="white-space: pre-line;">
                                                <?= $model->desc ?>
                                            </p>
                                        </div>
                                    </div>
                                    <?php if (!empty(Yii::$app->params['fjsc'])) {
                                        echo Yii::$app->params['fjsc'];
                                    } ?>
                                    <div class="fb-comments"
                                         data-href="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>"
                                         data-numposts="5">
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

<?php if(!Yii::$app->user->isGuest){?>
<div id="contact-user" class="modal contact-user fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><?= Yii::t('app', 'Suggestion to the applicant') ?></h4>
            </div>
            <?php \yii\widgets\Pjax::begin(['id' => 'message-modal-pjax'])?>
            <?php $form = \yii\widgets\ActiveForm::begin(['id' => 'message-modal', 'options' => ['data-pjax' => true]]); ?>
            <div class="modal-body">
                <div class="cm-userinfo-box">
                    <div class="row">
                        <div class="col-xs-3">
                            <div class="cm-photo-wrap">
                                <div class="cm-photo-box" style="background-image: url('<?=Yii::$app->user->identity->avatar?>');"></div>
                            </div>
                        </div>
                        <div class="col-xs-9">
                            <div class="cm-userinfo-title">
                                <h5>
                                    <?= Yii::$app->user->identity->firstname ?> <?= Yii::$app->user->identity->lastname ?>
                                </h5>
                                <span>
                                    <?= isset($works_name[$model->type_id])?$works_name[$model->type_id]:''; ?>
                                </span>
                            </div>
                            <div class="cm-userinfo-line">
                                <span>
                                   <?= Yii::$app->user->identity->country ?>, <?= Yii::$app->user->identity->city ?>
                                </span>
                                <br>
                                <span>
                                    <?= Yii::$app->user->identity->email ?>
                                </span>
                                <br>
                                <span>
                                    <?= Yii::$app->user->identity->phone ?>
                                </span>
                                <br>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="cm-infoline">
                                <span>
                                    Your application will be accompanied by your full profile on <a href="/">Workinthenetherlands.NL</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="cm-form">
                        <?php if(Yii::$app->session->getFlash('messagesuccess')){?>
                            <?=\yii\bootstrap\Alert::widget(['options' => ['class' => 'alert-success'],'closeButton'=>false,'body'=>Yii::$app->session->getFlash('messagesuccess')])?>
                        <?php }else{?>
                        <?=$form->field($modelmessage,'message' )->textarea()->label('Covering letter')?>
                        <?php }?>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button">Send</button>
                <button class="button gray" type="button" data-dismiss="modal">Cancel</button>
            </div>
            <?php \yii\widgets\ActiveForm::end(); ?>
            <?php \yii\widgets\Pjax::end()?>
        </div>

    </div>
</div>

<div class="modal fade" id="contact-success" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>Your message was sent to the applicant, wait for the answer.</h4>
            </div>
            <div class="modal-footer">
                <button class="button" type="button" class="btn btn-default" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<?php }?>