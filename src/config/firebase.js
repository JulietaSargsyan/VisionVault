import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);