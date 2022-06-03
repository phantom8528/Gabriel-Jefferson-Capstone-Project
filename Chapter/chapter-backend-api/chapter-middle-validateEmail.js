/**
 * PURPOSE OF FILE: Middleware to check whether or not the email is valid
 * EXPORT TO: test-routes-auth.js
--------------------------------------------------------------------
 */

module.exports = (req, res, next) => {
    const { email, name, password } = req.body;
    console.log(`CREDENTIALS TEST 1 (EMAIL): ${email}`);
    //1. Checks the users email against a predefined pattern in regex
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
    //2. Makes sure that that the email field isn't empty
    if (req.path === "/register") {
      console.log(!email.length);
      if (![email, name, password].every(Boolean)) { //<-- makes sure the email field isn't empty
        // return res.json("Missing Credentials");
        console.log("MARKER 12");
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) { //<-- makes sure the email is valid
        return res.status(401).json("Invalid Email");
      }

    } else if (req.path === "/login") {
      if (![email, password].every(Boolean)) { //<-- makes sure the email field isn't empty
        console.log("MARKER 13");
        console.log(`CREDENTIALS TEST 2 (EMAIL): ${email}`);
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        console.log("MARKER 14");
        return res.json("Invalid Email");
      }
    }
  
    next(); //<-- once everything is okay, it'll continue with the routes
  };

  //![email, password].every(Boolean)
