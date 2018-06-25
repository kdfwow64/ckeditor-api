<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\AttributeValues */

$this->title = Yii::t('app', 'Create Attribute Values');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Attribute Values'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="attribute-values-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
