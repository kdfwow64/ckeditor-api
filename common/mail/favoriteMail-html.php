<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $user common\models\User */

?>
<div class="favorites">
    <h4>Список новых записей по вашим избранным фильтрам с сайта <?=$_SERVER['HTTP_HOST']?></h4><br>
    <?php if($datav){ ?>
        <h3>Вакансии:</h3>
    <?php
        foreach ($datav as $v){?>
            <a target="_blank" href="http://<?=$_SERVER['HTTP_HOST']?><?= \yii\helpers\Url::toRoute(['vacancies/view', 'slug' => $v->slug]) ?>"><?=$v->title?></a><br>
        <?php }
    }?>

    <?php if($datar){ ?>
        <h3>Резюме:</h3>
    <?php
        foreach ($datar as $v){?>
            <a target="_blank" href="http://<?=$_SERVER['HTTP_HOST']?><?= \yii\helpers\Url::toRoute(['resume/view', 'slug' => $v->slug]) ?>"><?=$v->title?></a><br>
        <?php }
    }?>
</div>
