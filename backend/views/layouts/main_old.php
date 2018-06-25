<?php

/* @var $this \yii\web\View */
/* @var $content string */

use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use common\widgets\Alert;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class="wrap">
    <?php
    NavBar::begin([
        'brandLabel' => 'C-panel',
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],
    ]);
    $menuItems = [
        ['label' => 'На сайт', 'url' => '/'],
    ];
    if (Yii::$app->user->isGuest) {
        $menuItems[] = ['label' => 'Login', 'url' => ['/site/login']];
    } else {
        $menuItems[] = ['label' => 'Пользователи', 'url' => ['/user']];
        $menuItems[] = ['label' => 'Обратная связь', 'url' => ['/feedback']];
        $menuItems[] = ['label' => 'Жалобы', 'url' => ['/claim']];
        $menuItems[] = ['label' => 'Seo', 'url' => ['/seo']];
        $menuItems[] = ['label' => 'Справочники', 'items' => [
            ['label' => 'Отрасли', 'url' => ['/propertytype']],
            ['label' => 'Професии', 'url' => ['/purpose']],
            ['label' => 'Языки', 'url' => ['/languages']],
            ['label' => 'Страны', 'url' => ['/country']],
            ['label' => 'Города', 'url' => ['/city']],
        ]];
        $menuItems[] = ['label' => 'Настройки', 'url' => ['/settings']];
        $menuItems[] = ['label' => 'Страницы', 'items' => [
            ['label' => 'Пользовательское соглашение', 'url' => ['/pages/termsofservice']],
        ]];
        $menuItems[] = '<li>'
            . Html::beginForm(['/site/logout'], 'post')
            . Html::submitButton(
                'Logout (' . Yii::$app->user->identity->firstname . ')',
                ['class' => 'btn btn-link']
            )
            . Html::endForm()
            . '</li>';
    }
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right'],
        'items' => $menuItems,
    ]);
    NavBar::end();
    ?>


    <div class="container">
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= Alert::widget() ?>
        <?= $content ?>
    </div>
</div>

<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; Zarplata <?= date('Y') ?></p>

        <p class="pull-right"><?= Yii::powered() ?></p>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
