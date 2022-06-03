import './App.css';
import React from 'react' 
import { useState, useEffect } from 'react';

import DashboardTest from './DashboardTest';
import LoginTest from './LoginTest';
import RegisterTest from './RegisterTest';

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

  // if(!isAuthenticated){ //<-- If the user hasn't been authenticated yet
  //   return <LoginTest setAuth={setAuth}/> || <RegisterTest setAuth={setAuth} />
  // }else{
  //   return <DashboardTest setAuth={setAuth} />
  // }


  return (

    <div className="App">
      <Router>
        <Routes>
            {/* <Route path='/login' element={<LoginTest />}></Route>
            <Route path='/register' element={<RegisterTest />}></Route>
            <Route path='/dashboard' element={<DashboardTest />}></Route> */}

            <Route exact path="/login" element={ !isAuthenticated ? <LoginTest setAuth={setAuth} /> : <Navigate to="/dashboard" />}/>
            <Route exact path="/register" element={ !isAuthenticated ? <RegisterTest setAuth={setAuth} /> : <Navigate to="/login" />}/>
            <Route exact path="/dashboard" element={ isAuthenticated ? <DashboardTest setAuth={setAuth} /> : <Navigate to="/login" />}/>

        </Routes>  
      </Router>


    </div>
  );
}

export default App;
