/**
 * PURPOSE OF FILE: Middleware that makes sure that the user has a valid jwt token.
 * EXPORT TO: test-routes-auth.js
 ---------------------------------------------------------------------
 */

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