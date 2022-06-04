import React from "react";
import UserDashboardNav from "./UserDashboardNav";
import Footer from "../LandingPageComponents/Footer";
import './UserDashboard.css';
import Input from "../Input";
import CollapsedStory from "../CollapsedStory";
import ChapterDetailCard from "../ChapterDetailCard";
import { useState, useEffect } from "react";


const UserDashboard = ({setAuth}) => {

    //1. Assign the user's name to the state
    const [name, setName] = useState("");


    //2. Retrieve the name of the user from the backend to be used on the frontend
    const _getName = async () => {
        // event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/dashboard', {
                method: "GET",
                headers: {token: localStorage.token}
            });

            const parseResponse = await response.json();
            // console.log(parseResponse);
            setName(parseResponse.user_name);


            
        } catch (err) {
            console.error(err.message);
            
        }
    }

    //3. Logout of the user account via terminating the token in the backend
    const _logOut = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    }

    //4. So that we can refresh the page while inside of out account
    useEffect(() => {_getName();}, [name]);

    // useEffect(() => {....}, []) ;


    return(
        <div className="dashboard-container">
            {/* <h1>This is the User's Dashboard </h1>
            <h2>Welcome ...</h2> */}
            <UserDashboardNav />
            <div id="dashboard-row-1" className="row-1">
                <div id="dashboard-welcome-component"  className="col-6">

                    <h1 id="dashboard-welcome-label-1">Welcome</h1>
                    <h2 id="dashboard-welcome-label-2">{name}</h2>
                    <h2 id="dashboard-welcome-label-2">Let's Get Started</h2>
                    <h2 id="dashboard-welcome-label-2">Please Read Instructions Below ....</h2>
                    <button className="btn btn-primary btn-block" type="submit" onClick={e => _logOut(e)}>Logout</button>

                </div>

                <div id="dashboard-input-component"  className="col-6">
                    <Input />
                </div>


            </div>
            <div id="dashboard-row-2" className="row-1">
                <div id="dashboard-story-component" className="col-6">
                    <CollapsedStory />
                
                </div>
                <div id="dashboard-detail-component" className="col-6">
                    <ChapterDetailCard />
                </div>
            </div>
            <Footer />


        </div>
    )
}

export default UserDashboard;