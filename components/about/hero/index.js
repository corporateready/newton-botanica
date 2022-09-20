import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import hero__bg from "../../../public/static/planning-page/Group_2678.webp";
import hero__bg_mobile from "../../../public/static/planning-page/bg-groupe-mobile.png";

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
        <div className={styles.hero__bg}>
          <Image
            src={hero__bg}
            height={751}
            width={1170}
            objectFit="cover"
            priority
            alt="home background"
          />
        </div>
        <div className={styles.hero__bg_mobile}>
          <Image
            src={hero__bg_mobile}
            height={751}
            width={1170}
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
              SOLICITĂ <span className={styles.separotor__hide}></span> PREZENTAREA PDF
            </button>
            <button
              className={styles.button__planning}
              onClick={hanlerIsCallOpenPopup}
            >
            rezrervă timpul pentru a fi telefonat
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
