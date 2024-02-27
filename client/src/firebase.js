// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4042a.firebaseapp.com",
  projectId: "mern-blog-4042a",
  storageBucket: "mern-blog-4042a.appspot.com",
  messagingSenderId: "390213208558",
  appId: "1:390213208558:web:7ad9f51eaa3990182da6ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
