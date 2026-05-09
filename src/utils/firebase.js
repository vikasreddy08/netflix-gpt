// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9P6r4Q74nzo1e3sjC8552r7Lko42BHg8",
  authDomain: "netflix-gpt-af9c5.firebaseapp.com",
  projectId: "netflix-gpt-af9c5",
  storageBucket: "netflix-gpt-af9c5.firebasestorage.app",
  messagingSenderId: "635035530976",
  appId: "1:635035530976:web:fa1f0370bc3a7dbec04285",
  measurementId: "G-16YFMT2R42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
