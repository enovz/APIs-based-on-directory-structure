#!/usr/bin/env node

'use strict';


const color = require('./cli/color');
const app = require('../lib/app');

process.env.NODE_ENV = process.env.NODE_ENV ||  'dev';
var ENV = process.env.NODE_ENV;

app.start();
console.log("Server listening on port: " + color.info(app.appServer.port));


