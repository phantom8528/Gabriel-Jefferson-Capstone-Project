import './App.css';
import LandingPage from './Components/LandingPage';
import UserSignUpPage from './Components/UserSignUpBlock';
import AccountManagementPage from './Components/AcccountManagementPage';
import UserDashboard from './Components/UserDashboardComponents/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router } from 'express';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from 'react-router-dom';
// import UserDashboard from './Components/UserDashboardComponents/UserDashboard';
import ChapterToken from './Components/ChapterToken';


function App() {

  const {token, setToken} = ChapterToken();

  if(!token){ //<-- If the user hasn't been authenticated yet
    return <LandingPage setToken={setToken}/>
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/signup' element={<UserSignUpPage />}></Route>
          <Route path='/users/dashboard' element={<UserDashboard />} ></Route>
          <Route path='/users/dashboard/AccountManagement' element={<AccountManagementPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

