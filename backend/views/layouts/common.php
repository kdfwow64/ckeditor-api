<?php
/**
 * @var $this yii\web\View
 */

use backend\assets\AppAsset;
use backend\widgets\Menu;
use yii\bootstrap\Alert;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\log\Logger;
use yii\widgets\Breadcrumbs;

$bundle = AppAsset::register($this);
?>
<?php $this->beginContent('@app/views/layouts/base.php'); ?>
<div class="wrapper">
    <!-- header logo: style can be found in header.less -->
    <header class="main-header">
        <a href="/" class="logo">
            <!-- Add the class icon to your logo image or logo icon to add the margining -->
            C-panel
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only"><?= Yii::t('backend', 'Toggle navigation') ?></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="<?= Yii::$app->user->identity->getAvatar() ?>"
                                 class="user-image">
                            <span><?= Yii::$app->user->identity->firstname ?> <?= Yii::$app->user->identity->lastname ?>
                                <i class="caret"></i></span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header light-blue">
                                <img src="<?= Yii::$app->user->identity->getAvatar() ?>"
                                     class="img-circle" alt="User Image"/>
                                <p>
                                    <?= Yii::$app->user->identity->firstname ?> <?= Yii::$app->user->identity->lastname ?>
                                    <small>
                                        <?= Yii::t('backend', 'Member since {0, date, short}', Yii::$app->user->identity->created_at) ?>
                                    </small>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <!--                                <div class="pull-left">-->
                                <!--                                    --><? //= Html::a(Yii::t('app', 'Profile'), ['/sign-in/profile'], ['class' => 'btn btn-default btn-flat']) ?>
                                <!--                                </div>-->
                                <!--                                <div class="pull-left">-->
                                <!--                                    --><? //= Html::a(Yii::t('app', 'Account'), ['/sign-in/account'], ['class' => 'btn btn-default btn-flat']) ?>
                                <!--                                </div>-->
                                <div class="pull-right">
                                    <?php echo Html::a(Yii::t('backend', 'Выход'), ['/sign-in/logout'], ['class' => 'btn btn-default btn-flat', 'data-method' => 'post']) ?>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <?php echo Html::a('<i class="fa fa-cogs"></i>', ['/site/settings']) ?>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="<?php echo Yii::$app->user->identity->getAvatar() ?>"
                         class="img-circle"/>
                </div>
                <div class="pull-left info">
                    <p><?php echo Yii::t('backend', 'Hello, {username}', ['username' => Yii::$app->user->identity->firstname]) ?></p>
                    <a href="<?php echo Url::to(['/sign-in/profile']) ?>">
                        <i class="fa fa-circle text-success"></i>
                        <?php echo Yii::$app->formatter->asDatetime(time()) ?>
                    </a>
                </div>
            </div>
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <?= Menu::widget([
                'options' => ['class' => 'sidebar-menu'],
                'linkTemplate' => '<a href="{url}">{icon}<span>{label}</span>{right-icon}{badge}</a>',
                'submenuTemplate' => "\n<ul class=\"treeview-menu\">\n{items}\n</ul>\n",
                'activateParents' => true,
                'items' => [
                    [
                        'label' => Yii::t('backend', 'Main'),
                        'options' => ['class' => 'header']
                    ],
                    [
                        'label' => Yii::t('backend', 'Users'),
                        'icon' => '<i class="fa fa-users"></i>',
                        'url' => ['/user/index'],
                        'active' => $this->context->route == 'user/index'
                    ],
                    [
                        'label' => Yii::t('backend', 'Ads'),
                        'icon' => '<i class="fa fa-users"></i>',
                        'url' => ['/ads/index'],
                        'active' => $this->context->route == 'ads/index'
                    ],
                    [
                        'label' => Yii::t('backend', 'Claims'),
                        'icon' => '<i class="fa fa-users"></i>',
                        'url' => ['/claim/index'],
                        'active' => $this->context->route == 'claim/index'
                    ],
                    [
                        'label' => Yii::t('backend', 'Seo'),
                        'icon' => '<i class="fa fa-users"></i>',
                        'url' => ['/seo/index'],
                        'active' => $this->context->route == 'seo/index'
                    ],
                    [
                        'label' => Yii::t('backend', 'Directories'),
                        'url' => '#',
                        'icon' => '<i class="fa fa-edit"></i>',
                        'options' => ['class' => 'treeview'],
                        'items' => [
                            ['label' => Yii::t('backend', 'Category'), 'url' => ['/propertytype/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'propertytype/index',
                            ['label' => Yii::t('backend', 'Purpose'), 'url' => ['/purpose/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'purpose/index',
                            ['label' => Yii::t('backend', 'Attributes'), 'url' => ['/attributes/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'attributes/index',
                            ['label' => Yii::t('backend', 'Languages'), 'url' => ['/languages/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'languages/index',
                            ['label' => Yii::t('backend', 'Countries'), 'url' => ['/country/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'country/index',
                            ['label' => Yii::t('backend', 'Cities'), 'url' => ['/city/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'city/index',
                            ['label' => Yii::t('backend', 'Currency'), 'url' => ['/currency/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'currency/index',
                        ]
                    ],
                    [
                        'label' => Yii::t('backend', 'System'),
                        'options' => ['class' => 'header']
                    ],
                    [
                        'label' => Yii::t('backend', 'Feedback'),
                        'icon' => '<i class="fa fa-users"></i>',
                        'url' => ['/feedback/index'],
                        'active' => $this->context->route == 'feedback/index'
                    ],
                    [
                        'label' => Yii::t('backend', 'Settings'),
                        'url' => '#',
                        'icon' => '<i class="fa fa-edit"></i>',
                        'options' => ['class' => 'treeview'],
                        'items' => [
                            ['label' => Yii::t('backend', 'Main'), 'url' => ['/settings/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'settings/index',
                            ['label' => Yii::t('backend', 'Language values'), 'url' => ['/settings/language'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'settings/language',
                            ['label' => Yii::t('backend', 'Url manager'), 'url' => ['/settings/url-manager'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'settings/url-manager',
                            ['label' => Yii::t('backend', 'Other settings'), 'url' => ['/settings/settings'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'settings/settings',
                            ['label' => Yii::t('backend', 'Key-Value Storage'), 'url' => ['/key-storage/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'key-storage/index',
                            ['label' => Yii::t('backend', 'Cache'), 'url' => ['/cache/index'], 'icon' => '<i class="fa fa-angle-double-right"></i>'],'active' => $this->context->route == 'cache/index',
                        ]
                    ],
                    [
                        'label' => Yii::t('backend', 'Footer links'),
                        'icon' => '<i class="fa fa-users"></i>',
                        'url' => ['/footer-links/index'],
                        'active' => $this->context->route == 'footer-links/index'
                    ],
                    [
                        'label' => Yii::t('backend', 'Ads (Google, etc)'),
                        'icon' => '<i class="fa fa-users"></i>',
                        'url' => ['/settings/ads'],
                        'active' => $this->context->route == 'settings/ads'
                    ],
                    [
                        'label' => Yii::t('backend', 'Pages'),
                        'icon' => '<i class="fa fa-users"></i>',
                        'url' => ['/pages'],
                        'active' => $this->context->route == 'pages'
                    ],
                ]
            ]) ?>
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- Right side column. Contains the navbar and content of the page -->
    <aside class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                <?= $this->title ?>
                <?php if (isset($this->params['subtitle'])): ?>
                    <small><?php echo $this->params['subtitle'] ?></small>
                <?php endif; ?>
            </h1>

            <?php echo Breadcrumbs::widget([
                'tag' => 'ol',
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ]) ?>
        </section>

        <!-- Main content -->
        <section class="content">
            <?php if (Yii::$app->session->hasFlash('alert')): ?>
                <?php echo Alert::widget([
                    'body' => ArrayHelper::getValue(Yii::$app->session->getFlash('alert'), 'body'),
                    'options' => ArrayHelper::getValue(Yii::$app->session->getFlash('alert'), 'options'),
                ]) ?>
            <?php endif; ?>
            <?php echo $content ?>
        </section><!-- /.content -->
    </aside><!-- /.right-side -->
</div><!-- ./wrapper -->

<?php $this->endContent(); ?>
