import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

import hero__bg_mobile from "../../../public/static/planning-page/NHGB_mobile_ml_resize_x2.webp";
import HeroBG from "./image-bg"

export default function Index({ setIsPDFOpen, setIsCallRezervePopUp }) {
  
  const hanlerIsPDFOpenPopup = () => {
    setIsPDFOpen(true);
  };

  const hanlerIsCallOpenPopup = () => {
    setIsCallRezervePopUp(true);
  };

  return (
    <>
      <div className={styles.hero__section}>
        <HeroBG/>
        <div className={styles.hero__bg_mobile}>
          <Image
            src={hero__bg_mobile}
            height={751}
            width={570}
            objectFit="cover"
            priority
            alt="home background"
          />
        </div>
        <article className={styles.hero__inner}>
          <h1 className={styles.hero__title}>
            ALEGE UN REFUGIU URBAN<span className={styles.separotor}></span> MAI
            APROAPE DE NATURĂ,
            <span className={styles.separotor__hide}></span> ALEGE
            <span className={styles.separotor}></span>
            <span className={styles.hero__text_decor}> NEWTON HOUSE GRĂDINA BOTANICĂ</span>
          </h1>
          <div className={styles.hero__buttons}>
            <button
              className={styles.button__about}
              onClick={hanlerIsPDFOpenPopup}
            >
              SOLICITĂ PREZENTAREA PDF
            </button>
            <button
              className={styles.button__planning}
              onClick={hanlerIsCallOpenPopup}
            >
            rezervă timpul pentru a fi telefonat
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
