// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYLRomwsjpU_w-Gugsrs1BbW7OsgcAy04",
  authDomain: "agroshop-9fd32.firebaseapp.com",
  projectId: "agroshop-9fd32",
  storageBucket: "agroshop-9fd32.appspot.com",
  messagingSenderId: "800166451871",
  appId: "1:800166451871:web:6d104215489326e6d8e0aa",
  measurementId: "G-T4WKLVM14Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);