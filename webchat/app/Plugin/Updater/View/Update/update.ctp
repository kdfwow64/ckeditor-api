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
<div class="updater form">
    <?php
    $testing = true;

    echo $this->Html->image('common/logo-clientengage-large.png', array('alt' => 'ClientEngage Logo', 'style' => 'margin-bottom: 25px;'));
    ?>
    <ul class="breadcrumb">
        <li><strong>Update Steps:</strong></li>
        <li class="active">Requirements <span class="divider">/</span></li>
        <li class="active">Update <span class="divider">/</span></li>
        <li class="muted">Completed</li>
    </ul>

    <div class="progress">
        <div class="bar" style="width: 50%; color: #000;">50%</div>
    </div>

    <hr />

    <h1><?php echo __('Important: after running the update, please navigate to "Administration -> Settings", check any new settings and then click SAVE. Even if you do not change any settings, it is important to re-save the configuration.'); ?></h1>

    <?php echo $this->Form->create(null); ?>
    <?php echo $this->Form->submit('Perform Update', array('class' => 'btn btn-primary btn-large')); ?>
    <?php echo $this->Form->end(); ?>

</div>
