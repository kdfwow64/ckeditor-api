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
class SetnullBehavior extends ModelBehavior
{

    /**
     * Sets database fields allowing NULL to NULL if no value is present
     * @param Model $Model The model invoking this behaviour
     * @return boolean Continue saving the record
     */
    public function beforeSave(Model &$Model)
    {
        $modelSchema = $Model->schema();

        foreach ($modelSchema as $field => $settings)
        {
            if ($settings['null'] === true)
                if (isset($Model->data[$Model->name][$field]) && $Model->data[$Model->name][$field] === '')
                    $Model->data[$Model->name][$field] = null;
        }
        return true;
    }

}