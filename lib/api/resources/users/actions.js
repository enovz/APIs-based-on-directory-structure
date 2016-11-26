/**Actions are coupled with a endpoint: 
 * 1. Actions are composed of 3 things:
 *      1.1. action method = > method to use
 *      1.2. action parameter => parameter to use with url 
 *      1.3. action func => function that consumes parameter
 * 2. 
 */

'use strict';

const actions = [
    {
        method: "get",
        parameter: "",
        func: "getAll"
    },
    {
        method: "get",
        parameter: "/:id",
        func: "getById"
    }

];

module.exports = actions;
