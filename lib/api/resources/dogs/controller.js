/*let dog = require(./dog);*/


'use strict';

const Dog = require('./Dog');

class DogController {

    constructor() {
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

    getAll(dogs, response) {
        Dog.find((err, dogs) => {
            if (err) { response(err); }
            else {
                response(dogs);
            }
        })

    }
    getById(dogs, response) {
        Dog.findById(dogs.id, (err, dog) => {
            if (err) { response(err); }
            else {
                response(dog);
            }
        });
    }
    create(dogs, response) {
        Dog.create({ name: dogs.data.dogName }, (err) => {
            if (err) { response(err); }
            else {
                response(200);
            }
        })
    }
    update(dogs, response) {
        Dog.FindById(resources.dogs.id, function (err, dog) {
            if (err) { response(err); }
            else {
                dog.name = dogs.data.dogName;
                dog.save(function (err) {
                    if (err) { response(err) }
                    response(200);
                });
            }
        });
    }
    remove(dogs, response) {
        Dog.remove({ _id: dogs.id }, (err) => {
            if (err) { response(err); }
            else {
                response(200);
            }
        })
    }
}

module.exports = new DogController();