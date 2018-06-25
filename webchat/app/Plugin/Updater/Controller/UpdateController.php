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
 * Update controller
 */
class UpdateController extends Controller
{

    public $uses = array();
    public $components = array('Session');
    public $layout = 'installer';

    /**
     * Holds the version of the Update
     * @var string
     */
    public $NewVersion = '1.2.2';

    /**
     * Holds the version file
     * @var string
     */
    public $VersionFile = null;

    /**
     * Holds the update-required config file
     * @var string
     */
    public $UpdateRequiredFile = null;

    public function __construct($request = null, $response = null)
    {
        parent::__construct($request, $response);
        $this->UpdateRequiredFile = APP . 'Config' . DS . 'clientengage-update-required.ini';
        $this->VersionFile = APP . 'Config' . DS . 'version.php';
    }

    public function beforeFilter()
    {
        if ($this->name == 'CakeError')
            $this->layout = 'installer';

        if (!file_exists($this->UpdateRequiredFile))
        {
            $this->Session->setFlash(__('No update necessary.'), Flash::Success);
            $this->redirect(array('controller' => 'users', 'action' => 'login', 'admin' => false, 'plugin' => null));
            die;
        }
        if ($this->request->params['action'] != 'index' && !$this->Session->read('eula_agreed') === true)
        {
            $this->Session->setFlash(__('Update cannot continue, please accept the EULA'), Flash::Error);
            $this->redirect(array('action' => 'index'));
        }
    }

    /**
     * Index method
     */
    public function index()
    {
        if ($this->request->is('post'))
        {
            if (isset($this->request->data['eula_agreed']) && $this->request->data['eula_agreed'] == '1')
            {
                $this->Session->write('eula_agreed', true);
                $this->redirect(array('action' => 'update'));
            }
        }
    }

    /**
     * Public method to apply the application update
     * @return type
     */
    public function update()
    {
        if ($this->request->is('post'))
        {
            try
            {
                $this->__migrate();
            }
            catch (MigrationException $ex)
            {
                $this->Session->setFlash(__('An error has occured whilst running the update: ') . $ex->getMessage(), Flash::Error);
                return;
            }

            App::import('File', 'Utility');

            $versionInfoString = '<?php

class AppVersion
{

    const Version = \'' . $this->NewVersion . '\';

}';

            $versionFile = new File($this->VersionFile);
            if (!$versionFile->write($versionInfoString))
            {
                $this->Session->setFlash(String::insert(__('Part of the update could not be performed. The new version information could not be applied. Please open the following file and replace the version number with ":version": ', array('version' => $this->NewVersion)) . $this->VersionFile), Flash::Error);
                return;
            }

            $updateRequiredFile = new File($this->UpdateRequiredFile);
            if (!$updateRequiredFile->delete())
            {
                $this->Session->setFlash(__('Part of the update could not be performed. Please delete the following file: ') . $this->UpdateRequiredFile, Flash::Error);
                return;
            }

            $this->Session->delete('Auth');
            $this->Session->setFlash(String::insert(__('You have successfully updated ClientEngage Visitor Chat to version :version'), array('version' => $this->NewVersion)), Flash::Success);
            $this->redirect(array('controller' => 'users', 'action' => 'login', 'admin' => false, 'plugin' => null));
        }
    }

    /**
     * Performs the upgrade's database migration
     */
    private function __migrate()
    {
        $migrations = $this->__getNewMigrations();

        App::import('Model', 'ConnectionManager');
        App::uses('CakeMigration', 'Migrations.Lib');
        App::uses('MigrationVersion', 'Migrations.Lib');

        $pendingMigrations = array();

        foreach ($migrations as $migration)
        {
            $pendingMigrations[] = $this->__readMigration($migration['file'], $migration['class'], 'app');
        }

        foreach ($pendingMigrations as $m)
        {
            $m->run('up');
        }

        Cache::clear(false, '_cake_model_');
        Cache::clear(false, '_cake_core_');
        Cache::clear();

        $this->autoRender = false;
    }

    /**
     * Reads and returns all database migration files
     * @return array
     */
    private function __getAllMigrations()
    {
        App::uses('Folder', 'Utility');
        App::uses('File', 'Utility');

        $dir = new Folder(APP . 'Config' . DS . 'Migration' . DS);
        $files = $dir->find('.*\.php');

        $allMigrations = array();
        foreach ($files as $file)
        {
            $parts = str_replace('.php', '', explode('upgradev', $file));
            $rawVersions = explode('to', $parts[1]);

            $allMigrations[] = array(
                'from' => implode('.', explode('x', $rawVersions[0])),
                'to' => implode('.', explode('x', $rawVersions[1])),
                'class' => Inflector::camelize(str_replace('.php', '', array_shift(array_reverse(explode('_', $file))))),
                'file' => $file);
        }
        return $allMigrations;
    }

    /**
     * Returns all versions which are > the current version
     * @return array
     */
    private function __getNewMigrations()
    {
        $allMigrations = $this->__getAllMigrations();
        $newMigrations = array();

        foreach ($allMigrations as $migration)
        {
            $version = AppVersion::Version;

            if (version_compare($migration['to'], $version, '>'))
                $newMigrations[] = $migration;
        }

        return $newMigrations;
    }

    /**
     * Loads the Migrations migration file into memory
     * @param type $name
     * @param type $type
     * @return boolean
     * @throws InternalErrorException
     */
    private function __loadMigrationFile($name, $type)
    {
        $path = APP . 'Config' . DS . 'Migration' . DS;
        if ($type != 'app')
            $path = CakePlugin::path(Inflector::camelize($type)) . 'Config' . DS . 'Migration' . DS;

        if (!file_exists($path . $name))
            throw new InternalErrorException();

        include $path . $name;
        return true;
    }

    /**
     * Returns the CakeMigration class of the Migrations plugin
     * @param type $name
     * @param type $class
     * @param type $type
     * @param type $options
     * @return CakeMigration
     * @throws InternalErrorException
     */
    private function __readMigration($name, $class, $type, $options = array())
    {
        if (!class_exists($class) && (!$this->__loadMigrationFile($name, $type) || !class_exists($class)))
            throw new InternalErrorException();

        $defaults = array(
            'connection' => 'default'
        );
        $options = Set::merge($defaults, $options);
        return new $class($options);
    }

}
