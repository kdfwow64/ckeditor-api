<?php

class Upgradev1x1x9to1x2x2 extends CakeMigration
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
                'settings' => array(
                    'Chat-hide_email' => array('type' => 'boolean', 'null' => false, 'default' => '0', 'after' => 'Chat-hide_mobile'),
                    'Chat-hide_offline' => array('type' => 'boolean', 'null' => false, 'default' => '0', 'after' => 'Chat-hide_email'),
                ),
                'users' => array(
                    'role' => array('type' => 'string', 'null' => false, 'default' => 'admin', 'length' => 45, 'collate' => 'utf8_unicode_ci', 'charset' => 'utf8', 'after' => 'active'),
                    'permissions' => array('type' => 'text', 'null' => true, 'default' => NULL, 'collate' => 'utf8_unicode_ci', 'charset' => 'utf8', 'after' => 'role'),
                ),
            ),
        ),
        'down' => array(
            'drop_field' => array(
                'settings' => array('Chat-hide_email', 'Chat-hide_offline',),
                'users' => array('role', 'permissions',),
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
