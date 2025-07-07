// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxu6Z3PGQQOZ9BySHKJiD3fFYkKpRqFGQ",
  authDomain: "timepokemon-eea95.firebaseapp.com",
  projectId: "timepokemon-eea95",
  storageBucket: "timepokemon-eea95.firebasestorage.app",
  messagingSenderId: "244209788267",
  appId: "1:244209788267:web:9c56c2bd93816d7204982e",
  measurementId: "G-7XRV62VYVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, get, child };