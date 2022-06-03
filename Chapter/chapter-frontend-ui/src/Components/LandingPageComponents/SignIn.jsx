import React from "react";
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './SignIn.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
    // Redirect
  
  } from 'react-router-dom';
import UserDashboard from "../UserDashboardComponents/UserDashboard";
// import { use } from "express/lib/router";

async function loginUser(credentials) {
    return fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function SignIn({setToken}){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // 1. This will hold all of out login data (i.e. email, passwords)
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         email: props.initialText || ``,
    //         password: props.initialText || ``
    //     }
    // }

    const _handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }


    // _handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // _handleLogin = (event) => {
    //     // let history = useNavigate();
    //     event.preventDefault(); //<-- prevents the page from refreshing
    //     // console.log(event.target)
    //     // console.log(this.state);
    //     axios.post('http://127.0.0.1:5000/', this.state)
    //         .then(response => {
    //             console.log(response)
    //         });
    // }

    return(
        <div className="sign-in-container">
            <div className="sign-in-block">
            <h1 id="sign-in-label">Sign-In Here</h1>
            {/* Bootstrap Version of Sign-In Component Below */}
            <form onSubmit={_handleSubmit}>
            <div className="form-group row" id="sign-in-email">
                {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label> */}
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="form-group row" id="sign-in-password">
                {/* <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label> */}
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>
            </div>
                <div className="form-group row" id="sign-in-button">
                    <div className="col-sm-10">
                        <button type="submit" className="btn" id="sign-in-button-color">Sign in</button>
                    </div>
                </div>
            </form>

            </div>

        </div>
    )
}

SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
  };

export default SignIn;



