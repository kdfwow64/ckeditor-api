<?php

/* @var $this yii\web\View */

//$this->title = 'Мой profile';
?>
<div class="fp-wrapper">
    <div class="fp-wrapper-anim">
        <section class="usp-top" <?= Yii::$app->user->identity->photoprofile ? 'style="background-image:url(\'' . Yii::$app->user->identity->photoprofile . '\')"' : ''; ?>>
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
                                <?php if ($user->birthday_formatted) : ?>
                                    <li>
                                        <div class="icn icn-date-white"></div>
                                        <span><?= $user->birthday_formatted ?></span>
                                    </li>
                                <?php endif; ?>
                                <?php if ($user->country) : ?>
                                    <li>
                                        <div class="icn icn-location-white"></div>
                                        <span><?= $user->country ?></span>
                                    </li>
                                <?php endif; ?>
                                <?php if ($user->city) : ?>
                                    <li>
                                        <div class="icn icn-city-white"></div>
                                        <span><?= $user->city ?></span>
                                    </li>
                                <?php endif; ?>
                                <?php if ($user->email) : ?>
                                    <li>
                                        <div class="icn icn-mail-white"></div>
                                        <span><?= $user->email ?></span>
                                    </li>
                                <?php endif; ?>
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
                    <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2s">
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

                        <?php if ($langs) : ?>
                            <div class="cn-block">
                                <div class="cn-block-label">
                                    <h2>
                                        Language proficiency
                                    </h2>
                                </div>
                                <div class="usp-block-wrap">
                                    <div class="usp-block-infoline">
                                        <?php foreach ($langs as $lang) : ?>
                                            <div class="usp-block-infoval langinfo">
                                                <?= $lang['lang'] ?> (<?= $lang['level'] ?>)
                                            </div>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
