// import res from "express/lib/response";
import React from "react";
import { useState, useEffect } from "react";
import './CreatePage.css'




const CreatePage = () => {

    //1. set up state control
    const [location, setLocation] = useState("");
    const [scale, setScale] = useState("");
    const [description, setDescription] = useState("");//<-- default value of empty string



    //2. set up change handlers to manage the change of state in the input fields
    //NOTE: inline changeHandler: "e => setDescription(e.target.value)"

    //3. set up a submit handler
    const _onSubmit = async (e) => {
        e.preventDefault();
        try {
            
            
            const myHeaders = new Headers(); //<--Allows me to have more than one header for fetch request

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("token", localStorage.token);


            const body = {location, scale, description};
            const response = await fetch("http://127.0.0.1:5000/dashboard/pages", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();
            console.log(parseResponse);



            // console.log(response);
            window.location = '/dashboard'; //<-- Application will automatically refresh once the response data has been sent

        } catch (err) {
            console.error(err.message);
            
        }
    }
    return(
        <div>
                <form onSubmit={_onSubmit} id="write-page-form">

                    <h1 className="text-center mt-5">Write a Page</h1>
                    <input type="text" id="write-page-location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location On Body"/> 
                    <input type="text" id="write-page-scale"  value={scale} onChange={e => setScale(e.target.value)} placeholder="On a Scale from 1 to 9" maxLength={1} /> 
                    {/* <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Explain ..."/>  */}
                    <textarea class="form-control" id="write-page-description" maxLength={255} rows="10" value={description} onChange={e => setDescription(e.target.value)} placeholder="Explain ... (255 characters or less please)"></textarea>
                    <button id="write-button"  className="btn btn-success">Add</button>

                </form>
        </div>
    )
}
export default CreatePage;