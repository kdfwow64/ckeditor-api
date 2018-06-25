<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\Partners */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="partners-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'site_name') ?>
    <?= $form->field($model, 'adminEmail') ?>
    <?= $form->field($model, 'seotitle') ?>
    <?= $form->field($model, 'seodescription')->textarea() ?>

    <div class="row">
        <div class="col-xs-9 col-sm-3">
            <?= $form->field($model, 'seoimgfile')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-3">
            <?php
            if ($model->seoimg)
                echo Html::img($model->seoimg, ['style' => 'width:100px;']);
            echo '<br>';
            ?>
        </div>
    </div>
    <div class="row row form-group">
        <div class="col-xs-9 col-sm-3">
            <?= $form->field($model, 'favicon_file')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-3">
            <?php
            if ($model->favicon)
                echo Html::img($model->favicon, ['style' => 'width:50px;']);
            echo '<br>';
            ?>
        </div>
    </div>
    <div class="row row form-group">
        <div class="col-xs-9 col-sm-3">
            <?= $form->field($model, 'logo_img_file')->fileInput() ?>
        </div>
        <div class="logo-box col-xs-9 col-sm-3">
            <?php
            if ($model->logo_img)
                echo Html::img($model->logo_img, ['style' => 'height:50px;']);
            echo '<br>';
            ?>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-xs-12 col-sm-9">
        <label style="width: 100%;"><?=Yii::t('backend', 'Site Colors')?></label>
            <div class="col-xs-9 col-sm-2">
                <?= $form->field($model, 'site_color_1')->textInput(['type'=>'color']) ?>
            </div>
            <div class="col-xs-9 col-sm-2">
                <?= $form->field($model, 'site_color_2')->textInput(['type'=>'color']) ?>
            </div>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'topblocktitle') ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'topblocktext') ?>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'facebook_link') ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'in_link') ?>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'gp_link') ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'vk_link') ?>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'tw_link') ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'new_link') ?>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'mending_link') ?>
        </div>
        <div class="col-xs-9 col-sm-4">

        </div>
    </div>
    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'ga')->textarea(['rows'=>6]); ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'footer')->textarea(['rows'=>6]); ?>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'fb_sc_f')->textarea(['rows'=>6]); ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'fjsc')->textarea(['rows'=>6]); ?>
        </div>
    </div>


    <?php //echo $form->field($model, 'fcc')->textarea(); ?>

    <?= $form->field($model, 'mainpageuser')->checkbox() ?>

    <?php /*?>
    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->mainslide1)
                echo Html::img($model->mainslide1, ['style' => 'width:200px;']);
                echo '<br>';?>
            <?= $form->field($model, 'mainslide1File')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'slidetext1')->textarea(['rows'=>6]); ?>
        </div>
    </div>

    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->mainslide2)
                echo Html::img($model->mainslide2, ['style' => 'width:200px;']);
                echo '<br>'; ?>
            <?= $form->field($model, 'mainslide2File')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'slidetext2')->textarea(['rows'=>6]); ?>
        </div>
    </div>

    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->mainslide3)
                echo Html::img($model->mainslide3, ['style' => 'width:200px;']);
                echo '<br>'; ?>
            <?= $form->field($model, 'mainslide3File')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'slidetext3')->textarea(['rows'=>6]); ?>
        </div>
    </div>

    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->mainslide4)
                echo Html::img($model->mainslide4, ['style' => 'width:200px;']);
                echo '<br>'; ?>
            <?= $form->field($model, 'mainslide4File')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'slidetext4')->textarea(['rows'=>6]); ?>
        </div>
    </div>

    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->mainslide5)
                echo Html::img($model->mainslide5, ['style' => 'width:200px;']);
                echo '<br>'; ?>
            <?= $form->field($model, 'mainslide5File')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'slidetext5')->textarea(['rows'=>6]); ?>
        </div>
    </div>

    <div class="row form-group">
        <div class="col-xs-3 col-sm-1">
        <?= $form->field($model, 'slidetime'); ?>
        </div>
    </div>
    <!--    -->

    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->offersDefaultPhoto)
                echo Html::img($model->offersDefaultPhoto, ['style' => 'width:200px;']);
            echo '<br>';?>
            <?= $form->field($model, 'offersDefaultPhoto')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->requestDefaultPhoto)
                echo Html::img($model->requestDefaultPhoto, ['style' => 'width:200px;']);
            echo '<br>';?>
            <?= $form->field($model, 'requestDefaultPhoto')->fileInput() ?>
        </div>
    </div>

    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->vacancyfoto)
                echo Html::img($model->vacancyfoto, ['style' => 'width:200px;']);
            echo '<br>';?>
            <?= $form->field($model, 'vacancyfotoFile')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'vacancytext')->textarea(['rows'=>6]); ?>
        </div>
    </div>

    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->profilefoto)
                echo Html::img($model->profilefoto, ['style' => 'width:200px;']);
            echo '<br>';?>
            <?= $form->field($model, 'profilefotoFile')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'profiletext')->textarea(['rows'=>6]); ?>
        </div>
    </div>

    <div class="row form-group">
        <div class="col-xs-9 col-sm-4">
            <?php if ($model->resumefoto)
                echo Html::img($model->resumefoto, ['style' => 'width:200px;']);
            echo '<br>'; ?>
            <?= $form->field($model, 'resumefotoFile')->fileInput() ?>
        </div>
        <div class="col-xs-9 col-sm-4">
            <?= $form->field($model, 'resumetext')->textarea(['rows'=>6]); ?>
        </div>
    </div>
    <?php */?>
    <div class="row">
        <div class="col-xs-9 col-sm-3">
            <?= $form->field($model, 'cookies_interval')->textInput(['type'=>'number']); ?>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-9 col-sm-12">
            <?= $form->field($model, 'cookies_text')->textarea(['rows'=>6]); ?>
        </div>
    </div>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
