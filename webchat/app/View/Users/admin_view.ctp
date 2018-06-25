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
<div class="users view row">
    <div class="actions span2">
        <ul class="nav nav-list">
            <li class="nav-header"><?php echo __('Actions'); ?></li>
            <li><?php echo $this->Html->link(__('List Users'), array('action' => 'index')); ?> </li>
        </ul>

        <div class="row-fluid">
            <span>&nbsp;</span>
            <?php echo $this->Html->link(__('Edit User'), array('action' => 'edit', $user['User']['id']), array('class' => 'btn span12')); ?>
            <?php echo $this->Form->postLink(__('Delete User'), array('action' => 'delete', $user['User']['id']), array('class' => 'btn btn-danger span12'), __('Are you sure you want to delete "%s"?', $user['User']['username'])); ?>
        </div>
    </div>
    <div class="span10">
        <h2><?php echo __('User'); ?></h2>
        <dl>
            <dt><?php echo __('Username'); ?></dt>
            <dd>
                <?php echo h($user['User']['username']); ?>
                &nbsp;
            </dd>
            <dt><?php echo __('Email'); ?></dt>
            <dd>
                <?php echo h($user['User']['email']); ?>
                &nbsp;
            </dd>
            <dt><?php echo __('Active'); ?></dt>
            <dd>
                <?php echo $this->Layout->boolYesNo($user['User']['active']); ?>
                &nbsp;
            </dd>
            <dt><?php echo __('Created'); ?></dt>
            <dd>
                <?php echo $this->Layout->displayTimeDefault($user['User']['created']); ?>
                &nbsp;
            </dd>
            <dt><?php echo __('Modified'); ?></dt>
            <dd>
                <?php echo $this->Layout->displayTimeDefault($user['User']['modified']); ?>
                &nbsp;
            </dd>
            <?php if (false): ?>
                <dt>&nbsp;</dt><dd>&nbsp;</dd>
                <dt><?php echo __('Receives Notifications for the Following Visitorforms:'); ?></dt>
                <dd>
                    <ul>
                        <?php
                        foreach ($user['NotificationUser'] as $notification)
                        {
                            echo '<li>' . $this->Html->link($notification['title'], array('controller' => 'visitorforms', 'action' => 'view', $notification['id'])) . '</li>';
                        }
                        ?>
                    </ul>
                    &nbsp;
                </dd>
            <?php endif; ?>

        </dl>
    </div>
</div>