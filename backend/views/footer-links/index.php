<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel backend\models\search\FooterLinksSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Footer Links');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="footer-links-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a(Yii::t('app', 'Create Footer Links'), ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            //'id',
            [
                'attribute'=>'status',
                'format'   => 'html',
                'value'    => function($data){ return $data->status ? '<i class="fa fa-check-square" style="color:#5CB85C"></i>' : '<i class="fa fa-close" style="color: #A94442"></i>';},
                'filter'=> ['0' => 'Deactive' , '1' => 'Active'],
                'contentOptions' => ['style'=>'width: 100px;']
            ],
            'sort_order',
            'title',
            [
                'attribute' => 'link',
                'value' => function ($data) {
                    return Html::a(Html::encode($data->link),$data->link);
                },
                'format' => 'raw',
            ],
            [
                'attribute' => 'img',
                'value' => function ($data) {
                    return Html::img($data->img, ['style' => 'width:50px;']);
                },
                'format' => 'raw',
            ],
            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
