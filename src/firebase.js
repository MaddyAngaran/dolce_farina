// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import{ getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPYar0dY-tSrgOhr6LqA8wWOh0meZs-HE",
  authDomain: "dolce-farina.firebaseapp.com",
  projectId: "dolce-farina",
  storageBucket: "dolce-farina.appspot.com",
  messagingSenderId: "589359093223",
  appId: "1:589359093223:web:4c0bfde5af669247015942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, getDocs, storage, addDoc, collection, ref, uploadBytes, getDownloadURL };