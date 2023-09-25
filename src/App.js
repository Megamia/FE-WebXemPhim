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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}/>
          <Route path="/Hometest" element={<Hometest />}/>
          <Route path="Home" element={<Home/>}/> 
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Error404" element={<Error404 />}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;