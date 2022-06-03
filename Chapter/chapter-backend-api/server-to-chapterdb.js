/**
 * PURPOSE OF FILE: to hold and export all routes pertaining to the 
 * authorization of existing users 
 * EXPORT TO: test-server.js
----------------------------------------------------------------------------------
-*/
//::::::::::::::::::::::IMPORTS::::::::::::::::::::::::::::::::

const router = require('express').Router();
const bcrypt = require('bcrypt'); 

//--------EXTERNAL MIDDLEWARE IMPORTS----------

//const validateEmail --> from chapter-middle-validate-email.js
const validateEmail = require('./chapter-middle-validateEmail');

//const tokenAuth --> from chapter-middle-token-auth.js
const tokenAuth = require('./chapter-middle-token-auth');

//const generateToken --> from chapter-util-tokeGen.js
const jwtGenerator = require('./chapter-util-tokenGen');

//:::::::::::::Connection to the Database::::::::::::::::::
    const {Client} = require('pg');
    const client = new Client({
        host: "localhost",
        port: 5432,
        database: "chapterdb",
        user: 'corcoding'
    });

    client.connect();

//:::::::::::::CRUD Operations::::::::::::::::::

//------------------------------------------------TESTING TO SEE IF SERVER IS CONNECTED TO DB-----------------------------------------------
// const getUsers = (req, res) => {
//     try {
//         let user = req.body;
//         let getQuery = `SELECT * FROM chapter_users;`
//         // const {rows} = client.query(`SELECT * FROM chapter_users;`);
//         client.query(getQuery, (err, result)=> {
//             if (!err) {
//                 console.log(result)
                
//             } else {
//                 console.log(err.message);
//             }
//             client.end;
//         })
//     } catch (error) {
//         console.log(error.message)
        
//     }
// }
//------------------------------------------------INSERTING a user into a database-----------------------------------------------

// const createUser = (req, res) => {
//     const user = req.body;
//     let insertQuery = `INSERT INTO Chapter_Users (first_name, last_name, gender, email, theme_color, reminder_frequency, pin_number, password)
//                         VALUES ('${user.first_name}','${user.last_name}' ,'${user.gender}', '${user.email}','${user.theme_color}','${user.reminder_frequency}','${user.pin_number}','${user.password}')`
//     client.query(insertQuery, (err, result) => {
//         if (!err) {
//             res.send('Insertion was successful');
//         } else {
//             console.log(err.message);
            
//         }
//     })
//     client.end;
// }
router.post('/register', validateEmail, async (req, res) => {
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

//------------------------------------------------Authenticating a user--------------------------------------------------------

// const readUser = (req, res) => {
//     const user = req.body;
//     // fName = user.first_name;
//     // lName = user.last_name

//     // console.log(`TESTING 123: ${user}`); //<-- returns undefined
//     console.log('USERS email:', user.email); //<-- returns email
//     // console.log('USERS First Name:', user.first_name);
//     // console.log('USERS Last Name:', user.last_name);

//     let readQuery = `SELECT FROM chapter_users WHERE 
//                         (email ilike '${user.email}' AND password ilike '${user.password}');`
//     client.query(readQuery, (err, result) => {
//         if (err) {
//             res.send(`Something is wrong: ${err}`)   
//         }
//         if(result.rowCount > 0){
//             // console.log('RESULT:', JSON.stringify(result));
//             // console.log(`USER: ${user}`);
//             // console.log(`ROW DATA: ${rows}`)
//             // res.send(result);
//             // res.send(`Login was Sucessful, Result: ${result}`);
//             res.send({
//                         token: 'chapterTokenTest123',
//                     });
//         }else{
//             res.send(`Message: Wrong email / password combination`)
//             //this is where the user would get redirected to the login page
//         }
//     })
//     client.end;
// }

router.post('/login', validateEmail, async (req, res) => {
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
router.get('/is-vertify', tokenAuth, async (req, res) => {
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
router.get('/dashboard', tokenAuth, async (req, res) => {
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


// module.exports = {
//     createUser,
//     readUser,
//     getUsers
// };

module.exports = router;