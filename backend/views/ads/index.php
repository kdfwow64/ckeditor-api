<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
use common\models\Ads;

/* @var $this yii\web\View */
/* @var $searchModel backend\models\search\AdsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->registerJsFile(Yii::$app->request->baseUrl . '/js/attributes.js', ['depends' => \backend\assets\AppAsset::className()]);

$this->title = Yii::t('app', 'Ads');
$this->params['breadcrumbs'][] = $this->title;

$filter_ads_type_array = ['1' => Yii::t('app', Ads::TYPE_ADS_NAME), '2' => Yii::t('app', Ads::TYPE_RESUME_NAME)];
?>
<div class="ads-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php Pjax::begin(['id' => 'grid-ad']); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'options' => [
            'class' => 'grid-view table-responsive'
        ],
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'user_id',
            'title',
            [
                'attribute' => 'desc',
                'content' => function($data) {
                    return \yii\helpers\StringHelper::truncate($data->desc, 200);
                }
            ],
            'contact_phone',
            'contact_email:email',
            //'contact_name',
            'price',
            //'currency',
            //'country',
            //'city',
            //'cat_id',
            //'type_id',
            //'working',
            //'lang',
            //'active',
            //'admin_check',
            'created_at:date',
            [
                'attribute' => 'updated_at',
                'content' => function ($data) {
                    if (time() >= Yii::$app->keyStorage->get('frontend.time_update_ads')*24*60*60) {
                        return date('M d, Y', $data->updated_at) . ' <br>' . Html::a(Yii::t('app', 'Up ad'), false,
                            [
                                'title' => Yii::t('app', 'Update ad date'),
                                'up-url' => \yii\helpers\Url::toRoute(['update-date', 'id' => $data->id]),
                                'onclick' => 'updateAds(this)',
                                'data-pjax-container' => 'grid-ad'
                            ]);
                    } else {
                        return date('M d, Y', $data->updated_at);
                    }
                },
            ],
            'slug',
            'views',
            [
                'attribute' => 'type_ad',
                'filter' => $filter_ads_type_array,
                'content' => function ($data) use($filter_ads_type_array) {
                    return $filter_ads_type_array[$data->type_ad] . ' <br>' .
                        Html::a(Yii::t('app', 'Сhange type'), false,
                            [
                                'title' => Yii::t('app', 'Сhange type'),
                                'data-url' => \yii\helpers\Url::to(['ads/change-type', 'id' => $data->id, 'type' => $data->type_ad]),
                                'onclick' => 'changeType(this)',
                                'data-pjax-container' => 'grid-ad'
                            ]);
                },
            ],

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
    <?php Pjax::end(); ?>
</div>
