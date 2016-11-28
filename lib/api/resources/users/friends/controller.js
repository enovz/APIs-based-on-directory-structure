/**methods that are not described in actions will not be executed !!!
 * 
 * a user can have friends and :
 *  1. getAll of his friends
 *  2. get friend by id
 *  3. send a message to a friend
 *  4. unfriend someone 
 * 
 */

'use strict';

const User = require('../User');

class UsersFriendsController {

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
            },
            {
                method: "post",
                parameter: "",
                func: "befriend"
            },
            {
                method: "post",
                parameter: "/:id",
                func: "sendMessage"
            },
            {
                method: "del",
                parameter: "/:id",
                func: "unfriend"
            }
        ]
    }

    getAll(resources, response) {


        //return " user: " + resources.users.id + " called getAll friends";
    }
    getById(resources, response) {


        //return " user: " + resources.users.id + " called getById on friends id : " + resources.friends.id;
    }
    befriend(resources, response) {
        User.FindById(resources.users.id, function (err, user) {
            if (err) { response(err); }
            else {
                user.push(resources.friends.data.friends-id);
                response(200);
            }
        });

    }
    sendMessage(resources, response) {


        /*return " user: " + resources.users.id + " wants to sendMessage to : " + resources.friends.id
            + " with data : " + resources.friends.data.message;*/
    }

    unfriend(resources, response) {

        //return " user " + resources.users.id + " called remove dog : " + resources.friends.id;
    }
}

module.exports = new UsersFriendsController();