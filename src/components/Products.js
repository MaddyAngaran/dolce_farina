import React from 'react';
import '../App.css';
import cake from '../photos/Cake.png';
import cookie from '../photos/Cookie.png';
import other from '../photos/Tirimisu.png';

function cakeClick() {
  window.location.href = "/Cakes";
}

function cookieClick() {
  window.location.href = "/Cookies";
}

function otherClick() {
  window.location.href = "/Others";
}

function Products() {
  return (
    <div className="App">
      <header>
        <h1>
          Our Products
        </h1>
        <div className="Options">
          <button onClick={cakeClick}>Cakes
            <img src={cake} alt="cake" />
          </button>
          <button onClick={cookieClick}>Cookies
            <img src={cookie} alt="cookie" />
          </button>
          <button onClick={otherClick}>Others
            <img src={other} alt="others" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Products;