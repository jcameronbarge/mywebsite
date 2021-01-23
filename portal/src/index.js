import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

import App from "./js/components/App.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyDE6NoftOHooYsZAQGbVhIEVF5ONVlie2g",
  authDomain: "mywebsite-6ea5f.firebaseapp.com",
  projectId: "mywebsite-6ea5f",
  storageBucket: "mywebsite-6ea5f.appspot.com",
  messagingSenderId: "139998812593",
  appId: "1:139998812593:web:a9012411ecf3f7d5e74590",
  measurementId: "G-HJWCMZXKW6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

ReactDOM.render(<App />, document.getElementById("root"));
