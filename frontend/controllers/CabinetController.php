<?php

namespace frontend\controllers;

use common\helpers\MainHelper;
use common\models\Ads;
use common\models\AdsAttachment;
use common\models\AdsAttributeValue;
use common\models\Balans;
use common\models\CategoryAttribute;
use common\models\FavoritesFilters;
use common\models\Investments;
use common\models\Languages;
use common\models\PropertyType;
use common\models\Purpose;
use common\models\Messages;
use common\models\MessagesGroup;
use common\models\NetCity;
use common\models\NetCountry;
use common\models\Packet;
use common\models\Resume;
use common\models\SecuritySettings;
use common\models\Seo;
use common\models\Transactions;
use common\models\User;
use common\models\UserEducation;
use common\models\UserWork;
use frontend\models\cabinet\Editprofile1Form;
use frontend\models\cabinet\Editprofile2Form;
use frontend\models\cabinet\PasswordchangeForm;
use frontend\models\cabinet\UserfavoriteForm;
use frontend\models\cabinet\UserlangForm;
use frontend\models\cabinet\UserresumeForm;
use frontend\models\cabinet\UseradsForm;
use Yii;
use yii\filters\AccessControl;
use yii\helpers\ArrayHelper;
use yii\helpers\Inflector;
use yii\helpers\StringHelper;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\web\Response;
use yii\web\UploadedFile;


/**
 * Site controller
 */
class CabinetController extends Controller
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
                Yii::$app->view->title = Yii::$app->params['site_name'].' - '.Yii::t('app', 'Home');
                Yii::$app->view->registerMetaTag([
                    'name' => 'og:title',
                    'content' => Yii::$app->params['site_name'].' - '.Yii::t('app', 'Home')
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


        if ($action->id == 'index') {
            $this->enableCsrfValidation = false;
        }


        return parent::beforeAction($action);
    }


    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
//                'only' => ['index', 'profile'],
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ]

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
            'upload' => [
                'class' => 'trntv\filekit\actions\UploadAction',
                'deleteRoute' => 'upload-delete',
                'on afterSave' => function ($event) {
                    /* @var $file \League\Flysystem\File */
                    $file = Yii::getAlias('@webroot/uploads/source/' . $event->path);
                    $image = Yii::$app->image->load($file);
                    $pathinfo = pathinfo($event->path);
                    if (!is_dir(Yii::getAlias('@webroot/uploads/thumb/' . $pathinfo['dirname']))) {
                        mkdir(Yii::getAlias('@webroot/uploads/thumb/' . $pathinfo['dirname']));
                    }

                    $image->resize(300, 300)->save(Yii::getAlias('@webroot/uploads/thumb/' . $event->path), 60);
                }
            ],
            'upload-delete' => [
                'class' => 'trntv\filekit\actions\DeleteAction'
            ],
            'upload-imperavi' => [
                'class' => 'trntv\filekit\actions\UploadAction',
                'fileparam' => 'file',
                'responseUrlParam' => 'filelink',
                'multiple' => false,
                'disableCsrf' => true
            ]
        ];
    }

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
        if ($id = Yii::$app->request->get('user_id')) {
            $user = User::findOne(['id' => $id]);
        } else {
            $user = Yii::$app->user->identity;
        }
        $works_name = Purpose::find()->orderBy('title_'.Yii::$app->language)->asArray()->all();
        $works_name = ArrayHelper::getColumn($works_name, 'title_'.Yii::$app->language);
        $countries = NetCountry::find()->asArray()->orderBy('name_'.Yii::$app->language)->all();
        $countries_select = ArrayHelper::map($countries, 'id', 'name_'.Yii::$app->language);
        $countries = ArrayHelper::getColumn($countries, 'name_'.Yii::$app->language);
        $langs = json_decode($user->langjson, true);

        return $this->render('index', [
            'user' => $user,
            'works_name' => json_encode($works_name),
            'countries' => json_encode($countries),
            'countries_select' => $countries_select,
            'langs' => $langs,
        ]);
    }

    /**
     * @return string|Response
     */
    public function actionEditprofile()
    {
        $user = Yii::$app->user->identity;
        $countries = NetCountry::find()->asArray()->orderBy('name_'.Yii::$app->language)->all();
        $countries_select = ArrayHelper::map($countries, 'id', 'name_'.Yii::$app->language);
        $countries = ArrayHelper::getColumn($countries, 'name_'.Yii::$app->language);

        $languages = ArrayHelper::map(Languages::find()->orderBy('name')->all(), 'name', 'name');

        $userprofile1 = Editprofile1Form::findOne(['id' => $user->id]);
        if ($userprofile1->load(\Yii::$app->request->post())) {
            $userprofile1->photofile = UploadedFile::getInstance($userprofile1, 'photofile');
            $userprofile1->photoprofilefile = UploadedFile::getInstance($userprofile1, 'photoprofilefile');
            if ($userprofile1->validate()) {
                $userprofile1->saveInfo();
                return $this->refresh();
            } else {
                \Yii::$app->session->setFlash('error', reset(reset($userprofile1->getErrors())));
            }
        }

        $userprofile2 = Editprofile2Form::findOne(['id' => $user->id]);

        if ($userprofile2->load(\Yii::$app->request->post())) {
            if ($userprofile2->validate()) {
                $userprofile2->saveInfo();
                return $this->refresh();
            } else {
                \Yii::$app->session->setFlash('error', reset(reset($userprofile2->getErrors())));
            }
        }

        $userlangmodel = new UserlangForm();
        if ($userlangmodel->load(\Yii::$app->request->post())) {
            if ($userlangmodel->validate()) {
                $userlangmodel->saveInfo();
                return $this->refresh();
            } else {
                \Yii::$app->session->setFlash('userworkerror', reset(reset($userlangmodel->getErrors())));
            }
        }

        return $this->render('editprofile', [
            'user' => $user,
            'userprofile1' => $userprofile1,
            'userprofile2' => $userprofile2,
            'countries' => json_encode($countries),
            'userlangmodel' => $userlangmodel,
            'countries_select' => $countries_select,
            'languages' => $languages
        ]);
    }

    /**
     * @return string
     */
    public function actionMyAds()
    {
        $user = Yii::$app->user->identity;
        $works_name = Purpose::find()->orderBy('title_en')->asArray()->all();
        $works_name_id = ArrayHelper::map($works_name, 'id', 'title_'.Yii::$app->language);
        $works_name = ArrayHelper::getColumn($works_name, 'title_'.Yii::$app->language);

        $jobcat = PropertyType::find()->asArray()->all();
        $jobcat = ArrayHelper::map($jobcat, 'id', 'title_'.Yii::$app->language);

        $jobname = [];

        $uservacancymodels = (new Ads())->find()->where(['user_id' => $user->id, 'type_ad' => Ads::SALE])
            ->with(['adsAttachments', 'cityName', 'countryName'])->orderBy([
                'updated_at' => SORT_DESC
            ])->all();

        return $this->render('myads', [
            'user' => $user,
            'jobcat' => $jobcat,
            'jobname' => $jobname,
            'works_name' => $works_name,
            'works_name_id' => $works_name_id,
            'uservacancymodels' => $uservacancymodels,
        ]);
    }

    /**
     * @return string
     */
    public function actionResume()
    {
        $user = Yii::$app->user->identity;
        $works_name = Purpose::find()->orderBy('title_en')->asArray()->all();
        $works_name_id = ArrayHelper::map($works_name, 'id', 'title_'.Yii::$app->language);
        $works_name = ArrayHelper::getColumn($works_name, 'title_'.Yii::$app->language);

        $jobcat = PropertyType::find()->asArray()->all();
        $jobcat = ArrayHelper::map($jobcat, 'id', 'title_'.Yii::$app->language);
        $jobname = [];

        $uservacancymodels = (new Ads())->find()->where(['user_id' => $user->id, 'type_ad' => Ads::BUY])
            ->with(['adsAttachments', 'cityName', 'countryName'])->orderBy([
                'updated_at' => SORT_DESC
            ])->all();

        return $this->render('resume', [
            'user' => $user,
            'jobcat' => $jobcat,
            'jobname' => $jobname,
            'works_name' => $works_name,
            'works_name_id' => $works_name_id,
            'uservacancymodels' => $uservacancymodels,
        ]);
    }

    /**
     * @return string|Response
     */
    public function actionAdsCreate()
    {
        $get = \Yii::$app->request->get();
        $job_category = ArrayHelper::map(PropertyType::find()->orderBy('title_'.Yii::$app->language)->all(), 'id', 'title_'.Yii::$app->language);
        $job_purpose = ArrayHelper::map(Purpose::find()->orderBy('title_'.Yii::$app->language)->all(), 'id', 'title_'.Yii::$app->language);
        $countries_select = ArrayHelper::map(NetCountry::find()->orderBy('name_'.Yii::$app->language)->all(), 'id', 'name_'.Yii::$app->language);
        $languages = ArrayHelper::map(Languages::find()->orderBy('name')->all(), 'name', 'name');
        $user = Yii::$app->user->identity;

        $attributesKeys = [];
        if (isset($get['cat_id']) && $get['cat_id']) {
            $attributesCategory = CategoryAttribute::find()
                ->where(['category_id' => $get['cat_id']])
                ->with('attributeVal')
                ->asArray()
                ->all();

            foreach ($attributesCategory as $key => $config) {
                $attributesKeys[$config['attributeVal']['slug']] =
                    [
                        'label' => Yii::t('app', $config['attributeVal']['name']),
                        'type' => $config['attributeVal']['typeField']['short_name'],
                        'items' => ArrayHelper::map($config['attributeVal']['attributeValues'], 'id', 'value'),
                        'options' => ['prompt' => $config['attributeVal']['prompt_desc']]
                    ];
            }
        }

        $useradsmodel = new UseradsForm();
        $useradsmodel->contact_name = $user->firstname;
        $useradsmodel->contact_phone = $user->phone;
        $useradsmodel->contact_email = $user->email;
        $useradsmodel->type_ad = Ads::SALE;

        $post = \Yii::$app->request->post();
        if ($useradsmodel->load($post)) {
            if ($useradsmodel->country && !$useradsmodel->cities) {
                $city = NetCity::find()
                    ->where(['country_id' => $useradsmodel->country])
                    ->asArray()
                    ->orderBy('name_'.Yii::$app->language)
                    ->all();
                $useradsmodel->cities = ArrayHelper::map($city, 'id', 'name_'.Yii::$app->language);
            }

            if ((Ads::find()->where(['user_id' => Yii::$app->user->identity->id])->count() < Ads::LIMIT || $useradsmodel->model_id || Yii::$app->user->identity->isAdmin())) {
                if ($useradsmodel->validate()) {
                    $model = $useradsmodel->saveInfo();
                    $useradsmodel->saveCategoryAttributes($post['FormModel'], $model);
                    return $this->redirect(['cabinet/my-ads']);
                } else {
                    \Yii::$app->session->setFlash('error' . $useradsmodel->model_id, reset(reset($useradsmodel->getErrors())));
                }
            } else {
                \Yii::$app->session->setFlash('error' . $useradsmodel->model_id, Yii::t('app', 'Exceeded allowed limit of records'));
            }
        }

        return $this->render('create_offers', [
            'useradsmodel' => $useradsmodel,
            'job_category' => $job_category,
            'job_purpose' => $job_purpose,
            'countries_select' => $countries_select,
            'attributesKeys' => $attributesKeys,
            'languages' => $languages
        ]);
    }

    /**
     * @return string|Response
     */
    public function actionAdsCreateSearch()
    {
        $get = \Yii::$app->request->get();
        $job_category = ArrayHelper::map(PropertyType::find()->orderBy('title_'. Yii::$app->language)->all(), 'id', 'title_'. Yii::$app->language);
        $job_purpose = ArrayHelper::map(Purpose::find()->orderBy('title_en')->all(), 'id', 'title_'. Yii::$app->language);
        $countries_select = ArrayHelper::map(NetCountry::find()->orderBy('name_en')->all(), 'id', 'name_'. Yii::$app->language);
        $languages = ArrayHelper::map(Languages::find()->orderBy('name')->all(), 'name', 'name');
        $user = Yii::$app->user->identity;

        $attributesKeys = [];
        if (isset($get['cat_id']) && $get['cat_id']) {
            $attributesCategory = CategoryAttribute::find()
                ->where(['category_id' => $get['cat_id']])
                ->with('attributeVal')
                ->asArray()
                ->all();

            foreach ($attributesCategory as $key => $config) {
                $attributesKeys[$config['attributeVal']['slug']] =
                    [
                        'label' => Yii::t('app', $config['attributeVal']['name']),
                        'type' => $config['attributeVal']['typeField']['short_name'],
                        'items' => ArrayHelper::map($config['attributeVal']['attributeValues'], 'id', 'value'),
                        'options' => ['prompt' => $config['attributeVal']['prompt_desc']]
                    ];
            }
        }

        $useradsmodel = new UseradsForm();
        $useradsmodel->contact_name = $user->firstname;
        $useradsmodel->contact_phone = $user->phone;
        $useradsmodel->contact_email = $user->email;
        $useradsmodel->type_ad = Ads::BUY;

        $post = \Yii::$app->request->post();
        if ($useradsmodel->load($post)) {
            if ($useradsmodel->country && !$useradsmodel->cities) {
                $city = NetCity::find()
                    ->where(['country_id' => $useradsmodel->country])
                    ->asArray()
                    ->orderBy('name_'. Yii::$app->language)
                    ->all();
                $useradsmodel->cities = ArrayHelper::map($city, 'id', 'name_'. Yii::$app->language);
            }

            if ((Ads::find()->where(['user_id' => Yii::$app->user->identity->id])->count() < Ads::LIMIT || $useradsmodel->model_id || Yii::$app->user->identity->isAdmin())) {
                if ($useradsmodel->validate()) {
                    $model = $useradsmodel->saveInfo();
                    $useradsmodel->saveCategoryAttributes($post['FormModel'], $model);
                    return $this->redirect(['cabinet/resume']);
                } else {
                    \Yii::$app->session->setFlash('error' . $useradsmodel->model_id, reset(reset($useradsmodel->getErrors())));
                }
            } else {
                \Yii::$app->session->setFlash('error' . $useradsmodel->model_id, Yii::t('app', 'Exceeded allowed limit of records'));
            }
        }

        return $this->render('create_search', [
            'useradsmodel' => $useradsmodel,
            'job_category' => $job_category,
            'job_purpose' => $job_purpose,
            'countries_select' => $countries_select,
            'attributesKeys' => $attributesKeys,
            'languages' => $languages
        ]);
    }

    /**
     * @param $id
     * @return string|Response
     * @throws BadRequestHttpException
     */
    public function actionAdsUpdate($id)
    {
        $useradsmodel = UseradsForm::find()->where(['id' => $id])->one();

        if ($useradsmodel['user_id'] != Yii::$app->user->identity->id && !Yii::$app->user->identity->isAdmin())
            throw new BadRequestHttpException(Yii::t("app", "The specified post cannot be found."));

        $job_category = ArrayHelper::map(PropertyType::find()->orderBy('title_'.Yii::$app->language)->all(), 'id', 'title_'.Yii::$app->language);
        $job_purpose = ArrayHelper::map(Purpose::find()->orderBy('title_'.Yii::$app->language)->all(), 'id', 'title_'.Yii::$app->language);
        $countries_select = ArrayHelper::map(NetCountry::find()->orderBy('name_'.Yii::$app->language)->all(), 'id', 'name_'.Yii::$app->language);
        $languages = ArrayHelper::map(Languages::find()->orderBy('name')->all(), 'name', 'name');
        $attributesKeys = [];

        $attributesCategory = CategoryAttribute::find()
            ->where(['category_id' => $useradsmodel['cat_id']])
            ->with('attributeVal')
            ->asArray()
            ->all();

        foreach ($attributesCategory as $key => $config) {
            $attributesKeys[$config['attributeVal']['slug']] =
                [
                    'label' => Yii::t('app', $config['attributeVal']['name']),
                    'type' => $config['attributeVal']['typeField']['short_name'],
                    'items' => ArrayHelper::map($config['attributeVal']['attributeValues'], 'id', 'value'),
                    'options' => ['prompt' => $config['attributeVal']['prompt_desc']]
                ];
        }

        $attributesValue = AdsAttributeValue::find()
            ->where(['ads_id' => $id, 'attribute_id' => ArrayHelper::getColumn($attributesCategory, 'attribute_id')])
            ->with('attributeAds')
            ->asArray()
            ->all();

        $attributesValue = MainHelper::newKey(ArrayHelper::map($attributesValue, 'attribute_value_id', 'attribute_value_id', 'attributeAds.slug'));

        $post = \Yii::$app->request->post();
        if ($useradsmodel->load($post)) {
            if ($useradsmodel->country && !$useradsmodel->cities) {
                $city = NetCity::find()
                    ->where(['country_id' => $useradsmodel->country])
                    ->asArray()
                    ->orderBy('name_'.Yii::$app->language)
                    ->all();
                $useradsmodel->cities = ArrayHelper::map($city, 'id', 'name_'.Yii::$app->language);
            }

            if ((Ads::find()->where(['user_id' => Yii::$app->user->identity->id])->count() < Ads::LIMIT || Yii::$app->user->identity->isAdmin())) {

                if ($useradsmodel->validate()) {
                    $model = $useradsmodel->saveInfo();
                    $useradsmodel->saveCategoryAttributes($post['FormModel'], $model);
                    return $this->redirect(['cabinet/my-ads']);
                } else {
                    \Yii::$app->session->setFlash('error' . $useradsmodel->model_id, reset(reset($useradsmodel->getErrors())));
                }

            } else {
                \Yii::$app->session->setFlash('error' . $useradsmodel->model_id, Yii::t('app', 'Exceeded allowed limit of records'));
            }
        }

        return $this->render('update', [
            'useradsmodel' => $useradsmodel,
            'job_category' => $job_category,
            'job_purpose' => $job_purpose,
            'countries_select' => $countries_select,
            'attributesKeys' => $attributesKeys,
            'attributesValue' => $attributesValue,
            'languages' => $languages
        ]);
    }

    /**
     * @param $id
     * @return string|Response
     * @throws BadRequestHttpException
     */
    public function actionResumeUpdate($id)
    {
        $useradsmodel = UseradsForm::find()->where(['id' => $id])->one();

        if ($useradsmodel['user_id'] != Yii::$app->user->identity->id && !Yii::$app->user->identity->isAdmin())
            throw new BadRequestHttpException(Yii::t("app", "The specified post cannot be found."));

        $job_category = ArrayHelper::map(PropertyType::find()->orderBy('title_'.Yii::$app->language)->all(), 'id', 'title_'.Yii::$app->language);
        $job_purpose = ArrayHelper::map(Purpose::find()->orderBy('title_'.Yii::$app->language)->all(), 'id', 'title_'.Yii::$app->language);
        $countries_select = ArrayHelper::map(NetCountry::find()->orderBy('name_'.Yii::$app->language)->all(), 'id', 'name_'.Yii::$app->language);
        $languages = ArrayHelper::map(Languages::find()->orderBy('name')->all(), 'name', 'name');
        $attributesKeys = [];

        $attributesCategory = CategoryAttribute::find()
            ->where(['category_id' => $useradsmodel['cat_id']])
            ->with('attributeVal')
            ->asArray()
            ->all();

        foreach ($attributesCategory as $key => $config) {
            $attributesKeys[$config['attributeVal']['slug']] =
                [
                    'label' => Yii::t('app', $config['attributeVal']['name']),
                    'type' => $config['attributeVal']['typeField']['short_name'],
                    'items' => ArrayHelper::map($config['attributeVal']['attributeValues'], 'id', 'value'),
                    'options' => ['prompt' => $config['attributeVal']['prompt_desc']]
                ];
        }

        $attributesValue = AdsAttributeValue::find()
            ->where(['ads_id' => $id, 'attribute_id' => ArrayHelper::getColumn($attributesCategory, 'attribute_id')])
            ->with('attributeAds')
            ->asArray()
            ->all();
        $attributesValue = MainHelper::newKey(ArrayHelper::map($attributesValue, 'attribute_value_id', 'attribute_value_id', 'attributeAds.slug'));

        $post = \Yii::$app->request->post();
        if ($useradsmodel->load($post)) {
            if ($useradsmodel->country && !$useradsmodel->cities) {
                $city = NetCity::find()
                    ->where(['country_id' => $useradsmodel->country])
                    ->asArray()
                    ->orderBy('name_'.Yii::$app->language)
                    ->all();
                $useradsmodel->cities = ArrayHelper::map($city, 'id', 'name_'.Yii::$app->language);
            }

            if ((Ads::find()->where(['user_id' => Yii::$app->user->identity->id])->count() < Ads::LIMIT || Yii::$app->user->identity->isAdmin())) {

                if ($useradsmodel->validate()) {
                    $model = $useradsmodel->saveInfo();
                    $useradsmodel->saveCategoryAttributes($post['FormModel'], $model);
                    return $this->redirect(['cabinet/resume']);
                } else {
                    \Yii::$app->session->setFlash('error' . $useradsmodel->model_id, reset(reset($useradsmodel->getErrors())));
                }

            } else {
                \Yii::$app->session->setFlash('error' . $useradsmodel->model_id, Yii::t('app', 'Exceeded allowed limit of records'));
            }
        }

        return $this->render('update', [
            'useradsmodel' => $useradsmodel,
            'job_category' => $job_category,
            'job_purpose' => $job_purpose,
            'countries_select' => $countries_select,
            'attributesKeys' => $attributesKeys,
            'attributesValue' => $attributesValue,
            'languages' => $languages
        ]);
    }

    /**
     * @return string|Response
     */
    public function actionSecurity()
    {
        $security_model = SecuritySettings::find()->where(['user_id' => Yii::$app->user->id])->one();
        if (!$security_model) $security_model = new SecuritySettings();
        if ($security_model->load(Yii::$app->request->post())) {
            $security_model->user_id = Yii::$app->user->id;
            if ($security_model->validate()) {
                $security_model->save();
                \Yii::$app->session->setFlash('security_success' , Yii::t('app', 'Security settings updated'));
            } else {
                \Yii::$app->session->setFlash('security_error' , reset(reset($security_model->getErrors())));
            }
        }

        $model = new PasswordchangeForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            $model->changePassword();
            \Yii::$app->session->setFlash('passwordchange_success' , Yii::t('app', 'Password changed'));
            return $this->refresh();
        }
        return $this->render('security', [
            'model' => $model,
            'security_model' => $security_model
            ]);
    }

    /**
     * @return string|Response
     */
    public function actionFavorites()
    {
        $user = Yii::$app->user->identity;
        $countries = NetCountry::find()->asArray()->orderBy('name_'.Yii::$app->language)->all();
        $countries_select = ArrayHelper::map($countries, 'id', 'name_'.Yii::$app->language);
        $countries = ArrayHelper::getColumn($countries, 'name_'.Yii::$app->language);
        $works_name = ArrayHelper::map(Purpose::find()->orderBy('title_'.Yii::$app->language)->asArray()->all(), 'id', 'title_'.Yii::$app->language);
        $jobcat = ArrayHelper::map(PropertyType::find()->asArray()->all(), 'id', 'title_'.Yii::$app->language);
        $jobname = [];

        $userfavoritemodel = new UserfavoriteForm();

        if ($userfavoritemodel->load(\Yii::$app->request->post())) {
            if ($userfavoritemodel->validate()) {
                $userfavoritemodel->saveInfo();
                if (!Yii::$app->request->isAjax)
                    return $this->refresh();
            } else {
                \Yii::$app->session->setFlash('error' . $userfavoritemodel->model_id, reset(reset($userfavoritemodel->getErrors())));
            }
        }

        $userfavoritemodels = (new UserfavoriteForm())->find()->where(['user_id' => $user->id])->all();

        return $this->render('favorites', [
            'userfavoritemodel' => $userfavoritemodel,
            'user' => $user,
            'jobcat' => $jobcat,
            'jobname' => $jobname,
            'works_name' => $works_name,
            'countries' => json_encode($countries),
            'countries_select' => $countries_select,
            'userfavoritemodels' => $userfavoritemodels
        ]);

    }

    /**
     * @return string
     */
    public function actionMessages()
    {
        return $this->render('messages');
    }


    // AJAX START

    /**
     * @return array|bool|\yii\db\ActiveRecord[]
     */
    public function actionAjaxgetcity()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post) {
            if ($post['country']) {
                $country = NetCountry::find()->select(['id'])->where(['name_'.Yii::$app->language => $post['country']])->asArray()->one();
            }
            if ($country) {
                $city = NetCity::find()->where(['like', 'name_'.Yii::$app->language, $post['term']])->andWhere(['country_id' => $country['id']])->asArray()->all();
                $city = ArrayHelper::getColumn($city, 'name_'.Yii::$app->language);
            } else {
                $city = NetCity::find()->where(['like', 'name_'.Yii::$app->language, $post['term']])->asArray()->all();
                $city = ArrayHelper::getColumn($city, 'name_'.Yii::$app->language);
            }
            return $city;
        }
        return false;
    }

    /**
     * @return array|bool|\yii\db\ActiveRecord[]
     */
    public function actionAjaxgetcityselect()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post) {
            if ($post['country']) {
                $city = NetCity::find()->where(['country_id' => $post['country']])->asArray()->orderBy('name_'.Yii::$app->language)->all();
                $city = ArrayHelper::map($city, 'id', 'name_'.Yii::$app->language);
                return $city;
            }
        }
        return false;
    }

    /**
     * @return bool
     */
    public function actionAjaxdeletephoto()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        if ($user = User::findOne(['id' => Yii::$app->user->getId()])) {
            $user->photo = '';
            if ($user->save()) {
                return true;
            }
        }
        return false;
    }

    /**
     * @return bool
     */
    public function actionAjaxdeletephotoprofile()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        if ($user = User::findOne(['id' => Yii::$app->user->getId()])) {
            $user->photoprofile = '';
            if ($user->save()) {
                return true;
            }
        }
        return false;
    }

    /**
     * @return array|bool|\yii\db\ActiveRecord[]
     */
    public function actionAjaxgetjobname()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post && $post['job_cat_id']) {
            $jobname = Purpose::find()->where(['jobcat_id' => $post['job_cat_id']])->asArray()->orderBy('title_'.Yii::$app->language)->all();
            if ($jobname) {
                $jobname = ArrayHelper::map($jobname, 'id', 'title_'.Yii::$app->language);
                return $jobname;
            }
        }
        return false;
    }

    /**
     * @return array
     */
    public function actionAjaxdeleterecord()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post && $post['record_id']) {
            if ($post['type'] == 'ads') {
                $model = Ads::findOne(['id' => $post['record_id'], 'user_id' => Yii::$app->user->identity->id]);
                if ($model && $model->delete()) {
                    return ['success' => true];
                }
            }
            if ($post['type'] == 'favoritefilter') {
                $model = FavoritesFilters::findOne(['id' => $post['record_id'], 'user_id' => Yii::$app->user->identity->id]);
                if ($model && $model->delete()) {
                    return ['success' => true];
                }
            }
        }
        return ['success' => false];
    }

    /**
     * @return array|bool
     */
    public function actionAjaxchangeactive()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post && $post['record_id'] && $post['type']) {
            if ($post['type'] == 'vacancy' || $post['type'] == 'resume') {
                $model = Ads::findOne(['id' => $post['record_id'], 'user_id' => Yii::$app->user->getId()]);
                if ($model) {
                    $model->active = $post['value'];
                    if ($model->save(false)) {
                        return ['success' => true];
                    }
                }
            }
        }
        return false;
    }

    /**
     * @return array|bool
     */
    public function actionAjaxrenewrecord()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        if ($post && $post['record_id'] && $post['type']) {
            $model = Ads::findOne(['id' => $post['record_id'], 'user_id' => Yii::$app->user->getId()]);
            if ($model && $model->updated_at + 604800 <= time()) {
                $model->updated_at = time();
                if ($model->save(false)) {
                    return ['success' => true];
                }
            }
        }
        return false;

    }
    // AJAX END
}
