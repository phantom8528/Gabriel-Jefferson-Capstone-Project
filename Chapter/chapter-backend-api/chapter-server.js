//---------------------------------------Server for the Chapter Application-------------------------------------------------

//--------------------------------------IMPORTS-------------------------------------------

const res = require('express/lib/response');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser'); //<-replaced cors
const { response } = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const client = require('./server-to-chapterdb');
const { clearLine } = require('readline');
const cors = require('cors');

// const session = require('express-session')
// const flash = require('express-flash');
// require('dotenv').config();
// const passport = require('passport');
// const initializePassport = require('./passportConfig');
// secret = process.env.SECRET;

const hostname = `127.0.0.1`;
const port = 5000;

const app = express();
const server = http.createServer(app);

//--------------------------------------INTERNAL MIDDLEWARE-------------------------------------------

app.use(cors());
app.use(express.json());

// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// );

app.use(function(req, res, next) { //<-- This will help with bypassing cors
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//-----------------------------------------ROUTES----------------------------------------------------

//for AccountManagementPage.jsx (Low Priority)

//for ExpandedStoryPage.jsx (Low Priority)

app.get('/is-vertify', require('./server-to-chapterdb')); //<--verify's that the jwt token is valid when the page is refreshed

// app.use('/', client.readUser); //<-- Logging in to system
app.post('/login', require('./server-to-chapterdb')); //<-- Logging in to system

// app.post('/signup', client.createUser); //<-- Signing up a user 
app.post('/register', require('./server-to-chapterdb')); //<-- Signing up a user 

app.use('/dashboard', require('./server-to-chapterdb'));

//---------------------RUN THE SERVER----------------------------

server.listen(port, hostname, () => {
    console.log('Official Server for Chapter.io');
    console.log(`Server running at http://${hostname}:${port}/`);
    
})