import React from "react";
import styles from "./styles.module.scss";
import stadion from "../../../../../public/static/planning-page/location/Gradina_2.webp";
import Image from "next/image";

export default function MarkImage8({ setIsOpen8 }) {
  return (
    <span className={styles.loaction__mark_description}>
      <Image src={stadion} layout="fill" priority alt="" />
      <button
        className={styles.loaction__back_btn}
        onClick={() => {
          setIsOpen8(false);
        }}
      >
        înapoi
      </button>
    </span>
  );
}
