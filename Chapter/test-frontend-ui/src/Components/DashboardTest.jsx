import React from "react";
import { useState, useEffect } from "react";

const DashboardTest = ({setAuth}) => {

    const [name, setName] = useState();

    const _getName = async () =>{
        try {
            const response = await fetch('http://localhost:8080/dashboard', {
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
            <h1>This The TEST Dashboard</h1>
            <br />
            <h1>Welcome {name} </h1>
            <button className="btn btn-primary btn-block" type="submit" onClick={e => _logOut(e)}>Logout</button>
            {/* <button onClick={() => setAuth(false)} type="submit">Logout</button> */}
        </div>
    )
}

export default DashboardTest;