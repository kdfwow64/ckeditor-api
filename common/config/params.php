<?php
function object_from_file()
{
    $file = file_get_contents(__DIR__.'/panelsettings_json.txt');
    $value = json_decode($file,true);
    return $value;
} 

return array_merge([
    'user.passwordResetTokenExpire' => 3600,
    'supportEmail' => 'support@example.com',
    'site_url' => $_SERVER['HTTPS'] == "on" ? 'https://'.$_SERVER['HTTP_HOST']: 'http://'.$_SERVER['HTTP_HOST'],
//    'adminEmail' => 'admin@example.com',
//    'outSum' => 500,
],object_from_file());


