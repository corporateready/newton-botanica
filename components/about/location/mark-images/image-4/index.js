import React from "react";
import styles from "./styles.module.scss";

import { LangContext } from "../../../../../pages/_app";

export default function MarkImage4({ setIsOpen4 }) {
  const { isToggleLang } = React.useContext(LangContext);

  return (
    <span className={styles.loaction__mark_description}>
      <span></span>
      <button
        className={styles.loaction__back_btn}
        onClick={() => {
          setIsOpen4(false);
        }}
      >
        {
          isToggleLang === 'ro' ? "înapoi" : "назад"
        }
      </button>
    </span>
  );
}
