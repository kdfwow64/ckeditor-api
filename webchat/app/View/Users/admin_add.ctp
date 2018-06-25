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
<div class="users row">
    <div class="actions span2">
        <ul class="nav nav-list">
            <li class="nav-header"><?php echo __('Actions'); ?></li>
            <li><?php echo $this->Html->link(__('List Users'), array('action' => 'index')); ?></li>
        </ul>
    </div>
    <div class="users span10">
        <?php echo $this->Form->create('User', array('class' => 'form-horizontal')); ?>
        <fieldset>
            <legend><?php echo __('Add User'); ?></legend>
            <?php
            if ($this->Form->value('User.id') !== AppAuth::user('id'))
            {
                echo $this->Form->input('role', array('class' => 'select_role', 'label' => __('Type'), 'type' => 'select', 'options' => array('admin' => __('Administrator'), 'operator' => __('Operator'))));
                echo $this->Form->input('permissions', array('div' => 'input select_permissions', 'label' => __('Permissions'), 'type' => 'select', 'multiple' => 'checkbox', 'options' => array('past_discussions' => __('Past Discussions'), 'enquiries' => __('Enquiries'), 'administration' => __('Administration'))));
            }
            echo $this->Form->input('username', array('label' => __('Username')));
            echo $this->Form->input('email', array('label' => __('Email')));
            echo $this->Form->input('password', array('label' => __('Password')));
            echo $this->Form->input('password_confirm', array('type' => 'password', 'value' => '', 'placeholder' => __('Repeat new password'), 'autocomplete' => 'off', 'label' => __('Confirm Password')));
            echo $this->Form->input('active', array('label' => __('Active')));
            if (false)
                echo $this->Form->input('NotificationUser', array('label' => __('Receive notifications from following forms'), 'multiple' => 'checkbox'));
            ?>
            <div class="form-actions">
                <?php echo $this->Form->submit(__('Submit'), array('class' => 'btn btn-primary', 'div' => false)); ?>
                <?php echo $this->Html->link(__('Cancel'), array('action' => 'index'), array('class' => 'btn btn-cancel')); ?>
            </div>
        </fieldset>
        <?php echo $this->Form->end(); ?>
    </div>
</div>
<script type="text/javascript">
    $(function() {

        var conditionalDisplay = function() {
            if ($(".select_role").val() == 'admin')
            {
                $(".select_permissions").hide();
            }
            else
            {
                $(".select_permissions").show();
            }
        };

        conditionalDisplay();

        $(".select_role").change(conditionalDisplay);
    });
</script>