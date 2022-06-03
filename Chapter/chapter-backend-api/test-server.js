//---------------------------------------Server for the Chapter Application-------------------------------------------------
 const http = require('http');

// const router = express.Router();

const express = require('express');
const bodyParser = require('body-parser'); //<-replaced cors
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;
const hostname = "localhost";
const client = require('./test-dbConfig');
// const { createUser } = require('./test-dbConfig');
const bcrypt = require('bcrypt'); //<-- hashes the password in case application is compromised 
const exp = require('constants');
const cors = require('cors');



//::::::::::::::::::::::MIDDLEWARE::::::::::::::::::::::::::::::::
// app.use(express.json());

// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// );

// app.use(session({
//     secret,
//     resave:true,
//     saveUninitialized:false
// }));
//resave: will save the changes made on the page after every save
//saveUninitialized: save uninitialized objects

app.use(express.json());
app.use(cors());

app.use(function(req, res, next) { //<-- This will help with bypassing cors
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// app.use('/users/login', (req, res) => {
//     res.send({token: 'test123'});
// });


// app.use(app.router) 




//::::::::::::::::::::::ROUTES::::::::::::::::::::::::::::::::

// app.get("/", (req, res) => {
//     res.send("Hello From the Test Server");
// });

// app.get('/users/register', (req, res) =>{
//     res.send('Register');
// });

// // app.post("/users/register", client.createUser);
// app.post('/users/register', client.createUser)

// app.get('/users/login', (req, res) =>{
//     res.send('login');
// });

// app.get('/users/dashboard', (req, res) =>{
//     res.send('Dashboard');
// });

//--------------------06/02/22-----------------------------


// app.get('/', (req, res) => {
//     res.send('Home Page Route');
// })

//::::::::::::::::::::::Register & Login Routes::::::::::::::::::::::::::::

app.post('/signup', require('./test-routes-auth'));
app.post('/login', require('./test-routes-auth'));
app.get('/is-vertify', require('./test-routes-auth'));

//::::::::::::::::::::::Dashboard Routes:::::::::::::::::::::::::::::::::::

app.use('/dashboard', require('./test-routes-dashboard'));


//1. Get all pages and name 

//2. Get a single page

//3. Create a page 




//::::::::::::::::::::::RUN SERVER::::::::::::::::::::::::::::::::
server.listen(port, hostname, () => {
    console.log('TUTORIAL / TEST SERVER');
    console.log(`Server running at http://${hostname}:${port}/`);
});





