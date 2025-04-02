// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE4v4xykY36mmVyIRkA0ggeCW9w-VTH8g",
  authDomain: "depth-4th-web-study.firebaseapp.com",
  projectId: "depth-4th-web-study",
  storageBucket: "depth-4th-web-study.firebasestorage.app",
  messagingSenderId: "929351343945",
  appId: "1:929351343945:web:3261562fac0a505f834498",
  measurementId: "G-RB8Y3S5525",
  databaseURL: "https://depth-4th-web-study-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);

export { app, database, firestore };
