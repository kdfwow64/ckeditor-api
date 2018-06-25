<?php
/**
 * 
 * ClientEngage: ClientEngage Project Platform (http://www.clientengage.com)
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
?><!DOCTYPE html>
<html>
    <head>
        <?php echo $this->Html->charset(); ?>
        <title><?php echo $title_for_layout; ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <?php
        echo $this->Html->appMeta();

        echo $this->Html->script('jquery/jquery.min.js');
        echo $this->Html->css('bootstrap/css/bootstrap.min');
        echo $this->Html->script('/css/bootstrap/js/bootstrap.min');
        echo $this->Html->css('custom');
        if (Configure::read('debug') > 0)
            echo $this->Html->css('debug');

        $this->Html->scriptBlock('$(function() {
    $(".alert").hide();
    $(".alert").fadeIn("slow");
    var alertTimeout = setTimeout(function() {
        $(".alert:not(.keepopen)").fadeOut("slow");
    }, 5000);
    $(".alert").mouseover(function(){
        clearTimeout(alertTimeout);
    });
    $(".alert .close").click(function(){
        $(this).parent(".alert").fadeOut("slow");
    });
});', array('inline' => false));

        echo $this->fetch('css');
        echo $this->fetch('script');
        ?>
        <?php if (Configure::read('demo') === true): ?>
            <script type="text/javascript">
                var _gaq = _gaq || [];
                _gaq.push(['_setAccount', 'UA-4514355-15']);
                _gaq.push(['_setDomainName', 'clientengage.com']);
                _gaq.push(['_trackPageview']);

                (function() {
                    var ga = document.createElement('script');
                    ga.type = 'text/javascript';
                    ga.async = true;
                    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ga, s);
                })();
            </script>
        <?php endif; ?>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="span12">
                    <?php echo $this->Session->flash('auth'); ?>
                    <?php echo $this->Session->flash(); ?>
                    <?php echo $this->fetch('content'); ?>
                </div>
            </div>
        </div>
    </body>
</html>