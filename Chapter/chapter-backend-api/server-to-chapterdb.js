//-----------------------------------Connects Chapter Server to the Chapter DB------------------------------------------------

//:::::::::::::Connection to the Database - Approach 1::::::::::::::::::

// const pgp = require('pg-promise')();

// const config = {
//     host: 'localhost', // localhost the same as 127.0.0.1
//     port: 5432,
//     database: 'chapterdb',
//     user: 'corcoding'
// };

// const db = pgp(config); //<-- Connects to the database

//:::::::::::::Connection to the Database - Approach 2::::::::::::::::::
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
// function printUsers() {
//     const user = req.body;
//     client.query = `SELECT * FROM chapter_users`;
//     console.log(user);
// }
// printUsers()
//------------------------------------------------INSERTING a user into a database-----------------------------------------------

const createUser = (req, res) => {
    const user = req.body;
    let insertQuery = `INSERT INTO Chapter_Users (first_name, last_name, gender, email, theme_color, reminder_frequency, pin_number, password)
                        VALUES ('${user.first_name}','${user.last_name}' ,'${user.gender}', '${user.email}','${user.theme_color}','${user.reminder_frequency}','${user.pin_number}','${user.password}')`

    // Create the user
    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
        } else {
            console.log(err.message);
            
        }
    });
    // client.end;
}

//------------------------------------------------Authenticating a user--------------------------------------------------------
//1. take in the users input
//2. select from the database
//4. if not, send them to the user doesn't exist page

const readUser = (req, res) => {
    const user = req.body;
    console.log('USER:', user);
    let readQuery = `SELECT FROM chapter_users WHERE 
                        (email ilike '${user.email}' AND password ilike '${user.password}')`
    client.query(readQuery, (err, result) => {
        if (err) {
            res.send(`Something is wrong: ${err}`)   
        }

        if(result.rowCount > 0){
            console.log('RESULT:', result.rowCount)
            // res.send(result);
            res.send(`
            Login was Sucessful, Result: ${result}
            `);
            //this is where the user would get directed to there user page
        }else{
            res.send(`Message: Wrong email / password combination`)
        }
    })
    client.end;
}

//-------------------------------INSERTING a POST Associated with A User's Id via Pin#-------------------------------------------
const writeAPage = (req, res) => {
    user = req.body;
    writeQuery = `
    INSERT INTO chapter_posts 
        (on_body, scale, description, icon)
    VALUES
        ('${user.on_body}','${user.scale}','${user.description}','${user.icon}');
    `; //<-- Where the writeQuery ENDS

    client.query(writeQuery, (err, result) => {
        if (!err) {
            res.send(`${user.first_name}, You have succssfully made a post`)
            
        } else {
            res.send(`Post was unsuccessful, try again.`);
            
        }

    });
    client.end;
}

//-------------------------------DELETING a POST Associated with A User's Id-------------------------------------------

//-------------------------------UPDATING a POST Associated with A User's Id-------------------------------------------

module.exports = {
    createUser,
    readUser,
    writeAPage
};



