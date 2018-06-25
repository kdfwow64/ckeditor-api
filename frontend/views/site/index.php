<?php
use yii\helpers\Html;
use yii\base\DynamicModel;
use dosamigos\tinymce\TinyMce;
use yii\widgets\ActiveForm;

$model = new \yii\base\DynamicModel(['source','result']);
$model->addRule(['source','result'], 'string');
$form = ActiveForm::begin();

?>
<div class="tMainContainer" id="tMainContainer">
    <h1><?=isset(Yii::$app->params['seotitle']) ? Yii::$app->params['seotitle'] : '';?></h1>
    <noscript>
        <p><strong>В вашем броузере отключен JavaScript, который необходим для работы сайта.</strong></p>
        <p>Вы можете <a href="https://www.enable-javascript.com/ru/" target=_blank>включить</a>
            JavaScript или воспользоваться <A href="https://translitor.org/classic/">классическим транслитом</A>.</p>
    </noscript>

    <form class="form" name="searchform">
        <div class="boxes">
            <div class="box source">
                <div class="tTextArea0">
                    <div class="tWzgBlock0 clearfix">
                        <ul class="tWzg">
                            <li class="no-xxs brd-r">
                                <input class="back" type="button" onclick="recovertext();setfoc();" title="<?= Yii::t('app', 'Return text, cancels up to 10 recent actions') ?>">
                            </li>
                            <li class="no-xs">
                                <input class="check" type="button" onclick="highlightall();setfoc();" title="<?= Yii::t('app', 'Select text') ?>">
                            </li>
                            <li class="no-xxs brd-r">
                                <input class="clear" type="button" highlight="red" onclick="cleartrans();setfoc();" title="<?= Yii::t('app', 'Delete text') ?>" >
                            </li>
                            <li class="no-xs">
                                <input class="print" type="button" onclick="getselectedtext(); setfoc(); document.secondaryform.action='/tools/print/'; document.secondaryform.setAttribute('target', '_blank'); document.secondaryform.submit();" title="<?= Yii::t('app', 'Print text') ?>">
                            </li>
                            <li class="no-xs">
                                <input class="orphography" type="button" highlight="green" onclick="SpellCheck();" title="<?= Yii::t('app', 'Check spelling') ?>">
                            </li>
                            <li class="brd-r" id="forhint1">
                                <input class="search" type="button" highlight="green" onclick="$('body,html').animate({scrollTop: $('#searchblock').offset().top}, 1000);" title="<?= Yii::t('app', 'Search') ?>">
                            </li>
                            <li class="no-xs brd-r">
                                <label for="turn_off_auto_transl" class="auto-translate"><?= Yii::t('app', 'Auto-translation') ?></label>
                                <div class="custom_checkbox">
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="turn_off_auto_transl"
                                            checked="checked"
                                            onclick="turn_off_auto_translate($(this));"
                                            title="Turn off auto translate"
                                        />
                                        <label
                                            for="turn_off_auto_transl"
                                            id="turn_off_auto_transl_label"
                                            title="Turn off auto translate"
                                        ></label>
                                    </div>
                                </div>
                            </li>
                            <li class="no-xs radio-btn">
                                <input id="transl_switch_latin" type="radio" name="transl_switch" value="0"/>
                                <label for="transl_switch_latin" class="brd-r"><?= Yii::t('app', 'Latin') ?></label>
                                <input id="transl_switch_transl" type="radio" name="transl_switch" value="1" checked/>
                                <label for="transl_switch_transl" class="brd-r"><?= Yii::t('app', 'Translit') ?></label>
                                <input id="transl_switch_cyril" type="radio" name="transl_switch" value="2"/>
                                <label for="transl_switch_cyril" class=""><?= Yii::t('app', 'Cyrillic') ?></label>
                                <div class="translit_switcher_box_container">
                                    <div class="translit_switcher" data-poss="center"></div>
                                </div>
                            </li>
                            <li hidden>
                                <input class="russian" type="button" onclick="translatealltocharset2();setfoc();" title="<?= Yii::t('app', 'Translate all text to сyrillic') ?>">
                            </li>
                            <li hidden>
                                <input class="v-translit" type="button" onclick="translatealltocharset1();setfoc();" title="<?= Yii::t('app', 'Translate all text to latin') ?>">
                            </li>
                        </ul>
                    </div>
                </div>
                <input type="hidden" id="language_from" value="ru">
                <ul class="languages from">
                    <li data-lang="ru"  class="item active">русский</li>
                    <li data-lang="uk" class="item">украинский</li>
                    <li data-lang="be" class="item">белорусский</li>
                    <li data-lang="pl" class="item">польский</li>
                    <li data-lang="kk" class="item">казахский</li>
                    <li data-lang="hy" class="item">армянский</li>
                    <li onclick="getUserLanguageGoogle(true);"><?= Yii::t('app', 'determine the language') ?></li>
                    <li class="languages_list_li">
                        <input class="turn_list6" type="checkbox" />
                        <div class="arrow"></div>
                        <div class="languages_list from">
                            <?php echo $this->render('//layouts/parts/language_table.php',['id'=>"language_from_table",'default_language'=>'ru']);?>
                        </div>
                    </li>
                </ul>
                <div class="clear-b"></div>
                <textarea  style="display: none!important;" dir="ltr" id="sourse1" name="subject" rows="18" wrap="virtual" class="txtarea"
                          onkeypress="translate_letter(event);"
                          onkeyup="lettcount(); savechanges(); key_up_process();"></textarea>

                <?= $form->field($model, 'source')->widget(TinyMce::className(), [
                    'options' => ['rows' => 15],
                    'language' => 'ru',
                    'clientOptions' => [
                        'plugins' => [
                            "advlist lists link image anchor directionality code lineheight",
                            "searchreplace visualblocks visualchars pagebreak print ",
                            "insertdatetime media table contextmenu paste textcolor colorpicker",
                            "legacyoutput autolink fullpage fullscreen preview imagetools wordcount",
                            "toc spellchecker charmap codesample autosave hr nonbreaking charactercount9 my_check_func1 my_update_content"
                        ],
                        'toolbar' => ["newdocument copy paste undo redo restoredraft | styleselect fontsizeselect fontselect lineheightselect forecolor backcolor | bold italic underline subscript superscript blockquote alignleft aligncenter alignright alignjustify alignnone removeformat nonbreaking | bullist numlist outdent indent | link image hr | fullscreen codesample | ltr rtl fullpage bdesk_photo responsivefilemanager spellchecker charmap preview toc | code charactercount9 my_check_func1"],
                    ]
                ])->label(false);?>
                <input id="input-data-char-count" type="hidden" value="0">
                <button class="vk_icon" onclick="VirtualKeyboard.toggle('sourse','td'); return false;"></button>
                <div id="td"></div>
<!--                <div class="letterscounter_wraper" title="Счетчик количества символов в тексте">-->
<!--                    <span id="letterscounter">0</span>/10000-->
<!--                </div>-->
                <div class="recomended-language">
                    <span class="text"><?= Yii::t('app', 'Translate from') ?>:</span>
                    <span class="lang" data-val="ru">Русский</span>
                </div>
            </div>
            <div class="arrows">
                <div class="arrow-right" onclick="google_translate();">></div>
                <div class="arrow-left" onclick="move_data_from_right_to_left();"><</div>
            </div>
            <div class="box result">
                <div class="margin-top"></div>
                <input type="hidden" id="language_to" value="en">
                <ul class="languages to">
                    <li data-lang="en" class="item active">английский</li>
                    <li data-lang="de" class="item">немецкий</li>
                    <li data-lang="fr" class="item">французкий</li>
                    <li data-lang="es" class="item">испанский</li>
                    <li data-lang="it" class="item">итальянский</li>
                    <li data-lang="pl" class="item">польский</li>
                    <li class="languages_list_li right">
                        <input class="turn_list7" type="checkbox" />
                        <div class="arrow"></div>
                        <div class="languages_list to">
                            <?php echo $this->render('//layouts/parts/language_table.php',['id'=>"language_to_table",'default_language'=>'en']);?>
                        </div>
                    </li>
                </ul>
                <input
                    id="translate_btn"
                    type="button"
                    disabled="disabled"
                    onclick="google_translate();setfoc();"
                    title="<?= Yii::t('app', 'Translate') ?>"
                    value="<?= Yii::t('app', 'Translate') ?>">
                <span style="display: none!important;" id="translate_span"></span>
                <div class="clear-b"></div>
                <?= $form->field($model, 'result')->widget(TinyMce::className(), [
                    'options' => ['rows' => 15],
                    'language' => 'ru',
                    'clientOptions' => [
                        'plugins' => [
                            "advlist lists link image anchor directionality code lineheight",
                            "searchreplace visualblocks visualchars pagebreak print ",
                            "insertdatetime media table contextmenu paste textcolor colorpicker",
                            "legacyoutput autolink fullpage fullscreen preview imagetools wordcount",
                            "toc spellchecker charmap codesample autosave hr nonbreaking charactercount9"
                        ],
                        'toolbar' => ["newdocument copy paste undo redo restoredraft | styleselect fontsizeselect fontselect lineheightselect forecolor backcolor | bold italic underline subscript superscript blockquote alignleft aligncenter alignright alignjustify alignnone removeformat nonbreaking | bullist numlist outdent indent | link image hr | fullscreen codesample | ltr rtl fullpage bdesk_photo responsivefilemanager spellchecker charmap preview toc | code charactercount9"],
                    ]
                ])->label(false);?>
            </div>
        </div>
    </form>

    <form name="secondaryform" method="POST">
        <input type="hidden" name="subject" value="">
        <input type="hidden" name="extendedsubject" value="">
        <input type="hidden" name="direction" value="ru">
        <input type="hidden" name="cp" value="">
    </form>
    <?php /*?>
    <!--    нижний баннер-->
    <div class="home-bottom-ads">
        <?php if (Yii::$app->keyStorage->get('ads.top_landlords_search_page')) : ?>
            <div class="row">
                <div class="col-xs-12" style="margin-bottom: 20px;">
                    <?= Yii::$app->keyStorage->get('ads.top_landlords_search_page')?>
                </div>
            </div>
        <?php endif; ?>
    </div>
    <?php */?>


</div>
<script src="/js/custom.js?t=1"></script>
<script>
    var api_key = '<?=$api_key?>';
    //Init();//for keyboard
    //console.log(EXPERIMENT_IDS);
</script>




<?php //echo $this->render('//layouts/parts/google-code.php');?>
<?php if (!empty(Yii::$app->params['text_block_1']) && Yii::$app->controller->id != 'cabinet') {
    echo Yii::$app->params['text_block_1'];
} ?>


<!--<textarea id="text11" rows="6" wrap="soft" onfocus="VirtualKeyboard.attachInput(this)"></textarea>-->

<!--<div id="td"></div>-->
<div id="lfilter" onclick="setFilter()"></div>
<div id="layouts"></div>
<script type="text/javascript" src="/virtual_kb/vk_loader.js?vk_layout=CN%20Chinese%20Simpl.%20Pinyin&vk_skin=flat_gray" ></script>