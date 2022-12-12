// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCDBGMZIz8pIZOUmAojB88OtCI7feE1IY",
  authDomain: "what-is-sound.firebaseapp.com",
  projectId: "what-is-sound",
  storageBucket: "what-is-sound.appspot.com",
  messagingSenderId: "241450298691",
  appId: "1:241450298691:web:ac9669c574e6948ad7d3f6",
  measurementId: "G-KFN34TCBFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);