/** Every Resource needs: 
 *  1. a name : like dogs, users, cats 
 *  2. endpoints : 
 *          2.1. endpoints are defined as an object which leads  to a perticular Resource 
                        { 
                            //dir: '/cars',
                            url: '/users/:id/cars',
                            controller: [Function: hello] 
                        },
                        { 
                            //dir: '/cars/passangers',
                            url: '/users/:id/cars/:id/passangers',
                            controller: [Function: hello] 
                        },
                        { 
                            //dir: '/dogs',
                            url: '/users/:id/dogs',
                            controller: UserController { inMemoStorage: [ [Object], [Object], [Object] ] } 
                        }, and so on           
 *       
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

        let subFolders = getAllFoldersFromFolder(this.dir);
        let subRoutes = getSubRoutes(subFolders, this.dir);

        this.endpoints = getEndpoints(this.dir, this.resourceName, subRoutes);
        this.middlewear = getMiddlewear(resourceDir, resourceName);
        this.router = getRouter(this.endpoints, this.middlewear);

    }
}

function getAllFoldersFromFolder(dir) {

    var results = [];

    let dirs = fs.readdirSync(dir).filter(file => file.indexOf("js") === -1);
    if (dirs.length !== 0) {
        dirs.forEach(function (file) {

            file = dir + '/' + file;
            results = results.concat(file);
            results = results.concat(getAllFoldersFromFolder(file));
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

    let index = results.indexOf('/midllewear');

    if (index > -1) {

        results.splice(index, 1);

    }

    return results;
}


module.exports = Resource;