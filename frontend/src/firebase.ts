// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM6cTRdCyMHKZFtwcRxrTA8nHY2ESgIiU",
  authDomain: "rewear-895c4.firebaseapp.com",
  projectId: "rewear-895c4",
  storageBucket: "rewear-895c4.firebasestorage.app",
  messagingSenderId: "76229449141",
  appId: "1:76229449141:web:dec0b4962b2ccf8455b5fc",
  measurementId: "G-MPGT9418F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);