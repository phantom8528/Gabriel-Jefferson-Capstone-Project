// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import HomePage from './Components/HomePage';
import RegisterPage from './Components/RegisterPage';
import DashboardPage from './Components/DashboardProfile';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate

} from 'react-router-dom';

function App() {
  //1. Assign authentication to the state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //2. Custom function to manage authorization to certain routes
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  //3.Function to manage GET request for token authentication
  const isAuth = async () => {
    try {
      const response = await fetch('http://localhost:5000/is-vertify', {
        method: "GET",
        headers: {token: localStorage.token}
      });

      const parseResponse = await response.json();
      parseResponse === true ? setIsAuthenticated(true) : setIsAuthenticated(false);


      
    } catch (err) {
      console.log(err.message);
      
    }
  }

  useEffect(() => {
    isAuth();
  });


  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/login" element={ !isAuthenticated ? <HomePage setAuth={setAuth} /> : <Navigate to="/dashboard" />}/>
            <Route exact path="/register" element={ !isAuthenticated ? <RegisterPage setAuth={setAuth} /> : <Navigate to="/login" />}/>
            <Route exact path="/dashboard" element={ isAuthenticated ? <DashboardPage setAuth={setAuth} /> : <Navigate to="/login" />}/>


        </Routes>
      </Router>


    </div>
  );
}

export default App;
