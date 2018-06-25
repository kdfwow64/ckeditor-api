<?php
namespace common\models;

use common\components\DateToTimeBehavior;
use Yii;
use yii\base\NotSupportedException;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\web\IdentityInterface;

/**
 * User model
 * This is the model class for table "user".
 *
 * @property int $id
 * @property string $username
 * @property string $firstname
 * @property string $lastname
 * @property string $email
 * @property string $phone
 * @property string $photo
 * @property string $photoprofile
 * @property string $social_id
 * @property string $restore_password
 * @property string $auth_key
 * @property string $password_hash
 * @property string $password_reset_token
 * @property int $status
 * @property int $created_at
 * @property int $updated_at
 * @property int $birthday
 * @property int $city_id
 * @property int $country_id
 * @property string $activate_hash
 * @property int $active
 * @property string $profession
 * @property string $city
 * @property string $country
 * @property int $job_cat_id
 * @property int $job_name_id
 * @property string $ready_tomove
 * @property string $permission_es
 * @property string $work_position
 * @property string $drive_license
 * @property string $about
 * @property string $langjson
 * @property int $views
 * @property int $mailing_favorite_lasttime
 * @property int $mailing_favorite_active
 * @property int $lastvisit
 * @property int $last_activation_time
 */
class User extends ActiveRecord implements IdentityInterface
{
    const STATUS_DELETED = 0;
    const STATUS_ACTIVE = 10;
    const STATUS_BLOCKED = 20;
    public $birthday_formatted;

    const ACTIVE_TRUE = 1;
    const ACTIVE_FALSE = 0;

    public static $mname = [
        '01' => 'January',
        '02' => 'February',
        '03' => 'March',
        '04' => 'April',
        '05' => 'May',
        '06' => 'June',
        '07' => 'July',
        '08' => 'August',
        '09' => 'September',
        '10' => 'October',
        '11' => 'November',
        '12' => 'December',
    ];

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%user}}';
    }

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'createdAtAttribute' => 'created_at',
                'updatedAtAttribute' => false,
            ],
            [
                'class' => DateToTimeBehavior::className(),
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_VALIDATE => 'birthday_formatted',
                    ActiveRecord::EVENT_AFTER_FIND => 'birthday_formatted',
                ],
                'timeAttribute' => 'birthday'
            ]
        ];
    }

    /**
     * @return array
     */
    public function attributeLabels()
    {
        return [
            'username' => Yii::t('app', 'Login'),
            'firstname' => Yii::t('app', 'First Name'),
            'lastname' => Yii::t('app', 'Last Name'),
            'phone' => Yii::t('app', 'Phone'),
            'photo' => Yii::t('app', 'Photo'),
//            'imageFile'=>'Фотография',
            'social_id' => Yii::t('app', 'Social network'),
            'statusname' => Yii::t('app', 'Status name'),
            'referal_code' => Yii::t('app', 'Referal code'),
            'rating' => Yii::t('app', 'Rating'),
            'birthday' => Yii::t('app', 'Date of Birth'),
            'created_at' => Yii::t('app', 'Date of registration'),
            'blocked' => Yii::t('app', 'Status profile'),
            'countryname' => Yii::t('app', 'Country'),
            'cityname' => Yii::t('app', 'City'),
            'status' => Yii::t('app', 'Status in the system'),
            'active' => Yii::t('app', 'Active'),
            'profession' => Yii::t('app', 'Profession'),
            'activationstatus' => Yii::t('app', 'Activation'),
            'birthday_formatted' => 'Date of birth',
            'permission_es' => 'Разрешение на работу в ЕС',
            'ready_tomove' => 'Готовность к переезду',
            'work_position' => Yii::t('app', 'Position'),
            'drive_license' => Yii::t('app', 'Driver\'s license'),
            'about' => Yii::t('app', 'About myself'),
            'vacancyCount' => Yii::t('app', 'Number of ads'),
            'resumeCount' => Yii::t('app', 'Number of resume'),
        ];
    }

    /**
     * @return bool
     */
    public static function isAdmin()
    {
        $admins = ['1']; // ID
        if (isset(Yii::$app->user->identity) && in_array(Yii::$app->user->identity->id, $admins)) {
            return true;
        }
        return false;
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['status', 'default', 'value' => self::STATUS_ACTIVE],
            ['status', 'in', 'range' => [self::STATUS_ACTIVE, self::STATUS_DELETED, self::STATUS_BLOCKED]],
            [['firstname', 'lastname', 'phone', 'email', 'profession', 'about'], 'string'],
            ['active', 'boolean'],
            [['mailing_favorite_lasttime', 'mailing_favorite_active', 'lastvisit', 'last_activation_time'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        return static::findOne(['id' => $id, 'status' => self::STATUS_ACTIVE]);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        throw new NotSupportedException('"findIdentityByAccessToken" is not implemented.');
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        return static::findOne(['username' => $username, 'status' => self::STATUS_ACTIVE]);
    }

    /**
     * @param $email
     * @return null|static
     */
    public static function findByEmail($email)
    {
        return static::findOne(['email' => $email, 'status' => self::STATUS_ACTIVE, 'active' => 1]);
    }

    /**
     * @param $username
     * @return array|null|ActiveRecord
     */
    public static function findByUsernameOrPhone($username)
    {
        return static::find()->filterWhere(['or', ['username' => $username], ['phone' => $username]])->andWhere(['status' => self::STATUS_ACTIVE])->one();
    }

    /**
     * @param $username
     * @return array|null|ActiveRecord
     */
    public static function findByUsernameOrPhoneOrEmail($username)
    {
        return static::find()->filterWhere(['or', ['username' => $username], ['phone' => $username], ['email' => $username]])->andWhere(['status' => self::STATUS_ACTIVE])->one();
    }

    /**
     * @param $username
     * @return array|null|ActiveRecord
     */
    public static function findByEmailOrPhone($username)
    {
        return static::find()->filterWhere(['or', ['email' => $username], ['phone' => $username]])->andWhere(['status' => self::STATUS_ACTIVE])->one();
    }

    /**
     * Finds user by password reset token
     *
     * @param string $token password reset token
     * @return static|null
     */
    public static function findByPasswordResetToken($token)
    {
        if (!static::isPasswordResetTokenValid($token)) {
            return null;
        }

        return static::findOne([
            'password_reset_token' => $token,
            'status' => self::STATUS_ACTIVE,
        ]);
    }

    /**
     * Finds out if password reset token is valid
     *
     * @param string $token password reset token
     * @return boolean
     */
    public static function isPasswordResetTokenValid($token)
    {
        if (empty($token)) {
            return false;
        }

        $timestamp = (int)substr($token, strrpos($token, '_') + 1);
        $expire = Yii::$app->params['user.passwordResetTokenExpire'];
        return $timestamp + $expire >= time();
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->getPrimaryKey();
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->auth_key;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * Validates password
     *
     * @param string $password password to validate
     * @return boolean if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return $this->password_hash ? Yii::$app->security->validatePassword($password, $this->password_hash) : false;
    }

    /**
     * Generates password hash from password and sets it to the model
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password_hash = Yii::$app->security->generatePasswordHash($password);
    }

    /**
     * Generates "remember me" authentication key
     */
    public function generateAuthKey()
    {
        $this->auth_key = Yii::$app->security->generateRandomString();
    }

    /**
     * Generates new password reset token
     */
    public function generatePasswordResetToken()
    {
        $this->password_reset_token = Yii::$app->security->generateRandomString() . '_' . time();
    }

    /**
     * Removes password reset token
     */
    public function removePasswordResetToken()
    {
        $this->password_reset_token = null;
    }

    /**
     * @param $code
     * @return array|null|ActiveRecord
     */
    public static function findReferal($code)
    {
        return self::find()->where(['referal_code' => $code])->one();
    }

    /**
     * @param $name
     * @return array|null|ActiveRecord
     */
    public static function findReferalByName($name)
    {
        return self::find()->where(['username' => $name])->one();
    }

    /**
     * @param $name
     * @return array|null|ActiveRecord
     */
    public static function findReferalByEmail($name)
    {
        return self::find()->where(['email' => $name])->one();
    }

    /**
     * @return mixed|string
     */
    public function getAvatar()
    {

        return $this->photo ? $this->photo : '/design/img/user.png';
    }

    /**
     * @return mixed
     */
    public function getActivationstatus()
    {
        $names = ['0' => 'Не активирован', '1' => 'Активирован'];
        return $names[$this->active];
    }

    /**
     * @return int|string
     */
    public function getReferalscount()
    {
        return User::find()->where(['parent_id' => $this->id])->count();
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getJobname()
    {
        return $this->hasOne(Purpose::className(), ['id' => 'job_name_id']);
    }

    /**
     * @return null|string
     */
    public function getJobcatname()
    {
        $model = PropertyType::findOne(['id' => $this->job_cat_id]);
        if ($model) {
            return $model->title_ru;
        }
        return null;
    }

    /**
     * @return int|string
     */
    public function getVacancyCount()
    {
        return Ads::find()->where(['user_id' => $this->id, 'type_ad' => Ads::SALE])->count();
    }

    /**
     * @return int|string
     */
    public function getResumeCount()
    {
        return Ads::find()->where(['user_id' => $this->id, 'type_ad' => Ads::BUY])->count();
    }

    /**
     * @return string
     */
    public function getOnline()
    {
        if (($this->lastvisit + (30)) > time()) {
            return 'online';
        } else {
            return 'offline';
        }
    }

    public function getSecurity()
    {
        return $this->hasOne(SecuritySettings::className(), ['user_id' => 'id']);
    }
}
