/**ApiResources collects all resources from the rousource dir 
 *  1. for each dir in resources construct a new Resource object.
 */


'use strict';

const fs = require('fs');
const path = require('path');
const Resource = require('./lib/Resource');

class Api {
    constructor() {
        this.resources = [];
        this.resourcesDir = path.resolve(__dirname, './resources');
        this.resourcesList = fs.readdirSync(this.resourcesDir);
    }

    gatherResources() {
        this.resourcesList.forEach(resourceName => {
            let resource = new Resource(this.resourcesDir, resourceName);
            this.resources.push(resource);
        });

        return this.resources;
    }
}

module.exports = new Api();


