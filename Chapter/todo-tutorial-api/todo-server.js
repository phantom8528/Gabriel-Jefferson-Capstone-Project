
//:::::::::::::::::::::IMPORTS:::::::::::::::::::::::::::::::::::
const express = require('express');
const cors = require('cors');
const http = require('http');
const client = require('./todo-db'); //<-- connection to database 
//:::::::::::::::::::::INGREDIENTS FOR SERVER::::::::::::::::::::::::
const hostname = `127.0.0.1`;
const port = 9000;
const app = express();
const server = http.createServer(app);
//:::::::::::::::::::::INTERNAL MIDDLEWARE:::::::::::::::::::::::::::::
app.use(cors());
app.use(express.json()); //<-- Allows to get requests from req.body so we can use json data
//:::::::::::::::::::::ROUTES:::::::::::::::::::::::::::::::::::::::::::
//.1 Create a todo (page)
app.post('/todos', async (req, res) => {
    // res.send("Create a Todo (Page)");

    try {
        //Goal: We need to get data from the client side

        console.log("This is req.body: ", req.body);
        const {description} = req.body;
        const newTodo = await client.query(`INSERT INTO todos (description) VALUES('${description}') RETURNING *`); //<-- taking in user input from the client side 
        //NOTE: "RETURNING * " means that your returning back the data your sending to the database
        res.json(newTodo.rows);

    } catch (err) {
        console.log(err.message);
        
    }
});

//NOTE: async - provides tools for making fetch requests much easier

//2. Get all todos (page)
app.get('/todos', async (req, res) => {
    try {

        const allTodos = await client.query(`SELECT * FROM todos;`);
        res.json(allTodos.rows);
        
    } catch (err) {
        console.log(err.message);
        
    }
})

//3. Get a specfic todo based on id;
app.get('/todos/:id', async (req, res) => {
    try {
        console.log(req.params)
        //NOTE: params allows us to target a todo based on id
        const { id } = req.params;
        const oneTodo = await client.query(`SELECT * FROM todos WHERE todo_id = '${id}';`);

        res.json(oneTodo.rows[0]);

        
    } catch (err) {
        console.log(err.message);
        
    }
})

//4. Delete a todo (page)
app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        // const {description} = req.body;
        const deleteTodo = await client.query(`DELETE FROM todos WHERE todo_id = '${id}'`);
        res.json("Deletion Was Successful");
        
    } catch (err) {
        console.log(err.message);
        
    }
})

//5. Update a todo (page)
app.put('/todos/:id', async (req, res) => {
    try {
        const {id } = req.params;
        const {description} = req.body;

        const upDateTodo = await client.query(`UPDATE todos SET description = '${description}' WHERE todo_id = '${id}'`);
        res.json("Update was successful");
        
    } catch (err) {
        console.log("----PUT ERROR, todo-server.js, line 91----")
        console.error("Error Message: ",err.message);
        
    }
})



//:::::::::::::::::::::INITIATE SERVER::::::::::::::::::::::::::::::::::
server.listen(port, hostname, () => {
    console.log('Tutorial Server for PERN Stack ToDo Tutorial');
    console.log(`Server running at http://${hostname}:${port}/`);
    
});

