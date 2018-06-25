<?php
$this->title = Yii::t('backend', 'editing frontend URLs');
if (!empty($url_mass)) { ?>
    <div class="row">
        <div class="col-xs-9 col-sm-4">
            <label class="" style="font-weight: bold"><?=Yii::t('backend', 'Original URLs')?></label>
            <label class="lang-inputs fl-r" style=""><?=Yii::t('backend', 'New URLs')?></label>
        </div>
    </div>
    <form action="" method="post">
        <?php foreach ($url_mass as $key => $one) { ?>
            <div class="row">
                <div class="col-xs-9 col-sm-4">
                    <label class="lang-labels" for="<?=$key;?>"><?=$key;?></label>
                    <input class="lang-inputs fl-r" id="<?=$key;?>" type="text" name="<?=$key?>" value="<?=$one?>"/>
                </div>
            </div>
        <?php } ?>
        <input type="submit" value="<?=Yii::t('backend', 'Submit')?>"/>
    </form>
<?php } ?>