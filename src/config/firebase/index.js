// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3k1ZsOyYA25Nx9Wzud9GPfC2avoVc8bw",
  authDomain: "devwasihackathon.firebaseapp.com",
  databaseURL: "https://devwasihackathon-default-rtdb.firebaseio.com",
  projectId: "devwasihackathon",
  storageBucket: "devwasihackathon.appspot.com",
  messagingSenderId: "894228325119",
  appId: "1:894228325119:web:aab5fbe67f4133223922ca"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const auth = getAuth();

export { db, auth };