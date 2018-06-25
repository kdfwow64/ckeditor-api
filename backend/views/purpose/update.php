<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\Purpose */

$this->title = Yii::t('app', 'Update {modelClass}: ', [
    'modelClass' => 'Purpose',
]) . $model->title_en;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Purposes'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title_en, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="purpose-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
