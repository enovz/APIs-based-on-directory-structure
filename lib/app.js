/* set config for enviroment, server port, name, log, db url, db username, db password, db*/


'use strict';

const Registrar = require('./server/Registrar');
const Server = require('./server/Server');
const Database = require('./database/Database');
const Settings = require('settings');
const config = new Settings(require('../config'));

//currently set config to test
class App {
    constructor() {
        this.app_server = new Server(config.test.server);
        this.app_db = new Database(config.test.database);
        this.app_api = require('./api/api');
    };
    start() {
        this.app_server.start();
       // this.app_db.start();

        let app_resources = this.app_api.gatherResources();
        let app_registrar = new Registrar(this.app_server.server);
        
        app_registrar.mount(app_resources);
    }
    stop() {
        this.app_db.sutdown();
        this.app_server.shutdown();
    }
}

module.exports = new App();