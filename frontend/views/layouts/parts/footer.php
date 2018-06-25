<footer>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="ftr-soc">
                    <?php
                    if (!empty(\Yii::$app->footerLinks->getFooterLinks())) {
                        foreach (\Yii::$app->footerLinks->getFooterLinks() as $one) {
                            ?>
                            <a href="<?=$one['link']?>" target="_blank" title="<?=$one['title']?>">
                                <li class="">
                                    <img src="<?=$one['img']?>"/>
                                </li>
                            </a>
                        <?php }
                    }
                    ?>

                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <ul class="text-footer-links">
                    <?php
                    if (!empty($footer_text_links = \Yii::$app->textFooterLinks->getTextFooterLinks())) {
                        $count = 0;
                        foreach ($footer_text_links as $one) {
                            if ($count == 3) {
                                continue;
                            } ?>
                            <li>
                                <a href="<?=Yii::$app->params['site_url'] . "/page/" . $one['slug']?>"><?=$one['title']?></a>
                            </li>
                            <?php $count++;
                        }
                    } ?>
                    <li>
                        <a href="/site/contact">
                            <?=Yii::t('app', 'Contacts')?>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>