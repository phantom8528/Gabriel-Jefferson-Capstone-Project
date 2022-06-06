import React from "react";
import { useState, useEffect } from "react";
import EditTodos from "./EditTodos";

const ListTodos = () => {

    const [todos, setTodos] = useState([]); //<-- givent a default value of an empty array
    /**
     * NOTE: the empty array above will eventually be filled 
     * with the todos from out database
     */

    const _getTodos = async (e) => {
        try {
            const response = await fetch(" http://127.0.0.1:9000/todos");
            //next, we need to get some data back
            const jsonData = await response.json(); //<-- we need to parse it first b/c we're getting json data
            setTodos(jsonData);

            // console.log(jsonData);
  
        } catch (err) {
            console.error(err.message);
            
        }
    }

    /**
     * NOTE: useEffect - makes a request to our restful api
     * everytime that the page is rendered.
     */

    useEffect(() => {
        _getTodos();
    }, []); //<-- IMPORTANT!!! - the empty array ensures that only one request is made 

    // console.log(todos)
    return(
        <div>
            <h1 className="mt-50">List Todos</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Edit Btn</th>
                        <th scope="col">Delete Btn</th>
                    </tr>
                </thead>
                <tbody>
                    {/* This is where the list of todos will be generated */}
                    {todos.map(todo => (
                        <tr>
                            <th scope="row">{todo.todo_id}</th>
                            <td>{todo.description}</td>
                            <td><EditTodos todo={todo} /></td>
                            <td>Delete Btn</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* 
            For Reference Purposes
            ---------------------------
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                
            */}

        </div>
    )
}
export default ListTodos;