import * as firebase from "firebase/app";
import React, { useState, useEffect, useRef } from "react";

import styles from "./styles.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const messagesRef = firebase.database().ref("messages/").limitToLast(500);
    messagesRef.on("child_added", (data) =>
      addMessageElement(
        data.key,
        data.val().user,
        data.val().message,
        data.val().date
      )
    );
  }, []);

  useEffect(() => {
    messagesContainerRef.current.scroll(
      0,
      messagesContainerRef.current.scrollHeight
    );
  }, [messages]);

  /**
   * @param {Object} date new Date Object
   */
  const dateToPrettyString = (date) =>
    `${String(date.getDate()).padStart(2, 0)}.${String(
      date.getMonth() + 1
    ).padStart(2, 0)}.${date.getFullYear()} ${String(date.getHours()).padStart(
      2,
      0
    )}:${String(date.getMinutes()).padStart(2, 0)}`;

  /**
   * @param {string} key auto-generated key
   * @param {string} user nickname
   * @param {string} message message text
   * @param {number} date timestamp
   */
  const addMessageElement = (key, user, message, date) => {
    const dateToString = dateToPrettyString(new Date(date));
    messages.push({ key, user, message, date: dateToString });
    setMessages([...messages]);
  };

  return (
    <ul className={styles.messages} ref={messagesContainerRef}>
      {messages.map((message) => (
        <li className={styles.message}>
          <div className={styles.message__info}>
            <div className={styles.message__body}>
              <span className={styles.user}>{message.user}</span>
              {message.message}
            </div>
          </div>
          <div className={styles.date}>{message.date}</div>
        </li>
      ))}
    </ul>
  );
};
export default Messages;
