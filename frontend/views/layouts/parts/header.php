<?php
$site_logo = !empty(Yii::$app->params['logo_img']) ? Yii::$app->params['logo_img'] : '/design/img/logo-new.png';
?>
<!--    вехний баннер-->
<div class="banner-top">
    <div class="home-top-ads">
        <?php if (Yii::$app->keyStorage->get('ads.top_home_page')) : ?>
            <div class="row">
                <div class="col-xs-12" style="margin-bottom: 20px;">
                    <?= Yii::$app->keyStorage->get('ads.top_home_page')?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>
<div class="tLogoContainer">
    <div class="tTxtLogoTranslit">
        <a href="/">
            <img class="logo" src="<?=$site_logo?>" alt="<?=Yii::$app->params['site_name']?>">
        </a>
    </div>
    <div class="tMyTranslit">
        <!--        <input class="turnoff" type="button" value="Turn off auto translate" onclick="turn_off_auto_translate($(this));" title="Turn off auto translate">-->
        <span>
            <img class="tMenuLink" id="tMenuSwitch" src="/img/settings.png" alt=""/>
        </span>
        <div id="hint2" style="display: block;"></div>
    </div>
    <div class="tMenuBox" id="menubox">
        <label style="font-weight: bold"><?= Yii::t('app', 'Pages')?>:</label>
        <ul>
            <?php
            if(!empty($menu_links)){
                foreach($menu_links as $one){ ?>
                    <li><a href="<?=Yii::$app->params['site_url']."/page/".$one['url']?>"><?=$one['title']?></a></li>
                <?php  }
            } ?>
        </ul>
    </div>
</div>