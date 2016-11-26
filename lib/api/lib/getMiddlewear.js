
'use strict';

const fs = require('fs');
const path = require('path');


function getMiddlewear(resourceDir, resourceName) {
    let commonMiddlewear = require(path.resolve(resourceDir, '../middlewear/common'));
    let resourceMiddlewear = require(path.resolve(resourceDir, '../middlewear/' + resourceName));
    let middlewear = [commonMiddlewear, resourceMiddlewear];

    return middlewear;
}

module.exports = getMiddlewear;