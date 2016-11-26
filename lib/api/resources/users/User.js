
'use strict';

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', UserSchema);