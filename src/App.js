import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hometest from './Component/Home/Hometest';
import Nav from './Component/Nav/Nav';
// import Footer from './Component/Footer/Footer';
import Login from './Component/User/Login/login';
import Signup from './Component/User/Signup/Signup';
import Error404 from './Component/Error404/Error404';
import Home from './Component/Home/Home';
import Profile from './Component/User/Profile/Profile';
import ExPage from './Component/ExamplePage/ExPage';
import Hacking from './Component/Hacking/Hacking';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Nav" element={<Nav/>}/> 
          <Route path="/Hometest" element={<Hometest />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Error404" element={<Error404 />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/ExPage" element={<ExPage/>}/> 
          <Route path="/Hacking" element={<Hacking/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
