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
<footer>
    <div class="footer_left poweredby">
        <p>Powered by <?php echo $this->Html->link('<b>Client</b><i>Engage</i>', AppLib::AppUrl, array('escape' => false, 'target' => '_blank')); ?></p>
    </div>
    <div class="footer_right">
        <p><?php echo $this->Html->link(__('About') . ' <b>Client</b><i>Engage</i> Visitor Chat', array('plugin' => null, 'controller' => 'contents', 'action' => 'about', 'admin' => true), array('escape' => false)); ?></p>
    </div>
</footer>