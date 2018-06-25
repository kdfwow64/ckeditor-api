<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\NetCity */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Net Cities', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="net-city-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
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
            'country_id',
            'name_ru',
            'name_en',
            'region',
            'postal_code',
            'latitude',
            'longitude',
            'slug',
        ],
    ]) ?>

</div>
