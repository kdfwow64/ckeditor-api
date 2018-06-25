<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\FooterLinks */

$this->title = Yii::t('app', 'Create Footer Links');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Footer Links'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="footer-links-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
