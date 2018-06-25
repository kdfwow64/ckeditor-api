<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\CategoryAttribute */

$this->title = Yii::t('backend', 'Update {modelClass}: ', [
    'modelClass' => 'Category Attribute',
]) . $model->category_id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('backend', 'Category Attributes'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->category_id, 'url' => ['view', 'category_id' => $model->category_id, 'attribute_id' => $model->attribute_id]];
$this->params['breadcrumbs'][] = Yii::t('backend', 'Update');
?>
<div class="category-attribute-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
