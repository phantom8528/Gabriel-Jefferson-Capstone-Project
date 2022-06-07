import React from "react";
import './DashboardNav.css';
import { useState, useEffect } from "react";

const DashboardNav = ({allPages}) => {


    return(
        <div className="user-dashboard-nav-container">
            {/* <h1>Dashboard Nav Placeholder</h1> */}
            <nav class="navbar navbar-expand-lg navbar-light">
                <a id="dashboard-nav-brand"  class="navbar-brand" href="#">Chapter</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul id="dashboard-nav-item-container"  class="navbar-nav">
                        <li class="nav-item active">
                            {/* <a class="nav-link" href="#"> | Logout<span class="sr-only"></span></a> */}
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default DashboardNav;

