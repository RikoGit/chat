// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

import React, { useState, useEffect } from "react";
import styles from "./styles.css";

const Form = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("user");
  const [isValid, setIsValid] = useState(true);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = firebase.database().ref("messages/");
    messagesRef.on("child_added", (data) =>
      addMessageElement(
        data.key,
        data.val().user,
        data.val().message,
        data.val().date
      )
    );
  }, []);

  const addMessageElement = (key, user, message, data) => {
    const newMessages = messages;
    newMessages.push({ key, user, message, data });
    newMessages.map((message) => ({ ...message }));

    setMessages([...newMessages]);
  };

  const validateForm = () => {
    // setIsValid(0);
    // console.log(isValid);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    validateForm();
    // console.log(isValid);
    if (!isValid) return;

    const date = Date.now();
    let messagesRef = firebase.database().ref("messages");
    let newMessage = messagesRef.push();
    newMessage.set({
      user,
      message,
      date,
    });
  };

  return (
    <div>
      <form action="#" onSubmit={(event) => onSubmit(event)}>
        <label>
          Представьтесь
          <input
            value={user}
            onChange={(value) => setUser(event.target.value)}
          ></input>
        </label>
        <textarea
          value={message}
          onChange={(value) => setMessage(event.target.value)}
        >
          {message}
        </textarea>
        <button>Отправить</button>
      </form>
      <div className={styles.messages}>
        {messages.map((message) => (
          <div className={styles.message}>
            {message.user} {message.message} {message.data}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Form;
