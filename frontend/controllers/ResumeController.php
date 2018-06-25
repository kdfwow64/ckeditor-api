<?php
namespace frontend\controllers;

use common\models\Ads;
use common\models\AdsAttributeValue;
use common\models\Attributes;
use common\models\Balans;
use common\models\Currency;
use common\models\CategoryAttribute;
use common\models\FavoritesFilters;
use common\models\Investments;
use common\models\JobsCategory;
use common\models\JobsName;
use common\models\NetCity;
use common\models\NetCountry;
use common\models\Packet;
use common\models\PropertyType;
use common\models\Purpose;
use common\models\Resume;
use common\models\Seo;
use common\models\Transactions;
use common\models\User;
use common\models\Vacancies;
use frontend\models\cabinet\InfochangeForm;
use frontend\models\cabinet\PasswordchangeForm;
use frontend\models\cabinet\PasswordInfochangeForm;
use frontend\models\ModalmessageForm;
use yii\web\HttpException;
use Yii;
use yii\data\Pagination;
use yii\helpers\ArrayHelper;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;
use yii\web\Response;
use yii\web\UploadedFile;


/**
 * Site controller
 */
class ResumeController extends Controller
{


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

    public function beforeAction($action)
    {

        $seoTag = Seo::findByurl(Yii::$app->request->url);
        if ($seoTag) {
            Yii::$app->view->registerMetaTag([
                'property' => 'og:type',
                'content' => 'article'
            ]);

            Yii::$app->view->registerMetaTag([
                'property' => 'keywords',
                'content' => $seoTag->keywords
            ]);

            if ($action->id != 'view') {
                Yii::$app->view->registerMetaTag([
                    'property' => 'description',
                    'content' => $seoTag->description
                ]);
                Yii::$app->view->registerMetaTag([
                    'property' => 'og:description',
                    'content' => $seoTag->description
                ]);

                if (!$seoTag->title) {
                    Yii::$app->view->title = Yii::$app->params['site_name']." - ".Yii::t('app', 'Tenants');
                    Yii::$app->view->registerMetaTag([
                        'property' => 'og:title',
                        'content' => Yii::$app->params['site_name']." - ".Yii::t('app', 'Tenants')
                    ]);
                } else {
                    Yii::$app->view->title = $seoTag->title;
                    Yii::$app->view->registerMetaTag([
                        'property' => 'og:title',
                        'content' => $seoTag->title
                    ]);
                }
            }

            if ($action->id == 'index') {
                $this->enableCsrfValidation = false;
            }
        } else {
            Yii::$app->view->title = Yii::$app->params['site_name']." - ".Yii::t('app', 'Tenants');
            if ($action->id != 'view') {
                Yii::$app->view->registerMetaTag([
                    'name' => 'og:description',
                    'content' => isset(Yii::$app->params['seodescription']) ? Yii::$app->params['seodescription'] : ''
                ]);

                Yii::$app->view->registerMetaTag([
                    'name' => 'description',
                    'content' => isset(Yii::$app->params['seodescription']) ? Yii::$app->params['seodescription'] : ''
                ]);
            }
        }

        if ($action->id != 'view') {
            Yii::$app->view->registerMetaTag([
                'property' => 'og:image',
                'content' => isset(Yii::$app->params['seoimg']) ? 'https://' . $_SERVER['HTTP_HOST'] . Yii::$app->params['seoimg'] : ''
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
                //return $this->redirect(['resume/index']);
            }
        }

        $property_type = PropertyType::find()->orderBy('title_'.Yii::$app->language)->asArray()->all();
        $property_type_by_id = ArrayHelper::index($property_type, 'slug');
        $type_sphere = ArrayHelper::map($property_type, 'slug', 'title_'.Yii::$app->language);
        $property_id = ArrayHelper::map($property_type, 'id', 'title_'.Yii::$app->language);

        $purpose_all = Purpose::find()->orderBy('title_'.Yii::$app->language)->asArray()->all();
        $purpose_by_id = ArrayHelper::index($purpose_all, 'slug');
        $purpose = ArrayHelper::map($purpose_all, 'slug', 'title_'.Yii::$app->language);
        $purpose_id = ArrayHelper::map($purpose_all, 'id', 'title_'.Yii::$app->language);
        $currency_query = Currency::find()->orderBy('id')->asArray()->all();
        $currency = ArrayHelper::map($currency_query, 'id', 'name');
        $attributesKeys = [];
        $attributesValue = [];

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

        $query = Ads::find()->where(['active' => 1, 'type_ad' => Ads::BUY])->orderBy('updated_at DESC')->with(['adsAttachments', 'cityName', 'countryName']);
        if ($get) {
            if (isset($get['type']) && $get['type']) {
                $attributesCategory = CategoryAttribute::find()
                    ->where(['category_id' => $property_type_by_id[$get['type']]['id']])
                    ->with('attributeVal')
                    ->asArray()
                    ->all();

                foreach ($attributesCategory as $key => $config) {
                    $attributesKeys[$config['attributeVal']['slug']] =
                        [
                            'label'   => Yii::t('app', $config['attributeVal']['name']),
                            'type'    => $config['attributeVal']['typeField']['short_name'],
                            'items'   => ArrayHelper::map($config['attributeVal']['attributeValues'], 'id', 'value'),
                            'options' => [
                                'name' => $config['attributeVal']['slug'],
                                'prompt' => $config['attributeVal']['prompt_desc']
                            ]
                        ];

                    if (isset($get[$config['attributeVal']['slug']]))
                        $attributesValue[$config['attributeVal']['slug']] = $get[$config['attributeVal']['slug']];
                }
            }

            if(empty($country_query) && isset($get['country']) && $get['country']){
                $country_query = NetCountry::findOne(['slug' => $get['country']]);
                $country_id = $country_query->id;
            }
            if($country_id){
                $query->andWhere(['country' => $country_id]);
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
                    $query->andWhere(['city' => $cityIds]);
                } else {
                    $query->andWhere(['city' => $city_id]);
                }
            }

            if (isset($get['purpose']) && $get['purpose']) {
                $url_elem2['purpose'] = $get['purpose'];
                $query->andWhere(['type_id' => $purpose_by_id[$get['purpose']]['id']]);
            }
            if (isset($get['type']) && $get['type']) {
                $url_elem2['type'] = $get['type'];
                $jobcatGet = PropertyType::findOne(['slug' => $get['type']]);
                if ($jobcatGet) {
                    $query->andWhere(['cat_id' => $jobcatGet->id]);
                    $lang_pref = "title_".Yii::$app->language;
                    Yii::$app->view->title = $jobcatGet->$lang_pref . ' | '.Yii::t('app', 'Ads').' | '.Yii::$app->params['site_name'];
                }
            }
            if (isset($get['price_to']) && $get['price_to']) {
                $url_elem2['price_to'] = $get['price_to'];
                $query->andWhere(['<=', 'price', $get['price_to']]);
            }
            if (isset($get['price_from']) && $get['price_from']) {
                $url_elem2['price_from'] = $get['price_from'];
                $query->andWhere(['>=', 'price', $get['price_from']]);
            }
            if (isset($get['currency']) && (int)$get['currency'] != 0) {
                $url_elem2['currency'] = (int)$get['currency'];
                $query->andWhere(['currency' => (int)$get['currency']]);
            }

            $model_attr = ArrayHelper::map(Attributes::find()->all(), 'slug', 'id');
            $added_join = false;
            foreach ($model_attr as $key => $value) {
                if (isset($get[$key]) && $get[$key]) {
                    if (!$added_join) {
                        $query->innerJoinWith('adsAttributeValue');
                        $added_join = true;
                    }
                    if (count($get[$key]) > 1) {
                        foreach ($get[$key] as $value_detail)
                            $query->andWhere(['ads_attribute_value.attribute_value_id' => $value_detail]);
                    } else {
                        $query->andWhere(['ads_attribute_value.attribute_value_id' => $get[$key]]);
                    }

                }
            }

            if(isset($get['searchkeyword']) && trim($get['searchkeyword']) != ''){
                $searchkeyword = strip_tags($get['searchkeyword']);
                $searchkeyword = htmlspecialchars($searchkeyword);
                $url_elem2['searchkeyword'] = $searchkeyword;
                $query->andFilterWhere([
                    'or',
                    ['like','title',$searchkeyword],
                    ['like','desc',$searchkeyword],
                ]);
            }

        }

        $vacanciesCount = $query->count();
        $curr_page = isset($get['page']) && is_numeric($get['page']) ? $get['page'] : 0;
        if($curr_page !=0){
            $_GET['page'] = $get['page'];
            $url_elem2['page'] = $curr_page;
        }
        $pages = new Pagination(['totalCount' => $vacanciesCount, 'pageSize' => 20]);
        // приводим параметры в ссылке к ЧПУ
        $pages->pageSizeParam = false;

        $vacancies = $query->offset($pages->offset)
            ->limit($pages->limit)
            ->all();

        $admin = isset(Yii::$app->user->identity) && Yii::$app->user->identity->isAdmin() ? true : false;

        $favorite_status = false;
        $filter_arr = [
            'country' => '',
            'city' => '',
            'type' => '',
//            'keyword' => '',
            'radius' =>'',
            'price_to' =>'',
            'price_from' =>'',
            'working' => '',
            'lang' => '',
        ];

        if(Yii::$app->request->isAjax){
            $ads_html = Yii::$app->controller->renderPartial('//layouts/parts/ads-list-index-page.php', [
                'ads' => $vacancies,
                'property_id_mass'=>$property_id,
                'purpose_id_mass'=>$purpose_id,
                'admin'=>$admin,
                'pages'=>$pages,
                'page'=>$curr_page,
                'ads_type'=>'buy',

            ]);

            $ads_attr_html = Yii::$app->controller->renderPartial('//layouts/parts/ads-attr.php', [
                'attributesKeys' => $attributesKeys,
                'attributesValue' => $attributesValue,
            ]);

            \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

            $url_pref = empty($url_elem) ? "" : "/";
            $url = $url_pref.implode('/',$url_elem);
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
                'data'=>$ads_html,
                'ads_attr_html'=>$ads_attr_html,
                'total_count'=>$vacanciesCount,
                'url'=>$url,
            ];
        }

        return $this->render('index', [
            'vacancies' => $vacancies,
            'count' => $vacanciesCount,
            'pages' => $pages,
            'page'=>$curr_page,
            'countries' => $countries,
            'countries2' => $countries2,
            'country_id' => $country_id,
            'city_id' => $city_id,
            'cities' => $cities,
            'type' => $type_sphere,
            'admin' => $admin,
            'purpose' => $purpose,
            'currency' => $currency,
            'favorite_status' => $favorite_status,
            'attributesKeys' => $attributesKeys,
            'attributesValue' => $attributesValue,
            'property_id' => $property_id,
            'purpose_id' => $purpose_id
        ]);
    }

    public function actionView($slug)
    {
        if ($model = Ads::find()->where(['slug' => $slug])->with(['adsAttachments', 'cityName', 'countryName', 'user'])->one()) {
            $model->updateCounters(['views' => 1]);
            $works_name = ArrayHelper::map(Purpose::find()->where(['id' => $model->type_id])->orderBy('title_'.Yii::$app->language)->asArray()->all(), 'id', 'title_'.Yii::$app->language);
            $countries = ArrayHelper::map(NetCountry::find()->where(['id' => $model->country])->asArray()->orderBy('name_'.Yii::$app->language)->all(), 'id', 'name_'.Yii::$app->language);
            $jobcat = ArrayHelper::map(PropertyType::find()->asArray()->where(['id' => $model->cat_id])->all(), 'id', 'title_'.Yii::$app->language);
            $lang_pref = 'name_'.Yii::$app->language;
            Yii::$app->view->title = $model->title . ($model->countryName->$lang_pref ? ' | ' . $model->countryName->$lang_pref : '') .
                ($model->cityName->$lang_pref ? ' | ' . $model->cityName->$lang_pref : '') . ' | ' . $jobcat[$model->cat_id] .
                ' | ' . $works_name[$model->type_id] . ' | '.Yii::t('app', 'Tenants').' | '.Yii::$app->params['site_name'];

            Yii::$app->view->registerMetaTag([
                'property' => 'og:title',
                'content' => Yii::$app->view->title
            ]);
            Yii::$app->view->registerMetaTag([
                'property' => 'title',
                'content' => Yii::$app->view->title
            ]);
            Yii::$app->view->registerMetaTag([
                'property' => 'og:description',
                'content' => $model->desc
            ]);
            Yii::$app->view->registerMetaTag([
                'property' => 'description',
                'content' => $model->desc
            ]);

            if (isset($model->adsAttachments[0])) {
                Yii::$app->view->registerMetaTag([
                    'property' => 'og:image',
                    'content' => 'https://' . $_SERVER['HTTP_HOST'] . $model->adsAttachments[0]->base_url . '/' . $model->adsAttachments[0]->path
                ]);
            } else {
                Yii::$app->view->registerMetaTag([
                    'property' => 'og:image',
                    'content' => isset(Yii::$app->params['seoimg']) ? 'https://' . $_SERVER['HTTP_HOST'] . Yii::$app->params['seoimg'] : ''
                ]);
            }

            $attributesKeys = [];
            $attributesValue = [];
            $attributesCategory = CategoryAttribute::find()
                ->where(['category_id' => $model->cat_id])
                ->with('attributeVal')
                ->asArray()
                ->all();

            foreach ($attributesCategory as $key => $config) {
                $attributesKeys[$config['attributeVal']['id']] =
                    [
                        'label' => Yii::t('app', $config['attributeVal']['name']),
                        'type' => $config['attributeVal']['typeField']['short_name'],
                        'items' => ArrayHelper::map($config['attributeVal']['attributeValues'], 'id', 'value')
                    ];

//                if (isset($get[$config['attributeVal']['slug']]))
//                    $attributesValue[$config['attributeVal']['slug']] = $get[$config['attributeVal']['slug']];
            }

            $attributesValue = ArrayHelper::index(AdsAttributeValue::find()
                ->where(['ads_id' => $model->id, 'attribute_id' => ArrayHelper::getColumn($attributesCategory, 'attribute_id')])
                ->asArray()
                ->all(), null, 'attribute_id');

            $modelmessage = new ModalmessageForm();
            if (!Yii::$app->user->isGuest) {
                $modelmessage->to = $model->user->id;
                $modelmessage->email = Yii::$app->user->identity->email;
                $modelmessage->phone = Yii::$app->user->identity->phone;
                $modelmessage->from = Yii::$app->user->identity->id;
                $modelmessage->type = 'Applicants';
                $modelmessage->work = $model->title . ' - ' . (isset($works_name[$model->type_id]) ? $works_name[$model->type_id] : '');
                if ($modelmessage->load(Yii::$app->request->post()) && $modelmessage->validate()) {
                    $modelmessage->createMessage();
                }
            }
            return $this->render('view', [
                'model' => $model,
                'jobcat' => $jobcat,
                'modelmessage' => $modelmessage,
                'works_name' => $works_name,
                'countries' => $countries,
                'attributesValue' => $attributesValue,
                'attributesKeys' => $attributesKeys
            ]);
        } else {
            throw new HttpException('404', 'Page not found');
        }
    }

    // AJAX START

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
