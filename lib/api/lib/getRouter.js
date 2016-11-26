/**Router resolves routing for a Resource that it belonges to.
 * A Router consist of routes and a routeHandler :
 *  1. routes define methods (GET,POST,PUT,DEL), urls (user, user/:id, so on) and actions ()
 *  2. routerHandler runs middlewear
 *  3. routeHandler responds to a requests
 * 
 * ? how to solve routing ?
 * 1. how to get methods allowed on a enpoint?
 * 2. how to append parameters to url
 */

'use strict';

const restifyRouter = require('restify-router').Router;
const RouteHandler = require('./RouteHandler');

function getRouter(endpoints, middlewear) {

    let router = new restifyRouter();
    let RouteHandler = require('./RouteHandler');
    let routeHandler = new RouteHandler(middlewear);

    endpoints.forEach(endpoint => {

        router[endpoint.method](endpoint.url, (req, res, next) =>{
            routeHandler.runMiddlewear(req, res, next);
            routeHandler.getResponse(req, res, endpoint.func);

        });
    });   

    return router;
}

module.exports = getRouter;
