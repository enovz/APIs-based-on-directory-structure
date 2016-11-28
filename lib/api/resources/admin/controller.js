
'use strict';

const User = require('../users/User');

class AdminController {

    constructor() {

        this.actions = [
            {
                method: "get",
                parameter: "",
                func: "populateDb"
            }
        ];
    }

    populateDb(resources, response) {

        let users = [
            {
                name: "Ivan"
            },
            {
                name: "darko"
            },
            {
                name: "ilija"
            },
            {
                name: "marko"
            },
            {
                name: "luka"
            },
            {
                name: "toni"
            },
        ];

        for(let i in users){
            User.create({ name: users[i].name}, function(err){
                if(err){ console.log(err); }
            })
        }

        response(200);
        
    }
}

module.exports = new AdminController();