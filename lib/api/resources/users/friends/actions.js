'use strict';

var actions = [
    {
        method: "get",
        parameter: "",
        func: "getAll"
    },
    {
        method: "get",
        parameter: "/:id",
        func: "getById"
    },
    {
        method: "post",
        parameter: "",
        func: "befriend"
    },
    {
        method: "post",
        parameter: "/:id",
        func: "sendMessage"
    },
    {
        method: "del",
        parameter: "/:id",
        func: "unfriend"
    }

];

module.exports = actions;