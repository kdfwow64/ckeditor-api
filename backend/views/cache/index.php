<?php
/**
 * Eugine Terentev <eugine@terentev.net>
 * @var \yii\data\ArrayDataProvider $dataProvider
 */
use yii\grid\GridView;
use yii\helpers\Html;

$this->title = Yii::t('app', 'Cache');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="article-index">

    <?php echo GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            'name',
            'class',
            [
                'class' => 'yii\grid\ActionColumn',
                'template'=>'{flush-cache}',
                'buttons'=>[
                    'flush-cache'=>function ($url, $model) {
                        return \yii\helpers\Html::a('<i class="fa fa-refresh"></i>', $url, [
                            'title' => Yii::t('app', 'Flush'),
                            'data-confirm' => Yii::t('app', 'Are you sure you want to flush this cache?')
                        ]);
                    }
                ]
            ],
        ],
    ]); ?>

    <div class="row">
        <div class="col-xs-6">
            <h4><?php echo Yii::t('app', 'Delete a value with the specified key from cache') ?></h4>
            <?php \yii\bootstrap\ActiveForm::begin([
                'action'=>\yii\helpers\Url::to('flush-cache-key'),
                'method'=>'get',
                'layout'=>'inline',
            ]) ?>
                <?php echo Html::dropDownList(
                    'id', null, \yii\helpers\ArrayHelper::map($dataProvider->allModels, 'name', 'name'),
                    ['class'=>'form-control', 'prompt'=> Yii::t('app', 'Select cache')])
                ?>
                <?php echo Html::input('string', 'key', null, ['class'=>'form-control', 'placeholder' => Yii::t('app', 'Key')]) ?>
                <?php echo Html::submitButton(Yii::t('app', 'Flush'), ['class'=>'btn btn-danger']) ?>
            <?php \yii\bootstrap\ActiveForm::end() ?>
        </div>
        <div class="col-xs-6">
            <h4><?php echo Yii::t('app', 'Invalidate tag') ?></h4>
            <?php \yii\bootstrap\ActiveForm::begin([
                'action'=>\yii\helpers\Url::to('flush-cache-tag'),
                'method'=>'get',
                'layout'=>'inline'
            ]) ?>
                <?php echo Html::dropDownList(
                    'id', null, \yii\helpers\ArrayHelper::map($dataProvider->allModels, 'name', 'name'),
                    ['class'=>'form-control', 'prompt'=> Yii::t('app', 'Select cache')]) ?>
                <?php echo Html::input('string', 'tag', null, ['class'=>'form-control', 'placeholder' => Yii::t('app', 'Tag')]) ?>
                <?php echo Html::submitButton(Yii::t('app', 'Flush'), ['class'=>'btn btn-danger']) ?>
            <?php \yii\bootstrap\ActiveForm::end() ?>
        </div>
    </div>

</div>
