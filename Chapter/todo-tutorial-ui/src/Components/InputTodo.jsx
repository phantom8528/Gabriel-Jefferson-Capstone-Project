import React from "react";
import { useState, useEffect } from "react";
import EditTodos from "./EditTodos";



const InputTodo = () => {
    //1. set up state control
    const [description, setDescription] = useState("");//<-- default value of empty string


    //2. set up change handlers to manage the change of state in the input fields
    //NOTE: inline changeHandler: "e => setDescription(e.target.value)"

    //3. set up a submit handler
    const _onSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://127.0.0.1:9000/todos", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            // console.log(response);
            window.location = '/'; //<-- Application will automatically refresh once the response data has been sent

        } catch (err) {
            console.error(err.message);
            
        }
    }

    return(
    
        <div>
            <h1 className="text-center mt-5">Pern Todo List</h1>
                <form onSubmit={_onSubmit}>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)}/> 
                    <button className="btn btn-success">Add</button>
                </form>
        </div>
    )
}
export default InputTodo;