import React from "react";
import UserDashboardNav from "./UserDashboardNav";
import Footer from "../LandingPageComponents/Footer";
import './UserDashboard.css';
import Input from "../Input";
import CollapsedStory from "../CollapsedStory";
import ChapterDetailCard from "../ChapterDetailCard";





const UserDashboard = () => {
    return(
        <div className="dashboard-container">
            {/* <h1>This is the User's Dashboard </h1>
            <h2>Welcome ...</h2> */}
            <UserDashboardNav />
            <div id="dashboard-row-1" className="row-1">
                <div id="dashboard-welcome-component"  className="col-6">

                    <h1 id="dashboard-welcome-label-1">Welcome</h1>
                    <h2 id="dashboard-welcome-label-2">Let's Get Started</h2>
                    <h2 id="dashboard-welcome-label-2">Please Read Instructions Below ....</h2>


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