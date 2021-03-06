<?php

namespace frontend\models\cabinet;

use common\components\DateToTimeBehavior;
use common\components\FilesUpload;
use common\models\FavoritesFilters;
use common\models\PropertyType;
use common\models\Purpose;
use common\models\NetCity;
use common\models\NetCountry;
use common\models\Resume;
use common\models\User;
use common\models\UserWork;
use common\models\Ads;
use Yii;
use yii\base\Model;
use yii\base\ModelEvent;
use yii\db\ActiveRecord;
use yii\helpers\ArrayHelper;
use yii\web\UploadedFile;

/**
 * ContactForm is the model behind the contact form.
 */
class UserfavoriteForm extends FavoritesFilters
{
    public $model_id;
    public $cities = [];
    public $jobs = [];
    public $country; // id country
    public $city; // id country
    public $cat_id; // id job cat
    public $type_id; // id job type

    public $countryget;
    public $cityget;
    public $typeget;
    public $working;
    public $purpose;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'type', 'active'], 'required'],
            [['type'], 'string'],
            [['country', 'cat_id', 'type_id', 'city', 'model_id'], 'integer'],
            [['purpose', 'working', 'typeget', 'cityget', 'countryget'], 'safe'],
        ];
    }

    public function beforeValidate()
    {

        if ($this->country) {
            $city = NetCity::find()->where(['country_id' => $this->country])->asArray()->orderBy('name_' . Yii::$app->language)->all();
            $this->cities = ArrayHelper::map($city, 'id', 'name_' . Yii::$app->language);
        }

        $this->created = time();
        $this->active = 1;
        return parent::beforeValidate();
    }


    public function init()
    {
        $this->user_id = Yii::$app->user->getId();
        parent::init();
    }

    public function afterFind()
    {

        $data = json_decode($this->filter_data);
        if ($data) {
            $this->country = isset($data->country) ? $data->country : '';
            $this->city = isset($data->city) ? $data->city : '';
            $this->cat_id = isset($data->cat_id) ? $data->cat_id : '';
            $this->purpose = isset($data->purpose) ? $data->purpose : '';
        }

        parent::afterFind(); // TODO: Change the autogenerated stub
    }


    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'country' => Yii::t('app', 'Country'),
            'city' => Yii::t('app', 'City'),
            'cat_id' => Yii::t('app', 'Property type'),
            'typeget' => Yii::t('app', 'Property type'),
            'purpose' => Yii::t('app', 'Purpose'),
            'type' => Yii::t('app', 'Distribution type'),
        ];
    }

    public function beforeSave($insert)
    {
        if ($this->country == '') $this->city = '';
        $filter_arr = [
            'country' => $this->country,
            'city' => $this->city,
            'purpose' => $this->purpose,
            'cat_id' => $this->cat_id
        ];

        $this->filter_data = json_encode($filter_arr, JSON_UNESCAPED_UNICODE);
        return parent::beforeSave($insert); // TODO: Change the autogenerated stub
    }

    public function saveInfo()
    {
        if ($this->model_id) {
            $model = self::findOne(['id' => $this->model_id]);
            $model->load(Yii::$app->request->post());
            if ($model->save()) {
                Yii::$app->session->setFlash('success' . $model->id, 'Settings updated');
                return 'update';
            }

        }
        if ($this->save()) {
            Yii::$app->session->setFlash('success', 'Settings updated');
            return 'create';
        }
    }


    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCityname()
    {
        return $this->hasOne(NetCity::className(), ['id' => 'city']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCountryname()
    {
        return $this->hasOne(NetCountry::className(), ['id' => 'country']);
    }

    public function getCitysname()
    {
        return $this->hasMany(NetCity::className(), ['country_id' => 'country'])->asArray();
    }
}
