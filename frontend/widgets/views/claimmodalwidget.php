<?php
use yii\widgets\Pjax;
?>
<?php if(isset($this->params['claim'])){?>
<div id="claim-modal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="close" data-dismiss="modal">&times;</div>
				<div class="modal-title"><?=$this->params['claim']['type']?> <br>"<strong><?=$this->params['claim']['name']?></strong>"</div>
			</div>
			<?php Pjax::begin(['id' => 'claimmodal']); ?>
            <?php $form = \yii\widgets\ActiveForm::begin(['id' => 'claimmodal-form', 'options' => ['class' => 'feedback_form', 'data-pjax' => true]]) ?>
            <div class="error_flash_block">
                <?php if (Yii::$app->session->getFlash('claim_success')): ?>
                    <div class="alert alert-success" role="alert">
                        <?= Yii::$app->session->getFlash('claim_success') ?>
                    </div>
                <?php endif; ?>
                <?php if (Yii::$app->session->getFlash('claim_error')): ?>
                    <div class="alert alert-danger" role="alert">
                        <?= Yii::$app->session->getFlash('claim_error') ?>
                    </div>
                <?php endif; ?>
            </div>
            <div class="modal-body">
				<div class="form-group">
					<span>
						<?=isset($this->params['claim']['company'])?$this->params['claim']['company']:''?>
					</span>
					<br>
					<span>
						<?=$this->params['claim']['user']?>
					</span>
					<br>
					<span>
						<?= Yii::t('app', 'Reason for complaint')?>:
					</span>
                    <?= $form->field($model, 'text')->textarea(['class' => '','cols'=>30,'rows'=>10, 'placeholder' => ''])->label(false) ?>

                    <?= $form->field($model, 'name')->hiddenInput(['value'=>$this->params['claim']['name']])->label(false);?>
                    <?= $form->field($model, 'type')->hiddenInput(['value'=>$this->params['claim']['type']])->label(false);?>
                    <?= $form->field($model, 'user')->hiddenInput(['value'=>$this->params['claim']['user']])->label(false);?>
                    <?= $form->field($model, 'company')->hiddenInput(['value'=>isset($this->params['claim']['company'])?$this->params['claim']['company']:''])->label(false);?>
                    <?= $form->field($model, 'vacancy_id')->hiddenInput(['value'=>isset($this->params['claim']['vacancy_id'])?$this->params['claim']['vacancy_id']:''])->label(false);?>
                    <?= $form->field($model, 'user_id')->hiddenInput(['value'=>$this->params['claim']['user_id']])->label(false);?>
                    <?= $form->field($model, 'resume_id')->hiddenInput(['value'=>isset($this->params['claim']['resume_id'])?$this->params['claim']['resume_id']:''])->label(false);?>
				</div>
			</div>
			<div class="modal-footer">
				<button class="button" data-dismiss="modal"><?= Yii::t('app', 'Cancel')?></button>
				<input type="submit" value="<?= Yii::t('app', 'Send')?>" class="button">
			</div>
            <?php \yii\widgets\ActiveForm::end(); ?>
            <?php Pjax::end(); ?>

		</div>
	</div>
</div>
<?php }?>






