<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model frontend\models\cabinet\UservacancyForm */

$this->title = Yii::t('app', 'Create ads');
?>
<div class="cr-vacancy">
    <div class="fp-wrapper">
        <div class="fp-wrapper-anim">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-lg-10 col-lg-offset-1">
                            <div class="cn-block crp-block">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="cn-block-label">
                                            <h2>
                                                Submit a free ad search
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <?= $this->render('_form', [
                                    'useradsmodel' => $useradsmodel,
                                    'job_category' => $job_category,
                                    'job_purpose' => $job_purpose,
                                    'countries_select' => $countries_select,
                                    'attributesKeys' => $attributesKeys,
                                    'adsType' => 'resume',
                                    'languages' => $languages
                                ]) ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>