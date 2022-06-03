import React from "react";
import { useState } from "react";
import './RegisterTest.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
    Navigate
  
  } from 'react-router-dom';



const RegisterTest =  ({setAuth}) => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
 
    })

    const {name, email, password} = inputs

    const onChange = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value});
    }

    const _onSubmit = async (event) => {
        event.preventDefault(); //<-- Prevents the page from being reset

        try {
            const body = {name, email, password}
            const response = await fetch ("http://localhost:8080/signup", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            const parseResponse = await response.json();
            // console.log(parseResponse);

            /**
             * This next part is where we use localStorage to 
             * store our information so that it can be accessed by the 
             * dashboard component
             */

            localStorage.setItem("token", parseResponse.token)

            // Then we get redirected to our dashboard page

            setAuth(true);

            
        } catch (err) {
            console.error(err.message);
            
        }


    }

    return(
        <div>
            <h1>This The TEST Registration Page</h1>
            <form className="register-container" onSubmit={_onSubmit}>
                <input type="text" name="name" placeholder="Please Enter First and Last Name" className="register-input" value={name} onChange={e => onChange(e)}/>
                <input type="email" name="email" placeholder="Enter Email" className="register-input" value={email} onChange={e => onChange(e)}/>
                <input type="password" name="password" placeholder="Enter Password" className="register-input" value={password} onChange={e => onChange(e)}/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <Link to="/login">Already a user?   Login Here</Link>



        </div>
    )
}

export default RegisterTest;