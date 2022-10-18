// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChS8Kc4BpLlgm4WmDvZH3y87X_5RI0tCw",
  authDomain: "fake--fullstack.firebaseapp.com",
  projectId: "fake--fullstack",
  storageBucket: "fake--fullstack.appspot.com",
  messagingSenderId: "859021588491",
  appId: "1:859021588491:web:532dd3e6806e93afeb6f0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;