//no ctor params, no config


'use strict';


const restify = require('restify');

class Server {
    constructor(config) {
        this.config = config;
        this.started = false;
        this.port = config.port;
        this.server = restify.createServer({
            name: config.name
        });
    }

    start() {
        if (!this.started) {
            this.server.use(restify.CORS());
            this.server.use(restify.bodyParser());

            this.server.listen(this.port);
            this.started = true;
        }
    }
    shutdown() {
        if (this.started) {
            this.server.close();
            this.started = flase;
        }
    }
}

module.exports = Server;