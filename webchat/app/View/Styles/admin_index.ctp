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
<div class="styles index row">
    <div class="span12">
        <div class="btn-group pull-right">
            <?php
            echo $this->Html->link('<i class="ico-add"></i> ' . __('New Style'), array('action' => 'add'), array('class' => 'btn btn-primary', 'escape' => false));
            ?>
        </div> 
        <h2><?php echo __('Styles'); ?></h2>
        <table class="table table-condensed" style="white-space:nowrap;">
            <tr>
                <th class="actions"><?php echo __('Actions'); ?></th>
                <th><?php echo $this->Paginator->sort('title', __('Title')); ?></th>
                <th><?php echo $this->Paginator->sort('css', __('Style CSS')); ?></th>
                <th><?php echo $this->Paginator->sort('created', __('Created')); ?></th>
                <th><?php echo $this->Paginator->sort('modified', __('Modified')); ?></th>
            </tr>
            <?php foreach ($styles as $style): ?>
                <tr>
                    <td class="actions">
                        <div class="btn-toolbar">
                            <div class="btn-group">
                                <?php echo $this->Html->link(__('Edit'), array('action' => 'edit', $style['Style']['id']), array('class' => 'btn btn-mini')); ?>
                                <?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $style['Style']['id']), array('class' => 'btn btn-danger btn-mini'), __('Are you sure you want to delete "%s"?', $style['Style']['title'])); ?>
                            </div>
                        </div>
                    </td>
                    <td><?php echo h($style['Style']['title']); ?>&nbsp;</td>
                    <td><code><?php echo $this->Text->truncate($style['Style']['css'], 50, array()); ?></code>&nbsp;</td>
                    <td><?php echo $this->Layout->displayTimeDefault($style['Style']['created']); ?>&nbsp;</td>
                    <td><?php echo $this->Layout->displayTimeDefault($style['Style']['modified']); ?>&nbsp;</td>

                </tr>
            <?php endforeach; ?>
        </table>
        <?php
        echo $this->element('common/defaultpagination');
        ?>
    </div>
</div>
