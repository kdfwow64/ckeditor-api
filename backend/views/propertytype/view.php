<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use yii\widgets\Pjax;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $model common\models\PropertyType */

$this->registerJsFile(Yii::$app->request->baseUrl . '/js/propertytype.js', ['depends' => \backend\assets\AppAsset::className()]);

$this->title = Yii::t('app', 'Category') . ': ' . $model->title_en;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="property-type-view">
    <h1><?= Html::encode($this->title) ?></h1>

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
            'title_ru:ntext',
            'title_en:ntext',
            'slug',
        ],
    ]) ?>
</div>

<div class="col-md-7">
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title"><?= Yii::t('app', 'All category\'s attributes') ?></h3>
            <div class="box-tools pull-right">
                <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
            </div><!-- /.box-tools -->
        </div><!-- /.box-header -->
        <div class="box-body">
            <?php Pjax::begin(['id' => 'grid-category-attributes', 'enablePushState' => false]); ?><?= GridView::widget([
                'dataProvider' => $dataProvider,
                'filterModel' => $searchModel,
                'columns' => [
                    ['class' => 'yii\grid\SerialColumn'],

                    'attributeVal.name',

                    [
                        'class' => 'yii\grid\ActionColumn',
                        'headerOptions' => ['style' => 'color:#337ab7'],
                        'template' => '{delete}',
                        'buttons' => [
                            'delete' => function ($url, $model) {
                                return Html::a('<span  class="glyphicon glyphicon-trash"></span>',
                                    false,
                                    [
                                        'delete-url' => \yii\helpers\Url::toRoute(['propertytype/delete-category-attribute', 'attribute_id' => $model->attribute_id, 'category_id' => $model->category_id]),
                                        'title' => Yii::t('app', 'Delete'),
                                        'onclick' => 'deleteAttributes(this)'
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
            <h3 class="box-title"><?= Yii::t('app', 'Add attribute values') ?></h3>
            <div class="box-tools pull-right">
                <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
            </div><!-- /.box-tools -->
        </div><!-- /.box-header -->
        <div class="box-body">
            <?= $this->render('_form_create', [
                'model' => $model_create,
                'attributes' => $attributes
            ]) ?>
        </div><!-- /.box-body -->
    </div><!-- /.box -->
</div><!-- /.col -->
