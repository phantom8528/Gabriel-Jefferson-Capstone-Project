//:::::::::::::::::::::CONNECTION TO CHAPTERDB, TABLE NAME: todos:::::::::::::::::::::::::::::::::::
const {Client} = require('pg');
//NOTE: pg library allows us to connect to db and add dynamic data

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "chapterdb",
    user: 'corcoding'
});

client.connect();

module.exports = client;
//:::::::::::::::::::::CONNECTION TO CHAPTERDB, TABLE NAME: todos:::::::::::::::::::::::::::::::::::


