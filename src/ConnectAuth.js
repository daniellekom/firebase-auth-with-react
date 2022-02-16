// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXlmjE0IrqDYsf4l7XjZjzW2G7lF-O3vY",
  authDomain: "fir-auth-dk.firebaseapp.com",
  projectId: "fir-auth-dk",
  storageBucket: "fir-auth-dk.appspot.com",
  messagingSenderId: "560701257513",
  appId: "1:560701257513:web:36d436a9b86099bd22e938"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);