
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
        controller: require(path.join(dir, '/controller.js')),
        actions: require(path.join(dir, '/actions.js'))
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
        if (require(path.join(dir, route + '/actions.js'))) {
            baseEndpoint.actions = require(path.join(dir, route + '/actions.js'));
        }

        baseEndpoints.push(baseEndpoint);
    });

    return baseEndpoints;
}

function createEndpoints(baseEndpoints) {

    let endpoints = [];

    baseEndpoints.forEach(baseEndpoint => {

        baseEndpoint.actions.forEach(action => {
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