<?php

namespace backend\controllers;

use common\models\AdsAttributeValue;
use common\models\AttributeValues;
use common\models\AttributeValuesSearch;
use common\models\TypeFields;
use Yii;
use common\models\Attributes;
use common\models\AttributesSearch;
use yii\helpers\ArrayHelper;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\Response;

/**
 * AttributesController implements the CRUD actions for Attributes model.
 */
class AttributesController extends Controller
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
     * Lists all Attributes models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new AttributesSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Attributes model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        $model_create = new AttributeValues();
        if ($model_create->load(Yii::$app->request->post())) {
            $model_create->attribute_id = $id;
            $model_create->save();
            $model_create = new AttributeValues();
        }

        $searchModel = new AttributeValuesSearch([ 'attribute_id' => $id]);
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('view', [
            'model' => $this->findModel($id),
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model_create' => $model_create
        ]);
    }

    /**
     * Creates a new Attributes model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Attributes();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            $typeFields = ArrayHelper::map(TypeFields::find()->asArray()->orderBy('name')->all(), 'id', 'name');

            return $this->render('create', [
                'model' => $model,
                'typeFields' => $typeFields
            ]);
        }
    }

    /**
     * Updates an existing Attributes model.
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
            $typeFields = ArrayHelper::map(TypeFields::find()->asArray()->orderBy('name')->all(), 'id', 'name');

            return $this->render('update', [
                'model' => $model,
                'typeFields' => $typeFields
            ]);
        }
    }

    /**
     * Deletes an existing Attributes model.
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
     * @param $id
     * @return array
     */
    public function actionDeleteAttributeValue($id)
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;

        $model_ads = AdsAttributeValue::find()->where(['attribute_value_id' => $id])->all();
        foreach ($model_ads as $model_ad) {
            $model_ad->delete();
        }

        $model = AttributeValues::findOne($id);
        $model->delete();

        return array(['status' => 'success']);
    }

    /**
     * Finds the Attributes model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Attributes the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Attributes::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
