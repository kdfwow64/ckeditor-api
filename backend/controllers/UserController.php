<?php

namespace backend\controllers;

use common\models\Balans;
use common\models\City;
use common\models\Messages;
use common\models\MessagesGroup;
use common\models\Permissions;
use common\models\Resume;
use common\models\Selles;
use common\models\Shops;
use common\models\Ads;
use Yii;
use common\models\User;
use backend\models\search\UserSearch;
use yii\data\Pagination;
use yii\helpers\Json;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * UserController implements the CRUD actions for User model.
 */
class UserController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all User models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new UserSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);


        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }


    /**
     * Displays a single User model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new User model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new User();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {

//            $model->imageFile = UploadedFile::getInstance($model, 'imageFile');
//            if($model->imageFile) {
//                $model->photo = $model->uploadImage();
//                $model->save();
//            }
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing User model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save(false)) {
//            $model->imageFile = UploadedFile::getInstance($model, 'imageFile');
//            if($model->imageFile) {
//                $model->photo = $model->uploadImage();
//                $model->save();
//            }
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing User model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        $vacancies = Ads::findAll(['user_id'=>$model->id]);
        $messages = Messages::findAll(['from'=>$model->id]);
        $messagesgroups = MessagesGroup::findAll(['or',['from'=>$model->id],['to'=>$model->id]]);

        if($model->delete()){
            foreach ($vacancies as $v){
                $v->delete();
            }
            foreach ($messages as $v){
                $v->delete();
            }
            foreach ($messagesgroups as $v){
                $v->delete();
            }

        }

        return $this->redirect(['index']);
    }

    /**
     * Finds the User model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return User the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = User::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    public function actionActivateuser($id){ 
         $user = User::findOne(['id'=>$id]); 
        if($user) {
            $user->activate_hash = \Yii::$app->security->generateRandomString(12);
            $user->last_activation_time = time();
            if ($user->save()) {
                $link = 'http://' . $_SERVER['HTTP_HOST'] . '/activation/' . $user->activate_hash;
                if(
                \Yii::$app
                    ->mailer
                    ->compose()
                    ->setFrom(['noreplay@' . str_replace('www.','' , $_SERVER['HTTP_HOST']) => 'Noreplay ' . $_SERVER['HTTP_HOST']])
                    ->setTo($user->email)
                    ->setSubject('Активация аккаунта на сайте: ' . $_SERVER['HTTP_HOST'])
                    ->setTextBody('Перейдите по ссылке для активации вашего аккаунта - ' . $link)
                    ->setHtmlBody('Перейдите по <a href="' . $link . '">ссылке</a> для активации вашего аккаунта.')
                    ->send()
                )
                Yii::$app->session->setFlash('success','Сообщение отправлено');
            } else {
                Yii::$app->session->setFlash('error','Ошибка выполнения');
            }
        }else{
            Yii::$app->session->setFlash('error','Пользователь не найден');
        }
        return $this->redirect(['/user']);
    }

    public function actionCity() {
        $out = [];
        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $cat_id = $parents[0];
                $out = City::find()->where(['id_country'=>$cat_id])->orderBy('name')->all();
                $out=\yii\helpers\ArrayHelper::map($out,'id_city','name');
                $remap_out = [];
                foreach($out as $key=>$o){
                    $remap_out[]=['id'=>$key,'name'=>$o];
                }
                // the getSubCatList function will query the database based on the
                // cat_id and return an array like below:
                // [
                //    ['id'=>'<sub-cat-id-1>', 'name'=>'<sub-cat-name1>'],
                //    ['id'=>'<sub-cat_id_2>', 'name'=>'<sub-cat-name2>']
                // ]
                echo Json::encode(['output'=>$remap_out, 'selected'=>'']);
                return;
            }
        }
        echo Json::encode(['output'=>'', 'selected'=>'']);
    }
}
