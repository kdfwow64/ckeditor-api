<?php

/* @var $this yii\web\View */
/* @var $user common\models\User */

?>
    Список новых записей по вашим избранным фильтрам с сайта <?=$_SERVER['HTTP_HOST']?>

    <?php if($datav){ ?>

        Вакансии:

    <?php
        foreach ($datav as $v){?>

            <?=$v->title?> | http://<?=$_SERVER['HTTP_HOST']?><?= \yii\helpers\Url::toRoute(['vacancies/view', 'slug' => $v->slug]) ?>

        <?php }
    }?>

    <?php if($datar){ ?>

        Резюме:

    <?php
        foreach ($datar as $v){?>

            <?=$v->title?> | http://<?=$_SERVER['HTTP_HOST']?><?= \yii\helpers\Url::toRoute(['resume/view', 'slug' => $v->slug]) ?>

        <?php }
    }?>
</div>