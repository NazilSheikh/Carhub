// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // THIS FILE BEING ENVLOCAL 
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "carhub-99f4d.firebaseapp.com",
  projectId: "carhub-99f4d",
  storageBucket: "carhub-99f4d.appspot.com",
  messagingSenderId: "762330139419",
  appId: "1:762330139419:web:a13373ec89c6d5981961be",
  measurementId: "G-GTXDN8R8W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// we need to export and initialise the storage
export const storage = getStorage(app);