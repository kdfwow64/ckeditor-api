<?php

namespace frontend\models\cabinet;

use common\components\DateToTimeBehavior;
use common\components\FilesUpload;
use common\models\NetCity;
use common\models\NetCountry;
use common\models\User;
use Yii;
use yii\base\Model;
use yii\db\ActiveRecord;
use yii\web\UploadedFile;

/**
 * ContactForm is the model behind the contact form.
 */
class Editprofile1Form extends User
{
    public $fio;
    public $firstname_;
    public $lastname_;
    public $photofile;
    public $photoprofilefile;
    public $birthday_formatted;

//    public function behaviors()
//    {
//        return [
//            [
//                'class' => DateToTimeBehavior::className(),
//                'attributes' => [
//                    ActiveRecord::EVENT_BEFORE_VALIDATE => 'birthday_formatted',
//                    ActiveRecord::EVENT_AFTER_FIND => 'birthday_formatted',
//                ],
//                'timeAttribute' => 'birthday'
//            ]
//        ];
//    }

    public function afterValidate()
    {
        $names = explode(' ', $this->fio);
        if (isset($names[0])) {
            $this->firstname_ = $names[0];
        }
        if (isset($names[1])) {
            $this->lastname_ = $names[1];
        }
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['birthday_formatted', 'country', 'city', 'profession', 'phone', 'email'], 'string'],
            [['photofile', 'photoprofilefile'], 'file', 'extensions' => ['png', 'jpg', 'jpeg'], 'checkExtensionByMimeType' => false, 'maxSize' => 1024 * 1024 * 5],
            ['email', 'unique'],
            ['phone', 'unique'],
        ];
    }

    public function uniqueParams($attribute)
    {
        if ($this->{$attribute} == Yii::$app->user->identity->{$attribute})
            return true;
        $user = static::findOne([$attribute => $this->{$attribute}]);
        if ($user) { // dont use count($user) - if it's there, it's a single object, you want to check if it's not null!
            $this->addError($attribute, 'Значение «' . $this->{$attribute} . '» для «' . $this->attributeLabels()[$attribute] . '» уже занято.');
        }
    }

    public function afterFind()
    {
        $this->fio = $this->firstname . ' ' . $this->lastname;
        parent::afterFind();
    }


    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'fio' => Yii::t('app', 'Your name and surname'),
            'profession' => Yii::t('app', 'Status'),
            'birthday_formatted' => Yii::t('app', 'Date of birth'),
            'phone' => Yii::t('app', 'Phone number'),
            'email' => Yii::t('app', 'E-mail'),
            'city' => Yii::t('app', 'City'),
            'country' => Yii::t('app', 'Country'),
        ];
    }

    public function saveInfo()
    {
        $userModel = User::findOne(['id' => $this->id]);

        $userModel->firstname = $this->firstname_;
        $userModel->lastname = $this->lastname_;
//        $userModel->birthday = strtotime($this->birthday_formatted);
        $userModel->birthday_formatted = $this->birthday_formatted;
        $userModel->country = $this->country;
        $userModel->city = $this->city;
        if ($userModel->country) {
            $country = NetCountry::find()->where(['name_'.Yii::$app->language => $userModel->country])->asArray()->one();
            if ($country) {
                $userModel->country_id = $country['id'];
            }
        }
        if ($userModel->city) {
            $city_query = NetCity::find()->where(['name_'.Yii::$app->language => $userModel->city]);
            if(isset($country['id'])){
                $city_query->andWhere(['country_id'=>$country['id']]);
            }
            $city = $city_query->asArray()->one();
            if ($city) {
                $userModel->city_id = $city['id'];
            }
        }
        $userModel->phone = $this->phone;
        $userModel->profession = $this->profession;
        $userModel->email = $this->email;
        $userModel->updated_at = time();

        if ($this->photofile) {
            $userModel->photo = FilesUpload::uploadToDir('/uploads/users/', $this->photofile);
        }
        if ($this->photoprofilefile) {
            $userModel->photoprofile = FilesUpload::uploadToDir('/uploads/users/', $this->photoprofilefile, ['1920', '800']);
        }

        if ($userModel->save()) {
            Yii::$app->session->setFlash('success', 'Profile updated');
        }
        return;
    }
}
