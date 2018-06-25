<?php

namespace backend\controllers;

use backend\models\search\CategoryAttributeSearch;
use common\models\Attributes;
use common\models\CategoryAttribute;
use Yii;
use common\models\PropertyType;
use backend\models\search\PropertyTypeSearch;
use yii\helpers\ArrayHelper;
use yii\helpers\Url;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\Response;

/**
 * PropertytypeController implements the CRUD actions for PropertyType model.
 */
class PropertytypeController extends Controller
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
                    'delete' => ['POST']
                ],
            ],
        ];
    }

    /**
     * Lists all PropertyType models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new PropertyTypeSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single PropertyType model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        $model_create = new CategoryAttribute();
        if ($model_create->load(Yii::$app->request->post())) {
            $model_create->category_id = $id;
            $model_create->save();
            $model_create = new CategoryAttribute();
        }

        $searchModel = new CategoryAttributeSearch(['category_id' => $id]);
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        $existAttributes = ArrayHelper::getColumn(CategoryAttribute::find()->where(['category_id' => $id])->all(), 'attribute_id');
        $attributes = ArrayHelper::map(Attributes::find()->asArray()->orderBy('name')->where(['not in', 'id', $existAttributes])->all(), 'id', 'name');

        return $this->render('view', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $this->findModel($id),
            'model_create' => $model_create,
            'attributes' => $attributes
        ]);
    }

    /**
     * Creates a new PropertyType model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new PropertyType();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing PropertyType model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing PropertyType model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Deletes an existing CategoryAttribute model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $category_id
     * @param integer $attribute_id
     * @return mixed
     */
    public function actionDeleteCategoryAttribute($category_id, $attribute_id)
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;

        CategoryAttribute::deleteAll(['category_id' => $category_id, 'attribute_id' => $attribute_id]);

        return array(['status' => 'success']);
    }

    /**
     * Finds the PropertyType model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return PropertyType the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = PropertyType::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
