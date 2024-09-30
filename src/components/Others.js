import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../firebase'; // Ensure the path to firebase.js is correct
import '../App.css'; // Import your CSS file for styling

// Function to show the filter menu
function filter_menu() {
  var x = document.getElementById("filter-menu");
  // If the filter menu is hidden, show it
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Function to hide the filter menu
function done_filter() {
  var x = document.getElementById("filter-menu");
  x.style.display = "none";
}

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFlavour, setSelectedFlavour] = useState([]);

  // Get database and fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "Others"));
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filtering function
  const filterProducts = () => {
    return products.filter((product) => {
      const productFlavour = product.flavour || ""; // Get the flavour as a string
  
      const flavourMatch =
        selectedFlavour.length === 0 || selectedFlavour.includes(productFlavour);
  
      console.log(`Product ID: ${product.id}, Flavour Match: ${flavourMatch}, Selected Flavour: ${selectedFlavour}`);
      return flavourMatch;
    });
  };
  

  // Function to handle filter selections
  const handleCheckboxChange = (event, setFilter) => {
    const { value, checked } = event.target;
    setFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  

  return (
    <div>
      {/* Filter menu */}
      <div className="filter title">
        <button className="filter-button" onClick={filter_menu}>Filter</button>
        <h1>Others</h1>
      </div>
      <div className='center-menu'>
        <div id="filter-menu" style={{ display: "none" }} className="filter-menu">
          <div className="filter-options">
            <h3>Filter by Type</h3>
            <label>
              <input
                type="checkbox"
                value="Cream Puff"
                onChange={(e) => handleCheckboxChange(e, setSelectedFlavour)}
              />
              Cream Puff
            </label>
            <label>
              <input
                type="checkbox"
                value="Jar Cake"
                onChange={(e) => handleCheckboxChange(e, setSelectedFlavour)}
              />
              Jar Cakes
            </label>
            <label>
              <input
                type="checkbox"
                value="Smash Cake"
                onChange={(e) => handleCheckboxChange(e, setSelectedFlavour)}
              />
              Smash Cakes
            </label>
            </div>
          <button className="done-button" onClick={done_filter}>Done</button>
        </div>
    </div>

      <div className="Product-list">
        <div className="Photo-album">
          <div className="image-container">
            {/* Display the images */}
          {filterProducts().map((product) => (
              <div key={product.id}>
                {product.photo && <img src={product.photo} alt={product.name} className="product-image" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
