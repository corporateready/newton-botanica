import React from "react";
import styles from "./styles.module.scss";
import stadion from "../../../../../public/static/planning-page/location/gradinite.webp";
import Image from "next/image";

import { LangContext } from "../../../../../pages/_app";

export default function MarkImage6({ setIsOpen6 }) {
  const { isToggleLang } = React.useContext(LangContext);

  return (
    <span className={styles.loaction__mark_description}>
      <Image src={stadion} layout="fill" priority alt="" />
      <button
        className={styles.loaction__back_btn}
        onClick={() => {
          setIsOpen6(false);
        }}
      >
         {
          isToggleLang === 'ro' ? "înapoi" : "назад"
        }
      </button>
    </span>
  );
}
