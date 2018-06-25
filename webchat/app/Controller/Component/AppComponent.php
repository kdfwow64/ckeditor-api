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

/**
 * Application-wide component
 */
class AppComponent extends Component
{

    public function beforeRender(Controller $controller)
    {
        parent::beforeRender($controller);
        $controller->response->header('X-Content-Encoded-By', 'ClientEngage Visitor Chat v' . AppVersion::Version);
    }

    public function beforeRedirect(Controller $controller, $url, $status = null, $exit = true)
    {
        parent::beforeRedirect($controller, $url, $status, $exit);
        $controller->response->header('X-Content-Encoded-By', 'ClientEngage Visitor Chat v' . AppVersion::Version);
    }

}