/**
 * PURPOSE OF FILE: Making sure that the user has a valid jwt token
 * EXPORT TO: test-routes-auth.js
 ---------------------------------------------------------------------
 */
// const jwt = require('jsonwebtoken');
// require('dotenv').config(); //<-- grants access to enviornment variables
// const secret = process.env.SECRET;

// module.exports = async (req, res, next) => {
//     try {
//         //1. destructure the token
//         const jwtToken = req.header('token');
//         console.log("MARKER 7");
//         //2. Check to see if the token even exists
//         if (!jwtToken){
//             return res.status(403).json("You are not authorized ");
//         }
//         console.log("MARKER 8");
        
//         //3. If there is a token, check to see if it's valid
//         const payload = jwt.verify(payload, secret); //<-- returns a payload that we can use in our routes
//         req.user = payload.user;

//         console.log("MARKER 9");

//     } catch (err) {
//         console.error(err.message);
//         console.log("MARKER 10");
//         return res.status(403).json("You are not authorized ")
        
//     }
// }

//:::::::::::::::::::::::::::::GITHUB VERSION:::::::::::::::::::::::::::::::::::::

const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("token");
  console.log("---MARKER 7---");


  // Check if not token
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  console.log("---MARKER 8---");


  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.SECRET);

    req.user = verify.user;
    next();
  } catch (err) {
        console.log("---MARKER 9---");
        res.status(401).json({ msg: "Token is not valid" });
  }
};