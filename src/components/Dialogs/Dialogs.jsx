import React from "react";
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
  return (
    <div className={styles.dialogsWrapper}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog}>
          Costa
        </div>
        <div className={styles.dialog + " " + styles.active}>
          Darya
        </div>
        <div className={styles.dialog}>
          Diana
        </div>
        <div className={styles.dialog}>
          Yuli
        </div>
        <div className={styles.dialog}>
          Natasha
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi, what are you doing today?</div>
        <div className={styles.message}>How Are you?</div>
        <div className={styles.message}>Yo!</div>
      </div>
    </div>

  );
}

export default Dialogs;