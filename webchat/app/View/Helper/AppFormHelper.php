<?php

/**
 * 
 * ClientEngage: ClientEngage Visitor Chat (http://www.clientengage.com)
 * Copyright 2013, ClientEngage (http://www.clientengage.com)
 *
 * You must have purchased a valid license from CodeCanyon in order to have 
 * the permission to use this file.
 * 
 * You may only use this file according to the respective licensing terms 
 * you agreed to when purchasing this item on CodeCanyon.
 * 
 * 
 * 
 *
 * @author          ClientEngage <contact@clientengage.com>
 * @copyright       Copyright 2013, ClientEngage (http://www.clientengage.com)
 * @link            http://www.clientengage.com ClientEngage
 * @since           ClientEngage - Visitor Chat v 1.0
 * 
 */
App::uses('FormHelper', 'View/Helper');

/**
 * Application-wide form output manipulation
 */
class AppFormHelper extends FormHelper
{

    public $helpers = array('Time', 'Html');

    /**
     * Overrides Form->create() to apply custom formatting for template
     * @param type $model
     * @param type $options
     * @return type
     */
    public function create($model = null, $options = array())
    {

        // input defaults
        $default = array(
            'novalidate',
            'inputDefaults' => array(
            /*    'between' => '<div class="input-container">',
              'after' => '</div>',
              'format' => array('before', 'label', 'between', 'input', 'error', 'after') */
            )
        );

        $options = Set::merge($default, $options);
        return parent::create($model, $options);
    }

    /**
     * Overrides Form->input() to apply custom styles for field-types
     * @param type $model
     * @param type $options
     * @return type
     */
    public function input($model = null, $options = array())
    {
        $defaults = $this->_inputDefaults;
        $options = Set::merge($defaults, $options);

        return parent::input($model, $options);
    }

    public function timezone($model, $options = array())
    {
        App::uses('CakeTime', 'Utility');

        $options = Set::merge(array(
                    'type' => 'select',
                    'options' => CakeTime::listTimezones(),
                    'empty' => false,
                    'default' => 'Europe/London'), $options);

        return self::input($model, $options);
    }

    public function codeMirror($model, $options = array())
    {
        $options = Set::merge(array(
                    'type' => 'textarea',
                        ), $options);

        $syntax = $options['syntax'];
        unset($options['syntax']);

        echo $this->Html->css('/js/codemirror/codemirror');
        echo $this->Html->script('codemirror/codemirror');

        if ($syntax == 'css')
            echo $this->Html->script('codemirror/mode/css/css');
        else if ($syntax == 'javascript')
            echo $this->Html->script('codemirror/mode/javascript/javascript');

        echo $this->Html->scriptBlock('
$(function(){
    var editor = CodeMirror.fromTextArea(document.getElementById("' . $options['id'] . '"), {mode:"' . $syntax . '", height: "dynamic", lineNumbers: true, lineWrapping: true});
});              
');

        return self::input($model, $options);
    }

}