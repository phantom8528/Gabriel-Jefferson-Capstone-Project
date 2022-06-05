// import e from "express";
import React from "react";
import { useState, useEffect } from "react";


const EditTodos = ({todo}) => {
    console.log(todo);//<-- testing to see if it works
    const [description, setDescription ] = useState(todo.description);

    //Edit Description Function
    const _updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:9000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            // console.log(response);
            window.location = '/'; //<-- so we can see the changes happen in realtime

            
        } catch (err) {
            console.error(err.message);
            
        }

    }
    // console.log(description);

    return(
        <div>
            {/* <h3>Edit Todo</h3> */}
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
            Edit
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" id={`id${todo.todo_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={e => _updateDescription(e)}></button>
                    </div>
                    <div className="modal-body" value={description}>
                      {/* {description} */}
                      <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={() => setDescription(todo.description)}
                        
                        
                        >Close</button>
                        <button type="button" className="btn btn-primary" 
                            onClick={e => _updateDescription(e)}
                        
                        >Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditTodos;