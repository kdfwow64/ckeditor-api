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
        <li class="active">Database Setup <span class="divider">/</span></li>
        <li class="muted">Database Initialisation <span class="divider">/</span></li>
        <li class="muted">System Settings <span class="divider">/</span></li>
        <li class="muted">Administrator <span class="divider">/</span></li>
        <li class="muted">Finalisation <span class="divider">/</span></li>
        <li class="muted">Completed</li>
    </ul>

    <div class="progress">
        <div class="bar" style="width: 17%;">17%</div>
    </div>

    <hr />


    <?php
    echo $this->Form->create(false, array('inputDefaults' => array('autocomplete' => 'off')));
    echo $this->Form->input('host', array('label' => __('Database Host'), 'div' => 'control-group' . (isset($invalid['host']) ? ' error' : ''), 'after' => (isset($invalid['host']) ? '<span class="help-inline">' . $invalid['host'] . '</span>' : '')));
    echo $this->Form->input('port', array('label' => __('TCP Port / UNIX Socket'), 'class' => 'input-small', 'placeholder' => __('Optional')));
    echo $this->Form->input('login', array('label' => __('Database Username'), 'div' => 'control-group' . (isset($invalid['login']) ? ' error' : ''), 'after' => (isset($invalid['login']) ? '<span class="help-inline">' . $invalid['login'] . '</span>' : '')));
    echo $this->Form->input('password', array('label' => __('Password')));
    echo $this->Form->input('database', array('label' => __('Database Name'), 'div' => 'control-group' . (isset($invalid['database']) ? ' error' : ''), 'after' => (isset($invalid['database']) ? '<span class="help-inline">' . $invalid['database'] . '</span>' : '')));
    echo $this->Form->input('prefix', array('label' => __('Table Prefix'), 'class' => 'input-mini'));
    echo '<div class="form-actions">' . $this->Form->submit(__('Continue'), array('class' => 'btn btn-primary')) . '</div>';
    echo $this->Form->end();
    ?>

</div>
