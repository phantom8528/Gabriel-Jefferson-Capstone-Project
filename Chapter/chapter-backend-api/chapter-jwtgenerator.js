
const jwt = require('jsonwebtoken');
require('dotenv').config(); //<-- Allows access to all enviornment variables


const jwtGenerator = (user_id) => {
    const payLoad = {
        user: user_id
    }
    return jwt.sign(payLoad, process.env.jwtSecret, {expiresIn: '1h'});
}

module.exports = jwtGenerator;