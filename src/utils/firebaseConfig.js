// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { FIREBASE_API_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "movieflix-gpt-b1364.firebaseapp.com",
  projectId: "movieflix-gpt-b1364",
  storageBucket: "movieflix-gpt-b1364.appspot.com",
  messagingSenderId: "638141141506",
  appId: "1:638141141506:web:3d39994eecd7e150db8d1b",
  measurementId: "G-42YB07NTDS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
