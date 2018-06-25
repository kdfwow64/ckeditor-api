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
<div class="styles row">
    <div class="actions span2">
        <ul class="nav nav-list">
            <li class="nav-header"><?php echo __('Actions'); ?></li>
            <li><?php echo $this->Html->link(__('List Styles'), array('action' => 'index')); ?></li>
        </ul>
        <div class="row-fluid">
            <span>&nbsp;</span>
            <?php echo $this->Form->postLink(__('Delete Style'), array('action' => 'delete', $this->Form->value('Style.id')), array('class' => 'btn btn-danger'), __('Are you sure you want to delete "%s"?', $this->Form->value('Style.title'))); ?>
        </div>
    </div>
    <div class="styles span10">
        <?php echo $this->Form->create('Style', array('class' => 'form-horizontal')); ?>
        <fieldset>
            <legend><?php echo __('Edit Style'); ?></legend>
            <?php
            echo $this->Form->input('id');
            echo $this->Form->input('title', array('label' => __('Title')));
            echo $this->Form->codeMirror('css', array('id' => 'csseditor', 'syntax' => 'css', 'label' => __('Style CSS')));
            ?>
            <div class="form-actions">
                <?php echo $this->Form->submit(__('Submit'), array('class' => 'btn btn-primary', 'div' => false)); ?>
                <?php echo $this->Html->link(__('Cancel'), array('controller' => 'styles', 'action' => 'index'), array('class' => 'btn btn-cancel')); ?>
            </div>
        </fieldset>
        <?php echo $this->Form->end(); ?>
    </div>
</div>