<?php
namespace frontend\models;

use Yii;
use common\models\Messages;
use common\models\MessagesGroup;
use yii\base\Model;
use common\models\User;

/**
 * Signup form
 */
class ModalmessageForm extends Model
{
    public $message;
    public $to;
    public $from;
    public $email;
    public $phone;
    public $type;
    public $work;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['to', 'required'],
            ['to', 'integer'],
            ['from', 'required'],
            ['from', 'integer'],
            ['message', 'required'],
            ['message', 'string', 'min' => 2, 'max' => 1000],
            [['email','phone','type','work'],'string']
        ];
    }



    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function createMessage ()
    {
        $group = MessagesGroup::find()->where(['and', ['from' => $this->from], ['to' => $this->to]])->orWhere(['and', ['from' => $this->to], ['to' => $this->from]])->orderBy('created ASC')->one();
        if(!$group) {
            $group = new MessagesGroup();
            $group->from = $this->from;
            $group->to = $this->to;
        }
        $group->created = time();
        if($group->save()){
            $message = new Messages();
            $message->from = $this->from;
            $message->to = $this->to;
            $message->created = $group->created;
            $message->group_id = $group->id;
            $messagetext = $this->type.' '.$this->work."\r\n";
            $messagetext .= Yii::t('app', 'Email').': '.$this->email."\r\n";
            $messagetext .= Yii::t('app', 'Phone number').': '.$this->phone."\r\n";
            $messagetext .= $this->message;
            $message->message = $messagetext;
            $message->new_to = 1;
            if($message->save()){
                \Yii::$app->session->setFlash('messagesuccess',Yii::t('app', 'Your message was successfully sent'));
            }
        }

    }


    public function attributeLabels()
    {
        return [
          'message'=>Yii::t('app', 'Message'),
        ];
    }
}
