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
<div class="users index row">
    <div class="span12">
        <div class="btn-group pull-right">
            <?php
            echo $this->Html->link('<i class="ico-add"></i> ' . __('Create User'), array('action' => 'add'), array('class' => 'btn btn-primary', 'escape' => false));
            ?>
        </div> 
        <h2><?php echo __('Users'); ?></h2>
        <table class="table table-condensed" style="white-space:nowrap;">
            <thead>  
                <tr>
                    <th><?php echo $this->Paginator->sort('username', __('Username')); ?></th>
                    <th><?php echo $this->Paginator->sort('email', __('Email')); ?></th>
                    <th><?php echo $this->Paginator->sort('active', __('Active')); ?></th>
                    <th><?php echo $this->Paginator->sort('created', __('Created')); ?></th>
                    <th><?php echo $this->Paginator->sort('modified', __('Modified')); ?></th>
                    <th class="actions"><?php echo __('Actions'); ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td><?php echo h($user['User']['username']); ?>&nbsp;</td>
                        <td><?php echo h($user['User']['email']); ?>&nbsp;</td>
                        <td><?php echo $this->Layout->boolYesNo($user['User']['active']); ?>&nbsp;</td>
                        <td><?php echo $this->Layout->displayTimeDefault($user['User']['created']); ?>&nbsp;</td>
                        <td><?php echo $this->Layout->displayTimeDefault($user['User']['modified']); ?>&nbsp;</td>
                        <td class="actions">
                            <div class="btn-toolbar">
                                <div class="btn-group">
                                    <?php echo $this->Html->link(__('View'), array('action' => 'view', $user['User']['id']), array('class' => 'btn btn-mini')); ?>
                                    <?php echo $this->Html->link(__('Edit'), array('action' => 'edit', $user['User']['id']), array('class' => 'btn btn-mini')); ?>
                                    <?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $user['User']['id']), array('class' => 'btn btn-danger btn-mini'), __('Are you sure you want to delete # %s?', $user['User']['id'])); ?>
                                </div>
                            </div>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <?php
        echo $this->element('common/defaultpagination');
        ?>	
    </div>
</div>