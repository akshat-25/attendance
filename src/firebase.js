import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4FB8N34xrjundkS1_xtupgIvS9xWTxuM",
  authDomain: "att-hkthon.firebaseapp.com",
  projectId: "att-hkthon",
  storageBucket: "att-hkthon.appspot.com",
  messagingSenderId: "780043724800",
  appId: "1:780043724800:web:a26be7ae35614d3f6b10e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
