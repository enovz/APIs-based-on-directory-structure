
'use strict';

let loginMiddlewear = {
    go : midllewearGo
}

function midllewearGo(req, res,next){
    console.log("Login middlewear activated");
    next();
}

module.exports = loginMiddlewear;