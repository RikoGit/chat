import * as firebase from "firebase/app";
import "firebase/database";
import React, { useState } from "react";

import Messages from "../Messages/index.jsx";
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
  <div className={styles.root}>
    <Messages />
    <Form />
  </div>
);

export default App;
