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

client.connect();

//:::::::::::::CRUD Operations::::::::::::::::::


//------------------------------------------------INSERTING a user into a database-----------------------------------------------

const createUser = (req, res) => {
    const user = req.body;
    let insertQuery = `INSERT INTO Chapter_Users (first_name, last_name, gender, email, theme_color, reminder_frequency, pin_number, password)
                        VALUES ('${user.first_name}', '${user.last_name}', '${user.email}', '${user.password}', '${user.gender}', '${user.theme_color}', '${user.reminder_frequency}', '${user.pin_number}', '${user.password}')`
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
}

module.exports = {
    createUser,
    readUser
};



