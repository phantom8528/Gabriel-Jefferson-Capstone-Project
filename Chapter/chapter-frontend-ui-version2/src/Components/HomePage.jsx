import React from "react";
import './HomePage.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  
  } from 'react-router-dom';
import { useState } from "react";

const HomePage = ({setAuth}) => {

    //keep track of the inputs using useState
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    //destructure the inputs from the useState to be used later on in the application
    const {email, password} = inputs;

    //Handler - for tracking the changes of the inputs
    const _onChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    //Handler - for connecting to the server when the button is pressed 
    const _onSubmit = async (event) => {
        event.preventDefault();

        try {
            const body = {email, password};
            const response = await fetch('http://localhost:5000/login', {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();
            console.log(parseResponse);

            localStorage.setItem("token", parseResponse.token);
            
            setAuth(true);


        } catch (err) {
            console.log(err.message);
            
        }
    }

    return(
        <div>
            {/* <h1>This is the Home Page / Landing Page</h1> */}

        {/* ::::::::::::::::::::::::::Navigation Bar:::::::::::::::::::::::::: */}

            <div className="homepage-container">

                {/* ::::::::::::Row 1: Sign in, Banner:::::::::::: */}
                <div className="row-1">
                    <div className="col-6">Login-Col
                        {/* --------This is where users will sign Up------- */}
                        <div id="homepage-login">
                            {/* Put the Login Form Here */}
                            <h1>Sign In</h1>
                            <form onSubmit={_onSubmit}> 
                                <input type="email" placeholder="Email" id="login-email" name="email" value={email} onChange={e => _onChange(e)} />
                                <input type="password" placeholder="Password" id="login-password" name="password" value={password} onChange={e => _onChange(e)}/>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <Link to="/register">Not a Member, Register Here</Link>
                            

                        </div>
                    </div>
                    <div className="col-6">Intro Banner Col
                    
                    </div>

                </div>
                {/* :::::::::::::::::::::;;Row 2: About Product::::::::::::::::::: */}
                <div className="row-2">
                <div className="col-10">About Product Col</div>
                    
                </div>
                {/* :::::::::::::Row 3: About Developer::::::::::::::::::::::::::: */}
                <div className="row-3">
                    <div className="col-10">About Developer Col</div>

                </div>

                {/* ::::::::::::::::::::::::::Footer:::::::::::::::::::::::::: */}


            </div>



        </div>
    )
}

export default HomePage;