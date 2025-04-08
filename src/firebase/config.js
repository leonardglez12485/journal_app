// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaiX8azAZ0nTQEqYJigqFA0wr0hsIIVL0",
  authDomain: "react-curso-82424.firebaseapp.com",
  projectId: "react-curso-82424",
  storageBucket: "react-curso-82424.firebasestorage.app",
  messagingSenderId: "561117278436",
  appId: "1:561117278436:web:57f4935277e64353c33cf1",
  measurementId: "G-LLTLHBEFWL"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
//const analytics = getAnalytics(app);