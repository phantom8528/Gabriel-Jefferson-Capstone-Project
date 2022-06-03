const router = require('express').Router();
const authorize = require('../middleware/authorize');
const client = require('./db');

router.post('/', (req, res) => {
    try {
        const user = await client.query(`
            SELECT * FROM users INNER JOIN page ON users.user_id = page.user_id WHERE users.user_id = ${req.user.id} `);
        //NOTE: LEFT JOIN gathers all the data from the left table, but only the data from the right table that meets the condition 


        
    } catch (err) {
        
    }
})
