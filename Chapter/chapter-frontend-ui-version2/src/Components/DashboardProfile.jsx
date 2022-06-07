import React from "react";
import { useState, useEffect } from "react";
import './DashboardProfile.css';
import DashboardNav from "./DashboardProfileComponents/DashboardNav";

//---from /DashboardProfileComponents/---
import CreatePage from "./DashboardProfileComponents/CreatePage";
import ListPages from "./DashboardProfileComponents/ListPages";

const DashboardPage = ({setAuth}) => {

    const [name, setName] = useState();
    const [allPages, setAllPages] = useState([]);

    // const [time, setTime] = useState();
    // const [description, setDescription] = useState();
    // const [location, setLocation] = useState();

    const _getPages = async () => {
        try {
            // const body = {name}
            const response = await fetch('http://localhost:5000/dashboard', {
                method: "GET",
                headers: {token: localStorage.token},
            });

            const parseResponse = await response.json();
            // console.log(parseResponse);
            // setName(parseResponse.user_name);
            // setName(parseResponse.description);
            // setName(parseResponse.location);
            console.log("Testing 123 BEFORE");
            console.log(parseResponse);
            console.log("Testing 123 AFTER");
            // console.log("TESTING - NAME OF USER: ", parseResponse[0].user_name);
            setName(parseResponse[0].user_name);
            setAllPages(parseResponse);

            
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
        _getPages();
    }, []);



    return(
        <div>

            {/* Container Level 1 */}
            <DashboardNav allPages={allPages} />
            <div className="dashboard-container">
                {/* <div id="dashboard-welcome-row" className="row-1">
                    <div id="dashboard-welcome-col"  className="col-10">
                        <h1>Dashboard / Profile Page</h1>
                        <h2>Welcome {name}</h2>
                        <button className="btn btn-primary btn-block" type="submit" onClick={e => _logOut(e)}>Logout</button>
                    </div>
                </div> */}

                <div id="dashboard-welcome-instructions-row"  className="row-2">
                    {/* <div className="col-1"></div> */}
                    <div id="dashboard-welcome-col"   className="col-6">
                        <div id="dashboard-welcome-logout-box">
                            <h3>Welcome</h3>
                            <h1>{name}</h1>
                            <h2>Let's get started</h2>
                            <br />
                            <h3>Please read instructions to the right, if this is your first time</h3>
                            <button id="dashboard-logout-btn" className="btn btn-block" type="submit" onClick={e => _logOut(e)}>Logout</button>
                        </div>

                    </div>
                    {/* <div className="col-1"></div>
                    <div className="col-1"></div> */}
                    <div id="dashboard-instructions-col" className="col-6">
                        {/* <CreatePage /> */}
                        <div id="dashboard-instructions-box">
                            <h1>How it Works ...</h1>
                            <h4>________________________________</h4>

                            <h4>1. Location - Where you're feeling</h4>
                            <h4>or not hurting</h4>
                            <h4>________________________________</h4>
                            <h4>2. Scale from 1 to 9</h4>
                            <h5>(1 is good, 9  is not so good)</h5>

                            <h4>________________________________</h4>
                            <h4>3. Give a detailed explanation</h4>
                        </div>
                    </div>
                    {/* <div className="col-1"></div> */}
                </div>

                <div id="dashboard-output-row"  className="row-3">
                    <div name="pages_in_chapter" id="dashboard-create-page-col"  className="col-6">
                        {/* <div className="detail-card-layer-1">
                            <div id="detail-card-layer-2">

                            </div>
                        </div> */}
                        <CreatePage />

                    </div>
                    <div id="dashboard-expanded-detail-col"  className="col-6">

                    <ListPages allPages={allPages} />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashboardPage;