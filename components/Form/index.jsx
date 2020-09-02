import * as firebase from "firebase/app";
import React, { useState } from "react";

import styles from "./styles.css";

const Form = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("user");

  const onSubmit = (event) => {
    event.preventDefault();
    if (message) {
      const date = Date.now();
      let messagesRef = firebase.database().ref("messages");
      let newMessage = messagesRef.push();
      newMessage.set({
        user,
        message,
        date,
      });
      setMessage("");
    }
  };

  return (
    <div className={styles.form}>
      <form action="#" onSubmit={(event) => onSubmit(event)}>
        <label className={styles.label}>
          Представьтесь
          <input
            className={styles.input}
            value={user}
            onChange={(value) => setUser(event.target.value.replace(/\s/g, ""))}
          ></input>
        </label>
        <textarea
          className={styles.textarea}
          value={message}
          onChange={(value) => setMessage(event.target.value)}
        >
          {message}
        </textarea>
        <button className={styles.button}>Отправить</button>
      </form>
    </div>
  );
};
export default Form;
