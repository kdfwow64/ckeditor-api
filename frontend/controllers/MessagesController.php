<?php
namespace frontend\controllers;

use common\models\Balans;
use common\models\Investments;
use common\models\Messages;
use common\models\MessagesGroup;
use common\models\Packet;
use common\models\Transactions;
use common\models\User;
use frontend\models\cabinet\PasswordchangeForm;
use frontend\models\cabinet\UserworkForm2;
use Yii;
use yii\filters\AccessControl;
use yii\helpers\Html;
use yii\helpers\StringHelper;
use yii\web\Controller;
use yii\web\Response;


/**
 * Site controller
 */
class MessagesController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
//                'only' => ['index', 'profile'],
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ]

        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }


    // AJAX

    public function actionAjaxaddmessages()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if (($post && $post['user_id'] && $post['message'])) {
            $user_id = $post['user_id'];
            $user = Yii::$app->user->identity;
            $group = MessagesGroup::find()->select(['id'])->where(['and', ['from' => $user_id], ['to' => $user->id]])->orWhere(['and', ['from' => $user->id], ['to' => $user_id]])->orderBy('created ASC')->one();
            if ($group) {
                $model = new Messages();
                $model->group_id = $group->id;
                $model->from = $user->id;
                $model->to = $user_id;
                $model->message = Html::encode($post['message']);
                $model->created = time();
                $model->new_to = 1;
                $model->new_from = 1;
                $group->created = $model->created;
                $group->save(false);
                if ($model->save()) {
                    return ['success'];
                } else {
                    return ['error'];
                }
            } else {
                return ['error'];
            }
        } else {
            return ['error'];
        }
    }

    public function actionAjaxmessagesnew()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        $post['message_id'] = isset($post['message_id']) ? $post['message_id'] : 0;
        if ($post && $post['user_id'] && $post['message_id']) {
            $user_id = $post['user_id'];
            $user = Yii::$app->user->identity;
            $messages_data = Messages::find()->where(['or', ['and', ['from' => $user_id], ['to' => $user->id]], ['and', ['from' => $user->id], ['to' => $user_id]]])->andWhere(['>', 'id', $post['message_id']])->orderBy('created ASC')->all();
            $messages = [];
            if ($messages_data) {
                foreach ($messages_data as $m) {
                    $guser = $m->fromuser;
                    if (isset($guser)) {
                        $messages[] = [
                            'user_id' => $guser->id,
                            'message_id' => $m->id,
                            'avatarUrl' => $guser->avatar,
                            'username' => $guser->firstname . ' ' . $guser->lastname,
                            'message' => nl2br($m->message),
                            'userStatus' => $guser->online,
                            'time' => date('d.m.Y H:i', $m->created),
                            'new' => $m->new
                        ];
                        if ($user->id == $m->from) {
                            $m->new_from = 0;
                            $m->save();
                        }
                        if ($user->id == $m->to) {
                            $m->new_to = 0;
                            $m->save();
                        }
                    }
                }
            }
            return $messages;
        } else {
            return ['error'];
        }
    }

    public function actionAjaxmessagesold()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post && $post['user_id'] && $post['message_id']) {
            $user_id = $post['user_id'];
            $user = Yii::$app->user->identity;
            $messages_data = Messages::find()->where(['or', ['and', ['from' => $user_id], ['to' => $user->id]], ['and', ['from' => $user->id], ['to' => $user_id]]])->andWhere(['<', 'id', $post['message_id']])->limit(50)->orderBy('created DESC')->all();
            $messages = [];
            if ($messages_data) {
                foreach ($messages_data as $m) {
                    $guser = $m->fromuser;
                    if(isset($guser)) {
                        $messages[] = [
                            'user_id' => $guser->id,
                            'message_id' => $m->id,
                            'avatarUrl' => $guser->avatar,
                            'username' => $guser->firstname . ' ' . $guser->lastname,
                            'message' => nl2br($m->message),
                            'userStatus' => $guser->online,
                            'time' => date('d.m.Y H:i', $m->created),
                            'new' => $m->new
                        ];
                        if ($user->id == $m->from) {
                            $m->new_from = 0;
                            $m->save();
                        }
                        if ($user->id == $m->to) {
                            $m->new_to = 0;
                            $m->save();
                        }
                    }
                }
            }
            return array_reverse($messages);
        } else {
            return ['error'];
        }
    }

    public function actionAjaxmessagescount()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return Yii::$app->messanger->getNewMessagesCount();
    }


    public function actionAjaxmessages()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post && $post['user_id']) {
            $user_id = $post['user_id'];
            $user = Yii::$app->user->identity;
            $messages_data = Messages::find()->where(['and', ['from' => $user_id], ['to' => $user->id]])->orWhere(['and', ['from' => $user->id], ['to' => $user_id]])->orderBy('created DESC')->limit(100)->all();
            $messages = [];
            if ($messages_data) {
                foreach ($messages_data as $m) {
                    $guser = $m->fromuser;
                    if (isset($guser)) {
                        $messages[] = [
                            'user_id' => $guser->id,
                            'avatarUrl' => $guser->avatar,
                            'message_id' => $m->id,
                            'username' => $guser->firstname . ' ' . $guser->lastname,
                            'message' => nl2br($m->message),
                            'userStatus' => $guser->online,
                            'time' => date('d.m.Y H:i', $m->created),
                            'new' => $m->new
                        ];

                        if ($user->id == $m->from) {
                            $m->new_from = 0;
                            $m->save();
                        }
                        if ($user->id == $m->to) {
                            $m->new_to = 0;
                            $m->save();
                        }
                    }
                }
            }
            return array_reverse($messages);
        } else {
            return ['error'];
        }
    }


    public function actionAjaxmessagesgroups()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $user = Yii::$app->user->identity;
        $messages = MessagesGroup::find()->where(['or', ['from' => $user->id], ['to' => $user->id]])->orderBy('created DESC')->all();
        $groups = [];
        if ($messages) {
            foreach ($messages as $m) {

                $guser = $m->from == $user->id ? $m->touser : $m->fromuser;
                if (isset($guser)) {
                    $groups[] = [
                        'user_id' => $guser->id,
                        'dialog_id' => $m->id,
                        'avatarUrl' => $guser->avatar,
                        'username' => $guser->firstname . ' ' . $guser->lastname,
                        'message' => isset($m->lastmessage) ? StringHelper::truncate($m->lastmessage->message, 100) : '',
                        'userStatus' => $guser->online,
                        'time' => isset($m->lastmessage) ? date('d.m.Y H:i', $m->lastmessage->created) : '',
                        'new' => isset($m->lastmessage) ? $m->lastmessage->new : '',
                        'message_id' => isset($m->lastmessage) ? $m->lastmessage->id : ''
                    ];
                }
            }
        }
        return $groups;
    }

    // AJAX END

}
