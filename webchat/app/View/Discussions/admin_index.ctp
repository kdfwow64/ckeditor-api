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
<?php
echo $this->Html->scriptBlock('
$(function() {
    $(".chk_selectall").on("click", function() {
        $(".chk_del").prop("checked", this.checked);
    });
    
    $(".chk_del").on("change", function() {
        $(".btn_deleteall").prop("disabled", !($(".chk_del:checked").length > 0));
    });
    
    $(".chk_selectall").on("change", function() {
            $(".btn_deleteall").prop("disabled", !this.checked);
    });
});
');
?>
<div class="discussions index row">
    <div class="span12">
        <h2><?php echo __('Past Discussions'); ?></h2>
        <?php echo $this->Form->create('Meta', array('url' => array('controller' => 'discussions', 'action' => 'deleteselected'))); ?>
        <table class="table table-condensed" style="white-space:nowrap;">
            <tr>
                <th class="actions">
                    <?php if (count($discussions) > 0): ?>
                        <div class="btn-group">
                            <span class="btn btn-mini"><?php echo $this->Form->checkbox('chkAll', array('div' => false, 'class' => 'chk_selectall', 'style' => 'margin-top: -2px;')); ?></span>
                            <?php echo $this->Form->Button(__('Delete'), array('class' => 'btn btn-mini btn-danger btn_deleteall', 'disabled' => true, 'onclick' => 'if (!confirm(\'' . __('Are you sure you wish to delete all selected discussions?') . '\')) { return false; } ')); ?>
                        </div>    
                    <?php endif; ?>
                </th>
                <th><?php echo $this->Paginator->sort('username', __('Username')); ?></th>
                <th><?php echo $this->Paginator->sort('email', __('Email')); ?></th>
                <th><?php echo $this->Paginator->sort('modified', __('Modified')); ?></th>
                <th><?php echo $this->Paginator->sort('created', __('Created')); ?></th>
            </tr>
            <?php foreach ($discussions as $discussion): ?>
                <tr>
                    <td class="actions">
                        <div class="btn-toolbar">
                            <div class="btn-group">
                                <span class="btn btn-mini"><?php echo $this->Form->checkbox('del.', array('div' => false, 'class' => 'chk_del', 'value' => $discussion['Discussion']['id'], 'style' => 'margin-top: -2px;', 'hiddenField' => false)); ?></span>
                                <?php echo $this->Html->link('<i class="ico-magnifier"></i> ' . __('View'), array('action' => 'view', $discussion['Discussion']['id']), array('class' => 'btn btn-mini', 'title' => __('View'), 'escape' => false)); ?>
                            </div>
                        </div>
                    </td>
                    <td><?php echo $this->Layout->renderVisitorname($discussion['Discussion']['username'], $discussion['Discussion']['email'], 16); ?>&nbsp;</td>
                    <td><?php echo $this->Text->autoLinkEmails($discussion['Discussion']['email']); ?>&nbsp;</td>
                    <td><?php echo $this->Layout->displayTimeAgoDefault($discussion['Discussion']['modified']); ?>&nbsp;</td>
                    <td><?php echo $this->Layout->displayTimeAgoDefault($discussion['Discussion']['created']); ?>&nbsp;</td>
                </tr>
            <?php endforeach; ?>
        </table>
        <?php echo $this->Form->end(); ?>

        <?php
        echo $this->element('common/defaultpagination');
        ?>	
    </div>
</div>
