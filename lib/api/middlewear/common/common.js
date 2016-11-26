
'use strict'

function Common(req, res, next) {
    console.log('I am a common middlewear. Everybody needs me :)');
    next();
}

module.exports = Common;