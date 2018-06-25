<?php

class Upgradev1x0x1to1x1x2 extends CakeMigration
{

    /**
     * Migration description
     *
     * @var string
     * @access public
     */
    public $description = '';

    /**
     * Actions to be performed
     *
     * @var array $migration
     * @access public
     */
    public $migration = array(
        'up' => array(
            'create_field' => array(
                'discussions' => array(
                    'composing_visitor_date' => array('type' => 'datetime', 'null' => true, 'default' => NULL, 'after' => 'visitor_exited'),
                    'composing_user_date' => array('type' => 'datetime', 'null' => true, 'default' => NULL, 'after' => 'composing_visitor_date'),
                    'composing_user_id' => array('type' => 'integer', 'null' => true, 'default' => NULL, 'after' => 'composing_user_date'),
                ),
            ),
        ),
        'down' => array(
            'drop_field' => array(
                'discussions' => array('composing_visitor_date', 'composing_user_date', 'composing_user_id',),
            ),
        ),
    );

    /**
     * Before migration callback
     *
     * @param string $direction, up or down direction of migration process
     * @return boolean Should process continue
     * @access public
     */
    public function before($direction)
    {
        return true;
    }

    /**
     * After migration callback
     *
     * @param string $direction, up or down direction of migration process
     * @return boolean Should process continue
     * @access public
     */
    public function after($direction)
    {
        return true;
    }

}
