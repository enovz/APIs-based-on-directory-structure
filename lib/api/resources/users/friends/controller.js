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

class UsersFriendsController {

    constructor() {
        //const User = require('./User');
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

    getAll(resources) {
        return " user: " + resources.users.id + " called getAll friends";
    }
    getById(resources) {
        console.log(resources);
        return " user: " + resources.users.id + " called getById on friends id : " + resources.friends.id;
    }
    befriend(resources) {
        return " user: " + resources.users.id + " sent a friend request to : " + resources.friends.data.friendsName;
    }
    sendMessage(resources) {
        return " user: " + resources.users.id + " wants to sendMessage to : " + resources.friends.id
            + " with data : " + resources.friends.data.message;
    }

    unfriend(resources) {
        return " user " + resources.users.id + " called remove dog : " + resources.friends.id;
    }
}

module.exports = new UsersFriendsController();