<?php
/* @var $this \yii\web\View */
/* @var $content string */

use frontend\assets\AppAsset;
use yii\helpers\Html;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <link rel="shortcut icon" href="/design/img/favicon.ico" type="image/x-icon">
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $timezoneDetector = new \Dater\TimezoneDetector(); ?>
    <?= $timezoneDetector->getHtmlJsCode(); ?>
    <meta property="og:url" content="https://<?= "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>"/>
    <?php $this->head() ?>
    <?php if (!empty(Yii::$app->params['ga']) && Yii::$app->controller->id != 'cabinet') {
        echo Yii::$app->params['ga'];
    } ?>
</head>
<body class="
<?= Yii::$app->controller->id == 'cabinet' && (Yii::$app->controller->action->id == 'index' || Yii::$app->controller->action->id == 'editprofile') ? 'cr-profile' : '' ?>
<?= Yii::$app->controller->id == 'admin' && (Yii::$app->controller->action->id == 'ads') ? ' cr-vacancy ' : '' ?>
<?= Yii::$app->controller->id == 'cabinet' && (Yii::$app->controller->action->id == 'my-ads') ? ' cr-vacancy ' : '' ?>
<?= Yii::$app->controller->id == 'admin' && (Yii::$app->controller->action->id == 'resume') ? ' cr-resume ' : '' ?>
<?= Yii::$app->controller->id == 'cabinet' && (Yii::$app->controller->action->id == 'resume') ? ' cr-resume ' : '' ?>
<?= Yii::$app->controller->id == 'cabinet' && (Yii::$app->controller->action->id == 'favorites') ? ' cr-favorite ' : '' ?>
">
<?php $this->beginBody() ?>

<div id="wrap">
    <header>
        <div class="container">
            <div class="row">
                <div class="hd-logo">
                    <a href="/">
                        <img src="/design/img/logo-new.png" alt="domesticus.eu">
                    </a>
                </div>
                <div class="hd-mob-view">
                    <ul class="hd-nav">
                        <a href="/ads" class="<?= Yii::$app->controller->id == 'ads' ? 'active' : '' ?>">
                            <li>
                                <?= Yii::t('app', 'Landlords') ?>
                            </li>
                        </a>
                        <a href="/profiles" class="<?= Yii::$app->controller->id == 'profiles' ? 'active' : '' ?>">
                            <li>
                                <?= Yii::t('app', 'Profile') ?>
                            </li>
                        </a>
                        <a href="/resume"  class="<?=Yii::$app->controller->id=='resume'?'active':''?>" >
                            <li>
                                <?= Yii::t('app', 'Tenants') ?>
                            </li>
                        </a>
                        <a href="/forum" class="">
                            <li>
                                <?= Yii::t('app', 'Forum') ?>
                            </li>
                        </a>
                    </ul>
                    <?php if (Yii::$app->user->isGuest) { ?>
                        <ul class="hd-ctrl">
                            <a href="/login">
                                <li>
                                    <div class="icn icn-login"></div>
                                    Log in
                                </li>
                            </a>
                            <a href="/signup">
                                <li>
                                    <div class="icn icn-reg"></div>
                                    Sign up
                                </li>
                            </a>
                        </ul>
                    <?php } else { ?>
                        <dib class="hd-log-ctrl">
                            <a href="/cabinet/messages">
                                <div class="hd-message-box">
                                    <div class="hd-message-icn"></div>
                                    <div
                                        class="hd-message-ind <?= $mcount = Yii::$app->messanger->getNewMessagesCount() == 0 ? 'shadow-elem' : '' ?>">
                                        <?= $mcount ?>
                                    </div>
                                </div>
                            </a>
                            <div class="opn-toggle">
                                <div class="dot dot-1"></div>
                                <div class="dot dot-2"></div>
                                <div class="dot dot-3"></div>
                            </div>
                            <div class="hidden-menu">
                                <ul>
                                    <a href="/cabinet">
                                        <li>
                                            <div class="icn icn-user-red"></div>
                                            <span><?= Yii::t('app', 'My profile') ?></span>
                                        </li>
                                    </a>
                                    <a href="/cabinet/editprofile">
                                        <li>
                                            <div class="icn icn-settings-red"></div>
                                            <span><?= Yii::t('app', 'Profile settings') ?></span>
                                        </li>
                                    </a>
                                    <a href="/cabinet/security">
                                        <li>
                                            <div class="icn icn-security-red"></div>
                                            <span><?= Yii::t('app', 'Security') ?></span>
                                        </li>
                                    </a>
                                    <a href="/cabinet/favorites">
                                        <li>
                                            <div class="icn icn-mailnotes-red"></div>
                                            <span><?= Yii::t('app', 'Mailing settings') ?></span>
                                        </li>
                                    </a>
                                    <a href="/cabinet/resume">
                                        <li>
                                            <div class="icn icn-vacancy-red"></div>
                                            <span><?= Yii::t('app', 'My property search') ?></span>
                                        </li>
                                    </a>
                                    <a href="/cabinet/my-ads">
                                        <li>
                                            <div class="icn icn-vacancy-red"></div>
                                            <span><?= Yii::t('app', 'My property offers') ?></span>
                                        </li>
                                    </a>
                                    <a href="/logout">
                                        <li>
                                            <div class="icn icn-exit-red"></div>
                                            <span><?= Yii::t('app', 'Log out') ?></span>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                            <div class="ava-block"
                                 style="background-image: url('<?= Yii::$app->user->identity->avatar ?>')">
                            </div>
                            <span>
                            <?= Html::encode(Yii::$app->user->identity->firstname) ?>
                            <?= Html::encode(Yii::$app->user->identity->lastname) ?>
                        </span>
                        </dib>
                    <?php } ?>
                </div>
                <div class="hd-hamburger">
                    <div class="hd-hamb-bar hd-hamb-bar-1"></div>
                    <div class="hd-hamb-bar hd-hamb-bar-2"></div>
                    <div class="hd-hamb-bar hd-hamb-bar-3"></div>
                </div>

                <?php if (
                    (Yii::$app->controller->id == 'ads' && Yii::$app->controller->action->id == 'index') ||
                    (Yii::$app->controller->id == 'profiles' && Yii::$app->controller->action->id == 'index') ||
                    (Yii::$app->controller->id == 'resume' && Yii::$app->controller->action->id == 'index')
                ) : ?>
                    <div class="side-filter-toggle">
                        <div class="icn icn-filter-white"></div>
                    </div>
                <?php endif; ?>

                <?php if (!Yii::$app->user->isGuest) : ?>
                    <?php if (Yii::$app->controller->id == 'cabinet' && Yii::$app->controller->action->id == 'messages') : ?>
                        <div class="side-filter-toggle">
                            <div class="icn icn-msg-white"></div>
                            <div
                                class="hd-message-ind <?= $mcount = Yii::$app->messanger->getNewMessagesCount() == 0 ? 'shadow-elem' : '' ?>">
                                <?= $mcount ?>
                            </div>
                        </div>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
        </div>
    </header>
    <div id="main" class="clearfix">
        <?php if (Yii::$app->params['topblocktitle']) : ?>
            <div class="m-info-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <h2>
                                <?= Yii::$app->params['topblocktitle'] ?>
                            </h2>
                            <p>
                                <?= Yii::$app->params['topblocktext'] ?>
                            </p>
                            <div class="m-info-close">
                                <i class="icn icn-close-gray"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>

        <?= $content ?>
    </div>
</div>
<footer>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="ftr-soc">
                    <?php if (!empty(Yii::$app->params['facebook_link'])): ?>
                        <a href="<?= Yii::$app->params['facebook_link']; ?>" target="_blank">
                            <li class="ftr-soc-fb">
                                <i class="fa fa-facebook"></i>
                            </li>
                        </a>
                    <?php endif; ?>
                    <?php if (!empty(Yii::$app->params['in_link'])): ?>
                        <a href="<?= Yii::$app->params['in_link']; ?>" target="_blank">
                            <li class="ftr-soc-in">
                                <i class="fa fa-linkedin"></i>
                            </li>
                        </a>
                    <?php endif; ?>
                    <?php if (!empty(Yii::$app->params['gp_link'])): ?>
                        <a href="<?= Yii::$app->params['gp_link']; ?>" target="_blank">
                            <li class="ftr-soc-gp">
                                <i class="fa fa-google-plus"></i>
                            </li>
                        </a>
                    <?php endif; ?>
                    <?php if (!empty(Yii::$app->params['vk_link'])): ?>
                        <a href="<?= Yii::$app->params['vk_link']; ?>" target="_blank">
                            <li class="ftr-soc-vk">
                                <i class="fa fa-vk"></i>
                            </li>
                        </a>
                    <?php endif; ?>
                    <?php if (!empty(Yii::$app->params['tw_link'])): ?>
                        <a href="<?= Yii::$app->params['tw_link']; ?>" target="_blank">
                            <li class="ftr-soc-vk">
                                <i class="fa fa-twitter"></i>
                            </li>
                        </a>
                    <?php endif; ?>
                    <?php if (!empty(Yii::$app->params['new_link'])): ?>
                        <a href="<?= Yii::$app->params['new_link']; ?>" target="_blank">
                            <li class="ftr-soc-vk">
                                <i class="fa fa-link"></i>
                            </li>
                        </a>
                    <?php endif; ?>
                    <?php if (!empty(Yii::$app->params['mending_link'])): ?>
                        <a href="<?= Yii::$app->params['mending_link']; ?>" target="_blank">
                            <li class="ftr-soc-vk">
                                <img style="max-width: 20px" src="/design/img/icon/Renovation_Repairs.ico">
                            </li>
                        </a>
                    <?php endif; ?>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <a href="#" class="ftr-feedback" data-toggle="modal" data-target="#feedback-modal">
                    Support
                </a>
            </div>
        </div>
    </div>
</footer>

<?= \frontend\widgets\Claimmodalwidget::widget() ?>

<?= \frontend\widgets\Feedbackmodalwidget::widget() ?>

<?php $this->endBody() ?>
<?php if (!empty(Yii::$app->params['fb_sc_f']) && Yii::$app->controller->id != 'cabinet') {
    echo Yii::$app->params['fb_sc_f'];
} ?>
<?php if (!empty(Yii::$app->params['footer']) && Yii::$app->controller->id != 'cabinet') {
    echo Yii::$app->params['footer'];
} ?>
</body>
</html>
<?php $this->endPage() ?>
