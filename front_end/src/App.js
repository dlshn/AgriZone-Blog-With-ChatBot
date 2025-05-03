import { Navbar } from './components/Navbar';
import React from 'react';
import './App.css';
import Home from './Home';
import { Register } from './components/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        
      </Routes>
    </div>
  );
}

export default App;
