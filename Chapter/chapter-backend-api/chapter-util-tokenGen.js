
/**
 * PURPOSE OF FILE: to generate a valid jwt token for an official user
 * EXPORT TO: test-routes-auth.js
--------------------------------------------------------------------
 */

const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;


// const jwtGenerator = (user_id) => {
//     const payload = {
//         user: user_id
//     }
//     console.log("MARKER 11")
//     return jwt.sign(payload, secret, {expiresIn: '1hr'});   
// }

const jwtGenerator = (user_id) => {
    const payload = {
        user: {
            id: user_id
        }
    }
    console.log("MARKER 11")
    return jwt.sign(payload, secret, {expiresIn: '1hr'});   
}


module.exports = jwtGenerator;