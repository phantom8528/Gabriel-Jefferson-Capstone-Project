import React from "react";

const DashboardTest = ({setAuth}) => {
    return(
        <div>
            <h1>This The TEST Dashboard</h1>
            <button onClick={() => setAuth(false)} type="submit">Logout</button>
        </div>
    )
}

export default DashboardTest;