<?php

/* @var $this yii\web\View */

use common\models\Ads;
use yii\helpers\Html;
use yii\widgets\Pjax;
use common\components\keyStorage\FormSearchWidget;
use yii\helpers\Url;

?>
<?php $form = \yii\widgets\ActiveForm::begin(['method' => 'get', 'action' => '/ads', 'options' => []]) ?>
<div class="fp-wrapper">
    <div class="fp-wrapper-anim">
        <section class="vl-top" style="background-image: url('<?= Yii::$app->params['vacancyfoto'] ?>');">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="vl-top-custtext-details">
                            <h2>
                                <?= Yii::$app->params['vacancytext'] ?>
                            </h2>
                        </div>
                        <div class="vl-top-filter-wrap">
                            <?php if ($countries) : ?>
                                <div class="vl-top-filter-point">
                                        <h3><?= Yii::t('app', 'Country') ?></h3>
                                    <div class="ui-widget" id="searchcountryblock">
                                        <input type="hidden" name="country" value="<?= Yii::$app->request->get('country') ?>">
                                        <input type="text" class="search" placeholder="<?= Yii::t('app', 'Enter the country') ?>"
                                               value="<?= isset($countries[Yii::$app->request->get('country')]) ? $countries[Yii::$app->request->get('country')] : ''; ?>">
                                    </div>
                                    <script>
                                        var countries = <?= json_encode($countries) ?>;
                                        var countries2 = <?= json_encode($countries2) ?>;
                                    </script>
                                </div>
                            <?php endif; ?>

                            <div class="vl-top-filter-point">
                                <h3><?= Yii::t('app', 'City') ?></h3>
                                <div class="ui-widget" id="searchcityblock">
                                    <input type="hidden" name="city" value="<?= Yii::$app->request->get('city') ?>">
                                    <input type="text" class="search" placeholder="<?= Yii::t('app', 'Enter the City') ?>"
                                           value="<?= isset($cities[Yii::$app->request->get('city')]) ? $cities[Yii::$app->request->get('city')] : ''; ?>">
                                </div>
                            </div>

                            <div class="vl-top-filter-point">
                                <h3>+- km</h3>
                                <div class="dropdown" data-name="radius_name" data-nosubmit="true">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        <?php if (Yii::$app->request->get('radius')) {
                                            echo Yii::$app->request->get('radius');
                                        } else {
                                            echo Yii::t('app', 'Radius');
                                        } ?>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a data-value=""><?= Yii::t('app', 'Without radius') ?></a></li>
                                        <?php foreach (Ads::$radius as $radius) : ?>
                                            <li><a data-value="<?= $radius ?>"><?= $radius ?></a></li>
                                        <?php endforeach; ?>
                                    </ul>
                                    <input class="shadow-elem" name="radius_name" value="<?= Yii::$app->request->get('radius') ?>">
                                </div>
                            </div>
                            <!--                            <button type="submit">-->
                            <a class="vl-top-filter-point button" data-method="get">
                                <div class="icn icn-search-white"></div>
                                <span><?= Yii::t('app', 'search') ?><span>
                            </a>
                            <!--                            </button>-->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="vl-page-content">
            <div class="container">
                <div class="row">
                    <?php if (Yii::$app->keyStorage->get('ads.top_landlords_search_page')) : ?>
                        <div class="col-xs-12" style="margin-bottom: 20px;">
                            <?= Yii::$app->keyStorage->get('ads.top_landlords_search_page')?>
                        </div>
                    <?php endif; ?>

                    <div class="col-xs-12 col-md-4">
                        <div class="cn-block">
                            <div class="tp-left-filter-wrap">
                                <div class="tp-left-filter-point">
                                    <div class="form-group">
                                        <div class="filter-title">
                                            <?= Yii::t('app', 'Purpose') ?>
                                        </div>
                                        <?= Html::dropDownList('purpose', Yii::$app->request->get('purpose'), $purpose, [
                                            'class' => 'placeholder search-form',
                                            'prompt' => 'All'
                                        ]);
                                        ?>
                                    </div>
                                </div>
                                <hr>

                                <?php if ($type) : ?>
                                    <div class="tp-left-filter-point">
                                        <div class="form-group">
                                            <div class="filter-title">
                                                <?= Yii::t('app', 'Property type') ?>
                                            </div>

                                            <?= Html::dropDownList('type', Yii::$app->request->get('type'), $type, [
                                                'class' => 'placeholder search-form',
                                                'prompt' => 'All'
                                            ]);
                                            ?>
                                        </div>
                                    </div>
                                <?php endif; ?>
                                <hr>

                                <?php Pjax::begin(['id' => 'pjax-find-category', 'enablePushState' => false]) ?>
                                    <?php
                                    if (!isset($attributesValue)) $attributesValue = [];

                                    if (count($attributesKeys) > 0) : ?>
                                        <?php echo FormSearchWidget::widget([
                                            'form' => $form,
                                            'formClass' => '\yii\bootstrap\ActiveForm',
                                            'attributesKeys' => $attributesKeys,
                                            'attributesValue' =>$attributesValue
                                        ]); ?>
                                    <?php endif; ?>
                                <?php Pjax::end(); ?>

                                <div class="tp-left-filter-point">
                                    <div class="filter-title">
                                        <?= Yii::t('app', 'Price range (min / max)') ?>
                                    </div>
                                    <div class="form-group inline">
                                        <?= Html::input('number', 'price_from', Yii::$app->request->get('price_from')) ?>
                                        <label for="">
                                            -
                                        </label>
                                        <?= Html::input('number', 'price_to', Yii::$app->request->get('price_to')) ?>
                                        <?= Yii::t('app', '€') ?>

                                        <a class="btn btn-default btn-xs" data-method="get" style="color: grey">
                                            OK
                                        </a>
                                    </div>
                                </div>
                                <hr>
                                <?php if (!Yii::$app->user->isGuest) : ?>
                                    <div class="tp-left-filter-point">
                                        <h3>
                                            <?= Yii::t('app', 'Favorites') ?>
                                        </h3>
                                        <br>
                                        <div class="favorite_block">
                                            <?php if ($favorite_status) { ?>
                                                <button type="button" name="add_to_favorite" value="vacancies"
                                                        class="add_to_favorite usp-block-close-edit button "><?= Yii::t('app', 'Remove') ?>
                                                </button>
                                            <?php } else { ?>
                                                <button type="button" name="add_to_favorite" value="vacancies"
                                                        class="add_to_favorite usp-block-close-edit button gray"><?= Yii::t('app', 'Add') ?>
                                                </button>
                                            <?php } ?>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-md-8">
                        <div class="cn-block">
                            <div class="mp-cont-wrap">
                                <div class="cn-block-label">
                                    <h2>
                                        <?= Yii::t('app', 'Landlords') ?>
                                    </h2>
                                    <div class="mp-watch-box __red">
                                        <?= $count; ?>
                                    </div>
                                </div>
                                <?php
                                if ($vacancies) {
                                    foreach ($vacancies as $vacancy) : ?>
                                        <a href="<?= \yii\helpers\Url::toRoute(['ads/view', 'slug' => $vacancy->slug]) ?>">
                                            <div class="mp-cont-point mp-cont-vacancy">
                                                <div class="row">
                                                    <div class="col-xs-12" style="padding-top: 10px;">
                                                        <div class="cn-block-label-pnt-wrap">
                                                            <span class="cn-block-label-pnt-title">
                                                                <?= Yii::t('app', 'Property type') ?>
                                                            </span>
                                                            <span class="cn-block-label-pnt-value">
                                                                <?= $property_id[$vacancy->cat_id] ?>
                                                            </span>
                                                        </div>
                                                        <div class="cn-block-label-pnt-wrap">
                                                            <span class="cn-block-label-pnt-title">
                                                                <?= Yii::t('app', 'Purpose') ?>
                                                            </span>
                                                            <span class="cn-block-label-pnt-value">
                                                                <?= $purpose_id[$vacancy->type_id] ?>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-3">
                                                        <?php if (isset($vacancy->adsAttachments[0]))
                                                                $url = Ads::THUMB_BASE_URL . '/' . $vacancy->adsAttachments[0]->path;
                                                            else $url = 'http://www.borderless-house.com/icon/ic-house-brown.svg';
                                                        ?>
                                                        <img class="mp-cont-point-img" src="<?= $url ?>">
                                                    </div>
                                                    <div class="col-xs-9">
                                                        <div class="mp-cont-point-maininfo-wrap">
                                                            <div class="mp-cont-point-maininfo">
                                                                <span href="">
                                                                    <div class="mp-cont-point-title">
                                                                        <?= $vacancy->title ?>
                                                                        <?php if ($vacancy->price) : ?>
                                                                            <span><strong><?= $vacancy->price ?></strong> <?= \Yii::$app->currency->getCurrencyById($vacancy->currency)['value'] ?></span>
                                                                        <?php endif; ?>
                                                                    </div>
                                                                </span>
                                                                <?php if ($admin) : ?>
                                                                    <button type="button"
                                                                            onclick="window.open('/admin/ads/<?= $vacancy->user_id ?>', '_blank');return false;"
                                                                            target="_blank"
                                                                            style="margin-top: -15px;display: block;">Edit
                                                                    </button>
                                                                    <br>
                                                                <?php endif; ?>
                                                                <div class="mp-cont-point-text">
                                                                    <?= \yii\helpers\StringHelper::truncateWords($vacancy->desc, 20) ?>
                                                                    <div class="mp-cont-point-hide">
                                                                        <div class="mp-cont-point-hide-info">
                                                                            <h4>
                                                                                <?= $vacancy->title ?>
                                                                            </h4>
                                                                            <p>
                                                                                <?= $vacancy->desc ?>
                                                                            </p>
                                                                            <div class="button">
                                                                                See ads
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mp-cont-point-subinfo">
                                                            <div class="mp-cont-point-image">
                                                                <?php $c = 0; ?>
                                                                <?php foreach($vacancy->attachments as $image): ?>
                                                                    <?php if ($c != 0): ?>
                                                                        <?= \yii\helpers\Html::img(Ads::THUMB_BASE_URL . '/' . $image['path'], ['class' => 'img-thumbnail']) ?>
                                                                    <?php endif; ?>
                                                                    <?php $c++; ?>
                                                                <?php endforeach; ?>
                                                            </div>
                                                            <div class="mp-cont-point-location">
                                                                <div class="icn icn-loc">
                                                                </div>
                                                                <?= $vacancy->countryName->name_en ?>, <?= $vacancy->cityName->name_en ?>
                                                            </div>
                                                            <div class="mp-cont-point-date">
                                                                <i class="fa fa-eye"></i>
                                                                <?= $vacancy->views; ?>
                                                                <div class="icn icn-date">
                                                                </div>
                                                                <?= date('d.m.Y', $vacancy->updated_at) ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    <?php endforeach;
                                } else {
                                    ?>
                                    <div class="mp-cont-point mp-cont-vacancy">
                                        <div class="mp-cont-point-maininfo-wrap">
                                            <div class="mp-cont-point-maininfo">
                                                <div class="mp-cont-point-title">
                                                    No ads
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>

                                <?php if (\yii\widgets\LinkPager::widget(['pagination' => $pages])) : ?>
                                    <div class="mp-cont-pages">
                                        Pages
                                        <?php
                                        echo \yii\widgets\LinkPager::widget([
                                            'pagination' => $pages,
                                            'options' => [
                                                'class' => ''
                                            ],
                                            'nextPageLabel' => '<div class="icn icn-arrow-right"></div>',
                                            'prevPageLabel' => '<div class="icn icn-arrow-left"></div>',
                                        ]);
                                        ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
<input type="submit" class="shadow-elem">
<?php $form->end() ?>
