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
  apiKey: ${{secrets.FIREBASE_API}},
  authDomain: ${{secrets.FIREBASE_AUTHDOMAIN}},
  projectId: ${{secrets.FIREBASE_PROJECTID}},
  storageBucket: ${{secrets.FIREBASE_STORAGE_BUCKET}},
  messagingSenderId: ${{secrets.FIREBASE_MESSAGINGID}},
  appId: ${{secrets.FIREBASE_APPID}}
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, getDocs, storage, addDoc, collection, ref, uploadBytes, getDownloadURL };
