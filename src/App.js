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
import Payment from './Component/Payment/Payment';
import Paypal from './Component/Payment/Paypal';
import Slider from './Component/Home/Slider10/Slider10';
import Detail from './Component/Detail/Detail';
import Righter from './Component/Header&Footer/Righter/Righter';
import Slider1 from './Component/Home/Slider1/Slider1';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          {/* <Route path="/Nav" element={<Nav/>}/>  */}
          <Route path="/Hometest" element={<Hometest />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Error404" element={<Error404 />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/ExPage" element={<ExPage/>}/> 
          <Route path="/Hacking" element={<Hacking/>}/>
          <Route path="/Slider" element={<Slider/>}/>
          <Route path="/Righter" element={<Righter/>}/>
          <Route path="/Slider1" element={<Righter/>}/>
          <Route path="/detail/:id" render={(props) => <Detail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
