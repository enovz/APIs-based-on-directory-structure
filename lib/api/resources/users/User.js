
'use strict';

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);