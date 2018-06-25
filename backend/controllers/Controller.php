<?php
namespace backend\controllers;

use common\models\AdminPermissions;
use common\models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller as mainController;
use common\models\LoginForm;
use yii\filters\VerbFilter;
use yii\web\NotFoundHttpException;

/**
 * Site controller
 */
class Controller extends mainController
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['login', 'error'],
                        'allow' => true,
                    ],
                    [
//                        'actions' => ['logout', 'index','update','delete','create','view','fileapi-upload'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    public function init(){

//        $permissionModel = (new AdminPermissions())->findOne(['user_id'=>Yii::$app->user->getId()]);
//        if($permissionModel) {
//            $permissions =  json_decode($permissionModel->settings,true);
//        }
        if((!User::isAdmin() && !isset($permissions)) && Yii::$app->user->identity ){
            $this->redirect('/');
        }elseif(!Yii::$app->user->identity && Yii::$app->requestedRoute!='site/login'){
            $this->redirect('site/login');
        }
    }

    public function beforeAction($action)
    {
        $target = $action->controller->id.'/'.$action->controller->action->id;
//        $permissionModel = (new AdminPermissions())->findOne(['user_id'=>Yii::$app->user->getId()]);
//        if($permissionModel ) {
//            $permissions =  json_decode($permissionModel->settings,true);
//        }
        if(!isset($permissions[$target]) && !User::isAdmin() && $action->controller->id!='site' && $action->controller->action->id!='loadfile'){
            throw new NotFoundHttpException('Нет доступа к данному разделу');
//            throw new ErrorException('Нет доступа к данному разделу');
        }

        if (parent::beforeAction($action)) {
            if ($this->enableCsrfValidation && Yii::$app->getErrorHandler()->exception === null && !Yii::$app->getRequest()->validateCsrfToken()) {
                throw new BadRequestHttpException(Yii::t('yii', 'Unable to verify your data submission.'));
            }
            return true;
        }

        return false;
    }


}
