// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDukrpENqMLgmJJ5iX1mYqnnuzdfDbG2RE",
  authDomain: "portfolio-admin-93884.firebaseapp.com",
  projectId: "portfolio-admin-93884",
  storageBucket: "portfolio-admin-93884.firebasestorage.app",
  messagingSenderId: "81113676765",
  appId: "1:81113676765:web:4b8ca327b0812a60a99434",
  measurementId: "G-1XHZ2WED1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);