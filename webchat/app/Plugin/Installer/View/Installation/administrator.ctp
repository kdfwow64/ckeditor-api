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
<div class="installation form">
    <?php
    $testing = true;

    echo $this->Html->image('common/logo-clientengage-large.png', array('alt' => 'ClientEngage Logo', 'style' => 'margin-bottom: 25px;'));
    ?>
    <ul class="breadcrumb">
        <li><strong>Installation Steps:</strong></li>
        <li class="muted">Requirements <span class="divider">/</span></li>
        <li class="muted">Database Setup <span class="divider">/</span></li>
        <li class="muted">Database Initialisation <span class="divider">/</span></li>
        <li class="muted">System Settings <span class="divider">/</span></li>
        <li class="active">Administrator <span class="divider">/</span></li>
        <li class="muted">Finalisation <span class="divider">/</span></li>
        <li class="muted">Completed</li>
    </ul>

    <div class="progress">
        <div class="bar" style="width: 68%;">68%</div>
    </div>

    <hr />

    <?php echo $this->Form->create('User'); ?>
    <fieldset>
        <?php
        echo '<h3 class="controls">' . __('Administrator Settings') . '</h3>';
        echo $this->Form->input('username', array('label' => __('Username')));
        echo $this->Form->input('email', array('label' => __('Email')));
        echo $this->Form->input('password', array('label' => __('Password'), 'type' => 'password', 'value' => '', 'placeholder' => __('Enter new password'), 'autocomplete' => 'off'));
        echo $this->Form->input('password_confirm', array('label' => __('Confirm Password'), 'type' => 'password', 'value' => '', 'placeholder' => __('Repeat new password'), 'autocomplete' => 'off'));
        ?>
    </fieldset>
    <div class="form-actions">
        <?php echo $this->Form->button(__('Finalise Installation'), array('class' => 'btn btn-primary', 'div' => false, 'escape' => false)); ?>
    </div>    
    <?php echo $this->Form->end(); ?> 


</div>
