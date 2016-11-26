'use strict';

let dogsMiddlewear = {
    speak : Speak
};

function Speak(req, res, next) {
    console.log('Dog middlewear speaks dog language! \n Wuf Wuf !');
    next();
}

module.exports = dogsMiddlewear;