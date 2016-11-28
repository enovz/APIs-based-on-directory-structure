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
        User.find({ _id: resources.users.id })
            .populate("friends")
            .exec((err, friends) => {
                if(err){ response(err); }
                else{
                    response(friends);
                }
            })

    }
    getById(resources, response) {
        User.findById(resources.friends.id, (err, friend) => {
            if (err) { response(err); }
            else {
                response(friend);
            }
        });

    }
    befriend(resources, response) {
        User.findById(resources.users.id, (err, user) => {
            if (err) { response(err); }
            else {
                user.friends.push(resources.friends.data.id);
                user.save();
                response(200);
            }
        });

    }
    sendMessage(resources, response) {

        User.findById(resources.user.id, (err, user) => {
            if (err) { response(err); }
            else {
                /*call some complicated messenger service */
                //response(user);
            }
        });
    }

    unfriend(resources, response) {
        console.log(resources);
        User.findById(resources.users.id, (err, user) => {
            if (err) { response(err); }
            else {
                let index = user.friends.indexOf(resources.friends.id);
                user.friends.splice(index, 1);
                user.save();
                response(200);
            }
        });
    }
}

module.exports = new UsersFriendsController();