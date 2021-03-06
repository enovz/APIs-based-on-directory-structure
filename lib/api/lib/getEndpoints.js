/*endpoints : 
            1.1. endpoint is an object with an url, method and a controller function 
                        { 
                            url: '/users/:id/cars',
                            method: "get",
                            func: [Function: hello] 
                        },

            1.2. endpoints:  
                        { 
                            url: '/users/:id/cars',
                            method: "get",
                            func: [Function: hello] 
                        },
                        { 
                            url: '/users/:user-id/cars/:cars-id/passangers',
                            method: "post",
                            func: [Function: hello] 
                        },
                        { 
                            url: '/users/:id/dogs',
                            method: "put",
                            func: UserController { inMemoStorage: [ [Object], [Object], [Object] ] } 
                        }, and so on
*/

'use strict';

const fs = require('fs');
const path = require('path');

function getEndpoints(dir, resourceName, subRoutes) {

    let baseEndpoints = getBaseEndpoints(dir, resourceName, subRoutes);
    let endpoints = createEndpoints(baseEndpoints);

    return endpoints;
}

function getBaseEndpoints(dir, root, subRoutes) {

    let baseEndpoints = [];
    let endpoints = [];

    baseEndpoints.push({
        url: '/' + root,
        controller: require(path.join(dir, '/controller.js'))
    });

    subRoutes.forEach(route => {
        let url = "";
        url = root + route;
        url = url.replace(/\//g, '/:' + root + '-id/');

        let baseEndpoint = {};

        baseEndpoint.url = '/' + url;

        if (require(path.join(dir, route + '/controller.js'))) {
            baseEndpoint.controller = require(path.join(dir, route + '/controller.js'));
        }

        baseEndpoints.push(baseEndpoint);
    });

    return baseEndpoints;
}

function createEndpoints(baseEndpoints) {

    let endpoints = [];

    baseEndpoints.forEach(baseEndpoint => {

        baseEndpoint.controller.actions.forEach(action => {
            let endpoint = {};

            endpoint.url = baseEndpoint.url + action.parameter;
            endpoint.method = action.method;
            endpoint.func = baseEndpoint.controller[action.func];

            endpoints.push(endpoint);
        });


    });

    return endpoints
}


module.exports = getEndpoints;