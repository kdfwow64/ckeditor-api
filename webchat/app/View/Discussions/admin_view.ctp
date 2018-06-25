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
<div class="discussions view row">
    <div class="actions span2">
        <ul class="nav nav-list">
            <li class="nav-header"><?php echo __('Actions'); ?></li>
            <li><?php echo $this->Html->link(__('List Discussions'), array('action' => 'index')); ?> </li>
        </ul>
        <div class="row-fluid">
            <span>&nbsp;</span>
            <?php echo $this->Form->postLink(__('Delete Discussion'), array('action' => 'delete', $discussion['Discussion']['id']), array('class' => 'btn btn-danger'), __('Are you sure you want to delete this discussion with "%s"?', $discussion['Discussion']['username'])); ?>         
        </div>
    </div>
    <div class="span10">
        <div class="well">
            <h2><?php echo __('Discussion'); ?></h2>
            <dl>
                <dt><?php echo __('Avatar'); ?></dt>
                <dd>
                    <?php echo $this->Layout->renderGravatar($discussion['Discussion']['username'], $discussion['Discussion']['email'], 40); ?>
                    &nbsp;
                </dd>                
                <dt><?php echo __('Username'); ?></dt>
                <dd>
                    <?php echo h($discussion['Discussion']['username']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Email'); ?></dt>
                <dd>
                    <?php echo $this->Text->autoLinkEmails($discussion['Discussion']['email']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Referer'); ?></dt>
                <dd>
                    <?php echo $this->Text->autoLinkUrls($discussion['Discussion']['referer'], array('target' => '_blank')); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Visitor Time'); ?></dt>
                <dd>
                    <?php echo h($discussion['Discussion']['visitor_time']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Visitor Languages'); ?></dt>
                <dd>
                    <?php echo $this->Layout->renderVisitorLanguages($discussion['Discussion']['visitor_languages']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('User Agent'); ?></dt>
                <dd>
                    <?php echo $this->Layout->renderUserAgent($discussion['Discussion']['user_agent']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Remote Address'); ?></dt>
                <dd>
                    <?php echo h($discussion['Discussion']['remote_address']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Visitor Exited'); ?></dt>
                <dd>
                    <?php echo $this->Layout->boolYesNo($discussion['Discussion']['visitor_exited']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Modified'); ?></dt>
                <dd>
                    <?php echo $this->Layout->displayTimeDefault($discussion['Discussion']['modified']); ?>
                    &nbsp;
                </dd>
                <dt><?php echo __('Created'); ?></dt>
                <dd>
                    <?php echo $this->Layout->displayTimeDefault($discussion['Discussion']['created']); ?>
                    &nbsp;
                </dd>
            </dl>
        </div>
    </div>
</div>
<div class="row">
    <div class="related span10 offset2">
        <hr>
        <h3><?php echo __('Messages'); ?></h3>

        <?php if (!empty($discussion['Message'])): ?>
            <table class="table table-condensed table-striped table-bordered table-hover">
                <tr>
                    <th><?php echo __('User'); ?></th>
                    <th><?php echo __('Message'); ?></th>
                    <th><?php echo __('Current Page'); ?></th>
                    <th><?php echo __('Created'); ?></th>
                </tr>
                <?php
                foreach ($discussion['Message'] as $message):
                    ?>
                    <tr>
                        <td>
                            <?php
                            $username = $email = '';
                            if (isset($message['User']['username']))
                            {
                                $username = $message['User']['username'];
                                $email = $message['User']['email'];
                            }
                            else
                            {
                                $username = $discussion['Discussion']['username'];
                                $email = $discussion['Discussion']['email'];
                            }
                            echo $this->Layout->renderVisitorname($username, $email, 20);
                            ?>
                        </td>
                        <td><?php echo nl2br($this->Layout->prepareMessageText($message['message'])); ?></td>
                        <td><?php echo $this->Text->autoLinkUrls($message['current_page'], array('target' => '_blank')); ?></td>
                        <td><?php echo $this->Layout->displayTimeDefault($message['created']); ?></td>
                    </tr>
                <?php endforeach; ?>
            </table>
        <?php endif; ?>

    </div>
</div>
