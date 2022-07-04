import React from "react";
import styles from "./Carousel.module.scss";
// import {Carousel} from './carousel'

export default function index() {
  return (
    <>
      <div className={styles.complex__section}>
        <div className={styles.complex__wrapper}>
          <div className={styles.container}>
            <h1 className={styles.complex__title}>
            Cele  mai populare planimetrii
              <span></span>
            </h1>
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                {/* <Carousel handlerOpenDetails={handlerOpenDetails}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
