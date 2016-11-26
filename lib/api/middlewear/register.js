
'use strict';

let registerMiddlewear = {
    go: middlewearGo
}

function middlewearGo(req, res,next){
    console.log("Login middlewear activated");
    next();
}

module.exports = registerMiddlewear;