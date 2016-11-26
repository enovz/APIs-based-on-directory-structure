/** controllers of nested routes :
 *  1. every method recives a resources object 
 *  2. resources object :
 *          2.1. example:
 *                       resources {
 *                                  user:{
 *                                         id: req.params.user-id
 *                                  dogs:{
 *                                         id: req.params.user-id
 *                                         data: {
 *                                                 name: body.name             
 *                                                }        
 *                                        }
 *                                  } 
 */     

'use strict';

class UsersDogsController {

    constructor() {
        //const User = require('./User');
    }

    getAll(resources) {
        return " user: " + resources.users.id + " called getAll dogs";
    }
    getById(resources) {
        console.log(resources);
        return " user: " + resources.users.id + " called getById on dogs id : " + resources.dogs.id;
    }
    create(resources) {
        return " user: " + resources.users.id + " called create dog with data: " + resources.dogs.data;
    }
    update(resources) {
        return "user : " + resources.users.id + " called update for dog : " + resources.dogs.id +
            " with data: " + resources.dogs.data.dogName;
    }
    remove(resources) {
        return " user " + resources.users.id + " called remove dog : " + resources.dogs.id;
    }
}

module.exports = new UsersDogsController();