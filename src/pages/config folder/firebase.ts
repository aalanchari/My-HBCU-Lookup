// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaxNoYoPQyt3MzvlvQBCiVhkdpU-mAqAY",
  authDomain: "tinashe-heart.firebaseapp.com",
  projectId: "tinashe-heart",
  storageBucket: "tinashe-heart.firebasestorage.app",
  messagingSenderId: "148116644290",
  appId: "1:148116644290:web:c56d8172bc677223c1f65b",
  measurementId: "G-T723DW4PTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, analytics, db};
//last left off