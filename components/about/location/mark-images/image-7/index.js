import React from "react";
import styles from "./styles.module.scss";
import stadion from "../../../../../public/static/planning-page/location/gr_botanica.webp";
import Image from "next/image";

export default function MarkImage7({ setIsOpen7 }) {
  return (
    <span className={styles.loaction__mark_description}>
      <Image src={stadion} layout="fill" priority alt="" />
      <button
        className={styles.loaction__back_btn}
        onClick={() => {
          setIsOpen7(false);
        }}
      >
        înnapoi
      </button>
    </span>
  );
}
