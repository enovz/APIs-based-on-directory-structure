/*let dog = require(./dog);*/


'use strict';

class DogController {

    constructor() {
        //Dogs = require(./dogs);
    }

    getAll(resources) {
        return " user: " + resources.users.id + " called getAll dogs";
    }
    getById(resources) {
        console.log(resources);
        return " user: " + resources.users.id + " called getById on dogs id : " + resources.dogs.id;
    }
    create(resources) {
        return "create user dogs called by user: " + resources.users.id + " dogs.data: " + resources.dogs.data;
    }
    remove(resources) {
        return " user " + resources.users.id + " called remove dog : " + resources.dogs.id;
    }
}

module.exports = new DogController();