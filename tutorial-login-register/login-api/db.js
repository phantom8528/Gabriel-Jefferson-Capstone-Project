const {Client} = require('pg');
const jwtGenerator = require('./jwtGenerator')
const client = new Client({
    host: "localhost",
    port: 5432,
    database: "jwttuorial",
    user: 'corcoding'
});

// client.connect();
module.exports = client;

//------------------------------

const register = (req, res) => {
    //1. desctructure req.body to access database columns
    const entry = req.body;

    let insertQuery = `INSERT INTO users (user_name, user_email, user_password)
                        VALUES ('${entry.user_name}', '${entry.user_email}', '${entry.user_password}')`;
    let ifExistsQuery = `SELECT * FROM users where user_email = ${entry.user_email}`;

    client.query(ifExistsQuery, (err, result) => {
        if(result.rowCount !== 0){
            console.log('This user already exists');

        }
    });

    //2. Enrypt the password 
    const saltRounds = 10;
    const salt = bcrypt.salt(saltRounds);
    const bcryptPassword = bcrypt.hash(entry.user_password, salt);

    client.query(insertQuery, (err, result) => {
        if (error) {
            console.error(error.message);
            res.status(500).send("Server Error");

            
        } else {
            
        }
    });
    //5. Generate a jwt token
    const token = jwtGenerator(entry.rows[0].user_id);
    res.json({token});
    


    client.end;

}



