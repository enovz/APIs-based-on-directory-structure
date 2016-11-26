/**methods that are not described in actions will not be executed !
 * 
 * only admin can add, remove, create users !
 * 
 * users can only get users, find user by id
 */

'use strict';

class UserController {

    constructor() {
        const User = require('./User');
    }

    getAll() {
        return "get all users called";
    }
    getById(user) {
        return "getById called " + user.id;

    }
   /* create(user) {
        return "create user called" + user.data;
    }
    update(user) {
        return "update user called " + user.id;
    }
    remove(user) {
        return "remove user called" + user.id;
    }*/
}

module.exports = new UserController();