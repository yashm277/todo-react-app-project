// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXVmBAMFTY4d20q5VxsjzZ7lN0_upi_Jk",
  authDomain: "todo-93276.firebaseapp.com",
  projectId: "todo-93276",
  storageBucket: "todo-93276.appspot.com",
  messagingSenderId: "671791155975",
  appId: "1:671791155975:web:e5bb9cf3adcbb236ec93a2",
  measurementId: "G-KFRF7E03T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export default database