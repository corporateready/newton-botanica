import React from "react";
import styles from "./Populare.module.scss";
import { Slider } from "./slider";
import { SliderMob } from "./slider-mob";

import { LangContext } from "../../../pages/_app";

export default function Populare() {

  const { isToggleLang } = React.useContext(LangContext);

  return (
    <>
      <div className={styles.complex__section}>
        <div className={styles.complex__wrapper}>
          <div className={styles.container}>
            {isToggleLang==="ro" ? <h1 className={styles.complex__title}>
            Cel mai modern complex rezidențial <div className={styles.separator}></div>de la botanica
            <span></span>
            </h1>
            : <h1 className={styles.complex__title}>
            Самый современный жилой комплекс <div className={styles.separator}></div>в секторе Ботаника
            <span></span>
            </h1>}
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                <Slider/>
              </div>
              <div className={styles.complex__grids_mob}>
                <SliderMob />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
