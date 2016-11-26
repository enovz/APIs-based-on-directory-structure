/**collection of all middlewears, middlewears should: 
 * 1. check requset headers (Authentication)
 * 2. check if users are authenticated
 * 3. check if users are authorized
 */

'use strict';

const middlewear = {}

middlewear.common = require('./common');




module.exports = middlewear;