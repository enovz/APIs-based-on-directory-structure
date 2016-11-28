'use strict';

let adminMiddlewear = {
    runMid : AdminMiddlewear
};

function AdminMiddlewear(req, res, next) {
    console.log('Admin middlewear activated');
    next();
}

module.exports = adminMiddlewear;