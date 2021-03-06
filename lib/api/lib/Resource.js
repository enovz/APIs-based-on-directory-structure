/** Every Resource needs: 
 *  1. a name : like dogs, users, cats 
 *  2. endpoints           
 *  3. middlewear
 *  4. router     
 */


'use strict';

const fs = require('fs');
const path = require('path');
const getRouter = require('./getRouter');
const getEndpoints = require("./getEndpoints");
const getMiddlewear = require("./getMiddlewear");

class Resource {
    constructor(resourceDir, resourceName) {
        this.resourceName = resourceName;
        this.dir = path.resolve(resourceDir, resourceName);

        let subFolders = getAllFoldersFrom(this.dir);
        let subRoutes = getSubRoutes(subFolders, this.dir);

        this.endpoints = getEndpoints(this.dir, this.resourceName, subRoutes);
        this.middlewear = getMiddlewear(resourceDir, resourceName);
        this.router = getRouter(this.endpoints, this.middlewear);

    }
}

function getAllFoldersFrom(dir) {

    var results = [];

    let dirs = fs.readdirSync(dir).filter(file => file.indexOf("js") === -1);
    if (dirs.length !== 0) {
        dirs.forEach(function (file) {

            file = dir + '/' + file;
            results = results.concat(file);
            results = results.concat(getAllFoldersFrom(file));
        });
    }
    else {
        return results;
    }
    return results;

}

function getSubRoutes(subFolders, dir) {
    let results = [];
    subFolders.forEach(folder => {
        results = results.concat(folder.split(dir).filter(route => route !== ""));
    })

    return results;
}


module.exports = Resource;