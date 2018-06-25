<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\Purpose */

$this->title = Yii::t('backend', 'Update {modelClass}: ', [
    'modelClass' => 'Purpose',
]) . $model->id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('backend', 'Purposes'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('backend', 'Update');
?>
<div class="purpose-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
