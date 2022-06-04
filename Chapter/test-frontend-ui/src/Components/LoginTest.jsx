import React from "react";
import { useState } from "react";
import './LoginTest.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
    Navigate
  
  } from 'react-router-dom';

import RegisterTest from "./RegisterTest";

const LoginTest =  ({setAuth}) => {
    //Keep track of inputs with the useState
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    //destructure the inputs from the useState to be used later on
    const {email, password} = inputs;

    //Track the change in inputs that are entered into the fields
    const onChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    //Initiate connection to server when the button is clicked
    const _onSubmit = async (event) => {
        event.preventDefault(); //<-- Prevents the page from being reset

        try {
            const body = {email, password}
            const response = await fetch ("http://localhost:8080/login", {
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
            <h1>This The TEST Login Page</h1>

            <form className="login-container" onSubmit={_onSubmit}>
                <input type="email" name="email" id="login-email" placeholder="Your Email Address" value={email} onChange={e => onChange(e)}/>
                <input type="password" name="password" id="login-password" placeholder="Your Password" value={password} onChange={e => onChange(e)}/>

                {/* <button onClick={() => setAuth(true)} type="submit" >Authenticate</button> */}
                <button type="submit" class="btn btn-primary">Login</button>


            </form>
            <Link to="/register">Not a user?  Sign Up Here</Link>



        </div>
    )
}

export default LoginTest;