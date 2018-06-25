<?php
namespace frontend\controllers;

use common\models\PropertyType;
use common\models\Purpose;
use Yii;
use yii\data\Pagination;
use yii\filters\VerbFilter;
use yii\helpers\ArrayHelper;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\web\Response;
use yii\web\HttpException;
use common\models\NetCity;
use common\models\NetCountry;
use common\models\Ads;


/**
 * Site controller
 */
class AjaxSearchController extends Controller
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
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        //$get_keyword = !empty($post['keyword_name']) ? $post['keyword_name'] : null;
        //$get_radius = !empty($post['radius_name']) ? $post['radius_name'] : null;
        //$get_priceto = !empty($post['price_to_name']) ? $post['price_to_name'] : null;
        //$get_pricefrom = !empty($post['price_from_name']) ? $post['price_from_name'] : null;
        $get_working = !empty($post['working_name']) ? $post['working_name'] : null;
        //$get_lang = !empty($post['lang_name']) ? $post['lang_name'] : null;
        $country_id = !empty($post['country_id']) ? (int)$post['country_id'] : null;
        $city_id = !empty($post['city_id']) ? (int)$post['city_id'] : null;
        $purpose = !empty($post['purpose']) ? $post['purpose'] : null;
        $ads_cat = !empty($post['ads_cat']) ? $post['ads_cat'] : null;
        $ads_type = !empty($post['ads_type']) && $post['ads_type']=='sale'  ? 'sale' : 'buy';

        $url_elem = [];
        $url_elem2 = [];
        $query = Ads::find()->where(['active' => 1]);
        if($ads_type=='sale'){
            $query->andWhere(['type_ad' => Ads::SALE]);
        }else{
            $query->andWhere(['type_ad' => Ads::BUY]);
        }

        $query->orderBy('updated_at DESC')->with(['adsAttachments', 'cityName', 'countryName']);

        if ($country_id) {
            $query->andWhere(['country' => $country_id]);
            $country_slug_query = NetCountry::find()->where(['id'=>$country_id])->select('slug')->one();
            $url_elem[] = "country_".$country_slug_query->slug;
        }
        
        if ($city_id) {
            $query->andWhere(['city' => $city_id]);
            $city_slug_query = NetCity::find()->where(['id'=>$city_id])->select('slug')->one();
            $url_elem[] = "city_".$city_slug_query->slug;
        }

        if ($ads_cat) {
            $jobcatGet = PropertyType::findOne(['slug' => $ads_cat]);
            if ($jobcatGet) {
                $query->andWhere(['cat_id' => $jobcatGet->id]);
            }
            $url_elem[] = "type_".$ads_cat;
        }
        if ($purpose) {
            $url_elem2['purpose'] = (int)$purpose;
            $query->andWhere(['type_id' => (int)$purpose]);
        }
        $total_count = $query->count();
        $ads_mass = $query->limit(5)->all();
        $type_sphere_all = PropertyType::find()->orderBy('title_'.Yii::$app->language)->asArray()->all();
        //$type_sphere = ArrayHelper::map($type_sphere_all, 'slug', 'title_en');
        $property_id_mass = ArrayHelper::map($type_sphere_all, 'id', 'title_'.Yii::$app->language);
        $works_name_all = Purpose::find()->orderBy('title_'.Yii::$app->language)->asArray()->all();
        $purpose_id_mass = ArrayHelper::map($works_name_all, 'id', 'title_'.Yii::$app->language);
        $admin = isset(Yii::$app->user->identity) && Yii::$app->user->identity->isAdmin() ? true : false;
        $url = "/".implode('/',$url_elem);
        if(!empty($url_elem2)){
            $url2 = http_build_query($url_elem2);
            $url = $url."?".$url2;
        }
        //  /country_ukraina
        //   /country_ukraina/city_odessa
        //  /country_ukraina/city_odessa/type_it-komputery-internet
        $ads_html = Yii::$app->controller->renderPartial('//layouts/parts/ads-list-homepage.php', [
            'ads' => $ads_mass,
            'property_id_mass'=>$property_id_mass,
            'purpose_id_mass'=>$purpose_id_mass,
            'admin'=>$admin,
            'ads_type'=>$ads_type,
            
        ]);
        return [
            'success'=>true,
            'data'=>$ads_html,
            'total_count'=>$total_count,
            'ads_type'=>$ads_type,
            'url'=>$url,
        ];
    }

}
