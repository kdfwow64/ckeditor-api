<?php

namespace common\components\keyStorage;

use Yii;
use yii\base\InvalidConfigException;
use yii\base\Widget;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\helpers\Inflector;

/**
 * @author Eugene Terentev <eugene@terentev.net>
 */
class FormSearchWidget extends Widget
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
            $model->__set(Inflector::variablize($key), $this->attributesValue[$key]);
        }

        foreach ($model->keys as $key => $config) {
            $type = ArrayHelper::getValue($config, 'type', FormModel::TYPE_TEXTINPUT);
            $options = ArrayHelper::getValue($config, 'options', []);
            $field = $this->form->field($model, $key);
            $items = ArrayHelper::getValue($config, 'items', []);

            switch ($type) {
                case FormModel::TYPE_TEXTINPUT:
                    $input = $field->textInput($options);
                    break;
                case FormModel::TYPE_DROPDOWN:
                    $input = $field->dropDownList($items, array_merge(['class' => 'search-form', 'prompt' => 'All'], $options));
                    break;
                case FormModel::TYPE_CHECKBOX:
                    $input = $field->checkbox($options);
                    break;
                case FormModel::TYPE_CHECKBOXLIST:
                    $input = $field->checkboxList($items, array_merge(['class' => 'search-form'], $options));
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
