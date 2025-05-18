import { Navbar } from './components/Navbar';
import React from 'react';
import './App.css';
import Home from './Home';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import Register from './components/Register';
import {Article} from './components/Article';
import { FullArticle } from './components/FullArticle';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateArticle" element={<CreateArticle />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Article/:id" element={<FullArticle />} /> 
      </Routes>
      
    </div>
  );
}

export default App;
