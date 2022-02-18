// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAMvSkL_5Aft8y3W4SuaJy5bY4y-PDlHM",
  authDomain: "fir-authentication-1c6f0.firebaseapp.com",
  projectId: "fir-authentication-1c6f0",
  storageBucket: "fir-authentication-1c6f0.appspot.com",
  messagingSenderId: "482752514526",
  appId: "1:482752514526:web:57b725309c8ea1d5fe754f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
