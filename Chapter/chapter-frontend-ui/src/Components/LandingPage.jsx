import React from "react";
// import SignIn from "./LandingPageComponents/SignIn";
import LandingPageNav from "./LandingPageComponents/LandingPageNav";
import Input from "./Input";
// import Pitch from "./LandingPageComponents/Pitch";
import AboutMe from "./LandingPageComponents/AboutMe";
import Footer from "./LandingPageComponents/Footer";
// import UserSignUpPage from "./UserSignUpPage";
import CollapsedStory from "./CollapsedStory";
import IntroBanner from "./IntroBanner";
import SMSPanel from "./SMSPanel";
import TextBanner from "./TextBanner";
import ChapterDetailCard from "./ChapterDetailCard";
import './LandingPage.css'
// import ChapterToken from './Components/ChapterToken';

import { useState } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  
  } from 'react-router-dom';

const LandingPage = ({setAuth}) => {

    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    //1. Keep track of user inputs using state control
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    //2. destructure the inputs from the useState
    const {email, password} = inputs;

    //3. Track the changes of the inputs that are inputted into the fields
    const onChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });

    }

    //4. Submission handler
    const _onSubmit =  async (event) => {
        event.preventDefault();

        try {
            const body = {email, password};
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();
            // console.log(parseResponse);

            localStorage.setItem("token", parseResponse.token)

            setAuth(true);
            
        } catch (err) {
            console.error(err.message);
            
        }
    }

    return(
        <div className="landing-page-container">
            {/* <h1>Component: LandingPage | ParentComponent: App.js</h1> */}
            <LandingPageNav />
            <div className="row-1">
                <div className="col-6">
                    {/* <h1>This is Where Users Will Sign In</h1> */}
                    <div className="sign-in-container">
                        <div className="sign-in-block">
                        <h1 id="sign-in-label">Sign-In Here</h1>
                        {/* Bootstrap Version of Sign-In Component Below */}
                        <form onSubmit={_onSubmit}>
                        <div className="form-group row" id="sign-in-email">
                            {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label> */}
                            <div className="col-sm-10">
                                <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={e => onChange(e)}/>
                            </div>
                        </div>
                        <div className="form-group row" id="sign-in-password">
                            {/* <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label> */}
                                <div className="col-sm-10">
                                    <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={e => onChange(e)}/>
                                </div>
                        </div>
                            <div className="form-group row" id="sign-in-button">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn" id="sign-in-button-color">Sign in</button>
                                </div>
                            </div>
                        </form>
                        <Link to="/register">Not a user?  Sign Up Here</Link>
                        </div>

                    </div>

                </div>

                <div className="col-6">
                    <IntroBanner />
                </div>
            </div>

            <div className="row-2">
                <div className="col-10">
                    {/* <SignIn /> */}
                </div>

            </div>


            <div className="row-3">
                <div className="col-6">
                    Delete This Row
                    {/* <CollapsedStory /> */}
                </div>

                <div className="col-6">
                    Delete This Row
                    {/* <ChapterDetailCard /> */}
                </div>
            </div>

            <div className="row-4">

                <div className="col-6">
                    <TextBanner />
                </div>

                <div className="col-6">
                    <SMSPanel />
                </div>
            </div>


            <div className="row-5">
                <div className="col-10">
                    <AboutMe />
                </div>
            </div>

            <div className="row-6">
                <div className="col-10">
                    <Footer />
                </div>
            </div>

            {/* --------Everything Below this Line Will Have Routes (are other pages)-------- */}
            {/* <UserSignUpPage /> */}
        </div>
    )
}

// LandingPage.propTypes = {
//     setToken: PropTypes.func.isRequired
// };


export default LandingPage;

