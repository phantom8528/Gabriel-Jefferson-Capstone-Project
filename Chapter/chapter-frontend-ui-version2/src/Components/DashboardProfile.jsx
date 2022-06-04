import React from "react";
import { useState, useEffect } from "react";

const DashboardPage = ({setAuth}) => {

    const [name, setName] = useState();

    const _getName = async () => {
        try {
            const response = await fetch('http://localhost:5000/dashboard', {
                method: "GET",
                headers: {token: localStorage.token}
            });

            const parseResponse = await response.json();
            console.log(parseResponse);
            setName(parseResponse.user_name);
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
            <h1>Dashboard / Profile Page</h1>
            <h2>Welcome {name}</h2>
            <br />
            <br />
            <button className="btn btn-primary btn-block" type="submit" onClick={e => _logOut(e)}>Logout</button>
        </div>
    )
}

export default DashboardPage;