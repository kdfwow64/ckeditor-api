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
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="toggle-bar"></span>
                <span class="toggle-bar"></span>
                <span class="toggle-bar"></span>
            </a>

            <?php echo $this->Html->link($this->Html->image('common/logo-clientengage.png', array('title' => String::insert(__('ClientEngage Visitor Chat v:app_version'), array('app_version' => AppVersion::Version)), 'alt' => 'ClientEngage logo')), array('controller' => 'dashboard', 'action' => 'index', 'admin' => true), array('class' => 'brand-admin', 'escape' => false)); ?>

            <div class="nav-collapse collapse">
                <ul class="nav">


                    <li><?php echo $this->Html->link('<i class="ico-comment"></i> ' . __('Discussions'), array('controller' => 'dashboard', 'action' => 'index', 'admin' => true), array('escape' => false)); ?></li>

                    <?php if (AppAuth::checkAccess('past_discussions')): ?>
                        <li><?php echo $this->Html->link('<i class="ico-page_white_text"></i> ' . __('Past Discussions'), array('controller' => 'discussions', 'action' => 'index', 'admin' => true), array('escape' => false)); ?></li>
                    <?php endif; ?>

                    <?php if (AppAuth::checkAccess('enquiries')): ?>
                        <li><?php echo $this->Html->link('<i class="ico-email"></i> ' . __('Enquiries'), array('controller' => 'enquiries', 'action' => 'index', 'admin' => true), array('escape' => false)); ?></li>
                    <?php endif; ?>

                    <?php if (AppAuth::checkAccess('administration')): ?>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="ico-folder_wrench"></i> <?php echo __('Administration'); ?> <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><?php echo $this->Html->link('<i class="ico-layout"></i> ' . __('Chat Styles'), array('controller' => 'styles', 'action' => 'index', 'admin' => true), array('escape' => false)); ?></li>
                                <li class="nav-header"><?php echo __('System Settings'); ?></li>
                                <li><?php echo $this->Html->link('<i class="ico-vcard"></i> ' . __('Administrators'), array('controller' => 'users', 'action' => 'index', 'admin' => true), array('escape' => false)); ?></li>
                                <li><?php echo $this->Html->link('<i class="ico-wrench_orange"></i> ' . __('Configuration'), array('controller' => 'settings', 'action' => 'index', 'admin' => true), array('escape' => false)); ?></li>
                                <li class="nav-header"><?php echo __('About'); ?></li>
                                <li><?php echo $this->Html->link('<i class="ico-help"></i> ' . __('About'), array('controller' => 'contents', 'action' => 'about', 'admin' => true), array('escape' => false)); ?></li>
                            </ul>
                        </li>
                    <?php endif; ?>
                    <?php if (Configure::read('demo') === true): ?>
                        <li><?php echo $this->Html->link('<i class="ico-star"></i> Visitor DEMO', array('controller' => 'contents', 'action' => 'view', 'demo', 'admin' => false), array('escape' => false, 'target' => '_blank', 'style' => 'font-weight: bold; background-color: #bb181c', 'class' => 'frontend-demo-link', 'data-original-title' => 'Click here to open the visitor-demo so you can create a new chat.', 'data-rel' => 'tooltip', 'data-placement' => 'bottom')); ?></li>
                    <?php endif; ?>

                </ul>
                <ul class="nav pull-right">
                    <?php if (CakeSession::read('Auth.User.operator_online') === true): ?>
                        <li class="topbar_in-progress">
                            <?php echo $this->Html->link($this->Html->image('common/in_progress.gif') . ' ' . __('Online'), array('controller' => 'users', 'action' => 'operator_status', 'status' => 'offline'), array('class' => 'btn btn-success btn-mini', 'escape' => false)); ?>
                        </li>
                    <?php else: ?>
                        <li class="topbar_in-progress">
                            <?php echo $this->Html->link(__('Offline'), array('controller' => 'users', 'action' => 'operator_status', 'status' => 'online'), array('class' => 'btn btn-danger btn-mini')); ?>
                        </li>
                    <?php endif; ?>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="font-weight: bold;"><?php echo AuthComponent::user('username'); ?><b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><?php echo $this->Html->link('<i class="ico-vcard"></i> ' . __('Your profile'), array('controller' => 'users', 'action' => 'profile', 'admin' => true), array('escape' => false)); ?></li>
                            <li class="divider"></li>
                            <li class="nav-icon nav-logout"><?php echo $this->Html->link('<i class="ico-door_out"></i> ' . __('Log-out'), array('controller' => 'users', 'action' => 'logout', 'admin' => false), array('escape' => false)); ?></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.nav-collapse -->
        </div>
    </div>
</div>