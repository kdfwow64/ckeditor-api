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
<div class="users form">
    <?php echo $this->Form->create('User', array('type' => 'file')); ?>
    <fieldset>
        <legend><?php echo __('Edit Your Profile'); ?></legend>
        <?php
        echo $this->Form->input('id');
        echo $this->Form->input('username', array('label' => __('Username')));
        echo $this->Form->input('email', array('label' => __('Email')));
        echo $this->Form->input('password', array('type' => 'password', 'value' => '', 'placeholder' => __('Enter new password'), 'autocomplete' => 'off', 'label' => __('Password ') . $this->Layout->renderHelpIcon(__('Please leave empty if you do not wish you change your password.'))));
        echo $this->Form->input('password_confirm', array('type' => 'password', 'value' => '', 'placeholder' => __('Repeat new password'), 'autocomplete' => 'off', 'label' => __('Confirm Password')));
        ?>
    </fieldset>
    <div class="form-actions">
        <?php echo $this->Form->submit(__('Save Profile'), array('class' => 'btn btn-primary blockinterface')); ?>
    </div>    
</div>