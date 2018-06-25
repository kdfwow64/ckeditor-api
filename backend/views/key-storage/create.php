<?php
/* @var $this yii\web\View */
/* @var $model common\models\KeyStorageItem */

$this->title = Yii::t('app', 'Create {modelClass}', [
    'modelClass' => 'Key Storage Item',
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Key Storage Items'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="key-storage-item-create">

    <?php echo $this->render('_form', [
        'model' => $model
    ]) ?>

</div>