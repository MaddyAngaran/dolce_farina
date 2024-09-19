import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import About from './components/AboutUs';
import AddProducts from './components/AddProducts';
import Cakes from './components/Cakes';
import Cookies from './components/Cookies';
import Others from './components/Others';


import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"></link>
      </head>
    <div className="App">
      <div className="toal-navbar">
      <hr></hr>
      <div className='navbar'>
        <h1>Dolce Farina</h1>
          <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Pricing">Pricing</Link>
                <Link to="/AboutUs">About Us</Link>
                <a href="https://ig.me/m/dolcefarina_" target="_blank" rel="noopener noreferrer">Contact</a>
              </nav>
            
      </div>
      <hr></hr>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/AddProducts" element={<AddProducts/>}/>
        <Route path="/Cakes" element={<Cakes/>}/>
        <Route path="/Cookies" element={<Cookies/>}/>
        <Route path="/Others" element={<Others/>}/>


      </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;
