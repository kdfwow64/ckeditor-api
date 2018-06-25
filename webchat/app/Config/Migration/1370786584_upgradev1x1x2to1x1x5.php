<?php

class Upgradev1x1x2to1x1x5 extends CakeMigration
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
            'alter_field' => array(
                'settings' => array(
                    'System-timezone' => array('type' => 'string', 'null' => false, 'default' => 'Europe/London', 'length' => 80, 'collate' => 'utf8_unicode_ci', 'charset' => 'utf8'),
                ),
            ),
        ),
        'down' => array(
            'alter_field' => array(
                'settings' => array(
                    'System-timezone' => array('type' => 'string', 'null' => false, 'default' => 'Europe/London', 'length' => 20, 'collate' => 'utf8_unicode_ci', 'charset' => 'utf8'),
                ),
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
