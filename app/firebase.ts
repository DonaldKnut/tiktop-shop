// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzok649GdUUHJAS3IYhKIplxthNc6eg24",
  authDomain: "expense-tracker-ac75e.firebaseapp.com",
  projectId: "expense-tracker-ac75e",
  storageBucket: "expense-tracker-ac75e.appspot.com",
  messagingSenderId: "363489645780",
  appId: "1:363489645780:web:f745b415772c5cf9491741",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
