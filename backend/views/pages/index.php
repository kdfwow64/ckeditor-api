<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\SeoSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Статические страницы';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="pages-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Создать страницу', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            [
                'attribute'=>'status',
                'format'   => 'html',
                'value'    => function($data){ return $data->status ? '<i class="fa fa-check-square" style="color:#5CB85C"></i>' : '<i class="fa fa-close" style="color: #A94442"></i>';},
                'filter'=> ['0' => 'Deactive' , '1' => 'Active'],
                'contentOptions' => ['style'=>'width: 100px;']
            ],
            'sort_order',
            [
                'attribute'=>'footer',
                'format'   => 'html',
                'value'    => function($data){ return $data->footer ? '<p style="color:#5CB85C">Да</p>' : '<p style="color: red">Нет</p>';},
                'contentOptions' => ['style'=>'width: 100px;']
            ],
            [
                'attribute'=>'slug',
                'format'   => 'html',
                'value'    => function($data){ return '<a href="//'.$_SERVER['HTTP_HOST'].'/page/'.$data->slug.'" target="blank">'.$_SERVER['HTTP_HOST'].'/page/'.$data->slug.'</a>';},
            ],
            'title',
            //'text',
            [
                'class' => 'yii\grid\ActionColumn',
                'options'=>['style'=>'width:90px'],
                //'controller' => 'properties',
                'template' => '{view}&nbsp;&nbsp;&nbsp;{update}&nbsp;&nbsp;&nbsp;{delete}&nbsp;&nbsp;&nbsp;{report}',
            ],
        ],
    ]); ?>
</div>
