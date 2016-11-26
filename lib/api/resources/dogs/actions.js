/**maby put result data description */


'use strict';

var actions = [
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

module.exports = actions;