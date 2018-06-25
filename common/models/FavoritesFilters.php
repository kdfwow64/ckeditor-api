<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "favorites_filters".
 *
 * @property integer $id
 * @property integer $user_id
 * @property string $type
 * @property string $filter_data
 * @property integer $active
 */
class FavoritesFilters extends \yii\db\ActiveRecord
{

    public static $type_name = ['landlords' => 'Landlords', 'tenants' => 'Tenants'];
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'favorites_filters';
    }

    public static function getTypesName()
    {
        $type_names = [
            'landlords' => Yii::t('app', 'Landlords'),
            'tenants' => Yii::t('app', 'Tenants')
            ];
        return $type_names;
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id'], 'required'],
            [['user_id', 'active', 'created'], 'integer'],
            [['filter_data'], 'string'],
            [['type'], 'string', 'max' => 30],
        ];
    }

    /**
     * @param $email
     * @param bool $send_data_vacancy
     * @param bool $send_data_resume
     * @return bool
     */
    public static function sendEmail($email, $send_data_vacancy = false, $send_data_resume = false)
    {
        if (!empty($email) && (!empty($send_data_vacancy) || !empty($send_data_resume))) {
            return Yii::$app
                ->mailer
                ->compose(
                    ['html' => 'favoriteMail-html', 'text' => 'favoriteMail-text'],
                    [
                        'datav' => $send_data_vacancy,
                        'datar' => $send_data_resume
                    ]
                )
                ->setFrom(['noreplay@' . str_replace('www.', '', $_SERVER['HTTP_HOST']) => $_SERVER['HTTP_HOST']])
                ->setTo($email)
                ->setSubject(Yii::t('app', 'Рассылка по избранному с сайта').' ' . $_SERVER['HTTP_HOST'])
                ->send();
        } else {
            return false;
        }
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'user_id' => Yii::t('app', 'User ID'),
            'type' => Yii::t('app', 'Type'),
            'filter_data' => Yii::t('app', 'Filter Data'),
            'active' => Yii::t('app', 'Active'),
        ];
    }
}