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
?><!DOCTYPE html>
<html lang="<?php echo AppConfig::read('System.language'); ?>">
    <head>
        <?php echo $this->Html->charset(); ?>
        <title><?php echo $title_for_layout; ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <?php
        echo $this->Html->appMeta();
        echo $this->Html->script('jquery/jquery.min.js');
        echo $this->Html->script('jquery/plugins/jquery.blockUI', array('inline' => false));
        echo $this->Html->scriptBlock('
$(function() {

    $(window).on("beforeunload", function() {
            $(".navbar").css("z-index", 10);
            $.blockUI({
                message: "<h1>' . __('Please wait') . '</h1><h2>' . __('Processing your request') . '</h2>",
                css: { 
                    border: "none", 
                    padding: "15px", 
                    backgroundColor: "#000", 
                    "-webkit-border-radius": "10px", 
                    "-moz-border-radius": "10px", 
                    opacity: .5, 
                    color: "#fff" 
                }
            }); 
    });

    $(".blockinterface").on("click", function() {
        $(".navbar").css("z-index", 10);
        $.blockUI({
            message: "<h1>' . __('Please wait') . '</h1><h2>' . __('Processing your request') . '</h2>",
            css: { 
                border: "none", 
                padding: "15px", 
                backgroundColor: "#000", 
                "-webkit-border-radius": "10px", 
                "-moz-border-radius": "10px", 
                opacity: .5, 
                color: "#fff" 
            }
        }); 
    });   

});
', array('inline' => false));

        echo $this->fetch('css');
        echo $this->fetch('script');
        echo $this->Html->css('bootstrap/css/bootstrap.min');
        echo $this->Html->css('bootstrap/css/bootstrap-responsive.min');

        echo $this->Html->script('/css/bootstrap/js/bootstrap.min');
        echo $this->Html->script('custom.js?2');

        echo $this->Html->css('custom');

        if (Configure::read('debug') > 0)
            echo $this->Html->css('debug');
        ?>
        <style type="text/css">
            @media (min-width: 768px) and (max-width: 980px) {
                body {
                    padding-top: 0 !important;
                }
            }
            @media (max-width: 768px) {
                body {
                    padding-top: 0 !important;
                }
            }           
        </style>
        <script type="text/javascript">
            function adminPing() {
                $.ajax({
                    type: "get",
                    url: "<?php echo Router::url(array('controller' => 'dashboard', 'action' => 'ping', 'prefix' => 'admin')); ?>",
                    dataType: "json",
                    success: function(result) {
                        if (result.success === true)
                        {
                            setTimeout(adminPing, <?php echo Configure::read('debug') > 0 ? '10000' : '60000'; ?>);
                        }
                    },
                    complete: function() {

                    },
                    error: function(xhr, status) {
                        if (xhr.status === 403)
                        {
                            location.reload();
                        }
                    }
                });
            }

            $(function() {
                setTimeout(adminPing, <?php echo Configure::read('debug') > 0 ? '10000' : '60000'; ?>);
            });
        </script>
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
    <body data-target=".subnav" data-offset="50">
        <?php echo $this->element('layout/topbar', array('topbar' => null)); ?>
        <div class="container">
            <div class="row">
                <?php echo $this->Session->flash('auth'); ?>
                <?php echo $this->Session->flash(); ?>
                <?php echo $this->fetch('content'); ?>
                <?php echo $this->element('layout/footer'); ?>
            </div>
        </div>
    </body>
</html>