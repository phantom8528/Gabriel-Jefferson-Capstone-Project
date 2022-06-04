import React from "react";
// import axios from 'axios';
import LandingPageNav from "./LandingPageComponents/LandingPageNav";
import './UserSignUpBlock.css';
import Footer from "./LandingPageComponents/Footer";
// import { response } from "express";
// import e from "express";
import { useState, useEffect } from 'react';
// import { set } from "express/lib/application";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  
  } from 'react-router-dom';

const UserSignUpPage = ({setAuth}) => {
    
    //1. Assign name, email, and password to the state
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    //2. Destructure the state so that the variables can be used
    const {name, email, password} = inputs;

    //3. Create change handler to keep track of the user's inputs
    const _onChange = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    //4. Create a submit handler to initiate connection with server 
    const _onSubmit = async (event) => {
        event.preventDefault();
        try {

            //Destructure the state to use the variables 
            const body = {name, email, password};

            //make the fetch request 
            const response = await fetch('http://127.0.0.1:5000/register', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();
            localStorage.setItem("token", parseResponse.token);

            setAuth(true);
            
        } catch (err) {
            console.log(err.message);
            
        }
    }




    return(
        <div>
            <LandingPageNav />
            {/* <h1>Component: UserSignUpPage | Parent Component: none</h1> */}
            {/* Sign-Up Page Using Bootstrap */}
            <div className="sign-up-container">

                <div className="row-1">
                    <div id="level-3" className="col-10">
                        <form id="sign-up-box" onSubmit={_onSubmit}>
                        <h1 id="sign-up-page-title">Sign Up</h1>

                                {/* <input id="input-row-1" type="text" className="form-control" placeholder="First name" name="first_name" value={first_name} onChange={this._handleChange}/>
                                <input id="input-row-2" type="text" className="form-control" placeholder="Last name" name="last_name" value={last_name} onChange={this._handleChange}/>
                                <input id="input-row-3" type="text" className="form-control" placeholder="Gender" name="gender" value={gender} onChange={this._handleChange}/> */}

                            <input id="input-row-1" type="text" name="name" placeholder="Please Enter First and Last Name" className="register-input" value={name} onChange={e => _onChange(e)}/>
                            <input id="input-row-2" type="email" name="email" placeholder="Enter Email" className="register-input" value={email} onChange={e => _onChange(e)}/>
                            <input id="input-row-3" type="password" name="password" placeholder="Enter Password" className="register-input" value={password} onChange={e => _onChange(e)}/>   
                            <button id="button-row-9" type="submit" className="btn">Sign Up</button>
                        </form> 
                        <Link to="/">Already a user? Login Here</Link>

                    </div>
                </div>
            </div>


            {/* <Footer /> */}
            
        </div>
    )


}

export default UserSignUpPage;

