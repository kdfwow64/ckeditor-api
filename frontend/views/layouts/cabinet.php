<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use frontend\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <link rel="shortcut icon" href="/design/img/favicon.png" type="image/png">
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<header>
    <div class="container">
        <div class="row">
            <div class="hd-logo">
                <a href="/">
                    <img src="/design/img/logo-home.png" alt="Home.nl">
                </a>
            </div>
            <div class="hd-mob-view">
                <ul class="hd-nav">
                    <a href="../ads">
                        <li>
                            Vacancies
                        </li>
                    </a>
                    <a href="../profile.html">
                        <li>
                            Profile
                        </li>
                    </a><a href="../aspirant.html">
                        <li>
                            Applicants
                        </li>
                    </a>
                </ul>
                <ul class="hd-ctrl">
                    <?php if (Yii::$app->user->isGuest) { ?>
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
                    <?php } else { ?>
                        <a href="/cabinet">
                            <li>
                                <div class="icn icn-login"></div>
                                <?=Html::encode(Yii::$app->user->identity->firstname)?>
                            </li>
                        </a>
                        <a href="/logout">
                            <li>
                                <div class="icn icn-reg"></div>
                                Log out
                            </li>
                        </a>
                    <?php } ?>
                </ul>
            </div>
            <div class="hd-hamburger">
                <div class="hd-hamb-bar hd-hamb-bar-1"></div>
                <div class="hd-hamb-bar hd-hamb-bar-2"></div>
                <div class="hd-hamb-bar hd-hamb-bar-3"></div>
            </div>
        </div>
    </div>
</header>


<?= $content ?>

<footer>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="ftr-soc">
                    <a href="#">
                        <li class="ftr-soc-fb">
                            <i class="fa fa-facebook"></i>
                        </li>
                    </a>
                    <a href="#">
                        <li class="ftr-soc-in">
                            <i class="fa fa-linkedin"></i>
                        </li>
                    </a>
                    <a href="#">
                        <li class="ftr-soc-gp">
                            <i class="fa fa-google-plus"></i>
                        </li>
                    </a>
                    <a href="#">
                        <li class="ftr-soc-vk">
                            <i class="fa fa-vk"></i>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <a href="#" class="ftr-feedback">
                    Support
                </a>
            </div>
        </div>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
