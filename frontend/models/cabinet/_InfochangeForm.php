<?php

namespace frontend\models\cabinet;

use common\components\FilesUpload;
use common\models\User;
use Yii;
use yii\base\Model;
use yii\web\UploadedFile;

/**
 * ContactForm is the model behind the contact form.
 */
class InfochangeForm extends Model
{
    public $firstname;
    public $lastname;
    public $patronymic;
    public $photofile;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['firstname','lastname'],'required'],
            [['firstname','lastname','patronymic'], 'string'],
            [['photofile'], 'file'],
        ];
    }

    public function init()
    {
        $this->firstname = Yii::$app->user->identity->firstname;
        $this->lastname = Yii::$app->user->identity->lastname;
        $this->patronymic = Yii::$app->user->identity->patronymic;
        parent::init(); // TODO: Change the autogenerated stub
    }


    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'firstname' => 'Имя',
            'lastname' => 'Фамилия',
            'patronymic' => 'Отчество',
        ];
    }

    public function saveInfo()
    {
        $userModel = User::findOne(['id'=>Yii::$app->user->getId()]);
        
        $userModel->firstname = $this->firstname;
        $userModel->lastname = $this->lastname;
        $userModel->patronymic = $this->patronymic;

        $this->photofile = UploadedFile::getInstance($this, 'photofile');
        if ($this->photofile) {
                $userModel->photo = FilesUpload::uploadToDir('/uploads/users/',$this->photofile);
        }
        if($userModel->save()){
                        Yii::$app->session->setFlash('success','Профиль обновлен');
        }
        return ;
    }
}
