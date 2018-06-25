<?php
namespace frontend\controllers;

use common\models\FavoritesFilters;
use common\models\Pages;
use common\models\PropertyType;
use common\models\Purpose;
use common\models\NetCity;
use common\models\NetCountry;
use common\models\Resume;
use common\models\Seo;
use common\models\User;
use common\models\Ads;
use frontend\models\ContactForm;
use frontend\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\ResetPasswordForm;
use frontend\models\SignupForm;
//use Happyr\LinkedIn\LinkedIn;
use Yii;
use yii\base\InvalidParamException;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\helpers\ArrayHelper;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\web\Response;

/**
 * Site controller
 */
class PageController extends Controller
{

    public function beforeAction($action)
    {
        Yii::$app->view->registerMetaTag([
            'property' => 'og:image',
            'content' => isset(Yii::$app->params['seoimg']) ? 'https://' . $_SERVER['HTTP_HOST'] . Yii::$app->params['seoimg'] : ''
        ]);

        $seoTag = Seo::findByurl(Yii::$app->request->url);
        if ($seoTag) {
            if (!$seoTag->title) {
                Yii::$app->view->title = Yii::$app->params['site_name']." - ".Yii::t('app', 'Message');
                Yii::$app->view->registerMetaTag([
                    'name' => 'og:title',
                    'content' => Yii::$app->params['site_name']." - ".Yii::t('app', 'Message')
                ]);
            } else {
                Yii::$app->view->title = $seoTag->title;
                Yii::$app->view->registerMetaTag([
                    'name' => 'og:title',
                    'content' => $seoTag->title
                ]);
            }
            Yii::$app->view->registerMetaTag([
                'name' => 'og:type',
                'content' => 'article'
            ]);

            Yii::$app->view->registerMetaTag([
                'name' => 'og:description',
                'content' => $seoTag->description
            ]);
            Yii::$app->view->registerMetaTag([
                'name' => 'description',
                'content' => $seoTag->description
            ]);
            Yii::$app->view->registerMetaTag([
                'name' => 'keywords',
                'content' => $seoTag->keywords
            ]);

            if ($action->id == 'index') {
                $this->enableCsrfValidation = false;
            }
        } else {
            Yii::$app->view->title = isset(Yii::$app->params['seotitle'])?Yii::$app->params['seotitle']:'';
            Yii::$app->view->registerMetaTag([
                'name' => 'description',
                'content' => isset(Yii::$app->params['seodescription'])?Yii::$app->params['seodescription']:''
            ]);
            Yii::$app->view->registerMetaTag([
                'name' => 'og:description',
                'content' => isset(Yii::$app->params['seodescription'])?Yii::$app->params['seodescription']:''
            ]);
        }

        return parent::beforeAction($action);
    }

    public function actionView($slug)
    {
        $model = Pages::findOne(['slug'=>$slug,'status'=>1]);
        if(!$model){
            throw new NotFoundHttpException('Page not found');
        }

        return $this->render('view',['model'=>$model]);
    }

}
