<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use yii\grid\GridView;
use yii\widgets\Pjax;

/* @var $this yii\web\View */
/* @var $model common\models\Attributes */

$this->registerJsFile(Yii::$app->request->baseUrl . '/js/attributes.js', ['depends' => \backend\assets\AppAsset::className()]);

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Attributes'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="attributes-view">

    <h1><?= Yii::t('app', 'Attributes') ?>: <?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'name',
            'description:ntext',
            'typeField.name',
            'prompt_desc',
            'slug',
        ],
    ]) ?>
</div>

<div class="col-md-7">
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title"><?= Yii::t('app', 'All attribute values')?></h3>
            <div class="box-tools pull-right">
                <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
            </div><!-- /.box-tools -->
        </div><!-- /.box-header -->
        <div class="box-body">
            <?php Pjax::begin(['id' => 'grid-attribute-values']); ?><?= GridView::widget([
                'dataProvider' => $dataProvider,
                'filterModel' => $searchModel,
                'columns' => [
                    ['class' => 'yii\grid\SerialColumn'],

                    'value',

                    [
                        'class' => 'yii\grid\ActionColumn',
                        'header' => 'Actions',
                        'headerOptions' => ['style' => 'color:#337ab7'],
                        'template' => '{delete}',
                        'buttons' => [
                            'delete' => function ($url, $model) {
                                return Html::a('<span  class="glyphicon glyphicon-trash"></span>',
                                    false,
                                    [
                                        'delete-url' => \yii\helpers\Url::toRoute(['attributes/delete-attribute-value', 'id' => $model->id]),
                                        'title' => Yii::t('app', 'Delete'),
                                        'onclick' => 'deleteAttributesValues(this)'
                                    ]);
                            }
                        ],
                    ]
                ],
            ]); ?>
            <?php Pjax::end(); ?>
        </div><!-- /.box-body -->
    </div><!-- /.box -->
</div><!-- /.col -->

<div class="col-md-5">
    <div class="box box-danger">
        <div class="box-header with-border">
            <h3 class="box-title"><?= Yii::t('app', 'Add attribute values')?></h3>
            <div class="box-tools pull-right">
                <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
            </div><!-- /.box-tools -->
        </div><!-- /.box-header -->
        <div class="box-body">
            <?= $this->render('_form_attribute', [
                'model' => $model_create
            ]) ?>
        </div><!-- /.box-body -->
    </div><!-- /.box -->
</div><!-- /.col -->