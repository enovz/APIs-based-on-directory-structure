
'use strict';

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let DogSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
});

module.exports = mongoose.model('Dog', DogSchema);