<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Seo */

$this->title = $model->title;
$this->params['breadcrumbs'][] = ['label' => 'Pages', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="pages-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('All Pages', ['index', 'id' => $model->id], ['class' => 'btn btn-success']) ?>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            [
                'attribute' => 'status',
                'format' => 'html',
                'value' => $model->status ? '<span class="text-success"><strong>Да</strong></span>' : '<span class="text-danger">Нет</span>',
            ],
            'sort_order',
            [
                'attribute' => 'footer',
                'format' => 'html',
                'value' => $model->footer ? '<span class="text-success"><strong>Да</strong></span>' : '<span class="text-danger">Нет</span>',
            ],
            [
                'label' => 'Ссылка на страницу',
                'format' => 'html',
                'value' => "<a target='_blank' href='//".$_SERVER['HTTP_HOST'].'/page/'.$model->slug."'>".$_SERVER['HTTP_HOST'].'/page/'.$model->slug."</a>",
            ],
            'title',
            [
                'attribute' => 'text',
                'format' => 'html',
            ],
        ],
    ]) ?>

</div>
