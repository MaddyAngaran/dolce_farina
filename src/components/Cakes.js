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
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);

  // Get database and fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "Cakes"));
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
      const productColors = Array.isArray(product.colours) ? product.colours : [];
      const productStyles = Array.isArray(product.styles) ? product.styles : [];
  
      const colorMatch =
        selectedColors.length === 0 || productColors.some((colours) => selectedColors.includes(colours));
  
      const occasionMatch =
        selectedOccasions.length === 0 || selectedOccasions.includes(product.occasion);
  
      const styleMatch =
        selectedStyles.length === 0 || productStyles.some((styles) => selectedStyles.includes(styles));


      return colorMatch && occasionMatch && styleMatch;
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
        <h1>Cakes</h1>
      </div>
      <div className='center-menu'>
        <div id="filter-menu" style={{ display: "none" }} className="filter-menu">
          <div className="filter-options">
            <h3>Filter by Color</h3>
            <label>
              <input
                type="checkbox"
                value="White"
                onChange={(e) => handleCheckboxChange(e, setSelectedColors)}
              />
              White
            </label>
            <label>
              <input
                type="checkbox"
                value="Red"
                onChange={(e) => handleCheckboxChange(e, setSelectedColors)}
              />
              Red
            </label>
            <label>
              <input
                type="checkbox"
                value="Blue"
                onChange={(e) => handleCheckboxChange(e, setSelectedColors)}
              />
              Blue
            </label>
            <label>
              <input
                type="checkbox"
                value="Pink"
                onChange={(e) => handleCheckboxChange(e, setSelectedColors)}
              />
              Pink
            </label>
            <label>
              <input
                type="checkbox"
                value="Yellow"
                onChange={(e) => handleCheckboxChange(e, setSelectedColors)}
              />
              Yellow
            </label>
            <label>
              <input
                type="checkbox"
                value="Orange"
                onChange={(e) => handleCheckboxChange(e, setSelectedColors)}
              />
              Orange
            </label>

            <h3>Filter by Occasion</h3>
            <label>
              <input
                type="checkbox"
                value="Birthday"
                onChange={(e) => handleCheckboxChange(e, setSelectedOccasions)}
              />
              Birthday
            </label>
            <label>
              <input
                type="checkbox"
                value="Wedding"
                onChange={(e) => handleCheckboxChange(e, setSelectedOccasions)}
              />
              Wedding
            </label>
            <label>
              <input
                type="checkbox"
                value="Engagement"
                onChange={(e) => handleCheckboxChange(e, setSelectedOccasions)}
              />
              Engagement
            </label>
            <label>
              <input
                type="checkbox"
                value="Baby"
                onChange={(e) => handleCheckboxChange(e, setSelectedOccasions)}
              />
              Baby Shower
            </label>
            <label>
              <input
                type="checkbox"
                value="Graduation"
                onChange={(e) => handleCheckboxChange(e, setSelectedOccasions)}
              />
              Graduation
            </label>

            <h3>Filter by Style</h3>
            <label>
              <input
                type="checkbox"
                value="Classic"
                onChange={(e) => handleCheckboxChange(e, setSelectedStyles)}
              />
              Classic
            </label>
            <label>
              <input
                type="checkbox"
                value="Textured"
                onChange={(e) => handleCheckboxChange(e, setSelectedStyles)}
              />
              Textured
            </label>
            <label>
              <input
                type="checkbox"
                value="Vintage"
                onChange={(e) => handleCheckboxChange(e, setSelectedStyles)}
              />
              Vintage
            </label>
            <label>
              <input
                type="checkbox"
                value="Add-ons"
                onChange={(e) => handleCheckboxChange(e, setSelectedStyles)}
              />
              Add-ons
            </label>
            <label>
              <input
                type="checkbox"
                value="Floral"
                onChange={(e) => handleCheckboxChange(e, setSelectedStyles)}
              />
              Floral
            </label>
            <label>
              <input
                type="checkbox"
                value="Masculine"
                onChange={(e) => handleCheckboxChange(e, setSelectedStyles)}
              />
              Masculine
            </label>
          </div>
          <button className="done-button" onClick={done_filter}>Done</button>
        </div>
      </div>

      <div className="Product-list">
        <div className="Photo-album">
          <div className="image-container">
            {/* Display the filtered products */}
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
