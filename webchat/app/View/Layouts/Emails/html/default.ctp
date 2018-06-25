<?php ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
    <head>
        <title><?php echo $title_for_layout; ?></title>
    </head>
    <body>        
        <?php
        /*
         * 
         * Simply uncomment the below line and insert the path to your own image.
         * You can place your image in "app/webroot/img/common/image.png".
         * 
         * echo $this->Html->image('common/logo-clientengage.png', array('fullBase' => true)) . '<hr />';  
         * 
         */
        ?>
        <?php echo $content_for_layout; ?>
    </body>
</html>