import React from "react";

import SignIn from "./LandingPageComponents/SignIn";
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

import axios from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  
  } from 'react-router-dom';


class LandingPage extends React.Component{
    render(){
        return(
            <div className="landing-page-container">
                {/* <h1>Component: LandingPage | ParentComponent: App.js</h1> */}
                <LandingPageNav />

                <div className="row-1">
                    <div className="col-6">
                        <Input />
                    </div>

                    <div className="col-6">
                        <IntroBanner />
                    </div>
                </div>

                <div className="row-2">
                    <div className="col-10">
                        <SignIn />
                    </div>

                </div>


                <div className="row-3">
                    <div className="col-6">
                        <CollapsedStory />
                    </div>

                    <div className="col-6">
                        <ChapterDetailCard />
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
}

export default LandingPage;

