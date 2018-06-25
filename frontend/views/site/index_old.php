<div class="tMainContainer" id="tMainContainer">
    <noscript>
        <p><strong>В вашем броузере отключен JavaScript, который необходим для работы сайта.</strong></p>
        <p>Вы можете <a href="https://www.enable-javascript.com/ru/" target=_blank>включить</a>
            JavaScript или воспользоваться <A href="https://translitor.org/classic/">классическим транслитом</A>.</p>
    </noscript>

    <form class="form" name="searchform">
        <div class="tBoxBannerLeft">
            <div class="tBoxWzg">
                <div class="tTextArea0">
                    <div class="tWzgBlock0 clearfix">
                        <ul class="tWzg">
                            <li class="no-xxs"><input class="back" type="button" onclick="recovertext();setfoc();" title="Вернуть текст, отменяет до 10 последних действий"></li>
                            <li class="no-xs"><input class="check" type="button" onclick="highlightall();setfoc();" title="Выделить текст"></li>
                            <li class="no-xxs"><input class="clear" type="button" highlight="red" onclick="cleartrans();setfoc();" title="Удалить текст" ></li>
                            <li class="no-xs"><input class="print" type="button" onclick="getselectedtext(); setfoc(); document.secondaryform.action='/tools/print/'; document.secondaryform.setAttribute('target', '_blank'); document.secondaryform.submit();" title="Распечатать текст"></li>
                            <!--                            <li class="no-xs"><input class="orphography" type="button" highlight="green" onclick="SpellCheck();" title="Проверить орфографию"></li>-->
                            <li class="no-xs">
                                <div class="checkbox-container">
                                    <div>
                                        <input
                                            class="orphography"
                                            id="turn_off_auto_transl"
                                            type="checkbox"
                                            highlight="green"
                                            onclick="turn_off_auto_translate($(this));"
                                            checked="checked"
                                            title="Turn off auto translate">
                                        <label
                                            id="turn_off_auto_transl_label"
                                            for="turn_off_auto_transl"
                                            title="Turn off auto translate"></label>
                                    </div>
                                </div>
                            </li>
                            <li><input class="russian" type="button" onclick="translatealltocharset2();setfoc();" title="Перевести весь текст сразу"></li>
                            <li><input class="v-translit" type="button" onclick="translatealltocharset1();setfoc();" title="Перевести весь текст сразу в латиницу"></li>
                            <li id="forhint1"><input class="search" type="button" highlight="green" onclick="$('body,html').animate({scrollTop: $('#searchblock').offset().top}, 1000);" title="Искать"></li>
                            <li>
                                <div class="tSwitcherContainer">
                                    <span class="tcbs" id="tcb_switch">
                                      <span onclick="setfoc();" id="translit_button" class="nowrap active">Translit</span>
                                      <input onclick="changelanguage();setfoc();" id="translit_switch_icon" class="switch" type="button">
                                      <span onclick="changelanguage();" class="nowrap tcbul" id="user_current_lang">Русский</span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div class="txtarea_translate" style="display: none!important">
                            <?php //echo $this->render('//layouts/parts/language-list.php',['id'=>"your_language",'default_language'=>'ru']);?>
                            <br>
                        </div>
                        <div id="hint1" onclick="$('#hint1').css('display','none');setfoc();"
                             style="display: none; top: 32px; left: 319.438px;"></div>
                    </div>
                </div>
                <textarea dir="ltr" name="subject" rows="18" wrap="virtual" class="txtarea" onkeypress="translate_letter(event);" onkeyup="lettcount(); savechanges(); key_up_process();"></textarea>
                <div id="gt-lang-left">
                    <div id="gt-sl-sugg" class="lang-button-cont">
                        <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-checked jfk-button-collapse-right">русский</div>
                        <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">украинский</div>
                        <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">белорусский</div>
                        <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">польский</div>
                        <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">казахский</div>
                        <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">армянский</div>
                        <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right" onclick="getUserLanguageGoogle()">Определить язык</div>
                    </div>
                    <label for=gt-sl class="gt-lang-lbl nje"></label>
                    <?php echo $this->render('//layouts/parts/language_google.php',['id'=>"from_language",'default_language'=>'ru']);?>
                </div>
                <div id=gt-src-c class=g-unit>
                    <div id=gt-src-p>
                        <input type=hidden name=js value=n id=js>
                        <input type=hidden name=prev value="_t" id=prev>
                        <input type=hidden name=hl value="ru" id=hl>
                        <input type=hidden name=ie value="UTF-8">
                        <div id=gt-src-wrap >
                            <label for=source style="display:none">Перекласти текст або веб-сторінку</label>
                            <div id=gt-src-is style="display:none" class="gt-is gt-is-desktop">
                                <div id=gt-src-is-list class=gt-is-ctr></div>
                            </div>
                            <div style="width: 100%;">
                                <textarea id=source name="subject" wrap=SOFT onkeypress="translate_letter(event);" onkeyup="savechanges(); key_up_process();" tabindex=0 dir="ltr" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"></textarea>
                                <textarea id=source-is name=text-is disabled wrap=SOFT dir="ltr" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" ></textarea>
                            </div>
                            <script>
                                (function(){var src = document.getElementById('source');
                                    src.focus();
                                    src.select();
                                    src.style.boxSizing=src.style.WebkitBoxSizing=src.style.MozBoxSizing=src.style.MsBoxSizing='border-box';})();
                            </script>
                            <div id="gt-src-tools">
                                <div id="gt-src-tools-l"></div>
                                <div id="gt-src-tools-r"></div>
                            </div>
                            <div id="gt-src-cc">
                                <div id="gt-src-cc-max" style="display: none;" class="cc-msg" role="alert" aria-live="alert">Перевищено максимальну кількість символів</div>
                                <div id="gt-src-cc-ctr" class="cc-ctr"></div>
                            </div>
                        </div>
                    </div>
                    <div id="gt-ovfl" style="display: none;">
                        <div id="gt-ovfl-hdr">
                            <span id="gt-ovfl-msg" class="ovfl-msg"></span>
                            <div id="gt-ovfl-xlt" class="ovfl-xlt" role="button">
                                <div id="gt-ovfl-xlt-arrow" class="ovfl-xlt-arrow"></div>
                                <span id="gt-ovfl-xlt-more" class="ovfl-xlt-more">ПЕРЕКЛАСТИ ЩЕ</span>
                            </div>
                        </div>
                        <div id="gt-ovfl-text" class="ovfl-text"></div>
                    </div>
                </div>

                <!--                <div class="tBoxBannerLeft">-->
                <!--                    <div class="letterscounter_wraper" title="Счетчик количества символов в тексте"><span id="letterscounter">0</span>/5000</div>-->
                <!--                </div>-->
            </div>
            <div class="txtarea_translate">
                <div id=gt-lang-right class=goog-inline-block>
                    <div id=gt-lang-tgt>
                        <div id="gt-tl-sugg2" class="gt-lang-sugg-message goog-inline-block je lang-button-cont" style="display: none"></div>
                        <div id="gt-tl-sugg" class="gt-lang-sugg-message goog-inline-block je lang-button-cont">
                            <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-checked jfk-button-collapse-right">английский</div>
                            <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">немецкий</div>
                            <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">французкий</div>
                            <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">испанский</div>
                            <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">итальянский</div>
                            <div class="goog-inline-block jfk-button jfk-button-standard jfk-button-collapse-left jfk-button-collapse-right">польский</div>
                        </div>
                        <label for=gt-tl class="gt-lang-lbl nje"></label>
                        <?php echo $this->render('//layouts/parts/language_google.php',['id'=>"gt-tl",'name'=>'tl','default_language'=>'ru']);?>
                        <div id="gt-tl-gms" class="goog-inline-block goog-flat-menu-button goog-flat-menu-button-collapse-left gt-gms-icon je">
                            <div class="goog-inline-block goog-flat-menu-button-caption"> </div>
                            <div class="goog-inline-block goog-flat-menu-button-dropdown"></div>
                        </div>
                    </div>

                    <input
                        style="background-color: #4184f2; color: #ffffff;  padding: 6px 16px;
                                         border-radius: 3px; text-decoration: none;"
                        id="translate_btn"
                        type="button"
                        disabled="disabled"
                        onclick="google_translate();setfoc();"
                        title="Перевести"
                        value="Перевести">

                    <div id=gt-lang-submit>
                        <input type=submit id=gt-submit value="Перекласти" tabindex=0 class="jfk-button jfk-button-action" style="display: none"></div>
                </div>
                <div id=gt-res-c class=g-unit>
                    <div id=gt-res-p>
                        <div id=gt-res-data >
                            <div id=gt-res-wrap>
                                <div id="gt-res-content">
                                    <div id="gt-res-dir-ctr1">
                                        <span id="translate_span" class="short_text"></span>
                                    </div>
                                    <div id="gt-res-dir-ctr" dir="rtl" style="display: none">
                                        <span id=gt-res-error style="display:none"></span>
                                        <span id=result_box class="short_text"></span>
                                    </div>
                                </div>
                                <div id="gt-edit" style="display:none">
                                    <div style="width: 100%;">
                                        <textarea id=contribute-target name=edit-text wrap=SOFT tabindex=0 spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" ></textarea>
                                    </div>
                                </div>
                                <div id=gt-res-tools>
                                    <div id=gt-res-tools-l>
                                        <div id=gt-pb-star></div>
                                    </div>
                                    <div id=gt-res-tools-r><div id=gt-res-undo></div>
                                    </div>
                                </div>
                            </div>
                            <div id="gt-community-card-c"></div>
                            <div id=res-translit class=translit dir=ltr style="text-align:"></div>
                        </div>
                    </div>
                </div>
                <div >
                    <?php echo $this->render('//layouts/parts/language_google.php',['id'=>"my_language_select",'default_language'=>'']);?>
                </div>
                <!--                <br>-->
                <!--                <span id="translate_span"></span>-->

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
