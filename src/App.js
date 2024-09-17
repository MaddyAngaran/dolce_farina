import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import About from './components/AboutUs';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='navbar'>
        <h1>Dolce Farina</h1>
          <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Pricing">Pricing</Link>
                <Link to="/AboutUs">About Us</Link>
                <a href="https://www.instagram.com/direct/new/?username=dolcefarina_" target="_blank" rel="noopener noreferrer">Contact</a>
              </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;
