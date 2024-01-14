// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getMessaging } from "firebase/messaging";

import { signInWithEmailAndPassword } from "firebase/auth";

import { cloudMessaging } from './cloudMessaging.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0AaLjVqtzXqXLuaUrP1vzxYOMLqJoga0",
  authDomain: "simplewebportfolio-2de11.firebaseapp.com",
  projectId: "simplewebportfolio-2de11",
  storageBucket: "simplewebportfolio-2de11.appspot.com",
  messagingSenderId: "820820317427",
  appId: "1:820820317427:web:730d8ace04ab6798201386",
  measurementId: "G-QMVZSGZRS8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const realtime = getDatabase(app);
const messaging = getMessaging(app);
const cloudMessagingObj = new cloudMessaging(messaging);

// Reference to the login form
const loginForm = document.getElementById('loginForm');

// Add an event listener for the form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Successfully logged in:', user);

            // Redirect to MainDashboard.html or perform other actions
            window.location.href = 'MainDashboard.html';
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);
            console.log('Error Here')
            // Display error to the user (you can update your UI accordingly)
        });
});
