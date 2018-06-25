<?php

use yii\helpers\Html;
use trntv\filekit\widget\Upload;
use yii\widgets\Pjax;
use yii\helpers\Url;
use yii\bootstrap\ActiveForm;
use common\components\keyStorage\FormWithoutSubmitWidget;
use common\models\Languages;
use yii\helpers\ArrayHelper;
use common\models\Ads;

/* @var $this yii\web\View */
/* @var $model frontend\models\cabinet\UseradsForm */
/* @var $form yii\widgets\ActiveForm */
$error = false;
?>

<div class="row slide-wrap crr-create-new">
    <?php $form = ActiveForm::begin([
        'fieldConfig' => [
            'horizontalCssClasses' => [
                'label' => 'col-md-3',
                'wrapper' => 'col-md-7',
                'error' => '',
                'hint' => 'col-md-2',
            ],
        ],
        'layout' => 'horizontal',
    ]) ?>

    <?= $form->field($useradsmodel, 'title')->input('text', ['class' => '']) ?>

    <?= $form->field($useradsmodel, 'type_id')->dropDownList($job_purpose,
            [
                'class' => 'placeholder uservacancyform-type_id',
                'prompt' => 'Choose from the list'
            ]) ?>

    <?= $form->field($useradsmodel, 'price')->input('text', ['class' => '', 'placeholder' => 'Enter your price']) ?>

    <?= $form->field($useradsmodel, 'currency')->dropDownList(
            array_map(function ($item1) {
                return html_entity_decode($item1);
            }, ArrayHelper::map(\Yii::$app->currency->getCurrency(), 'id', 'name')),
        [
            'class' => '',
            'placeholder' => 'Enter your currency'
        ]) ?>

    <?= $form->field($useradsmodel, 'cat_id')->dropDownList($job_category,
        [
            'onchange' =>
                '$.pjax.reload({
                    url: "' . Url::to(['ads-create']) . '?cat_id="+$(this).val(),
                    container: "#pjax-list-category",
                    push: false,
                    replace: false,
                });',
            'class' => 'placeholder uservacancyform-cat_id',
            'prompt' => 'Choose from the list'
        ]) ?>

    <?php Pjax::begin(['id' => 'pjax-list-category', 'enablePushState' => false]) ?>
        <?php
        if (!isset($attributesValue)) $attributesValue = [];
        if (count($attributesKeys) > 0) : ?>
            <?php echo FormWithoutSubmitWidget::widget([
                'form' => $form,
                'formClass' => '\yii\bootstrap\ActiveForm',
                'attributesKeys' => $attributesKeys,
                'attributesValue' =>$attributesValue
            ]); ?>
        <?php endif; ?>
    <?php Pjax::end(); ?>

    <?= $form->field($useradsmodel, 'country')->dropDownList($countries_select,
        ['class' => 'placeholder country_select',
            'prompt' => Yii::t('app', 'Choose from the list')
        ]) ?>

    <?= $form->field($useradsmodel, 'city')->dropDownList($useradsmodel->cities, ['disabled' => $useradsmodel->country ? false : 'disabled', 'class' => 'placeholder city_select', 'prompt' => 'Choose from the list']) ?>

    <?= $form->field($useradsmodel, 'desc')->textarea(['cols' => 30, 'rows' => 20, 'class' => 'add-ads-description', 'placeholder' => '']) ?>

    <?= $form->field($useradsmodel, 'attachments')->widget(
        Upload::className(),
        [
            'url' => ['/cabinet/upload'],
            'sortable' => true,
            'maxFileSize' => 10000000, // 10 MiB
            'maxNumberOfFiles' => 10
        ])->label('Click to add images');
    ?>

    <div class="cn-block-label">
        <h2>
            <?= Yii::t('app', 'Contact details') ?>
        </h2>
    </div>

    <?= $form->field($useradsmodel, 'contact_name')->input('text', ['class' => '']) ?>

    <?= $form->field($useradsmodel, 'contact_phone')->input('text', ['class' => '']) ?>

    <?= $form->field($useradsmodel, 'contact_email')->input('text', ['class' => '']) ?>

    <?= $form->field($useradsmodel, 'working')->dropDownList(Ads::$provided,
        ['class' => 'placeholder', 'prompt' => Yii::t('app', 'Choose from the list')]) ?>

    <?= $form->field($useradsmodel, 'lang')->dropDownList($languages,
        ['class' => 'placeholder selectizelang', 'prompt' => Yii::t('app', 'Choose from the list'), "multiple" => "multiple"]) ?>

    <div class="col-mod-xs-10 crp-cntl-block">
        <?= Html::submitButton($useradsmodel->isNewRecord ? Yii::t('app', 'Save') : Yii::t('app', 'Update'),
            ['class' => $useradsmodel->isNewRecord ? 'button btn-success' : 'button btn-primary']) ?>
        <?= Html::a('Cancel', ($adsType == 'ads') ? ['cabinet/my-ads'] : ['cabinet/resume'], ['class' => 'button gray']) ?>
    </div>
    <?php $form::end() ?>
</div>
