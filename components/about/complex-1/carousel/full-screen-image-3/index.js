import React from "react";
import styles from "./name-phone-popup.module.scss";
import Image from "next/image";
import close__button from "../../../../../public/static/planning-page/close-button-popup.svg";

export default function Index({ hanlerIsComplexOpen1 }) {
  return (
    <>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div className={styles.offer__inner}>
          <button
              type="button"
              className={styles.offer__button_close}
              onClick={hanlerIsComplexOpen1}
            >
              <span className="text-white text-[6vw]">&#215;</span>
            </button>

            <div className={styles.image__item}>
              <span></span>
            </div>

            <h2 className={styles.offer__title}>Parcare subterană multietajată </h2>
          </div>
        </div>
      </section>
    </>
  );
}
