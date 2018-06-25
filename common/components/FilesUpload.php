<?php
namespace common\components;
use Eventviva\ImageResize;
use yii\web\UploadedFile;

class FilesUpload
{
    public static function uploadToDir($dir='/uploads/files/', UploadedFile $modelFile, array $resize=['400','400'])
    {
        $name = $dir . $modelFile->baseName . '_' . substr(md5(microtime() . rand(0, 9999)), 4, 3) . '.' . $modelFile->extension;
        $image = new ImageResize($modelFile->tempName);
        if(!empty($resize)) {
            $image->resizeToBestFit($resize[0], $resize[1]);
        }
        $image->save(__DIR__ . '/../../frontend/web' . $name);
        return $name;
    }

}