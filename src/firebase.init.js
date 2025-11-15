// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqWiwAy2QrXFBbz6i1u_jQvNstgk7ZptE",
  authDomain: "auth-51-practice.firebaseapp.com",
  projectId: "auth-51-practice",
  storageBucket: "auth-51-practice.firebasestorage.app",
  messagingSenderId: "281548129484",
  appId: "1:281548129484:web:12ef78d2f0a2d0f4a36e69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);