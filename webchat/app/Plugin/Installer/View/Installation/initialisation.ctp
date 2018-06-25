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
        <li class="active">Database Initialisation <span class="divider">/</span></li>
        <li class="muted">System Settings <span class="divider">/</span></li>
        <li class="muted">Administrator <span class="divider">/</span></li>
        <li class="muted">Finalisation <span class="divider">/</span></li>
        <li class="muted">Completed</li>
    </ul>

    <div class="progress">
        <div class="bar" style="width: 34%; color: #000;">34%</div>
    </div>

    <hr />
    <p><?php echo String::insert(__('You have successfully configured the database connection. Please click ":btn_name" to create all necessary database tables.'), array('btn_name' => __('Initialise Database'))); ?></p>
    <?php
    echo $this->Form->create(false, array('inputDefaults' => array('autocomplete' => 'off')));
    echo '<div class="form-actions">' . $this->Form->submit(__('Initialise Database'), array('class' => 'btn btn-primary')) . '</div>';
    echo $this->Form->end();
    ?>
</div>
