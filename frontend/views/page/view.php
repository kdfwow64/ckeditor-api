<?php
$this->title = $model->title;
?>

<div class="container">
    <div class="row">
        <div class="col-xs-12 col-lg-10 col-lg-offset-1">
            <div class="text-title">
                <h1 style="text-align: center">
                    <?= $model->title ?>
                </h1>
            </div>
            <div class="text-inner">
                <?= $model->text ?>
            </div>
        </div>

    </div>

</div>
