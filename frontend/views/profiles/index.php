<?php

/* @var $this yii\web\View */
use common\models\Ads;
//$this->title = 'Salary - Applicants';
?>
<?php $form = \yii\widgets\ActiveForm::begin(['method' => 'get', 'action' => '/profiles', 'options' => []]) ?>
<div class="fp-wrapper">
    <div class="fp-wrapper-anim">
        <section class="vl-top" style="background-image: url('<?= Yii::$app->params['profilefoto'] ?>');">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="vl-top-custtext-details">
                            <h2>
                                <?= Yii::$app->params['profiletext'] ?>
                            </h2>
                        </div>
                        <div class="vl-top-filter-wrap">
                            <?php if ($countries) : ?>
                                <div class="vl-top-filter-point">
                                    <h3><?= Yii::t('app', 'Country') ?></h3>
                                    <div class="ui-widget" id="searchcountryblock">
                                        <input type="hidden" name="country"
                                               value="<?= Yii::$app->request->get('countryget') ?>">
                                        <input type="text" class="search" placeholder="Enter the country"
                                               value="<?= isset($countries[Yii::$app->request->get('countryget')]) ? $countries[Yii::$app->request->get('countryget')] : ''; ?>">
                                    </div>
                                    <script>
                                        var countries =<?=json_encode($countries)?>;
                                        var countries2 =<?=json_encode($countries2)?>;
                                    </script>
                                </div>
                            <?php endif; ?>
                            <div class="vl-top-filter-point">
                                <h3><?= Yii::t('app', 'City') ?></h3>
                                <div class="ui-widget" id="searchcityblock">
                                    <input type="hidden" name="city" value="<?= Yii::$app->request->get('cityget') ?>">
                                    <input type="text" class="search" placeholder="Enter the City"
                                           value="<?= isset($cities[Yii::$app->request->get('cityget')]) ? $cities[Yii::$app->request->get('cityget')] : ''; ?>">
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
                                            echo 'Radius';
                                        } ?>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a data-value=""><?= Yii::t('app', 'Without radius') ?></a></li>
                                        <?php foreach (Ads::$radius as $radius) : ?>
                                            <li><a data-value="<?= $radius ?>"><?= $radius ?></a></li>
                                        <?php endforeach; ?>
                                    </ul>
                                    <input class="shadow-elem" name="radius_name"
                                           value="<?= Yii::$app->request->get('radius') ?>">
                                </div>
                            </div>
                            <a class="vl-top-filter-point button" data-method="get">
                                <div class="icn icn-search-white"></div>
                                    <span><?= Yii::t('app', 'search') ?><span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="vl-page-content">
            <div class="container">
                <div class="row">
                    <?php if (Yii::$app->keyStorage->get('ads.top_profile_search_page')) : ?>
                        <div class="col-xs-12" style="margin-bottom: 20px;">
                            <?= Yii::$app->keyStorage->get('ads.top_profile_search_page')?>
                        </div>
                    <?php endif; ?>

                    <div class="col-xs-12 col-md-4">
                        <div class="cn-block">
                            <div class="tp-left-filter-wrap">

                                <div class="tp-left-filter-point">
                                    <div class="form-group">
                                        <div class="filter-title">
                                            <?= Yii::t('app', 'Mortgage Broker') ?>
                                        </div>
                                        <?= \yii\helpers\Html::dropDownList('euro', Yii::$app->request->get('euro'),
                                            ["no" => "No", "yes" => "Yes"], [
                                                'class' => 'placeholder search-form',
                                                'prompt' => 'All'
                                            ]);
                                        ?>
                                    </div>
                                </div>

                                <div class="tp-left-filter-point">
                                    <div class="form-group">
                                        <div class="filter-title">
                                            <?= Yii::t('app', 'Licensed Real Estate Agent') ?>
                                        </div>
                                        <?= \yii\helpers\Html::dropDownList('drive', Yii::$app->request->get('drive'),
                                            ["no" => "No", "yes" => "Yes"], [
                                                'class' => 'placeholder search-form',
                                                'prompt' => 'All'
                                            ]);
                                        ?>
                                    </div>
                                </div>

                                <div class="tp-left-filter-point">
                                    <div class="form-group">
                                        <div class="filter-title">
                                            <?= Yii::t('app', 'Languages') ?>
                                        </div>
                                        <?php $languages = \common\models\Languages::find()->orderBy('name')->all();
                                        $languages = \yii\helpers\ArrayHelper::map($languages, 'name', 'name'); ?>
                                        <?= \yii\helpers\Html::dropDownList('lang', Yii::$app->request->get('lang'),
                                            [$languages], [
                                                'class' => 'placeholder search-form',
                                                'prompt' => 'All'
                                            ]);
                                        ?>
                                    </div>
                                </div>

                                <div class="tp-left-filter-point">
                                    <div class="form-group">
                                        <div class="filter-title">
                                            <?= Yii::t('app', 'Real Estate Appraisal') ?>
                                        </div>
                                        <?= \yii\helpers\Html::dropDownList('move', Yii::$app->request->get('move'),
                                            ["no" => "No", "yes" => "Yes"], [
                                            'class' => 'placeholder search-form',
                                            'prompt' => 'All'
                                        ]);
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-md-8">
                        <div class="cn-block">
                            <div class="mp-cont-wrap">
                                <div class="cn-block-label">
                                    <h2>
                                        Profile
                                    </h2>
                                    <div class="mp-watch-box __red">
                                        <?=$count; ?>
                                    </div>
                                </div>
                                <?php
                                if ($users) {
                                    foreach ($users as $user) { ?>
                                        <a href="<?= \yii\helpers\Url::toRoute(['profiles/view', 'id' => $user->id]) ?>">
                                            <div class="mp-cont-point mp-cont-profile">
                                                <div class="mp-cont-point-maininfo-wrap">
                                                    <div class="row">
                                                        <div class="col-xs-8 col-md-2">
                                                            <img class="mp-cont-point-img" src="<?= $user->avatar ?>">
                                                        </div>
                                                        <div class="col-xs-9 col-md-10">
                                                            <div class="mp-cont-point-maininfo">
                                                                <div class="mp-cont-point-title">
                                                                    <?= $user->firstname ?> <?= $user->lastname ?>
                                                                    <?php if ($admin) { ?>
                                                                        <br>
                                                                        <button type="button"
                                                                                onclick="window.open('/admin/editprofile/<?= $user->id ?>', '_blank');return false;"
                                                                                target="_blank" style="font-size: 14px">Edit
                                                                        </button>
                                                                    <?php } ?>
                                                                </div>
                                                                <div class="mp-cont-point-text">
                                                                    <?= \yii\helpers\StringHelper::truncateWords($user->about, 20) ?>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mp-cont-point-subinfo">
                                                    <div class="mp-cont-point-location">
                                                        <?php if (!empty($user->country) || !empty($user->city)) : ?>
                                                            <div class="icn icn-loc">
                                                            </div>
                                                            <?= $user->country ?>, <?= $user->city ?>
                                                        <?php endif; ?>
                                                    </div>
                                                    <div class="mp-cont-point-date">
                                                        <i class="fa fa-eye"></i>
                                                        <?= $user->views; ?>
                                                        <div class="icn icn-date">
                                                        </div>
                                                        <?= date('d.m.Y', ($user->updated_at != 0) ? $user->updated_at : $user->created_at) ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    <?php }
                                } else {
                                    ?>
                                    <div class="mp-cont-point mp-cont-vacancy">
                                        <div class="mp-cont-point-maininfo-wrap">
                                            <div class="mp-cont-point-maininfo">
                                                <div class="mp-cont-point-title">
                                                    No profiles 
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
