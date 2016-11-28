#!/usr/bin/env node

'use strict';


const color = require('./cli/color');
const app = require('../lib/app');

process.env.NODE_ENV = process.env.NODE_ENV ||  'dev';
var ENV = process.env.NODE_ENV;

app.start();
console.log("Server listening on port: " + color.info(app.appServer.port));

/*const program = require('commander');
const pkg = require('../package.json');
const figlet = require('figlet');


console.log(color.success(figlet.textSync('STARTED', {
    font: 'Train',
    horizontalLayout: 'default',
    verticalLayout: 'default'
})));
program
    .version(pkg.version)
    .option('-p, --port [optional]', 'Port for server default(8080)')
    .option('-e, --enviroment [optional]', 'Enviroment default(dev)')
    .parse(process.argv);

if (!program.port || !program.enviroment) {
    console.log(program.help());
}
else {
    console.log(color.info(program.port));
    console.log(color.info(program.enviroment));

    app.start();
    console.log(color.info("Server listening on port: ") + color.info(app.app_server.port));

}*/
