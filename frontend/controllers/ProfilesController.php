<?php
namespace frontend\controllers;

use common\models\Balans;
use common\models\Investments;
use common\models\PropertyType;
use common\models\Purpose;
use common\models\Messages;
use common\models\MessagesGroup;
use common\models\NetCity;
use common\models\NetCountry;
use common\models\Packet;
use common\models\Seo;
use common\models\Transactions;
use common\models\User;
use frontend\models\cabinet\PasswordchangeForm;
use frontend\models\cabinet\UsereducationForm;
use frontend\models\cabinet\UserworkForm;
use yii\web\HttpException;
use Yii;
use yii\data\Pagination;
use yii\filters\VerbFilter;
use yii\helpers\ArrayHelper;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\web\Response;


/**
 * Site controller
 */
class ProfilesController extends Controller
{

    /**
     * @return array
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'index' => ['get','post'],
                ],
            ],
        ];
    }

    /**
     * @param \yii\base\Action $action
     * @return bool
     */
    public function beforeAction($action)
    {
        Yii::$app->view->registerMetaTag([
            'property' => 'og:image',
            'content' => isset(Yii::$app->params['seoimg']) ? 'https://' . $_SERVER['HTTP_HOST'] . Yii::$app->params['seoimg'] : ''
        ]);

        $seoTag = Seo::findByurl(Yii::$app->request->url);
        if ($seoTag) {
            if (!$seoTag->title) {
                Yii::$app->view->title = Yii::$app->params['site_name']." - ".Yii::t('app', 'Profile');
                Yii::$app->view->registerMetaTag([
                    'name' => 'og:title',
                    'content' => Yii::$app->params['site_name']." - ".Yii::t('app', 'Profile')
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
            Yii::$app->view->title = Yii::$app->params['site_name']." - ".Yii::t('app', 'Profile');
                        
            Yii::$app->view->registerMetaTag([
                'name' => 'description',
                'content' => isset(Yii::$app->params['seodescription'])?Yii::$app->params['seodescription']:''
            ]);
            Yii::$app->view->registerMetaTag([
                'name' => 'og:description',
                'content' => isset(Yii::$app->params['seodescription'])?Yii::$app->params['seodescription']:''
            ]);
        }
        if ($action->id == 'index') {
            $this->enableCsrfValidation = false;
        }

        return parent::beforeAction($action);
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

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
        $get = Yii::$app->request->get();

        $city_query = null;
        $country_query = null;
        $country_id = null;
        $city_id = null;
        $url_elem2 = [];
        if(Yii::$app->request->isAjax){
            $post = Yii::$app->request->post();
            $get = $result = array_merge($get, $post);
            $url_elem = [];
            if(isset($post['country_id']) && !empty($post['country_id'])) {
                $country_id = $post['country_id'];
                $country_query = NetCountry::findOne(['id' => $country_id]);
                $url_elem[] = "country_".$country_query->slug;
            }
            if(isset($post['city_id']) && !empty($post['city_id'])) {
                $city_query = NetCity::findOne(['id' => (int)$post['city_id']]);
                $city_id = (int)$post['city_id'];
                $url_elem[] = "city_".$city_query->slug;
            }
        }

        if ($get) {
            $empty = true;
            foreach ($get as $g) {
                if ($g != '') {
                    $empty = false;
                    break;
                }
            }
            if ($empty) {
                //return $this->redirect(['profiles/index']);
            }
        }

        $type_sphere = PropertyType::find()->orderBy('title_'.Yii::$app->language)->asArray()->all();
        $type_sphere = ArrayHelper::map($type_sphere, 'slug', 'title_'.Yii::$app->language);

        $works_name = Purpose::find()->where(['title_'.Yii::$app->language => ''])->orderBy('title_'.Yii::$app->language)->asArray()->all();
        $works_name = ArrayHelper::getColumn($works_name, 'title_'.Yii::$app->language);

        if(!Yii::$app->request->isAjax){
            $countriesmodel = NetCountry::find()->orderBy('name_'.Yii::$app->language)->asArray()->all();
            $countries = ArrayHelper::map($countriesmodel, 'id', 'name_'.Yii::$app->language);
            $countries2 = ArrayHelper::getColumn($countriesmodel, 'name_'.Yii::$app->language);

            $cities = [];
            if (isset($get['country']) && $get['country']) {
                $country_query = NetCountry::find()->where(['slug' => $get['country']])->one();
                if ($country_query) {
                    $country_id = $country_query->id;
                    $cities = NetCity::find()->where(['country_id' => $country_id])->orderBy('name_'.Yii::$app->language)->asArray()->all();
                    $cities = ArrayHelper::map($cities, 'id', 'name_'.Yii::$app->language);
                }
            }
        }

        $query = User::find()->where(['active' => 1])->orderBy('updated_at DESC');
        if ($get) {
            if(empty($country_query) && isset($get['country']) && $get['country']){
                $country_query = NetCountry::findOne(['slug' => $get['country']]);
                $country_id = $country_query->id;
            }
            if($country_id){
                $query->andWhere(['country_id' => $country_id]);
            }

            if(empty($city_query) && isset($get['city']) && $get['city']){
                if($country_id){
                    $city_query = NetCity::findOne(['slug' => $get['city'],'country_id'=>$country_id]);
                }else{
                    $city_query = NetCity::findOne(['slug' => $get['city']]);
                }
                $city_id = $city_query->id;
            }

            if($city_query){
                if (isset($get['radius']) && !empty($get['radius'])) {
                    $url_elem2['radius'] = $get['radius'];
                    $kmparam = 0.00898319;
                    $R = 6371;  // earth's radius, km
                    $maxlat = $city_query->latitude + rad2deg($get['radius'] / $R);
                    $minlat = $city_query->latitude - rad2deg($get['radius'] / $R);
                    $maxlong = $city_query->longitude + rad2deg($get['radius'] / $R / cos(deg2rad($city_query->latitude)));
                    $minlong = $city_query->longitude - rad2deg($get['radius'] / $R / cos(deg2rad($city_query->latitude)));
                    $cityGet = NetCity::find()
                        ->where(['<=', 'latitude', $maxlat])
                        ->andWhere(['>=', 'latitude', $minlat])
                        ->andWhere(['>=', 'longitude', $minlong])
                        ->andWhere(['<=', 'longitude', $maxlong])
                        ->asArray()
                        ->all();
                    $cityIds = ArrayHelper::getColumn($cityGet, 'id');
                    $query->andWhere(['city_id' => $cityIds]);
                } else {
                    $query->andWhere(['city_id' => $city_id]);
                }
            }

            if (isset($get['typeget']) && $get['typeget']) {
                $jobcatGet = PropertyType::findOne(['slug' => $get['typeget']]);
                if ($jobcatGet) {
                    $query->andWhere(['job_cat_id' => $jobcatGet->id]);
                    $lang_pref = "title_".Yii::$app->language;
                    Yii::$app->view->title = $jobcatGet->$lang_pref . ' | '.Yii::t('app', 'Profile').' | '.Yii::$app->params['site_name'];
                }
            }
            if (isset($get['working']) && $get['working']) {
                $query->andWhere(['working' => $get['working']]);
            }
            if (isset($get['lang']) && $get['lang']) {
                $query->andWhere(['like', 'langjson', $get['lang']]);
            }
            if (isset($get['move']) && $get['move']) {
                $query->andWhere(['ready_tomove' => $get['move']]);
            }
            if (isset($get['euro']) && $get['euro']) {
                $query->andWhere(['permission_es' => $get['euro']]);
            }

            if (isset($get['drive']) && $get['drive']) {
                $query->andWhere(['drive_license' => $get['drive']]);
            }
            if (isset($get['work_position']) && $get['work_position']) {
                $query->andWhere(['work_position' => $get['work_position']]);
            }


            if (isset($get['searchkeyword']) && $get['searchkeyword']) {
                $searchkeyword = strip_tags($get['searchkeyword']);
                $searchkeyword = htmlspecialchars($searchkeyword);
                $url_elem2['searchkeyword'] = $searchkeyword;
                $jobnameGet = Purpose::find()->where(['title_'.Yii::$app->language => $searchkeyword])->asArray()->one();
                if ($jobnameGet) {
                    $query->andFilterWhere(['or',
                                            ['job_name_id' => $jobnameGet['id']],
                                            ['like', 'profession', $searchkeyword],
                                            ['like', 'about', $searchkeyword],
                                            ['like', 'firstname', $searchkeyword],
                                            ['like', 'lastname', $searchkeyword]
                    ]);
                } else {
                    $query->andFilterWhere(['or',
                                            ['like', 'profession', $searchkeyword],
                                            ['like', 'about', $searchkeyword],
                                            ['like', 'firstname', $searchkeyword],
                                            ['like', 'lastname', $searchkeyword]
                    ]);
                }
            }
        }

        $usersCount = $query->count();
        $curr_page = isset($get['page']) && is_numeric($get['page']) ? $get['page'] : 0;
        if($curr_page !=0){
            $_GET['page'] = $get['page'];
            $url_elem2['page'] = $curr_page;
        }
        $pages = new Pagination(['totalCount' => $usersCount, 'pageSize' => 20]);
        // приводим параметры в ссылке к ЧПУ
        $pages->pageSizeParam = false;

        $users = $query->offset($pages->offset)
            ->limit($pages->limit)
            ->all();

        $admin = isset(Yii::$app->user->identity) && Yii::$app->user->identity->isAdmin() ? true : false;

        if(Yii::$app->request->isAjax){
            $profiles_html = Yii::$app->controller->renderPartial('//layouts/parts/profile-list-index-page.php', [
                'users' => $users,
                'pages' => $pages,
                'page'=>$curr_page,
                'admin' => $admin,
            ]);


            \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

            $url = "/".implode('/',$url_elem);
            if(!empty($url_elem2)){
                $url2 = http_build_query($url_elem2);
                $url = $url."?".$url2;
            }
            if(isset($get['attr_values']) && $get['attr_values'] != ''){
                $pref = empty($url_elem2) ? "?" : "&";
                $url = $url.$pref.$get['attr_values'];
            }
            return [
                'success'=>true,
                'data'=>$profiles_html,
                'total_count'=>$usersCount,
                'url'=>$url,
            ];
        }

        return $this->render('index', [
            'users' => $users,
            'count' => $usersCount,
            'pages' => $pages,
            'page'=>$curr_page,
            'countries' => $countries,
            'countries2' => $countries2,
            'country_id' => $country_id,
            'city_id' => $city_id,
            'cities' => $cities,
            'type' => $type_sphere,
            'admin' => $admin,
            'works_name' => json_encode($works_name)
        ]);
    }

    /**
     * Displays profile detail
     *
     * @return string
     * @throws HttpException
     */
    public function actionView()
    {
        if ($id = Yii::$app->request->get('id')) {
            $user = User::find()->where(['id' => $id])->with('security')->one();
            if (!$user) {
                throw new HttpException('404', 'Page not found');
            }
        } else {
            $user = Yii::$app->user->identity;
        }

        $user->updateCounters(['views' => 1]);
        $works_name = Purpose::find()->orderBy('title_'.Yii::$app->language)->asArray()->all();
        $works_name = ArrayHelper::getColumn($works_name, 'title_'.Yii::$app->language);
        $countries = NetCountry::find()->asArray()->orderBy('name_'.Yii::$app->language)->all();
        $countries_select = ArrayHelper::map($countries, 'id', 'name_'.Yii::$app->language);
        $countries = ArrayHelper::getColumn($countries, 'name_'.Yii::$app->language);
        $jobcat = PropertyType::find()->asArray()->where(['title_'.Yii::$app->language => ''])->all();
        $jobcat = ArrayHelper::map($jobcat, 'id', 'title_'.Yii::$app->language);
//        $userworkmodels = (new UserworkForm())->find()->where(['user_id' => $user->id])->all();
//        $usereducationmodels = (new UsereducationForm())->find()->where(['user_id' => $user->id])->all();
        $langs = json_decode($user->langjson, true);
        Yii::$app->view->title = $user->firstname . ' ' . $user->lastname . ($user->country ? ' | ' . $user->country : '') . ' | Profile | Kosmetolog.co';
        Yii::$app->view->registerMetaTag([
            'name' => 'og:title',
            'content' => Yii::$app->view->title
        ]);

        return $this->render('view', [
            'user' => $user,
            'jobcat' => $jobcat,
            'works_name' => json_encode($works_name),
            'countries' => json_encode($countries),
            'countries_select' => $countries_select,
            'langs' => $langs,
        ]);
    }

    /**
     * @return Response
     * @throws HttpException
     */
    public function actionCreatechat()
    {
        if ($id = Yii::$app->request->get('id')) {
            $user_to = User::findOne(['id' => $id]);
            if (!$user_to) {
                throw new HttpException('404', 'Page not found');
            }
        } else {
            $user_to = Yii::$app->user->identity;
        }

        $user = Yii::$app->user->identity;

        $group = MessagesGroup::find()->where(['and', ['from' => $user_to->id], ['to' => $user->id]])->orWhere(['and', ['from' => $user->id], ['to' => $user_to->id]])->orderBy('created ASC')->one();
        if (!$group) {
            $group = new MessagesGroup();
            $group->from = $user->id;
            $group->to = $user_to->id;
        }
        $group->created = time();
        if ($group->save()) {
//            $message = new Messages();
//            $message->from = $user->id;
//            $message->to = $user_to->id;
//            $message->created = $group->created;
//            $message->group_id = $group->id;
//            $message->new_to = 1;
//            if ($message->save(false)) {
//
//            }
            return $this->redirect(['/cabinet/messages', 'dialog' => $user_to->id]);
        }
    }


    // AJAX START

    /**
     * @return array|bool|\yii\db\ActiveRecord[]
     */
    public function actionAjaxgetcityselect()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post) {
            if ($post['country']) {
                $country = NetCountry::findOne(['slug' => $post['country']]);
                if ($country) {
                    $city = NetCity::find()->where(['country_id' => $country->id])->asArray()->orderBy('name_'.Yii::$app->language)->all();
                    $city = ArrayHelper::map($city, 'slug', 'name_'.Yii::$app->language);
                    return $city;
                }
            }
        }
        return false;
    }

    // AJAX END

}
