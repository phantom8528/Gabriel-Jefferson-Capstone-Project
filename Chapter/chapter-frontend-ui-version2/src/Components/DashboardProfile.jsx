import React from "react";
import { useState, useEffect } from "react";
import './DashboardProfile.css';

const DashboardPage = ({setAuth}) => {

    const [name, setName] = useState();
    const [time, setTime] = useState();
    const [description, setDescription] = useState();
    const [location, setLocation] = useState();

    const _getName = async () => {
        try {
            const response = await fetch('http://localhost:5000/dashboard', {
                method: "GET",
                headers: {token: localStorage.token}
            });

            const parseResponse = await response.json();
            // console.log(parseResponse);
            setName(parseResponse.user_name);
            // setName(parseResponse.description);
            // setName(parseResponse.location);
            console.log(parseResponse);
            
            console.log("Testing 123");

            
        } catch (err) {
            console.error(err.message);
            
        }
    }

    
    const _logOut = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    }

    useEffect(() => {
        _getName();
    }, []);



    return(
        <div>

            {/* Container Level 1 */}
            <div className="dashboard-container">
                <div id="dashboard-welcome-row" className="row-1">
                    <div id="dashboard-welcome-col"  className="col-10">
                        <h1>Dashboard / Profile Page</h1>
                        <h2>Welcome {name}</h2>
                        <button className="btn btn-primary btn-block" type="submit" onClick={e => _logOut(e)}>Logout</button>
                    </div>
                </div>

                <div id="dashboard-input-row"  className="row-2">
                    <div className="col-1"></div>

                    <div id="dashboard-instructions-col"   className="col-4">Instructions Col</div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div id="dashboard-input-col" className="col-4">Input Col</div>

                    <div className="col-1"></div>
                </div>

                <div id="dashboard-output-row"  className="row-3">
                    <div name="pages_in_chapter" id="dashboard-collapsed-story-col"  className="col-6">pages_in_chapter
                    
                        {/* <h3>Time: {time}</h3>
                        <h3>Where it Hurts: {location}</h3>
                        <h3>Details: {description}</h3> */}

                    </div>
                    <div id="dashboard-expanded-detail-col"  className="col-6">Expanded Detail Col</div>
                </div>
            </div>

        </div>
    )
}

export default DashboardPage;