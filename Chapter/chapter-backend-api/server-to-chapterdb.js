//-----------------------------------Connects Chapter Server to the Chapter DB------------------------------------------------


// const pgp = require('pg-promise')();

// const config = {
//     host: 'localhost', // localhost the same as 127.0.0.1
//     port: 5432,
//     database: 'miniNetflixdb',
//     user: 'corcoding'
// };

// const db = pgp(config); //<-- Connects to the database

//:::::::::::::Connection to the Database::::::::::::::::::
    const {Client} = require('pg');
    const client = new Client({
        host: "localhost",
        port: 5432,
        database: "chapterdb",
        user: 'corcoding'
    });

    // client.connect();

//:::::::::::::CRUD Operations::::::::::::::::::

//------------------------------------------------TESTING TO SEE IF SERVER IS CONNECTED TO DB-----------------------------------------------
const getUsers = (req, res) => {
    try {
        let user = req.body;
        let getQuery = `SELECT * FROM chapter_users;`
        // const {rows} = client.query(`SELECT * FROM chapter_users;`);
        client.query(getQuery, (err, result)=> {
            if (!err) {
                console.log(result)
                
            } else {
                console.log(err.message);
            }
            client.end;
        })
    } catch (error) {
        console.log(error.message)
        
    }
}


//------------------------------------------------INSERTING a user into a database-----------------------------------------------

const createUser = (req, res) => {
    const user = req.body;
    let insertQuery = `INSERT INTO Chapter_Users (first_name, last_name, gender, email, theme_color, reminder_frequency, pin_number, password)
                        VALUES ('${user.first_name}','${user.last_name}' ,'${user.gender}', '${user.email}','${user.theme_color}','${user.reminder_frequency}','${user.pin_number}','${user.password}')`
    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
        } else {
            console.log(err.message);
            
        }
    })
    client.end;
}

//------------------------------------------------Authenticating a user--------------------------------------------------------
//1. take in the users input
//2. select from the database
//4. if not, send them to the user doesn't exist page

const readUser = (req, res) => {
    const user = req.body;
    // fName = user.first_name;
    // lName = user.last_name

    // console.log(`TESTING 123: ${user}`); //<-- returns undefined
    console.log('USERS email:', user.email); //<-- returns email
    // console.log('USERS First Name:', user.first_name);
    // console.log('USERS Last Name:', user.last_name);

    let readQuery = `SELECT FROM chapter_users WHERE 
                        (email ilike '${user.email}' AND password ilike '${user.password}');`
    client.query(readQuery, (err, result) => {
        if (err) {
            res.send(`Something is wrong: ${err}`)   
        }
        if(result.rowCount > 0){
            // console.log('RESULT:', JSON.stringify(result));
            // console.log(`USER: ${user}`);
            // console.log(`ROW DATA: ${rows}`)
            // res.send(result);
            // res.send(`Login was Sucessful, Result: ${result}`);
            res.send({
                        token: 'chapterTokenTest123',
                    });
        }else{
            res.send(`Message: Wrong email / password combination`)
            //this is where the user would get redirected to the login page
        }
    })
    client.end;
}

//---------------------Loading a User's Info to the page once They're logged in------------------------

const loadUser = (req, res) => {
    //1. Database information is destructured from the req.body
    const user = req.body;

    //2. SQL for requesting all of the data from "chapter_posts" table related to a specific user
    let loadQuery = ``;

    //3. query is sent to the front end
    client.query(loadQuery, (err, result) => {
        //trycatch
    });
}

module.exports = {
    createUser,
    readUser,
    getUsers
};