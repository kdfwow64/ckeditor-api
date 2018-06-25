<?php
use yii\helpers\Html;
use Yii;

/* @var $this yii\web\View */
/* @var $user common\models\User */

?>
<div class="password-reset">
    <p><?=Yii::t('app', 'You have successfully registered on the site')?> <?=$_SERVER['HTTP_HOST']?>.</p><br>

<p><?=Yii::t('app', 'Your credentials')?>:</p>
<p><?=Yii::t('app', 'Login at email')?>: <?= $user->username ?> ,</p>
<p><?=Yii::t('app', 'Password')?>: <?= $user->password ?> ,</p>
<p><?=Yii::t('app', 'Full name')?>: <?= $user->firstname." ".$user->lastname ?> ,</p>
<p><?=Yii::t('app', 'Phone number')?>: <?= $user->phone ?> ,</p>
<p><?=Yii::t('app', 'Email')?>: <?= $user->email ?></p>
</div>
