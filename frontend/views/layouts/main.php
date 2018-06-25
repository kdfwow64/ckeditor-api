<?php
/* @var $this \yii\web\View */
/* @var $content string */

use frontend\assets\AppAsset;
use yii\helpers\Html;
//use yii\web\Cookie;
AppAsset::register($this);
$page_query = \common\models\Pages::find()->select('footer,slug,title')->where(['status'=>1])->asArray()->all();
$favicon = !empty(Yii::$app->params['favicon']) ? Yii::$app->params['favicon'] : '/favicon.png';
//$footer_links = [];
$menu_links = [];
if(!empty($page_query)){
    foreach ($page_query as $one){
        if($one['footer'] == 1){
            //$footer_links[] = ['url'=>$one['slug'],'title'=>$one['title']];
        }else{
            $menu_links[] = ['url'=>$one['slug'],'title'=>$one['title']];
        }
    }
}
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<!-- saved from url=(0020)https://translitor.org/ -->
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    <title><?= Html::encode($this->title) ?></title>
    <link rel="icon" type="image/png" href="<?=$favicon?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<!--    <meta name="page-topic" content="Бесплатный транслит, конвертер текста из латиницы и в латиницу. Если у вас нет русской клавиатуры.">-->
    <meta name="copyright" content="<?=Yii::$app->params['site_url']?>">
    <meta name="revisit-after" content="7 days">
    <meta name="robots" content="index, follow">
    <meta name="content-language" content="de">
    <link rel="canonical" href="<?=Yii::$app->params['site_url']?>">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:site_name" content="<?=Yii::$app->name ?>">
    <meta property="og:url" content="https://<?= $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']?>"/>
    <?php $this->head() ?>
    <?php if (!empty(Yii::$app->params['ga'])) {
        echo Yii::$app->params['ga'];
    } ?>
    <!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
<!--    <meta name="yandex-verification" content="b79ff2058f5cad62" />-->
</head>

<body onkeydown="AkeyIsDown(event);" onkeypress="switcher(event);">
<?php $this->beginBody() ?>

<?php 
if (!isset($_COOKIE['cookies_banner']) && !empty(Yii::$app->params['cookies_text'])) {?>
    <div class="tCookiesInfoblock" id="cookiesquestion">
        <div class="tCookiesButton" onclick="okcookies();">
            Согласиться и закрыть
        </div>
        <span class="tCookiesSilentClose" onclick="removecookiesinfo()">x</span>
        <?=Yii::$app->params['cookies_text'];?>
    </div>
<?php } ?>

<div id="wrap">
    <?=$this->render('//layouts/parts/header.php',['menu_links'=>$menu_links]);?>
    <?= $content ?>
</div>
<?=$this->render('//layouts/parts/footer.php',['footer_links'=>$footer_links]);?>

<?php $this->endBody() ?>
<script>
    /*$(function() {
        $('#language_select').selectize();
    });
    var input_language = $('#your_language').selectize();*/
</script>
<?php if (!empty(Yii::$app->params['fb_sc_f']) && Yii::$app->controller->id != 'cabinet') {
    echo Yii::$app->params['fb_sc_f'];
} ?>
<?php if (!empty(Yii::$app->params['footer']) && Yii::$app->controller->id != 'cabinet') {
    echo Yii::$app->params['footer'];
} ?>
<?php if (!empty(Yii::$app->params['fjsc'])) {
    echo Yii::$app->params['fjsc'];
} ?>
</body>
</html>
<?php $this->endPage() ?>