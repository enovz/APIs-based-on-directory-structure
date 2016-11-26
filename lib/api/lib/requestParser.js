/** parseReqData:   1. creates a resources object resouces {}
 * 
 *                  2. gets path/route endpoints :
 *                      2.1./users/4        => [users]
 *                      2.2./users/2/dogs/4 => [users, dogs]
 *                      
 *                  3. each endpoint is an object =>
 *                                                   users:{} , dogs={}
 *                  4. sets path endpoints as resource properties => 
 *                      resources {
 *                                  users:{}
 *                                  dogs: {}
 *                                 }
 *                  5. for each resource in resources gets req.params.id and req.body
 *                      5.1. elxample:
 *                               resources {
 *                                           users:{
 *                                                   id: req.params.users-id
 *                                                },
 *                                           dogs:{
 *                                                   id: req.params.id,
 *                                                   data: {
 *                                                           name: body.name
 *                                                           breed: body.breed             
 *                                                          }     
 *                                                  }
 *                                }
 *                      5.2. is based on url: api/users/users-id/dogs/id
 *                      5.3. every resource in resources gets its corresponding id 
 *                      5.4. only the last resource gathers req.body data (becaouse it is the resource we are operating on)
 *                  
 *                  6. if there is only 1 resource returns first resource in resources object (2.1)
 *                     if there are more resources returns the whole resources object.        (2.2)
 */


'use strict';

const requestParser = {
    parseReqData: parseReqData
}

function parseReqData(req) {
    const resources = getRouteEndpoints(req);
    let resources_count = 0;
    let properties = [];

    for (let key in resources) {
        getReqIds(req, key, data => {
            if (data) {
                properties.push(key);
                resources_count++;
                resources[key] = data;
            }
        });
    }

    let index = resources_count -1;
    let key = properties[index];


    getRedBody(req, key, data =>{
        if(data){
            resources[key]["data"] = data;
        }
    })


    if (resources_count > 1) {
        return resources;
    }
    else {
        return resources[Object.keys(resources)];
    }
}

function getRouteEndpoints(req) {
    const resources = {};

    const route = req.path();
    const reg = /[^\w\s]/gi;
    const routeEndpoints = route.split(reg).filter(routeEndpoint => routeEndpoint !== "" && routeEndpoint !== "api");

    routeEndpoints.forEach(endpoint => {
        if (!endpoint.match(/\d/)) {
            resources[endpoint] = {};
        }
    });

    return resources;
}

function getReqIds(req, resourceName, cb) {

    let data = {};

    if (req.params.id) {
        data.id = +req.params.id;
    }
    if (req.params[resourceName + '-id']) {
        data.id = +req.params[resourceName + '-id'];
    }

    cb(data);
}
function getRedBody(req, resourceName, cb) {
    let data = {};

    if (req.body) {
        for (let key in req.body) {
            data[key] = req.body[key];
        }
    }
    
    cb(data);
}
module.exports = requestParser;