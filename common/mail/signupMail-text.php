<?php

/* @var $this yii\web\View */
/* @var $user common\models\User */

?>
<?=Yii::t('app', 'You have successfully registered on the site')?> <?=$_SERVER['HTTP_HOST']?>.

<?=Yii::t('app', 'Your credentials')?>:
<?=Yii::t('app', 'Login at email')?>: <?= $user->username ?>,
<?=Yii::t('app', 'Password')?>: <?= $user->password ?>,
<?=Yii::t('app', 'Full name')?>: <?= $user->firstname." ".$user->lastname ?>,
<?=Yii::t('app', 'Phone number')?>: <?= $user->phone ?>,
<?=Yii::t('app', 'Phone number')?>: <?= $user->email ?>,
