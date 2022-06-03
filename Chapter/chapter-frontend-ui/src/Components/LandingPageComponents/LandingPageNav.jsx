import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "../LandingPage";
// import '/Users/corcoding/Desktop/projects/Gabriel-Jefferson-Capstone-Project/Chapter/chapter-frontend-ui/src/Components/LandingPageComponents/LandingPageNav.css';
// import './LandingPageComponents/LandingPageNav.css';
import './LandingPageNav.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  
  } from 'react-router-dom';

class LandingPageNav extends React.Component{
    render(){
        return(
            <div>
                <div className="chapter-nav-container">
                {/* <h1>Component: LandingPageNav | ParentComponent: LandingPage</h1> */}

                <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                    <a id="chapter-brand" className="navbar-brand" href="#">Chapter</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul id="chapter-nav-link-container"   className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a id="chapter-nav-link"  className="nav-link" href="#"> About Me | </a>
                            </li>
                            <li className="nav-item">
                                <a id="chapter-nav-link" className="nav-link" href="#">Sign Up |</a>
                            </li>
                            <li className="nav-item">
                                <a id="chapter-nav-link"  className="nav-link" href="#">GitHub |</a>
                            </li>
                        </ul>
                    </div>
                </nav>
     
                </div>

            </div>
        )
    }
}

export default LandingPageNav;

