//---------------------------------------Server for the Chapter Application-------------------------------------------------
// const res = require('express/lib/response');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser'); //<-replaced cors
// const client = require('./server-to-db');
const { response } = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const client = require('./db')

// const router = express.Router();

const hostname = `127.0.0.1`;
const port = 5000;
const app = express();
const server = http.createServer(app);

//middleware
app.use(cors());
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

//---------------------TESTING TO MAKE SURE THE SERVER IS UP AND RUNNING----------------------------



//---------------------TESTING TO MAKE SURE THE SERVER IS UP AND RUNNING----------------------------

//ROUTES//

//register and login routes






server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    
})



