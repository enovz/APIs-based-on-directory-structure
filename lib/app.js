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
        this.appServer = new Server(config.test.server);
        this.appDb = new Database(config.test.database);
        this.appApi = require('./api/api');
    };
    start() {
        this.appServer.start();
        this.appDb.start();

        let appResources = this.appApi.gatherResources();
        let appRegistrar = new Registrar(this.appServer.server);
        
        appRegistrar.mount(appResources);
    }
    stop() {
        this.appDb.sutdown();
        this.appServer.shutdown();
    }
}

module.exports = new App();