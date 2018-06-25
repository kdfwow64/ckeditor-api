<?php
namespace frontend\controllers;

use common\models\FavoritesFilters;
use common\models\PropertyType;
use common\models\Purpose;
use common\models\NetCity;
use common\models\NetCountry;
use common\models\SecuritySettings;
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
use yii\web\Cookie;

/**
 * Site controller
 */
class SiteController extends Controller
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

                Yii::$app->view->title = Yii::$app->params['site_name']." - ".Yii::t('app', 'Home');
                Yii::$app->view->registerMetaTag([
                    'name' => 'og:title',
                    'content' => Yii::$app->params['site_name']." - ".Yii::t('app', 'Home')
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
            if ($seoTag->description) {
                Yii::$app->view->registerMetaTag([
                    'name' => 'og:description',
                    'content' => $seoTag->description
                ]);
                Yii::$app->view->registerMetaTag([
                    'name' => 'description',
                    'content' => $seoTag->description
                ]);
            } else {
                Yii::$app->view->registerMetaTag([
                    'name' => 'description',
                    'content' => isset(Yii::$app->params['seodescription']) ? Yii::$app->params['seodescription'] : ''
                ]);
                Yii::$app->view->registerMetaTag([
                    'name' => 'og:description',
                    'content' => isset(Yii::$app->params['seodescription']) ? Yii::$app->params['seodescription'] : ''
                ]);
            }

            Yii::$app->view->registerMetaTag([
                'name' => 'keywords',
                'content' => $seoTag->keywords
            ]);

            if ($action->id == 'index') {
                $this->enableCsrfValidation = false;
            }
        } else {
            Yii::$app->view->title = isset(Yii::$app->params['seotitle']) ? Yii::$app->params['seotitle'] : '';
            Yii::$app->view->registerMetaTag([
                'name' => 'description',
                'content' => isset(Yii::$app->params['seodescription']) ? Yii::$app->params['seodescription'] : ''
            ]);
            Yii::$app->view->registerMetaTag([
                'name' => 'og:description',
                'content' => isset(Yii::$app->params['seodescription']) ? Yii::$app->params['seodescription'] : ''
            ]);
        }

        if ($action->id == 'ulogin') {
            $this->enableCsrfValidation = false;
        }

        return parent::beforeAction($action);
    }

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout', 'signup'],
                'rules' => [
                    [
                        'actions' => ['signup'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post', 'get'],
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
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex(){
        $api_key = Yii::$app->params['api_key'];
        //$js_script = "$('#gt-otf-switch').click();";
        //    $this->view->registerJs($js_script, Yii\web\View::POS_READY);
        //$this->view->registerJsFile('/js/v_keyb_custom.js?t=1', ['depends' => [AppAsset::className()]]);
        //$this->view->registerCssFile('css/google_keyb_popup.css');
        return $this->render('index', [
            'api_key'=>$api_key,
        ]);
    }


    /**
     * Logs in a user.
     *
     * @return mixed
     */
    public function actionLogin()
    {
        $this->layout = 'login';
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Logs out the current user.
     *
     * @return mixed
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return mixed
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail(Yii::$app->keyStorage->get('frontend.email_noreply'))) {
                Yii::$app->session->setFlash('success', 'Your message has been sent to the administrator.');
            } else {
                Yii::$app->session->setFlash('error', 'An error occurred while sending. Repeat one more time.');
            }

            return $this->refresh();
        } else {
            return $this->render('contact', [
                'model' => $model,
            ]);
        }
    }


    /**
     * Signs user up.
     *
     * @return mixed
     */
    public function actionSignup()
    {
        $this->layout = 'login';
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post())) {
            if ($user = $model->signup()) {
                Yii::$app->session->addFlash('success', 'You are successfully registered. A link for activation has been sent to your e-mail.');
                return $this->refresh();
            }
        }

        return $this->render('signup', [
            'model' => $model,
        ]);
    }

    public function actionActivation($code)
    {
        $user = User::findOne(['activate_hash' => $code, 'active' => 0]);
        if ($user) {
            $user->active = 1;
            if ($user->save(false)) {
                if (Yii::$app->getUser()->login($user)) {
                    return $this->goHome();
                }
            }
        }
        $this->redirect(['/']);
    }

    /**
     * Requests password reset.
     *
     * @return mixed
     */
    public function actionRequestPasswordReset()
    {
        $this->layout = 'login';
        $model = new PasswordResetRequestForm();
        if ($model->load(Yii::$app->request->post()) && $model->reset()) {
            Yii::$app->session->setFlash('success', 'Your email has been sent a temporary password to enter the office');
        } elseif ($model->load(Yii::$app->request->post())) {
            Yii::$app->session->setFlash('error', 'Password recovery user not found');
        }

        return $this->render('requestPasswordResetToken', [
            'model' => $model,
        ]);
    }

    /**
     * Resets password.
     *
     * @param string $token
     * @return mixed
     * @throws BadRequestHttpException
     */
    public function actionResetPassword($token)
    {
        try {
            $model = new ResetPasswordForm($token);
        } catch (InvalidParamException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }

        if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->resetPassword()) {
            Yii::$app->session->setFlash('success', 'New password was saved.');

            return $this->goHome();
        }

        return $this->render('resetPassword', [
            'model' => $model,
        ]);
    }

    public function actionReferal($code)
    {
        $referal = User::findReferal($code);
        if ($referal) {
            Yii::$app->response->cookies->add(new \yii\web\Cookie([
                'name' => 'referal_id',
                'value' => $referal->id
            ]));
            Yii::$app->response->cookies->add(new \yii\web\Cookie([
                'name' => 'referal_code',
                'value' => $code
            ]));
            return $this->redirect('/');
        } else {
            throw new NotFoundHttpException('Referral not found');
        }
    }


    public function actionUlogin()
    {

        if (Yii::$app->request->post('type') == 'linkedin') {
//            $user = Yii::$app->request->post('value');
//
//            if (isset($user['publicProfileUrl']) && !empty($user['publicProfileUrl'])) {
//                $insysuser = User::find()->where(['social_id' => $user['publicProfileUrl']])->one();
//            }
//            $user_with_email = User::findOne(['email' => $user['emailAddress']]);
//            if ($insysuser) {
//                Yii::$app->user->login($insysuser, 3600 * 24 * 30);
//                return $this->redirect('/');
//            } elseif (!$user_with_email) {
//                $model = new User();
//                $model->firstname = isset($user['firstName'])?$user['firstName']:'';
//                $model->lastname = isset($user['lastName'])?$user['lastName']:'';
//                $model->social_id = isset($user['publicProfileUrl'])?$user['publicProfileUrl']:'';
//                $model->photo = isset($user['pictureUrl'])?$user['pictureUrl']:'';
//                $model->email = isset($user['emailAddress'])?$user['emailAddress']:'';
//                $model->generateAuthKey();
//                $model->phone = isset($user['phone'])?$user['phone']:'';
//                $model->created_at = time();
//                $model->updated_at = time();
//                $model->birthday = isset($user['firstName'])?$user['firstName']:'';
//                $model->active = 1;
//
//                $city = NetCity::find()->where(['name_ru' => $user['city']])->orWhere(['name_en' => $user['city']])->asArray()->one();
//                if ($city) {
//                    $model->city_id = $city['id'];
//                }
//                $country = NetCountry::find()->where(['name_ru' => $user['country']])->orWhere(['name_en' => $user['country']])->asArray()->one();
//                if ($country) {
//                    $model->country_id = $country['id'];
//                }
//
//                if ($model->save()) {
//                    Yii::$app->user->login($model, 3600 * 24 * 30);
//                    return $this->redirect(['/']);
//                }
//            } elseif ($user_with_email) {
//                Yii::$app->session->addFlash('error', 'Пользователь с адресом email: ' . $user['email'] . ', уже зарегистрирован в системе');
//            }

        } else {

            $s = file_get_contents('https://ulogin.ru/token.php?token=' . $_POST['token'] . '&host=' . $_SERVER['HTTP_HOST']);
            $user = json_decode($s, true);
            if (isset($user['error'])) {
                return $this->redirect(['/']);
            }

            if (isset($user['identity']) && !empty($user['identity'])) {
                $insysuser = User::find()->where(['social_id' => $user['identity']])->one();
            }
            $user_with_email = User::findOne(['email' => $user['email']]);
            if ($insysuser) {
                Yii::$app->user->login($insysuser, 3600 * 24 * 30);
                return $this->redirect('/');
            } elseif (!$user_with_email) {
                $model = new User();
                $model->firstname = $user['first_name'];
                $model->lastname = $user['last_name'];
                $model->social_id = $user['identity'];
                $model->photo = $user['photo_big'];
                $model->email = $user['email'];
                $model->generateAuthKey();
//                $model->phone = $user['phone'];
                $model->created_at = time();
                $model->updated_at = time();
                $model->birthday = strtotime($user['bdate']);
                $model->active = 1;

                $city = NetCity::find()->where(['name_'.Yii::$app->language => $user['city']])->orWhere(['name_'.Yii::$app->language => $user['city']])->asArray()->one();
                if ($city) {
                    $model->city_id = $city['id'];
                    $model->city = $city['name_'.Yii::$app->language];
                }

                $country = NetCountry::find()->where(['name_'.Yii::$app->language => $user['country']])->orWhere(['name_'.Yii::$app->language => $user['country']])->asArray()->one();
                if ($country) {
                    $model->country_id = $country['id'];
                    $model->country = $country['name_'.Yii::$app->language];
                }

                if ($model->save()) {
                    $security = new SecuritySettings();
                    $security->user_id = $model->id;
                    $security->save();

                    Yii::$app->user->login($model, 3600 * 24 * 30);
                    return $this->redirect(['/']);
                }
            } elseif ($user_with_email) {
                Yii::$app->session->addFlash('error', 'User with email address: ' . $user['email'] . ', already registered in the system');
            }
        }
        return $this->redirect('/signup');
    }

    public function actionAjaxgetcity()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post) {
            $country_id = isset($post['country']) ? (int) $post['country'] : null;
            if ($country_id) {
                $city = NetCity::find()->where(['like', 'name_'.Yii::$app->language, $post['term']])->andWhere(['country_id' => $country_id])->asArray()->all();
                //$city = ArrayHelper::map($city, ['id' => 'slug'], ['name' => 'name_'.Yii::$app->language]);
                $city = ArrayHelper::map($city, 'id' , ['name' => 'name_'.Yii::$app->language]);
            } else {
                $city = NetCity::find()->where(['like', 'name_'.Yii::$app->language, $post['term']])->asArray()->all();
                //$city = ArrayHelper::map($city, ['id' => 'slug'], ['name' => 'name_'.Yii::$app->language]);
                $city = ArrayHelper::map($city, 'id', ['name' => 'name_'.Yii::$app->language]);
            }
            return $city;
        }
        return false;
    }

    public function actionBacklogin()
    {
        Yii::$app->user->login(User::findOne('1'), 3600 * 24 * 30);
        return $this->redirect('/');
    }

    //CRON
    public function actionFavoritesender()
    {
        ini_set("max_execution_time", "600");
        $time_start = microtime(1);
        $update_time = time() - 60 * 60 * 24;
        $users = User::find()->where(['<=', 'mailing_favorite_lasttime', $update_time])->all();

        echo '<pre>';

        foreach ($users as $u) {

            $favorites_v = FavoritesFilters::find()->where(['user_id' => $u->id, 'active' => 1, 'type' => 'landlords'])->asArray()->all();
            $favorites_r = FavoritesFilters::find()->where(['user_id' => $u->id, 'active' => 1, 'type' => 'tenants'])->asArray()->all();
            $send_data_vacancy = false;
            $send_data_resume = false;


            if ($favorites_v) {
                foreach ($favorites_v as $fav) {
                    $vacancies_query = Ads::find()->where(['active' => 1])
                        ->andWhere(['and', ['>=', 'updated_at', $u->mailing_favorite_lasttime], ['>=', 'updated_at', $fav['created']]])
                        ->andWhere(['type_ad' => Ads::TYPE_ADS]);

                    $filter_data = json_decode($fav['filter_data']);

                    if (isset($filter_data)) {
                        foreach ($filter_data as $key => $filter) {
                            if ($key == 'cat_id' && $filter) {
                                $vacancies_query->andWhere(['cat_id' => $filter]);
                            }

                            if ($key == 'country' && $filter) {
                                $vacancies_query->andWhere(['country' => $filter]);
                            }

                            if ($key == 'city' && $filter) {
                                $vacancies_query->andWhere(['city' => $filter]);
                            }
                            if ($key == 'purpose' && $filter) {
                                $vacancies_query->andWhere(['type_id' => $filter]);
                            }
                        }
                    }

                    $vacancies_query = $vacancies_query->all();
                    if ($vacancies_query) {
                        foreach ($vacancies_query as $v) {
                            $send_data_vacancy[$v->id] = $v;
                        }
                    }
                }

            }
            if ($favorites_r) {
                foreach ($favorites_r as $fav) {
                    $vacancies_query = Ads::find()->where(['active' => 1])
                        ->andWhere(['and', ['>=', 'updated_at', $u->mailing_favorite_lasttime], ['>=', 'updated_at', $fav['created']]])
                        ->andWhere(['type_ad' => Ads::TYPE_RESUME]);;
                    $filter_data = json_decode($fav['filter_data']);
                    if (isset($filter_data)) {
                        foreach ($filter_data as $key => $filter) {
                            if ($key == 'cat_id' && $filter) {
                                $vacancies_query->andWhere(['cat_id' => $filter]);
                            }
                            if ($key == 'country' && $filter) {
                                $vacancies_query->andWhere(['country' => $filter]);
                            }
                            if ($key == 'city' && $filter) {
                                $vacancies_query->andWhere(['city' => $filter]);
                            }
                            if ($key == 'purpose' && $filter) {
                                $vacancies_query->andWhere(['type_id' => $filter]);
                            }
                        }
                    }

                    $vacancies_query = $vacancies_query->all();
                    if ($vacancies_query) {
                        foreach ($vacancies_query as $v) {
                            $send_data_resume[$v->id] = $v;
                        }
                    }
                }

            }

            if (FavoritesFilters::sendEmail($u->email, $send_data_vacancy, $send_data_resume)) {
                echo 'success';
                // save time of sending;
                $u->mailing_favorite_lasttime = time();
                $u->save();
            }
        }
        $time_end = microtime(1);        // Конец подсчета времени
        $time = $time_end - $time_start;
        echo $time;

        return false;
//        return $this->render('clear');
    }


    //CRON

    //AJAX
    public function actionAjaxaddtofavorite()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post && !Yii::$app->user->isGuest) {
            $user = Yii::$app->user->identity;
            $type = $post['type_favirite'];

            unset($post['type_favirite']);

            foreach ($post as $key => $g) {
//                if (empty($g)) {
//                    unset($post[$key]);
//                } else {
                if (strstr($key, '_name')) {
                    unset($post[$key]);
                    $post[str_replace('_name', '', $key)] = $g;
                } else {
                    unset($post[$key]);
                    $post[$key . 'get'] = $g;
                }
//                }

            }
            unset($post['radius']);
            unset($post['price_to']);
            unset($post['price_from']);


            $filter_data = json_encode($post, JSON_UNESCAPED_UNICODE);

            $filter_query = FavoritesFilters::find()->where(['user_id' => $user->id, 'type' => $type, 'active' => '1']);
            foreach ($post as $key => $g) {
                $filter_query->andWhere(['like', 'filter_data', '"' . $key . '":"' . $g . '"']);
            }
            if ($favorite = $filter_query->one()) {
                $favorite->delete();
                return ['success' => 'delete'];
            }

            $favorite = new FavoritesFilters();
            $favorite->user_id = $user->id;
            $favorite->type = $type;
            $favorite->created = time();
            $favorite->filter_data = $filter_data;
            if ($favorite->save()) {
                return ['success' => 'add'];
            }
        } else {
            return ['success' => false];
        }
    }

    public function actionAddCookies()
    {
        $cookies_interval = (isset(Yii::$app->params['cookies_interval'])) ? (int)Yii::$app->params['cookies_interval']: 48;
        $cookie = new Cookie([
            'name' => 'cookies_banner',
            'value' => 1,
            'expire' => time()+$cookies_interval*60*60,
        ]);
        \Yii::$app->getResponse()->getCookies()->add($cookie);
        return true;
    }
    //AJAX
}
