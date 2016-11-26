/**RouteHandler takes controller.
 * 1. creates actionParams object for controller action to consume
 * 2. runMiddlewear => executes middlewear functions (authentication, authorization) 
 * 3. getResponse => gets result from controller and returns response
*/

/** requestParser */
const reqestParser = require('./requestParser');

class RouteHandler {
    constructor(middlewears) {
        this.middlewears = middlewears;
    }

    runMiddlewear(req, res, next) {
        this.middlewears.forEach(middlewear => {
            for (let key in middlewear) {
                middlewear[key](req, res, next);
            }
        })
    }
    getResponse(req, res, action) {
        let actionParams = reqestParser.parseReqData(req);
        let result = action(actionParams);
        return response(res, result);
    }
}

function response(res, result) {
    if (result) {
        res.send(success(result));
    }
    else {
        res.send(error());
    }
}

function success(result) {
    if (result === "ok") {
        return { statsu: 200, message: "success" };
    }
    else {
        return { status: 200, message: "success", data: result };
    }
}

function error() {
    return { status: 404, message: "No matching resource" };
}

module.exports = RouteHandler;