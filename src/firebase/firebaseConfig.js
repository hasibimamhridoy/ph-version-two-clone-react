// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIOTJ37yudN7OBVlH5cpp9QULRy7mBN60",
  authDomain: "programming-hero-f47a8.firebaseapp.com",
  projectId: "programming-hero-f47a8",
  storageBucket: "programming-hero-f47a8.appspot.com",
  messagingSenderId: "605106876374",
  appId: "1:605106876374:web:008d528a47d352e99efe77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app