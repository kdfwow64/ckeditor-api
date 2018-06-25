<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\NetCity */

$this->title = 'Создать';
$this->params['breadcrumbs'][] = ['label' => 'Города', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="net-city-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
