/**
 * [authentication.js]
 * encoding=utf-8
 */

 
var VALID_USERNAME = process.env.USER_NAME || "jbfree5";


exports.isOwnerValid = function (queryObject) {
console.log(queryObject);
    return queryObject.username && (queryObject.username==VALID_USERNAME);
};

