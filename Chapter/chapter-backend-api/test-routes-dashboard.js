/**
 * PURPOSE OF FILE: to hold and export all routes pertaining to the 
 * display of private user information onto a private dashboard
 * EXPORT TO: test-server.js
----------------------------------------------------------------------------------
-*/

const router = require('express').Router();
// const client = require('./test-routes-auth');
const authorize = require('./test-middle-auth');
const { route } = require('./test-routes-auth');

//::::::::::::::::::::::DATABASE CONNECTION:::::::::::::::::::
const Client = require('pg').Client;

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "chapterdb",
    user: 'corcoding'

});

client.connect();

//::::::::::::::::::::::ROUTES::::::::::::::::::::::::::::::::
router.get('/', authorize, async (req, res) => {
    try {
        
        
        //after being authorized, the user has the payload info
        // res.json(req.user); //<-- Returns the id assciated with the logged in user
        // const user = await client.query(`SELECT * FROM users WHERE user_id = '${req.user}'`); //<-- This returns all the user's information, NOT GOOD
        const user = await client.query(`SELECT user_name FROM users WHERE user_id = '${req.user}'`); //<-- This returns all the user's information, NOT GOOD
        res.json(user.rows[0]);


        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})




module.exports = router;