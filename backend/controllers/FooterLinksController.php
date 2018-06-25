<?php

namespace backend\controllers;

use Yii;
use common\models\FooterLinks;
use backend\models\search\FooterLinksSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * FooterLinksController implements the CRUD actions for FooterLinks model.
 */
class FooterLinksController extends Controller
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
     * Lists all FooterLinks models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new FooterLinksSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single FooterLinks model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new FooterLinks model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new FooterLinks();

        if ($model->load(Yii::$app->request->post())) {
            $model->img = $this->uploadImg($model->oldAttributes['img'],'FooterLinks[img]');
            $model->save();
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing FooterLinks model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        
        if ($model->load(Yii::$app->request->post())) {
            $model->img = $this->uploadImg($model->oldAttributes['img'],'FooterLinks[img]');

            $model->save();
            
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing FooterLinks model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        $dir = __DIR__ . '/../../frontend/web';
        if(is_file($dir . $model->img)){
            @unlink($dir . $model->img);
        }
        $model->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the FooterLinks model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return FooterLinks the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = FooterLinks::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    public function uploadImg($imgDb,$img){
        $imageFile = UploadedFile::getInstanceByName($img);
        $dir = __DIR__ . '/../../frontend/web';
        // Сохранение картинки
        if(!empty($imageFile)){
            $new_name = \Yii::$app->security->generateRandomString(10);
            $path = '/uploads/images/';
            $orign_name = $path . $new_name . '.' . $imageFile->extension;

            if(!empty($imgDb)){
                // Удаляем старую
                if(is_file($dir . $imgDb)){
                    @unlink($dir . $imgDb);
                }
            }

            $imageFile->saveAs($dir.$orign_name);
            return $orign_name;

        }
        return $imgDb;
    }
}
