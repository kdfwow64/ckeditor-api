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
class Editprofile2Form extends User
{


    public function afterValidate()
    {

    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['permission_es', 'ready_tomove', 'work_position', 'drive_license', 'about'], 'safe'],
            [['work_position', 'about'], 'string'],
        ];
    }

    public function init()
    {
        parent::init();
    }


    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'permission_es' => Yii::t('app', 'Mortgage Broker'),
            'ready_tomove'  => Yii::t('app', 'Real Estate Appraisal'),
            'work_position' => Yii::t('app', 'Notary and Legal Advisor'),
            'drive_license' => Yii::t('app', 'Licensed Real Estate Agent'),
            'about'         => Yii::t('app', 'About yourself'),
        ];
    }

    public function saveInfo()
    {
        $userModel = User::findOne(['id' => $this->getId()]);

        $userModel->permission_es = $this->permission_es;
        $userModel->ready_tomove  = $this->ready_tomove;
        $userModel->work_position = $this->work_position;
        $userModel->drive_license = $this->drive_license;
        $userModel->about         = $this->about;
        $userModel->updated_at    = time();

        if ($userModel->save()) {
            Yii::$app->session->setFlash('success', 'Profile updated');
        }
        return;
    }
}
