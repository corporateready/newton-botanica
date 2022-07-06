import React from "react";
import styles from "./SliderSnake.module.scss";
// import {Gallery} from './slider'

export function Index() {
  return (
    <>
      <div className={styles.slider__section}>
        <div className={styles.slider__wrapper}>
          <h1 className={styles.slider__title}>
            Galerie
            <span></span>
          </h1>
          <div className={styles.slider__inner}>
            {/* <Gallery /> */}
          </div>
        </div>
      </div>
    </>
  );
}
