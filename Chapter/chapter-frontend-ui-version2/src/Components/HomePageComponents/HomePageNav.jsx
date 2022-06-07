import React from "react";
import './HomePageNav.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  
  } from 'react-router-dom';


const HomePageNav = () => {
    return(
        <div className="hompage-nav-container">
            {/* <h1>Home Page Navigation Bar Placeholder</h1> */}
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a id="homepage-nav-brand"  class="navbar-brand" href="/">Chapter</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul id="homepage-nav-item-container"  class="navbar-nav">
                        <li class="nav-item-1">
                        <a id="homepage-register-link" class="nav-link " aria-current="page" href="/register">
                            Register
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default HomePageNav