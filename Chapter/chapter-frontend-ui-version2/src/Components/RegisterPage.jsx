import React from "react";
import './RegisterPage.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  
  } from 'react-router-dom';
import { useState } from "react";

const RegisterPage = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    const {name, email, password} = inputs

    const _onChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    const _onSubmit = async (event) => {
        event.preventDefault();

        try {
            const body = {name, email, password}
            const response = await fetch('http://localhost:5000/register', {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            const parseResponse = await response.json();
            // console.log(parseResponse);

            localStorage.setItem("token", parseResponse.token);

            setAuth(true);
            
        } catch (err) {
            console.log(err.message);
            
        }
    }

    return(
        
        <div>
            <h1>This is the Registration Page</h1>
            <Link to="/login">Already a Member ? Login Here </Link>
            <div className="register-container">
                <div id="register-row" className="row-1">
                    <div id="register-col" className="col-10">
                        <div className="register-form">
                            {/* The registration form will go here */}
                            <form onSubmit={_onSubmit}>
                                <input type="text" placeholder="Name" id="register-name" name="name" value={name} onChange={e => _onChange(e)}/>
                                <input type="email" placeholder="Email" id="register-email" name="email" value={email} onChange={e => _onChange(e)}/>
                                <input type="password" placeholder="Password" id="register-password" name="password" value={password} onChange={e => _onChange(e)}/>
                                <button type="submit" className="btn btn-primary" id="register-button">Sign Up</button>
                            </form>
                            {/* <Link to="/login">Already a Member ? Login Here </Link> */}
                            {/* The registration form will go here */}


                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default RegisterPage;