import React, { useState } from 'react';
import { db, storage, addDoc, collection, ref, uploadBytes, getDownloadURL } from '../firebase'; // Ensure the path to firebase.js is correct

const App = () => {
  // State to hold form data
  const [occasion, setOccasion] = useState('');
  const [styles, setStyles] = useState(['']);
  const [photo, setPhoto] = useState(null);
  const [colours, setColours] = useState(['']);
  const [status, setStatus] = useState('');

  // Handle file upload
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  // Handle dynamic style input change
  const handleStyleChange = (index, value) => {
    const newStyles = [...styles];
    newStyles[index] = value;
    setStyles(newStyles);
  };

  // Add a new style input field
  const addStyleField = () => {
    setStyles([...styles, '']);
  };

  // Handle dynamic color input change
  const handleColourChange = (index, value) => {
    const newColours = [...colours];
    newColours[index] = value;
    setColours(newColours);
  };

  // Add a new color input field
  const addColourField = () => {
    setColours([...colours, '']);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting data...');

    try {
      // Upload photo to Firebase Storage
      let photoURL = '';
      if (photo) {
        const photoRef = ref(storage, `photos/${photo.name}`);
        const snapshot = await uploadBytes(photoRef, photo);
        photoURL = await getDownloadURL(snapshot.ref);
      }

      // Add a new document to the "products" collection
      await addDoc(collection(db, "Cakes"), {
        occasion: occasion,
        styles: styles,
        colours: colours,
        photo: photoURL,
      });
      setStatus('Data submitted successfully!');
    } catch (error) {
      console.error("Error writing document: ", error);
      setStatus('Failed to submit data. Please try again.');
    }

    // Clear the form
    setOccasion('');
    setStyles(['']);
    setColours(['']);
    setPhoto(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Submit a New Product</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Occasion:
            <input
              type="text"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
              style={{ padding: '10px', width: '100%' }}
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Styles:
            {styles.map((style, index) => (
              <div key={index} style={{ marginBottom: '5px' }}>
                <input
                  type="text"
                  value={style}
                  onChange={(e) => handleStyleChange(index, e.target.value)}
                  required
                  style={{ padding: '10px', width: '100%' }}
                />
              </div>
            ))}
            <button type="button" onClick={addStyleField} style={{ padding: '10px', marginTop: '10px' }}>
              Add Style
            </button>
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Colours:
            {colours.map((colour, index) => (
              <div key={index} style={{ marginBottom: '5px' }}>
                <input
                  type="text"
                  value={colour}
                  onChange={(e) => handleColourChange(index, e.target.value)}
                  required
                  style={{ padding: '10px', width: '100%' }}
                />
              </div>
            ))}
            <button type="button" onClick={addColourField} style={{ padding: '10px', marginTop: '10px' }}>
              Add Colour
            </button>
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Photo:
            <input
              type="file"
              onChange={handlePhotoChange}
              required
              style={{ padding: '10px', width: '100%' }}
            />
          </label>
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>
      {status && <p style={{ marginTop: '20px' }}>{status}</p>}
    </div>
  );
};

export default App;
