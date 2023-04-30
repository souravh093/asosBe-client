// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdh7tJVcOM018J4Z-oXQehLqUqfhT0JrY",
  authDomain: "asos-authentication.firebaseapp.com",
  projectId: "asos-authentication",
  storageBucket: "asos-authentication.appspot.com",
  messagingSenderId: "371193681821",
  appId: "1:371193681821:web:18498025649ba2b2634174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;