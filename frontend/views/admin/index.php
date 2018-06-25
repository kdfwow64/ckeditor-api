<?php

/* @var $this yii\web\View */

//$this->title = 'Мой профиль';
?>
<div class="fp-wrapper">
    <div class="fp-wrapper-anim">
        <section
            class="usp-top" <?= Yii::$app->user->identity->photoprofile ? 'style="background-image:url(\'' . Yii::$app->user->identity->photoprofile . '\')"' : ''; ?>>
            <div class="usp-top-cont">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-2">
                            <div class="ava-block" style="background-image: url('<?= $user->avatar ?>');"></div>
                        </div>
                        <div class="col-xs-12 col-md-10">
                            <div class="usp-name">
                                <?= $user->firstname ?> <?= $user->lastname ?>
                            </div>
                            <ul class="usp-headinfo">
                                <li>
                                    <div class="icn icn-user-white"></div>
                                    <span><?= $user->profession ?></span>
                                </li>
                                <li>
                                    <div class="icn icn-date-white"></div>
                                    <span><?= $user->birthday_formatted ?></span>
                                </li>

                                <li>
                                    <div class="icn icn-location-white"></div>
                                    <span><?= $user->country ?></span>
                                </li>
                                <li>
                                    <div class="icn icn-city-white"></div>
                                    <span><?= $user->city ?></span>
                                </li>
                                <li>
                                    <div class="icn icn-mail-white"></div>
                                    <span><?= $user->email ?></span>
                                </li>
                                <li>
                                    <div class="icn icn-phone-white"></div>
                                    <span><?= $user->phone ?></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2s">
                        <div class="cn-block">
                            <div class="cn-block-label">
                                <h2>
                                    Профессиональные данные
                                </h2>
                            </div>
                            <div class="usp-block-wrap">
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Отрасль
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?= isset($jobcat[$user->job_cat_id])?$jobcat[$user->job_cat_id]:'' ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Профессия
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?= isset($jobname[$user->job_name_id])?$jobname[$user->job_name_id]:'' ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Должность
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?= $user->work_position ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Разрешение на работу в ЕС
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?= $user->permission_es ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Наличие водительских прав
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?= $user->drive_license ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Готовность к поездкам
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?= $user->ready_tomove ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <p>
                                        <?= $user->about ?>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <?php if ($userworkmodels) { ?>
                            <div class="cn-block">
                                <div class="cn-block-label">
                                    <h2>
                                        Опыт работы
                                    </h2>
                                </div>
                                <?php foreach ($userworkmodels as $userworkmodel) { ?>
                                    <div class="usp-block-wrap">
                                        <div class="usp-block-infoline">
                                            <div class="usp-block-infotag">
                                                <strong>
                                                    <?= $userworkmodel->title ?>
                                                </strong>
                                            </div>
                                            <div class="usp-block-infoval right">
                                                <?= $userworkmodel->job_name ?>
                                            </div>
                                        </div>
                                        <div class="usp-block-infoline">
                                            <div class="usp-block-infotag">
                                                с <?= date('d.m.Y', $userworkmodel->startdate) ?>
                                                по <?= $userworkmodel->enddate ? date('d.m.Y', $userworkmodel->enddate) : 'сегодня' ?>
                                            </div>
                                            <div class="usp-block-infoval right">
                                                <?= $userworkmodel->countryName ?>, 
                                                <?= $userworkmodel->cityName ?>
                                            </div>
                                        </div>
                                        <div class="usp-block-infoline">
                                            <p>
                                                <?= $userworkmodel->description ?>
                                            </p>
                                        </div>
                                        <div class="usp-block-wrap">
                                            <hr>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>


                        <?php if ($usereducationmodels) { ?>
                            <div class="cn-block">
                                <div class="cn-block-label">
                                    <h2>
                                        Образование
                                    </h2>
                                </div>
                                <?php foreach ($usereducationmodels as $usereducationmodel) { ?>
                                    <div class="usp-block-wrap">
                                        <div class="usp-block-infoline">
                                            <strong>
                                                <?= $usereducationmodel->title ?>
                                            </strong>
                                        </div>
                                        <div class="usp-block-infoline">

                                        </div>
                                        <div class="usp-block-infoline">
                                            <div class="usp-block-infotag">
                                                <?= $usereducationmodel->specialize ?>
                                            </div>
                                            <div class="usp-block-infoval right">
                                                <?= $usereducationmodel->academic ?>, <?= $usereducationmodel->type ?>
                                            </div>
                                        </div>
                                        <div class="usp-block-infoline">
                                            <div class="usp-block-infotag">
                                                с <?= date('d.m.Y', $usereducationmodel->startdate) ?>
                                                по <?= $usereducationmodel->enddate ? date('d.m.Y', $usereducationmodel->enddate) : 'сегодня' ?>
                                            </div>
                                            <div class="usp-block-infoval right">
                                                <?= $usereducationmodel->countryName ?>, 
                                                <?= $usereducationmodel->cityName ?>
                                            </div>
                                        </div>
                                        <div class="usp-block-infoline">
                                            <p>
                                                <?= $usereducationmodel->description ?>
                                            </p>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>


                        <?php if($langs){?>
                        <div class="cn-block">
                            <div class="cn-block-label">
                                <h2>
                                    Владение языками
                                </h2>
                            </div>
                            <div class="usp-block-wrap">

                                <div class="usp-block-infoline">
                                    <?php foreach ($langs as $lang){ ?>
                                    <div class="usp-block-infoval langinfo">
                                        <?=$lang['lang']?> (<?=$lang['level']?>)
                                    </div>
                                    <?php }?>
                                </div>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
