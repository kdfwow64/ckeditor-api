<?php

/* @var $this yii\web\View */

//$this->title = 'Salary - profile '.$user->firstname;
?>

<div class="fp-wrapper">
    <div class="fp-wrapper-anim">
        <section class="usp-top" <?= $user->photoprofile ? 'style="background-image:url(\'' . $user->photoprofile . '\')"' : ''; ?>>
            <div class="usp-top-cont">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-2">
                            <div class="ava-block" style="background-image: url('<?= $user->avatar ?>');"></div>
                        </div>
                        <div class="col-xs-12 col-md-10">
                            <div class="usp-name">
                                <?= $user->firstname ?> <?= $user->lastname ?>
                                <div class="mp-watch-box">
                                    <i class="fa fa-eye"></i>
                                    <?= $user->views; ?>
                                </div>
                                <?php if (!Yii::$app->user->isGuest) { ?>
                                    <div class="vv-info-contact">
                                        <a class="vv-info-contaclink"
                                           href="<?= \yii\helpers\Url::to(['profiles/createchat', 'id' => $user->id]) ?>">
                                            Send message <i class="icn icn-writemsg-white"></i>
                                        </a>
                                    </div>
                                <?php } ?>
                            </div>
                            <ul class="usp-headinfo">
                                <?php if ($user->birthday_formatted) { ?>
                                    <li>
                                        <div class="icn icn-date-white"></div>
                                        <span><?= $user->birthday_formatted ?></span>
                                    </li>
                                <?php } ?>
                                <?php if ($user->country) { ?>
                                    <li>
                                        <div class="icn icn-location-white"></div>
                                        <span><?= $user->country ?></span>
                                    </li>
                                <?php } ?>
                                <?php if ($user->city) { ?>
                                    <li>
                                        <div class="icn icn-city-white"></div>
                                        <span><?= $user->city ?></span>
                                    </li>
                                <?php } ?>
                                <?php if ($user->email) { ?>
                                    <li>
                                        <div class="icn icn-mail-white"></div>
                                        <span><?= $user->email ?></span>
                                    </li>
                                <?php } ?>
                                <?php if ($user->phone) : ?>
                                    <li>
                                        <div class="icn icn-phone-white"></div>
                                        <span><?= $user->phone ?></span>
                                    </li>
                                <?php endif; ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <?php if (Yii::$app->keyStorage->get('ads.top_profile_page')) : ?>
                        <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-2s">
                            <?= Yii::$app->keyStorage->get('ads.top_profile_page') ?>
                        </div>
                    <?php endif; ?>
                    <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-2s"
                         style="margin-top: 20px;">
                        <div class="cn-block">
                            <div class="cn-block-label">
                                <h2>
                                    Professional information
                                </h2>
                            </div>
                            <div class="usp-block-wrap">
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Notary and Legal Advisor
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?php if ($user->work_position == "yes") : ?>
                                            <i class="fa fa-check" aria-hidden="true" style="color: green;"></i>
                                        <?php else : ?>
                                            <i class="fa fa-times" aria-hidden="true" style="color: red;"></i>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Mortgage Broker
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?php if ($user->permission_es == "yes") : ?>
                                            <i class="fa fa-check" aria-hidden="true" style="color: green;"></i>
                                        <?php else : ?>
                                            <i class="fa fa-times" aria-hidden="true" style="color: red;"></i>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Licensed Real Estate Agent
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?php if ($user->drive_license == "yes") : ?>
                                            <i class="fa fa-check" aria-hidden="true" style="color: green;"></i>
                                        <?php else : ?>
                                            <i class="fa fa-times" aria-hidden="true" style="color: red;"></i>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <div class="usp-block-infotag">
                                        Real Estate Appraisal
                                    </div>
                                    <div class="usp-block-infoval">
                                        <?php if ($user->ready_tomove == "yes") : ?>
                                            <i class="fa fa-check" aria-hidden="true" style="color: green;"></i>
                                        <?php else : ?>
                                            <i class="fa fa-times" aria-hidden="true" style="color: red;"></i>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="usp-block-infoline">
                                    <p>
                                        <?= $user->about ?>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!--                        --><?php //if ($userworkmodels) { ?>
                        <!--                            <div class="cn-block">-->
                        <!--                                <div class="cn-block-label">-->
                        <!--                                    <h2>-->
                        <!--                                        Experience-->
                        <!--                                    </h2>-->
                        <!--                                </div>-->
                        <!--                                --><?php //foreach ($userworkmodels as $userworkmodel) { ?>
                        <!--                                    <div class="usp-block-wrap">-->
                        <!--                                        <div class="usp-block-infoline">-->
                        <!--                                            <div class="usp-block-infotag">-->
                        <!--                                                <strong>-->
                        <!--                                                    --><? //= $userworkmodel->title ?>
                        <!--                                                </strong>-->
                        <!--                                            </div>-->
                        <!--                                            <div class="usp-block-infoval right">-->
                        <!--                                                --><? //= $userworkmodel->job_name ?>
                        <!--                                            </div>-->
                        <!--                                        </div>-->
                        <!--                                        <div class="usp-block-infoline">-->
                        <!--                                            <div class="usp-block-infotag">-->
                        <!--                                                from --><? //= date('d.m.Y', $userworkmodel->startdate) ?>
                        <!--                                                to --><? //= $userworkmodel->enddate ? date('d.m.Y', $userworkmodel->enddate) : 'today' ?>
                        <!--                                            </div>-->
                        <!--                                            <div class="usp-block-infoval right">-->
                        <!--                                                -->
                        <? //= $userworkmodel->countryName ?><!--,-->
                        <!--                                                --><? //= $userworkmodel->cityName ?>
                        <!--                                            </div>-->
                        <!--                                        </div>-->
                        <!--                                        <div class="usp-block-infoline">-->
                        <!--                                            <p>-->
                        <!--                                                --><? //= $userworkmodel->description ?>
                        <!--                                            </p>-->
                        <!--                                        </div>-->
                        <!--                                        <div class="usp-block-wrap">-->
                        <!--                                            <hr>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!--                                --><?php //} ?>
                        <!--                            </div>-->
                        <!--                        --><?php //} ?>


                        <!--                        --><?php //if ($usereducationmodels) { ?>
                        <!--                            <div class="cn-block">-->
                        <!--                                <div class="cn-block-label">-->
                        <!--                                    <h2>-->
                        <!--                                        Education-->
                        <!--                                    </h2>-->
                        <!--                                </div>-->
                        <!--                                --><?php //foreach ($usereducationmodels as $usereducationmodel) { ?>
                        <!--                                    <div class="usp-block-wrap">-->
                        <!--                                        <div class="usp-block-infoline">-->
                        <!--                                            <strong>-->
                        <!--                                                --><? //= $usereducationmodel->title ?>
                        <!--                                            </strong>-->
                        <!--                                        </div>-->
                        <!--                                        <div class="usp-block-infoline">-->
                        <!---->
                        <!--                                        </div>-->
                        <!--                                        <div class="usp-block-infoline">-->
                        <!--                                            <div class="usp-block-infotag">-->
                        <!--                                                --><? //= $usereducationmodel->specialize ?>
                        <!--                                            </div>-->
                        <!--                                            <div class="usp-block-infoval right">-->
                        <!--                                                -->
                        <? //= $usereducationmodel->academic ?><!--, --><? //= $usereducationmodel->type ?>
                        <!--                                            </div>-->
                        <!--                                        </div>-->
                        <!--                                        <div class="usp-block-infoline">-->
                        <!--                                            <div class="usp-block-infotag">-->
                        <!--                                                с --><? //= date('d.m.Y', $usereducationmodel->startdate) ?>
                        <!--                                                по --><? //= $usereducationmodel->enddate ? date('d.m.Y', $usereducationmodel->enddate) : 'today' ?>
                        <!--                                            </div>-->
                        <!--                                            <div class="usp-block-infoval right">-->
                        <!--                                                -->
                        <? //= $usereducationmodel->countryName ?><!--,-->
                        <!--                                                --><? //= $usereducationmodel->cityName ?>
                        <!--                                            </div>-->
                        <!--                                        </div>-->
                        <!--                                        <div class="usp-block-infoline">-->
                        <!--                                            <p>-->
                        <!--                                                --><? //= $usereducationmodel->description ?>
                        <!--                                            </p>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!--                                --><?php //} ?>
                        <!--                            </div>-->
                        <!--                        --><?php //} ?>


                        <?php if ($langs) { ?>
                            <div class="cn-block">
                                <div class="cn-block-label">
                                    <h2>
                                        Language proficiency
                                    </h2>
                                </div>
                                <div class="usp-block-wrap">

                                    <div class="usp-block-infoline">
                                        <?php foreach ($langs as $lang) { ?>
                                            <div class="usp-block-infoval langinfo">
                                                <?= $lang['lang'] ?> (<?= $lang['level'] ?>)
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
                <?php if (!empty(Yii::$app->params['fjsc'])) {
                    echo Yii::$app->params['fjsc'];
                } ?>


            </div>


        </section>
    </div>
</div>
