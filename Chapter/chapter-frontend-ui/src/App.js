import './App.css';
import LandingPage from './Components/LandingPage';
import UserSignUpPage from './Components/UserSignUpBlock';
import AccountManagementPage from './Components/AcccountManagementPage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router } from 'express';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <UserSignUpPage /> */}
      {/* <AccountManagementPage /> */}



    </div>
  );
}

export default App;

