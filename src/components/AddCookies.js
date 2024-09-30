import React, { useState } from 'react';
import { db, storage, addDoc, collection, ref, uploadBytes, getDownloadURL } from '../firebase'; // Ensure the path to firebase.js is correct

const App = () => {
  // State to hold form data
  const [flavour, setFlavour] = useState('');
  const [photo, setPhoto] = useState(null);
  const [status, setStatus] = useState('');

  // Handle file upload
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
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
      await addDoc(collection(db, "Cookies"), {
        flavour: flavour,
        photo: photoURL,
      });
      setStatus('Data submitted successfully!');
    } catch (error) {
      console.error("Error writing document: ", error);
      setStatus('Failed to submit data. Please try again.');
    }

    // Clear the form
    setFlavour('');
    setPhoto(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Submit a New Cookie</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Flavour:
            <input
              type="text"
              value={flavour}
              onChange={(e) => setFlavour(e.target.value)}
              required
              style={{ padding: '10px', width: '100%' }}
            />
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
