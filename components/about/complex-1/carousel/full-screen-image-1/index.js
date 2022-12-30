import React from "react";
import styles from "./name-phone-popup.module.scss";

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

            <div 
            className={styles.image__item}
            >
              <span></span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
