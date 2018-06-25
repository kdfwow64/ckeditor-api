<?php

namespace backend\controllers;

use common\components\keyStorage\FormModel;
use common\models\Settings;
use Yii;
use common\models\Partners;
use yii\data\ActiveDataProvider;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * PartnersController implements the CRUD actions for Partners model.
 */
class SettingsController extends Controller
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

    public function beforeAction($action)
    {
        $array= ['language','url-manager'];
        if (in_array($action->id, $array)) {
            $this->enableCsrfValidation = false;
        }

        return parent::beforeAction($action);
    }

    /**
     * Updates an existing Partners model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionIndex()
    {
        $model = new Settings();
        if ($model->load(Yii::$app->request->post())) {
            $model->object2file();
            $this->refresh();
        }
        return $this->render('update', ['model' => $model]);
    }

    public function actionSettings()
    {
        $model = new FormModel([
            'keys' => [
                'frontend.registration_form_text' => [
                    'label' => Yii::t('app', 'Текст в форме регистрации'),
                    'type' => FormModel::TYPE_TEXTINPUT
                ],
                'frontend.time_update_ads' => [
                    'label' => Yii::t('app', 'Колличество дней для обновления обьявления'),
                    'type' => FormModel::TYPE_TEXTINPUT
                ],
                'frontend.email_noreply' => [
                    'label' => Yii::t('app', 'Email с которого будут рассылаться системные уведомления'),
                    'type' => FormModel::TYPE_TEXTINPUT
                ]
            ]
        ]);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('alert', [
                'body' => Yii::t('app', 'Settings was successfully saved'),
                'options' => ['class' => 'alert alert-success']
            ]);
            return $this->refresh();
        }

        return $this->render('settings', ['model' => $model]);
    }

    public function actionAds()
    {
        $model = new FormModel([
            'keys' => [
                'ads.top_home_page' => [
                    'label' => Yii::t('app', 'Реклама над блоком результата поиска (страница Home)'),
                    'type' => FormModel::TYPE_TEXTAREA
                ],
                'ads.top_landlords_search_page' => [
                    'label' => Yii::t('app', 'Реклама над блоком результата поиска (страница Landlords)'),
                    'type' => FormModel::TYPE_TEXTAREA
                ],
                'ads.top_tenants_search_page' => [
                    'label' => Yii::t('app', 'Реклама над блоком результата поиска (страница Tenants)'),
                    'type' => FormModel::TYPE_TEXTAREA
                ],
                'ads.top_ad_page' => [
                    'label' => Yii::t('app', 'Реклама над блоком детальной информации о обьявлении'),
                    'type' => FormModel::TYPE_TEXTAREA
                ],
                'ads.top_profile_search_page' => [
                    'label' => Yii::t('app', 'Реклама над блоком результата поиска (страница Profile)'),
                    'type' => FormModel::TYPE_TEXTAREA
                ],
                'ads.top_profile_page' => [
                    'label' => Yii::t('app', 'Реклама над блоком детальной информации о profile'),
                    'type' => FormModel::TYPE_TEXTAREA
                ],
            ]
        ]);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('alert', [
                'body' => Yii::t('app', 'Settings was successfully saved'),
                'options' => ['class' => 'alert alert-success']
            ]);
            return $this->refresh();
        }

        return $this->render('settings', ['model' => $model]);
    }

    public function actionLanguage(){
        $file_path = __DIR__ . '/../../common/messages/'.Yii::$app->language.'/app.php';
        $file_path2 = __DIR__ . '/../../common/messages/'.Yii::$app->language.'/app2.php';
        $post = $_POST;
        if(!empty($post)){
            $fp = fopen ($file_path2, "w");
            fwrite($fp, "<?php \r\n return [\r\n");
            foreach ($post as $key => $val)
            {
                fwrite($fp, "'".str_replace("_"," ",$key). "'" ."=>'".trim($val)."',\r\n");
            }
            fwrite($fp, "]?>");

            fclose($fp);
            copy($file_path2, $file_path);

            \Yii::$app->session->setFlash('security_success' , Yii::t('backend', 'Settings updated'));

        }
        $lang_items_mass = require($file_path);


        return $this->render('language', ['lang_items_mass'=>$lang_items_mass]);
    }

    public function actionUrlManager(){
        $url_mass = Yii::$app->request->post();
        if(!empty($url_mass)){
            $str_value = json_encode($url_mass);

            $f = fopen(__DIR__.'/../../common/config/url_manager_json.txt', 'w+');
            fwrite($f, $str_value);
            fclose($f);

            \Yii::$app->session->setFlash('security_success' , Yii::t('backend', 'Settings updated'));

        }else{
            $file = file_get_contents(__DIR__.'/../../common/config/url_manager_json.txt');
            $url_mass = json_decode($file,true);
        }

        return $this->render('url-manager', ['url_mass'=>$url_mass]);
    }
}
