/*let dog = require(./dog);*/


'use strict';

class DogController {

    constructor() {
        //Dogs = require(./dogs);
        this.actions = [
            {
                method: "get",
                parameter: "",
                func: "getAll"
            },
            {
                method: "post",
                parameter: "",
                func: "create"
            },
            {
                method: "get",
                parameter: "/:id",
                func: "getById"
            },
            {
                method: "put",
                parameter: "/:id",
                func: "update"
            },
            {
                method: "del",
                parameter: "/:id",
                func: "remove"
            }

        ];
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