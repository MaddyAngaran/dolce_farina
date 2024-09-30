import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import About from './components/AboutUs';
import AddCakes from './components/AddCakes';
import AddCookies from './components/AddCookies';
import AddOthers from './components/AddOthers';
import Cakes from './components/Cakes';
import Cookies from './components/Cookies';
import Others from './components/Others';


import { Link } from 'react-router-dom';

function go_home(){
  window.location.href = '/';
}

function App() {
  return (
    <BrowserRouter>
        <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <div className="App">
        <div className="toal-navbar">
          <hr></hr>
          <div className='navbar'>
            <h1 onClick={go_home}>Dolce Farina</h1>
              <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/Products">Products</Link>
                    <Link to="/Pricing">Pricing</Link>
                    {/* <Link to="/AboutUs">About Us</Link> */}
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
          <Route path="/AddCakess" element={<AddCakes/>}/>
          <Route path="/AddCookies" element={<AddCookies/>}/>
          <Route path="/AddOthers" element={<AddOthers/>}/>
          <Route path="/Cakes" element={<Cakes/>}/>
          <Route path="/Cookies" element={<Cookies/>}/>
          <Route path="/Others" element={<Others/>}/>


        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
