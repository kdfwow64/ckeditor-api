<?php

namespace common\components\keyStorage;

use Yii;
use yii\base\InvalidConfigException;
use yii\base\Widget;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;

/**
 * @author Eugene Terentev <eugene@terentev.net>
 */
class FormWithoutSubmitWidget extends Widget
{
    /**
     * @var \common\components\keyStorage\FormModel
     */
    public $form;
    /**
     * @var string
     */
    public $formClass = '\yii\widgets\ActiveForm';
    /**
     * @var array
     */
    public $formOptions;

    public $attributesKeys;

    public $attributesValue;

    /**
     * @throws InvalidConfigException
     */
    public function run()
    {
        $model = new FormModel([
            'keys' => $this->attributesKeys
        ]);


        foreach ($this->attributesValue as $key => $value) {
            $model->__set($key, $this->attributesValue[$key]);
        }

        foreach ($model->keys as $key => $config) {

            $type = ArrayHelper::getValue($config, 'type', FormModel::TYPE_TEXTINPUT);
            $options = ArrayHelper::getValue($config, 'options', []);
            $field = $this->form->field($model, $key);
            $items = ArrayHelper::getValue($config, 'items', []);
            //var_dump();
            //var_dump($this->attributesValue);die;
            switch ($type) {
                case FormModel::TYPE_TEXTINPUT:
                    $input = $field->textInput($options);
                    break;
                case FormModel::TYPE_DROPDOWN:
                    $input = $field->dropDownList($items, $options);
                    break;
                case FormModel::TYPE_CHECKBOX:
                    //var_dump($this->attributesValue);die;
                    if(isset($this->attributesValue[$key]) && is_array($this->attributesValue[$key])){
                        $checked_status = isset($this->attributesValue[$key][1]) ? "checked" : "";
                        $checked_val = isset($this->attributesValue[$key][1]) ? '1' : '0';
                            $input = '<div class="form-group">'
                                    .'<div class="col-md-7 col-sm-offset-3">'
                                    .'<div class="checkbox">'
                                    .'<label>'
                                    .'<input type="checkbox" class="custom-checkbox" name="FormModel['.$key.']" value="'.$checked_val.'" prompt="'.$options["prompt"].'" '.$checked_status.'>'
                                    .$options["prompt"].'</label></div></div></div>';
                    }else{
                        $options['class'] = 'custom-checkbox';
                        $input = $field->checkbox($options);
                    }
                    break;
                case FormModel::TYPE_CHECKBOXLIST:
                    $input = $field->checkboxList($items, $options);
                    break;
                case FormModel::TYPE_RADIOLIST:
                    $input = $field->radioList($items, $options);
                    break;
                case FormModel::TYPE_TEXTAREA:
                    $input = $field->textarea($options);
                    break;
                case FormModel::TYPE_WIDGET:
                    $widget = ArrayHelper::getValue($config, 'widget');
                    if ($widget === null) {
                        throw new InvalidConfigException('Widget class must be set');
                    }
                    $input = $field->widget($widget, $options);
                    break;
                default:
                    $input = $field->input($type, $options);

            }
            echo $input;
        }
    }
}
