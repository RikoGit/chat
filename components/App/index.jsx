// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
import "firebase/database";
//import "firebase/storage";

import React, { useState } from "react";

import Form from "../Form/index.jsx";
import styles from "./styles.css";

const firebaseConfig = {
  apiKey: "AIzaSyCjje2ZRa-mVzj6JhBBDl2FyRuqOIIFK2o",
  authDomain: "onlinechatter-b11d9.firebaseapp.com",
  databaseURL: "https://onlinechatter-b11d9.firebaseio.com",
  projectId: "onlinechatter-b11d9",
  storageBucket: "onlinechatter-b11d9.appspot.com",
  messagingSenderId: "275205764024",
  appId: "1:275205764024:web:008075c0631f25ee21554d",
};

firebase.initializeApp(firebaseConfig);

const App = () => (
  <div>
    <Form />
  </div>
);

export default App;
