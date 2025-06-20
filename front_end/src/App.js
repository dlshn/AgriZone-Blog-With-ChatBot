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
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Media from './components/Media'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateArticle" element={<CreateArticle />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Article/:id" element={<FullArticle />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Media" element={<Media />} />


      </Routes>
    <Footer />
      
    </div>
  );
}

export default App;
