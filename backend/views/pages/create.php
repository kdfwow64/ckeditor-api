<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\Seo */

$this->title = 'Создать статическую страницу';
$this->params['breadcrumbs'][] = ['label' => 'Pages', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="pages-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
