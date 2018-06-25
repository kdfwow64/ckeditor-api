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
<div class="enquiries view row">
    <div class="actions span2">
        <ul class="nav nav-list">
            <li class="nav-header"><?php echo __('Actions'); ?></li>
            <li><?php echo $this->Html->link(__('List Enquiries'), array('action' => 'index')); ?> </li>
        </ul>
        <div class="row-fluid">
            <span>&nbsp;</span>
            <?php echo $this->Form->postLink(__('Delete Enquiry'), array('action' => 'delete', $enquiry['Enquiry']['id']), array('class' => 'btn btn-danger'), __('Are you sure you want to delete this enquiry from "%s"?', $enquiry['Enquiry']['username'])); ?>
        </div>
    </div>
    <div class="span10">
        <div class="well">
            <h2><?php echo __('Enquiry'); ?></h2>
            <dl>
                <dt><?php echo __('Avatar'); ?></dt>
                <dd>
                    <?php echo $this->Layout->renderGravatar($enquiry['Enquiry']['username'], $enquiry['Enquiry']['email'], 40); ?>
                    &nbsp;
                </dd>     
                <dt><?php echo __('Username'); ?></dt>
                <dd>
                    <?php echo h($enquiry['Enquiry']['username']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Email'); ?></dt>
                <dd>
                    <?php echo $this->Text->autoLinkEmails($enquiry['Enquiry']['email']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Read'); ?></dt>
                <dd>
                    <?php echo $this->Html->link($this->Layout->boolYesNo($enquiry['Enquiry']['read']), array('controller' => 'enquiries', 'action' => 'toggle_status', $enquiry['Enquiry']['id']), array('escape' => false)); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Current Page'); ?></dt>
                <dd>
                    <?php echo $this->Text->autoLinkUrls($enquiry['Enquiry']['current_page'], array('target' => '_blank')); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Referer'); ?></dt>
                <dd>
                    <?php echo $this->Text->autoLinkUrls($enquiry['Enquiry']['referer'], array('target' => '_blank')); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Visitor Languages'); ?></dt>
                <dd>
                    <?php echo $this->Layout->renderVisitorLanguages($enquiry['Enquiry']['visitor_languages']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('User Agent'); ?></dt>
                <dd>
                    <?php echo $this->Layout->renderUserAgent($enquiry['Enquiry']['user_agent']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Remote Address'); ?></dt>
                <dd>
                    <?php echo h($enquiry['Enquiry']['remote_address']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Created'); ?></dt>
                <dd>
                    <?php echo $this->Layout->displayTimeDefault($enquiry['Enquiry']['created']); ?>
                    &nbsp;
                </dd>
            </dl>
        </div>
        <div class="well">
            <h3><?php echo __('Message Text'); ?></h3>
            <?php echo nl2br($this->Layout->prepareMessageText($enquiry['Enquiry']['message'])); ?>
        </div>
    </div>
</div>
