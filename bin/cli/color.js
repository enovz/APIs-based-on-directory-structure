
'use strict';

const chalk = require('chalk');

let color = {
    error: (msg) => {
        return chalk.red(msg);
    },
    success: (msg) => {
        return chalk.magenta(msg);
    },
    info: (msg) => {
        return chalk.cyan(msg);
    }
}

module.exports = color;