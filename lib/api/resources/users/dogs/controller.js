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

const Dog = require('../../dogs/Dog');

class UsersDogsController {

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

    getAll(resources, response) {
        console.log(resources);

        Dog.find({ owner: resources.users.id }, function (err, dogs) {
            if (err) { cb(err); }
            response(dogs);
        });
    }
    getById(resources, response) {
        Dog.find({
            _id: resources.dogs.id,
            postedBy: resources.users.id
        }, function (err, dog) {
            if (err) { response(err); }
            response(dog);
        });
        
    }
    create(resources, response) {
        Dog.create({
            name: resources.dogs.data.dogName,
            owner: resources.users.id
        }, function (err) {
            if (err) { response(err); }
            response(200);
        });

    }
    update(resources, response) {
        Dog.FindById(resources.dogs.id, function (err, dog) {
            if (err) { response(err); }
            else {
                dog.name = resources.dogs.data.dogName;
                dog.save(function (err) {
                    if (err) { response(422) }
                    response(200);
                });
            }
        });

    }
    remove(resources, response) {
        Dog.remove({
            _id: resources.dogs.id,
            owner: resources.users.id
        }, function (err) {
            if (err) { response(err); }
            response(200);
        });

    }
}

module.exports = new UsersDogsController();