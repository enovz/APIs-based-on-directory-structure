/** 1.methods that are not described in actions will not be executed !
 *  2.controller methods parameters:
 *          2.1. every paramter is described and named according to the resource
 *              that needs to be manipulated
 *          2.2 every method descibes and action preformed on the endpoint
 *  
 *  3.only admin can add, remove, create users !
 * 
 *  4.users can only get users, find user by id
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