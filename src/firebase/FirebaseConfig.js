// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfpL5ZMlIOW2QWdgrw93IZzw3SK7Tx408",
  authDomain: "ecommerce-shoes-website.firebaseapp.com",
  projectId: "ecommerce-shoes-website",
  storageBucket: "ecommerce-shoes-website.firebasestorage.app",
  messagingSenderId: "372982615181",
  appId: "1:372982615181:web:64f3959896ec18b5e5a6c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
