// require('dotenv').config();
// // const { json } = require('express/lib/response');
// const {Client} = require('pg');
// const client = new Client({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USER
// });

// client.connect();

// const isProduction = process.env.NODE_ENV === "production"; //<-- Used to track whether or not our app is in production

// //---------------CRUD (CREATE, READ, UPDATE, DELETE) Operation for "test-server.js"---------------
// //POST - Creating a User
// const createUser = (req, res) => {
//     // const user = JSON.stringify(req.body);
//     const user = req.body; //<-- ???????????
//     // const {name, email, password} = req.body;
//     let insertQuery = `INSERT INTO users 
//                             (name, email, password)
//                         VALUES 
//                             ('${user.name}','${user.email}','${user.password}');`;

//     //--TESTING CONNECTION WITH FRONTEND--
//     console.log(`
//     This is Your Name: ${user.name},

//     This is your Email: ${user.email},

//     This is your Password: ${user.password}
//     `);

//     // Create the user
//     client.query(insertQuery, (err, result) => {
//         if(!err) {
//             res.send('Insertion was successful');
//         } else {
//             console.log(err.message);
//         }
//         //Error Checking 
//         // let errors = [] //<-- This will be used for our form validation

//         // if(!user.name || !user.email || !user.password){
//         //     errors.push({message: "Please Enter All Fields"});
//         //  }
    
//         // if(user.password.length < 6){
//         //     errors.push({message: "Password should be at least 6 characters long"});
//         // }
//     });

//     client.end;
// }
// // createUser();

// //POST - Authenticating a User 

// //READ - Loading all information associated with that user to their dashboard

// module.exports = { createUser };

// module.exports = client;

