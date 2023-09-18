import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Footer from './Component/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/Home" element={<Home />} /> 
          <Route path="/Footer" element={<Footer />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;