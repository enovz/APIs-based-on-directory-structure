/**Database is resposible for maintaining and monitoring the connection to the database */

'use strict';

const mongoose = require('mongoose');

class Database {
    constructor(config) {
        this.config = config;
        this.dbConnection;
    }
    start() {
        mongoose.connect(this.config.url, { server: { auto_reconnect: true } });
        this.dbConnection = mongoose.connection;

        this.dbConnection.on('error', function (err) {
            console.error('MongoDB connection error:', err);
        });
        this.dbConnection.once('open', function callback() {
            console.info('MongoDB connection is established');
        });
        this.dbConnection.on('disconnected', function () {
            console.error('MongoDB disconnected!');
            mongoose.connect(this.config.url, { server: { auto_reconnect: true } });
        });
        this.dbConnection.on('reconnected', function () {
            console.info('MongoDB reconnected!');
        });
    }
    shutdown(){
        mongoose.connection.close()
    }
}

module.exports = Database;