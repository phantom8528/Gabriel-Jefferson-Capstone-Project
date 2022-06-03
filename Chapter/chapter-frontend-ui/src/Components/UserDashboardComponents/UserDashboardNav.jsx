import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "../LandingPage";

// import '/Users/corcoding/Desktop/projects/Gabriel-Jefferson-Capstone-Project/Chapter/chapter-frontend-ui/src/Components/LandingPageComponents/LandingPageNav.css';
// import './LandingPageComponents/LandingPageNav.css';
// import './LandingPageNav.css';
import './UserDashboardNav.css'


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  
  } from 'react-router-dom';


class UserDashboardNav extends React.Component{
    render(){
        return(
            <div>
                <div className="dashboard-nav-container">
                    {/* <h1>Component: UserDashboardNav | ParentComponent: UserDashboard</h1> */}
                    <nav id="dashboard-nav" class="navbar navbar-expand-lg navbar-light">
                        <a id="chapter-brand" class="navbar-brand" href="#">Chapter</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul id="dashboard-nav-link-container" class="navbar-nav mr-auto">
                                <li  class="nav-item active">
                                    <a id="dashboard-nav-link" class="nav-link" href="#"><span class="sr-only">| Manage Account</span></a>
                                </li>
                                <li   class="nav-item">
                                    <a id="dashboard-nav-link" class="nav-link" href="#"> | Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default UserDashboardNav;

