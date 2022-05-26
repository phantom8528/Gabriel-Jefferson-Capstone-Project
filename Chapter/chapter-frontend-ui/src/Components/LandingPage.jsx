import React from "react";
import SignInPage from "./LandingPageComponents/SignIn";
import LandingPageNav from "./LandingPageComponents/LandingPageNav";
import Input from "./Input";
import Pitch from "./LandingPageComponents/Pitch";
import AboutMe from "./LandingPageComponents/AboutMe";
import Footer from "./LandingPageComponents/Footer";
import UserSignUpPage from "./UserSignUpPage";
import UserDashboardPage from "./UserDashboardPage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  
  } from 'react-router-dom';


class LandingPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Component: LandingPage | ParentComponent: App.js</h1>
                {/* <LandingPageNav />
                <Input /> */}
                <SignInPage />
                {/* <Pitch /> */}
                {/* <Footer /> */}
                {/* --------Everything Below this Line Will Have Routes-------- */}
                {/* <AboutMe /> */}
                <UserSignUpPage />
                {/* <UserDashboardPage /> */}




            </div>
        )
    }
}

export default LandingPage;