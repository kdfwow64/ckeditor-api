<?php
namespace common\components;
use common\models\Messages;

/**
 * Created by PhpStorm.
 * User: p_shidlovsky
 * Date: 12.10.16
 * Time: 15:17
 */
class Messanger extends \yii\base\Component
{

   public function init() {
       if(!\Yii::$app->user->isGuest){
           \Yii::$app->user->identity->lastvisit = time();
           \Yii::$app->user->identity->save();
       }
        parent::init();
    }

    public function getNewMessagesCount(){
        if(!\Yii::$app->user->isGuest) {
            $u = \Yii::$app->user->getId();
            $messcount = Messages::find()->where(['and', ['from' => $u], ['new_from' => 1]])->orWhere(['and', ['to' => $u], ['new_to' => 1]])->count();
            return $messcount?$messcount:0;
        }else{
            return 0;
        }
    }

}