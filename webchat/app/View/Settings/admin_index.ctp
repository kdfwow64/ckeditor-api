<?php
/**
 * 
 * ClientEngage: ClientEngage Visitor Chat (http://www.clientengage.com)
 * Copyright 2013, ClientEngage (http://www.clientengage.com)
 *
 * You must have purchased a valid license from CodeCanyon in order to have 
 * the permission to use this file.
 * 
 * You may only use this file according to the respective licensing terms 
 * you agreed to when purchasing this item on CodeCanyon.
 * 
 * 
 * 
 *
 * @author          ClientEngage <contact@clientengage.com>
 * @copyright       Copyright 2013, ClientEngage (http://www.clientengage.com)
 * @link            http://www.clientengage.com ClientEngage
 * @since           ClientEngage - Visitor Chat v 1.0
 * 
 */
?>
<div class="settings row">
    <div class="settings span12">
        <?php echo $this->Form->create('Setting'); ?>	<fieldset>
            <legend><?php echo __('Edit Settings'); ?></legend>
            <?php
            $urlOut = rtrim(str_replace('https://', '', str_replace('http://', '', Router::url(array('controller' => 'contents', 'action' => 'chat_javascript', 'admin' => false), true))), '/');

            $code = <<<CODE
<!-- Visitor Chat -->
<script type="text/javascript">
    function loadVC() {
      var vcjs = document.createElement('script'); vcjs.type = 'text/javascript'; 
      vcjs.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + '{$urlOut}'; 
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vcjs, s);
    };
    if (window.addEventListener) window.addEventListener('load', loadVC, false); 
    else if (window.attachEvent) window.attachEvent('onload', loadVC);
</script>
<!-- Visitor Chat -->   
CODE;
            ?>
            <div class="accordion" id="accordion2">
                <div class="accordion-group">
                    <div class="accordion-heading">
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                            <i class="ico-script_code"></i> <?php echo __('JavaScript Code'); ?>
                        </a>
                    </div>
                    <div id="collapseTwo" class="accordion-body collapse">
                        <div class="accordion-inner">
                            <?php echo '<pre>' . htmlentities($code) . '</pre>'; ?>
                            <?php echo '<span>' . __('Chat API Url') . ': </span><code>' . Router::url('/', true) . '</code>'; ?>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <?php
            echo $this->Form->input('ApiUrl', array('label' => __('Chat API URL'), 'type' => 'text', 'value' => Router::url('/', true), 'readonly' => true, 'class' => 'span12'));
            echo $this->Form->input('System-language', array('label' => __('System Language'), 'type' => 'select', 'options' => AppLanguages::getAll()));
            echo $this->Form->timezone('System-timezone', array('label' => __('System Timezone')));
            echo $this->Form->input('Chat-style_id', array('label' => __('Chat Style'), 'type' => 'select', 'options' => $styles));
            echo $this->Form->input('Chat-animate_hover', array('label' => __('Hover Animation') . $this->Layout->renderHelpIcon(__('If you activate this option, the chat will be shown with half/transparency. The transparency is removed when you hover the chat, or when it is open.'))));
            echo $this->Form->input('Chat-hide_mobile', array('label' => __('Hide Chat for Mobile Devices') . $this->Layout->renderHelpIcon(__('If you activate this option, the chat will not be shown for mobile devices.'))));
            echo $this->Form->input('Chat-hide_email', array('label' => __('Hide Email Field on Signup') . $this->Layout->renderHelpIcon(__('If you activate this option, the email field will not be shown in the signup form. Instead, every visitor will be assigned the generic email address "not.provided@example.com".'))));
            echo $this->Form->input('Chat-hide_offline', array('label' => __('Hide Chat When Offline') . $this->Layout->renderHelpIcon(__('If you activate this option, the chat will be entirely hidden until an operator comes online.'))));

            echo $this->Form->input('Email-send_notifications', array('label' => __('Send Email Notifications') . $this->Layout->renderHelpIcon(__('Check this box and configure the email transport if you wish to be notified when a visitor submits an enquiry. Please note that the settings below are the sender AND receiver of the email notifications.')), 'class' => 'check_send_notifications'));
            $this->Html->scriptBlock('
              $(function() {

                if($(".select-transport").val() == "mail")
                    $(".smtp-settings").hide();

                $(".select-transport").change(function() {
                    if($(this).val() == "mail")
                        $(".smtp-settings").fadeOut();
                    else
                        $(".smtp-settings").fadeIn();
                });
                
                if(!$(".check_send_notifications").is(":checked"))
                    $(".email_settings").hide();

                $(".check_send_notifications").change(function() {
                    if(!$(this).is(":checked"))
                        $(".email_settings").fadeOut();
                    else
                        $(".email_settings").fadeIn();
                });
                
              });
              ', array('inline' => false));

            echo '<div class="well email_settings"><h3 class="controls">' . __('Email Settings') . '</h3>';
            echo $this->Form->input('Email-email', array('label' => __('Sender Email'), 'class' => 'span12'));
            echo $this->Form->input('Email-sender', array('label' => __('Sender Name'), 'class' => 'span12'));
            echo $this->Form->input('Email-transport', array('label' => __('Transport Method'), 'type' => 'select', 'options' => array('mail' => __('PHP mail() function'), 'smtp' => __('SMTP account')), 'class' => 'select-transport'));

            echo '<div class="well smtp-settings"><h3 class="controls">' . __('SMTP Settings') . '</h3>';
            echo '<p class="controls" style="width: 450px; font-size: 11px;">' . __('Please enter your SMTP details below. For example, for GMail you need to use the following data: ssl://smtp.gmail.com (host), 465 (port), your.name@gmail.com (username) and your password. After sending the test-email it is <strong>important</strong> that you save your changes by clicking "Save Configuration" below.') . '</p>';
            echo $this->Form->input('Email-host', array('label' => __('Host'), 'class' => 'span12'));
            echo $this->Form->input('Email-port', array('label' => __('Port'), 'class' => 'span12'));
            echo $this->Form->input('Email-username', array('label' => __('Username'), 'class' => 'span12'));
            echo $this->Form->input('Email-password', array('label' => __('Password'), 'type' => 'password'));
            echo $this->Form->input('test-email', array('name' => 'test-email', 'label' => __('Test-Email'), 'class' => 'input-medium', 'after' => $this->Form->button(__('Send Test-Email'), array('name' => 'btn_test-email', 'class' => 'btn btn-mini')), 'class' => 'span12'));
            echo '</div></div>';



            echo '<h3 class="controls">' . __('Text Translations') . '</h3>';
            echo '<div class="row-fluid">';
            echo '<div class="span4">';
            echo $this->Form->input('Setting.Translationstrings.HeaderCurrentlyChatting', array('label' => __('Header (currently chatting)'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.HeaderOnline', array('label' => __('Header (online)'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.HeaderOffline', array('label' => __('Header (offline)'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.OperatorOfflineMessage', array('label' => __('Notification: operator offline'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.OfflineMessage', array('label' => __('Text: offline'), 'type' => 'textarea', 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.OnlineMessage', array('label' => __('Text: online'), 'type' => 'textarea', 'class' => 'span12'));
            echo '</div><div class="span4">';
            echo $this->Form->input('Setting.Translationstrings.UsernamePlaceholder', array('label' => __('Placeholder: username'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.EmailPlaceholder', array('label' => __('Placeholder: email'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.EnquiryMessagePlaceholder', array('label' => __('Placeholder: enquiry message'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.EnquiryButtonText', array('label' => __('Button: enquiry button'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.EnquirySubmitSuccess', array('label' => __('Message: enquiry submitted'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.StartChatButtonText', array('label' => __('Button: start chat'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.OperatorComposing', array('label' => __('Text: operator composing') . $this->Layout->renderHelpIcon(__('Use {username} as placeholder for the admin\'s name: {username} is typing...')), 'class' => 'span12'));

            echo '</div><div class="span4">';
            echo $this->Form->input('Setting.Translationstrings.FirstMessageText', array('label' => __('Text: first message'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ExitChatButtonText', array('label' => __('Button: exit chat'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ExitChatQuestionText', array('label' => __('Text: exit chat question'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ExitChatButtonConfirmText', array('label' => __('Button: exit chat confirm'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ExitChatButtonCancelText', array('label' => __('Button: exit chat cancel'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.MessagePlaceholderText', array('label' => __('Placeholder: message'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.MessageSendButtonText', array('label' => __('Button: send message'), 'class' => 'span12'));

            echo '</div></div>';

            echo '<h3 class="controls">' . __('Validation Translations') . '</h3>';
            echo '<div class="row-fluid">';
            echo '<div class="span4">';
            echo $this->Form->input('Setting.Translationstrings.ValidationEmailRequired', array('label' => __('Validation: email required'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ValidationEmailInvalid', array('label' => __('Validation: email invalid'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ValidationEmailMaxLength', array('label' => __('Validation: email maxlength'), 'class' => 'span12'));
            echo '</div><div class="span4">';
            echo $this->Form->input('Setting.Translationstrings.ValidationUsernameRequired', array('label' => __('Validation: username required'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ValidationUsernameMaxLength', array('label' => __('Validation: username maxlength'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ValidationEnquiryRequired', array('label' => __('Validation: enquiry required'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ValidationEnquiryMaxLength', array('label' => __('Validation: enquiry maxlength'), 'class' => 'span12'));
            echo '</div><div class="span4">';
            echo $this->Form->input('Setting.Translationstrings.ValidationMessageRequired', array('label' => __('Validation: message required'), 'class' => 'span12'));
            echo $this->Form->input('Setting.Translationstrings.ValidationMessageMaxLength', array('label' => __('Validation: message maxlength'), 'class' => 'span12'));
            echo '</div></div>';
            ?>
            <div class="form-actions">
                <?php echo $this->Form->submit(__('Submit'), array('class' => 'btn btn-primary blockinterface', 'div' => false)); ?>
            </div>
        </fieldset>
        <?php echo $this->Form->end(); ?>
    </div>

</div>



