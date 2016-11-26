/**user middlewear defines what middlewears a request must go thru before reaching user resource*/

'use strict';

const usersMiddlewear = {
    hello:  Hello,
    goodbye:  Goodbye
}


function Hello(req, res, next) {
    console.log('Hello from users middlewear');
    next();
}

function Goodbye(req, res, next) {
    console.log('Goodbye from users middlewear');
    next();
}

module.exports = usersMiddlewear;