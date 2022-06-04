import './App.css';
import LandingPage from './Components/LandingPage';
import UserSignUpPage from './Components/UserSignUpBlock';
// import AccountManagementPage from './Components/AcccountManagementPage';
import UserDashboard from './Components/UserDashboardComponents/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router } from 'express';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate

} from 'react-router-dom';
// import UserDashboard from './Components/UserDashboardComponents/UserDashboard';
// import ChapterToken from './Components/ChapterToken';


function App() {

  const [isAuthenticated, setIsAuthenticated ] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  const isAuth = async () => {
    try {
      const response = await fetch('http://localhost:5000/is-vertify', {
        method: "GET",
        headers: {token: localStorage.token}
      });
      const parseResponse = await response.json();
      // console.log(parseResponse);
      parseResponse === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

      
    } catch (err) {
      console.log(err.message);
      
    }
  }

  useEffect(() => {
    isAuth();
  }, []);


  // if(!token){ //<-- If the user hasn't been authenticated yet
  //   return <LandingPage setToken={setToken}/>
  // }

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path='/login' element={ !isAuthenticated ?  <LandingPage setAuth={setAuth} /> : <Navigate to="/dashboard" />}></Route>
          <Route exact path='/register' element={  !isAuthenticated ?   <UserSignUpPage setAuth={setAuth} /> : <Navigate to="/login" />}></Route>
          <Route exact path='/dashboard' element={ !isAuthenticated ?   <UserDashboard setAuth={setAuth} /> : <Navigate to="/login" />} ></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;


