import './App.css';
import React from 'react' 
import { useState, useEffect } from 'react';

import RegisterTest from './Components/RegisterTest';
import LoginTest from './Components/LoginTest';
import DashboardTest from './Components/DashboardTest';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  Navigate

} from 'react-router-dom';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); //<-- Starting off, the user is unauthenticated

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);

  }

  const isAuth = async () => {
    try {
      const response = await fetch('http://localhost:8080/is-vertify', {
        method: "GET",
        headers: {token: localStorage.token}
      });
      
      const parseResponse = await response.json();
      // console.log(parseResponse);
      parseResponse === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  
      
    } catch (err) {
      console.error(err.message);
      
    }

  }

  useEffect(() => {
    isAuth();
  });

  return (

    <div className="App">
      {/* <h1>Application Page</h1> */}

      <Router>
        <Routes>

            <Route exact path="/login" element={ !isAuthenticated ? <LoginTest setAuth={setAuth} /> : <Navigate to="/dashboard" />}/>
            <Route exact path="/register" element={ !isAuthenticated ? <RegisterTest setAuth={setAuth} /> : <Navigate to="/login" />}/>
            <Route exact path="/dashboard" element={ isAuthenticated ? <DashboardTest setAuth={setAuth} /> : <Navigate to="/login" />}/>

        </Routes>  
      </Router>
      
    </div>
  );
}

export default App;