//---------------------------------------Server for the Chapter Application-------------------------------------------------
const res = require('express/lib/response');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser'); //<-replaced cors
const { response } = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const client = require('./server-to-chapterdb');
const { clearLine } = require('readline');
const session = require('express-session')
const flash = require('express-flash');
require('dotenv').config();
const passport = require('passport');

const initializePassport = require('./passportConfig');


secret = process.env.SECRET;

const hostname = `127.0.0.1`;
const port = 5000;

const app = express();
const server = http.createServer(app);

//--------------------------------------MIDDLEWARE-------------------------------------------

// app.use(cors());
// app.use(express.json());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(function(req, res, next) { //<-- This will help with bypassing cors
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// app.use(session({
//     secret: secret,
//     resave: false, 
//     saveUninitialized: false //<-- We don't want to save session details
// }));

// app.use(flash());

// app.use(passport.initialize);
// app.use(passport.session());


//---------------------TESTING TO MAKE SURE THE SERVER IS UP AND RUNNING----------------------------

//for LandingPage.jsx
app.get('/', (req, res) => {
    res.send('Landing Page (SEE LandingPage.jsx)');
});

//for AboutMe.jsx
app.get('/about-me', (req, res) => {
    res.send('About Me Page (SEE AboutMe.jsx)');
});

//for UserSignUpPage.jsx
app.get('/register', (req, res) => {
    res.send('Registration Page (SEE UserSignUpPage.jsx)');
});

//for UserDashboardPage.jsx
app.get('/dashboard', (req, res) => {
    res.send('User Dashboard Page (SEE UserDashboardPage.jsx)');
});

//for AccountManagementPage.jsx
app.get('/account', (req, res) => {
    res.send('Change Account Page (SEE AccountManagementPage.jsx)');
});

//for ExpandedStoryPage.jsx
app.get('/expanded', (req, res) => {
    res.send('Expanded Story Page (SEE UserDashboardPage.jsx)');
});

app.get('/get-users', client.getUsers);
//---------------------TESTING TO MAKE SURE THE SERVER IS UP AND RUNNING----------------------------
//route (sign-in page)

app.use('/', client.readUser); //<-- Logging in to system
app.post('/signup', client.createUser); //<-- Signing up a user 

// app.post('/', passport.authenticate('local', {
//     successRedirect: '/users/dashboard',
//     failureRedirect: '/',
//     failureFlash: true
// }))

//route for Landing page (SEE LandingPage.jsx)
// app.post('/', client.readUser);
//sign-up page route
// app.post('/signup', client.createUser);

// app.get('/homepage', (req, res) => {
//     res.send('This is the Homepage');
// });

//content page (of a given show clicked on by the user)
// app.get('/content', (req, res) => {
//     res.send('This is the Content');
// });

//favorites page (elective, save for after project has been completed)

server.listen(port, hostname, () => {
    console.log('Official Server for Chapter.io');
    console.log(`Server running at http://${hostname}:${port}/`);
    
})