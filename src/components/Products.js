import React from 'react';
import '../App.css';
import cake from '../photos/Cake.png';
import cookie from '../photos/Cookie.png';
import other from '../photos/Tirimisu.png';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();

  // Function to navigate to the Cakes page
  function cakeClick() {
    navigate('/Cakes');
  }

  // Function to navigate to the Cookies page
  function cookieClick() {
    navigate('/Cookies');
  }

  // Function to navigate to the Others page
  function otherClick() {
    navigate('/Others');
  }

  return (
    <div className="App">
      <header>
        <h1 className='title'>
          Our Products
        </h1>
          {/* Button options for product page selection */}
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