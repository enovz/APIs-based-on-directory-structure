/** Controllers controll the logic for a certan endpoint
 *  1. User:
 *      1.1. defines a model of the resource in context of endpoint
 * 
 *  2. acitons:
 *      2.1. array of actions that can be preformed by this Controllers
 *      2.2. an action is defined by:
 *              2.2.1. methods applyed to the endpoint
 *              2.2.2. parameter of function => func
 *              2.2.3. func is the function which handles action logic
 *   
 * 3. implementations of action func     
 * 
 */

'use strict';

const User = require('./User');

class UserController {

    constructor() {
        this.actions = [
            {
                method: "get",
                parameter: "",
                func: "getAll"
            },
            {
                method: "get",
                parameter: "/:id",
                func: "getById"
            }
        ];
    }

    getAll(params, cb) {
        User.find({}, function (err, users) {
            if (err) { cb(err); }
            cb(users);
        });
    }

    getById(user, cb) {

        User.findById(user.id, function (err, user) {
            if (err) { cb(err); }
            cb(user);
        });
    }

}

module.exports = new UserController();