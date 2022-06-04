/**
 * PURPOSE OF FILE: to hold and export all routes pertaining to the 
 * authorization of existing users 
 * EXPORT TO: test-server.js
----------------------------------------------------------------------------------
-*/
//::::::::::::::::::::::IMPORTS::::::::::::::::::::::::::::::::
const router = require('express').Router();
// const client = require('./test-db');
const bcrypt = require('bcrypt'); 
const jwtGenerator = require("./test-util-jwtGen");
const validInfo = require('./test-middle-valid-email');
const authorize = require('./test-middle-auth');

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

//--------------Registering a New User-------------------------
router.post('/signup', validInfo, async (req, res) => {
    try {
        //1. destructure the req.body (name, email, password)
        const {name, email, password} = req.body;

        //2. Check to see if the user exists (if exists, throw error)
        const user = await client.query(`SELECT * FROM users WHERE user_email = '${email}'`);

        if (user.rows.length !== 0){
            return res.status(401).send("THIS USER ALREADY EXITS !");
        }
        //3. Decrypt password 
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        //4. Enter the user inside of the database 
        const newUser = await client.query(`INSERT INTO users (user_name, user_email, user_password)
                                            VALUES ('${name}', '${email}', '${bcryptPassword}') RETURNING *`);
        // res.json(newUser.rows[0]);

        // const newUser = await client.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)", [name, email, bcryptPassword]);
        // res.json(newUser.rows[0]);

        //5. Generating a jwtToken to allow access
        const token = jwtGenerator(newUser.rows[0].user_id);
        res.json({token});
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error on your server");
        
    }
});

//--------------New User Logging in-------------------------
router.post('/login', validInfo, async (req, res) => {
    try {
        //1. destructure the req.body
        const {email, password} = req.body;
        console.log(`CREDENTIALS TEST 3 (EMAIL): ${email}`);

        //2. check if the user doesn't exist (if not, return error)
        const user = await client.query(`SELECT * FROM users WHERE user_email = '${email}'`);
        console.log("MARKER 1");
        if(user.rows.length === 0){
            return res.status(401).json("Email / Password is Incorrect");

        }
        console.log("MARKER 2");

        //3. check if incoming password is the same as the database password 
        const validPass = await bcrypt.compare(password, user.rows[0].user_password);
        console.log(validPass);

        console.log("MARKER 3");
        if(!validPass){
            return res.status(401).send("Email / Password is Incorrect");
        }
        console.log("MARKER 4");

        //4. Give user a jwt token 
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({token});
        
    } catch (err) {
        console.error(err.message);
        
    }
});

//---------Continuously verify that the jwt token is valid when ever the application is refreshed--------------
router.get('/is-vertify', authorize, async (req, res) => {
    try {
        console.log("MARKER 5");
        res.json(true); //<-- if the token is valid
        
    } catch (err) {
        console.log("MARKER 6");
        console.error(err.message);
        res.status(501).send("SERVER ERROR");
        
    }
});

//--------------Manages the user's information once logged into their dashboard---------------------



//::::::::::::::::::::EXPORT THE ROUTER:::::::::::::::::::::::::::
module.exports = router;
