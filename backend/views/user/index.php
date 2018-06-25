<?php

use yii\helpers\Html;
use yii\grid\GridView;
//use \kartik\export\ExportMenu;

/* @var $this yii\web\View */
/* @var $searchModel backend\models\UserSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Members List');
$this->params['breadcrumbs'][] = $this->title;

?>
<h1><?= Html::encode($this->title) ?></h1>
<br>
<?= \common\widgets\Alert::widget() ?>
<div class="user-index" style="overflow-x: auto">
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            ['class' => 'yii\grid\ActionColumn'],

            'id',
            'firstname',
            'lastname',
            [
                'attribute' => 'active',
                'filter' => ['0' => Yii::t('app', 'No'), '1' => Yii::t('app', 'Yes')],
                'content' => function ($data) {
                    $names = ['0' => Yii::t('app', 'No'), '1' => Yii::t('app', 'Yes')];
                    if ($data->active == 0) {
                        return $names[$data->active] . ' <br>' . Html::a(Yii::t('app', 'Retry'), ['/user/activateuser/' . $data->id], ['title' => Yii::t('app', 'Retry email')]) . ($data->last_activation_time ? '<br>Дата: ' . date('d.m.Y H:i', $data->last_activation_time) : '');
                    } else {
                        return $names[$data->active];
                    }
                },
            ],
            'email:email',
            'phone',
            'social_id',
            [
                'label' => Yii::t('app', 'Photo'),
                'attribute' => 'photo',
                'format' => 'raw',
                'value' => function ($data) {
                    if (!$data->photo)
                        return null;
                    else
                        return Html::img($data->photo, [
                            'style' => 'width:35px;'
                        ]);
                },
            ],
            'created_at:date',
            [
                'label' => Yii::t('app', 'Profile'),
                'format' => 'raw',
                'value' => function ($data) {
                    return Html::a(
                        Yii::t('app', 'View'),
                        '/user/' . $data->id,
                        [
                            'title' => Yii::t('app', 'Edit profile'),
                            'target' => '_blank'
                        ]
                    );
                }
            ],
            [
                'label' => Yii::t('app', 'Edit profile'),
                'format' => 'raw',
                'value' => function ($data) {
                    return Html::a(
                        Yii::t('app', 'Edit profile'),
                        '/admin/editprofile/' . $data->id,
                        [
                            'title' => Yii::t('app', 'Edit profile'),
                            'target' => '_blank'
                        ]
                    );
                }
            ],
//            [
//                'label' => Yii::t('app', 'Careers'),
//                'format' => 'raw',
//                'value' => function ($data) {
//                    return Html::a(
//                        Yii::t('app', 'Edit'),
//                        '/admin/vacancies/' . $data->id,
//                        [
//                            'title' => Yii::t('app', 'View'),
//                            'target' => '_blank'
//                        ]
//                    );
//                }
//            ],
            'vacancyCount',
//            [
//                'label' => Yii::t('app', 'Resume'),
//                'format' => 'raw',
//                'value' => function ($data) {
//                    return Html::a(
//                        Yii::t('app', 'Edit'),
//                        '/admin/resume/' . $data->id,
//                        [
//                            'title' => Yii::t('app', 'View'),
//                            'target' => '_blank'
//                        ]
//                    );
//                }
//            ],
            'resumeCount',
            /*            [
                            'attribute'=>'structure_status',
                            'filter'=>\common\models\User::$statusnames,
                            'content'=>function($data){
                                return $data->statusname;
                            },
                        ],*/
//            [
//                'attribute'=>'active',
//                'filter'=>['0'=>'Не активирован','1'=>'Активирован'],
//                'content'=>function($data){
//                    $names = ['0'=>'Не активирован','1'=>'Активирован'];
//                    return $names[$data->active];
//                },
//            ],


        ],
    ]);

    ?>
</div>
