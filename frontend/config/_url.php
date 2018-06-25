<?php

return [
    '/activation/<code>' => 'site/activation',
    $params['url_manager_mass']['/signup'] => 'site/signup',
    '/login' => 'site/login',
    '/logout' => 'site/logout',
    '/ulogin' => 'site/ulogin',

    '/country_<countryget>/city_<cityget>/type_<typeget>' => 'site/index',
    '/city_<cityget>/type_<typeget>' => 'site/index',
    '/country_<countryget>/type_<typeget>' => 'site/index',
    '/country_<countryget>/city_<cityget>' => 'site/index',
    '/city_<cityget>' => 'site/index',
    '/type_<typeget>' => 'site/index',
    '/country_<countryget>' => 'site/index',

    //'/ads/country_<country>/city_<city>' => 'ads/index',
    $params['url_manager_mass']['/ads'].'/country_<country>/city_<city>' => 'ads/index',
    //'/ads/city_<city>' => 'ads/index',
    $params['url_manager_mass']['/ads'].'/city_<city>' => 'ads/index',
    //'/ads/country_<country>' => 'ads/index',
    $params['url_manager_mass']['/ads'].'/country_<country>' => 'ads/index',
    //'ads' => 'ads/index',

    $params['url_manager_mass']['/ads'] => 'ads/index',


    $params['url_manager_mass']['/cabinet'] => '/cabinet/index',

    $params['url_manager_mass']['/cabinet/my-ads'] => 'cabinet/my-ads',
    $params['url_manager_mass']['/cabinet/resume'] => 'cabinet/resume',

    $params['url_manager_mass']['/cabinet/ads-create'] => 'cabinet/ads-create',
    $params['url_manager_mass']['/cabinet/ads-create-search'] => 'cabinet/ads-create-search',

    $params['url_manager_mass']['/cabinet/ads-update'].'/<id>' => 'cabinet/ads-update',
    $params['url_manager_mass']['/cabinet/resume-update'].'/<id>' => 'cabinet/resume-update',

    $params['url_manager_mass']['/cabinet/favorites'] => 'cabinet/favorites',
    $params['url_manager_mass']['/cabinet/messages'] => 'cabinet/messages',

    $params['url_manager_mass']['/cabinet/editprofile'] => 'cabinet/editprofile',
    $params['url_manager_mass']['/cabinet/security'] => 'cabinet/security',




    //'/resume/country_<country>/city_<city>' => 'resume/index',
    $params['url_manager_mass']['/resume'].'/country_<country>/city_<city>' => 'resume/index',
    //'/resume/city_<city>' => 'resume/index',
    $params['url_manager_mass']['/resume'].'/city_<city>' => 'resume/index',
    //'/resume/country_<country>' => 'resume/index',
    $params['url_manager_mass']['/resume'].'/country_<country>' => 'resume/index',
    //'resume' => 'resume/index',
    $params['url_manager_mass']['/resume'] => 'resume/index',

    '/profiles/country_<country>/city_<city>/type_<typeget>' => 'profiles/index',
    '/profiles/city_<city>/type_<typeget>' => 'profiles/index',
    '/profiles/country_<country>/type_<typeget>' => 'profiles/index',
    '/profiles/country_<country>/city_<city>' => 'profiles/index',
    '/profiles/city_<city>' => 'profiles/index',
    '/profiles/type_<type>' => 'profiles/index',
    '/profiles/country_<country>' => 'profiles/index',
    'profiles' => 'profiles/index',


    //'ads/<slug>' => 'ads/view',
    $params['url_manager_mass']['/ads']."/<slug>" => 'ads/view',
    //'resume/<slug>' => 'resume/view',
    $params['url_manager_mass']['/resume']."/<slug>" => 'resume/view',
    'user/<id>' => 'profiles/view',
    'admin/editprofile/<user_id>' => 'admin/editprofile',
    'admin/ads/<user_id>' => 'admin/ads',
    'admin/resume/<user_id>' => 'admin/resume',
    'page/<slug>' => 'page/view',
    '/' => 'site/index',
];