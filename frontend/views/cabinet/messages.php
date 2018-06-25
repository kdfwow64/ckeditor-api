<?php
//$this->title = 'Вакансии';
$this->registerJsFile('/design/js/jquery.mCustomScrollbar.min.js', ['depends' => 'yii\web\JqueryAsset']);
$this->registerJsFile('/design/js/messages.js', ['depends' => 'yii\web\JqueryAsset']);
?>

<div class="fp-wrapper">
    <div class="fp-wrapper-anim">

        <section class="vl-page-content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-4">
                        <div class="cn-block tp-left-filter-wrap msg-block">
                            <div class="cn-block-label">
                                <h2>
                                    Messages
                                </h2>
                            </div>
                            <div class="msg-search-wrap">
                                <div class="form-group">
                                    <input type="text" placeholder="Search...">
                                </div>
                            </div>
                            <div class="msg-userlist-wrap">
                                <div class="msg-userlist-empty tac shadow-elem">
                                    <p>
                                        Your messages are empty. :(
                                    </p>
                                </div>
                                <div class="msg-userlist-error tac shadow-elem">
                                    <p>
                                        No matches found
                                    </p>
                                </div>
                                <div class="msg-userlist-container">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-md-8">
                        <div class="cn-block msg-block msg-main-wrap empty">
                            <div class="mp-cont-wrap">
                                <div class="msg-main-top">
                                    <a>
                                        <span>
                                            Please choose a chat
                                        </span>
                                    </a>
                                    <a href="">
                                        <div class="msg-avatar">
                                            <div class="ava-block" style="background-image: url('/design/img/user.png')"></div>
                                            <div class="msg-avatar-ind online"></div>
                                        </div>
                                    </a>
                                </div>
                                <div class="msg-main-content">
                                    <div class="msg-main-stage">
                                        <!--                                        -->
                                    </div>
                                </div>
                                <div class="msg-main-ctrl">
                                    <div class="form-group">
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <span>
                                            To send the message, press ctrl + enter
                                        </span>
                                        <button class="button msg-send">Send</button>
                                    </div>
                                </div>
                                <div class="msg-main-select">
                                    <img src="/design/img/empty-chat.png" alt="">
                                    <h3>
                                        Please select a chat.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>
</div>
