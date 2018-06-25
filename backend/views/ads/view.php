<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Ads */

$this->registerJsFile(Yii::$app->request->baseUrl . '/js/attributes.js', ['depends' => \backend\assets\AppAsset::className()]);

$this->title = $model->title;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Ads'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ads-view">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php \yii\widgets\Pjax::begin(['id' => 'view-ad-value']); ?>
    <p>
<!--        --><?//= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
<!--        --><?//= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
//            'class' => 'btn btn-danger',
//            'data' => [
//                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
//                'method' => 'post',
//            ],
//        ]) ?>

        <?= Html::a(Yii::t('app', 'Up ad'), false, [
            'up-url' => \yii\helpers\Url::toRoute(['update-date', 'id' => $model->id]),
            'class' => 'btn btn-info',
            'onclick' => 'updateAds(this)',
            'data-pjax-container' => 'view-ad-value'
        ]) ?>
    </p>


    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'user_id',
            'title',
            'desc:html',
            'contact_phone',
            'contact_email:email',
            'contact_name',
            'price',
            'currency',
            'country',
            'city',
            'cat_id',
            'type_id',
            'working',
            'lang',
            'active',
            'admin_check',
            'created_at:datetime',
            'updated_at:datetime',
            'slug',
            'views',
            'type_ad',
        ],
    ]) ?>
    <?php \yii\widgets\Pjax::end(); ?>
</div>
