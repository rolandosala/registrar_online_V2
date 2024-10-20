// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJCMwbzptdIxF5A0Ex72BpDLi1k8h2Kag",
  authDomain: "authentication-cd5ef.firebaseapp.com",
  projectId: "authentication-cd5ef",
  storageBucket: "authentication-cd5ef.appspot.com",
  messagingSenderId: "804862936957",
  appId: "1:804862936957:web:4f03d1441f2978ab91ee14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export {
  auth,
  db
}