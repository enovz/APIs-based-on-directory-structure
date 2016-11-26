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
        this.resources_dir = path.resolve(__dirname, './resources');
        this.resources_list = fs.readdirSync(this.resources_dir);
    }

    gatherResources() {
        this.resources_list.forEach(resource_name => {
            let resource = new Resource(this.resources_dir, resource_name);

            this.resources.push(resource);
        });

        return this.resources;
    }
}

module.exports = new Api();


