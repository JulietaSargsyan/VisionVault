// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzNJyrh57E3nlTJ9Fq_oLJ8cAhOtduq_Q",
  authDomain: "data-collector-for-ai.firebaseapp.com",
  projectId: "data-collector-for-ai",
  storageBucket: "data-collector-for-ai.appspot.com",
  messagingSenderId: "587166206036",
  appId: "1:587166206036:web:53f6fadd29ac4f5700c5c1",
  measurementId: "G-Y7BV2H73P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);