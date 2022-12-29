import React from "react";
import styles from "./name-phone-popup.module.scss";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import close__button from "../../../../../public/static/planning-page/close-button-popup.svg";

import image__item_1 from "../../../../../public/static/planning-page/complex/items-images/image-1.webp";

export default function Index({ hanlerIsComplexOpen15 }) {
  return (
    <>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div className={styles.offer__inner}>
            <button
              type="button"
              className={styles.offer__button_close}
              onClick={hanlerIsComplexOpen15}
            >
              <Image
                src={close__button}
                height={13}
                width={13}
                alt="close button icon"
              />
            </button>

            <div className={styles.image__item}>
              <span></span>
            </div>

            <h2 className={styles.offer__title}>Piste pentru ciclism</h2>
          </div>
        </div>
      </section>
    </>
  );
}
