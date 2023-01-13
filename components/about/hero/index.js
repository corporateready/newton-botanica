import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

import HeroBG from "./image-bg";

export default function Index({
  setIsPDFOpen,
  setIsCallRezervePopUp,
  isToggleLang,
}) {
  const hanlerIsPDFOpenPopup = () => {
    setIsPDFOpen(true);
  };

  const hanlerIsCallOpenPopup = () => {
    setIsCallRezervePopUp(true);
  };

  return (
    <>
      <div className={styles.hero__section}>
        <HeroBG />

        <div className={styles.hero__bg_mobile}></div>

        <article className={styles.hero__inner}>
          {isToggleLang === "ro" ? (
            <h1 className={styles.hero__title}>
              ALEGE UN REFUGIU URBAN<span className={styles.separotor}></span>{" "}
              MAI APROAPE DE NATURĂ
              <span className={styles.separotor__hide}></span> ALEGE
              <span className={styles.separotor}></span>
              <span className={styles.hero__text_decor}>
                {" "}
                NEWTON HOUSE GRĂDINA BOTANICĂ
              </span>
            </h1>
          ) : (
            <h1 className={styles.hero__title}>
              Выбирай уединенное городское пространство
              <span className={styles.separotor}></span> ближе к природе
              <span className={styles.separotor__hide}></span> ВЫБИРАЙ
              <span className={styles.separotor}></span>
              <span className={styles.hero__text_decor}>
                {" "}
                NEWTON HOUSE GRĂDINA BOTANICĂ
              </span>
            </h1>
          )}
          <div className={styles.hero__buttons}>
            {isToggleLang === "ro" ? (
              <button
                className={styles.button__about}
                onClick={hanlerIsPDFOpenPopup}
              >
                SOLICITĂ <p className={styles.separator__text}></p> PREZENTAREA
                PDF
              </button>
            ) : (
              <button
                className={styles.button__about}
                onClick={hanlerIsPDFOpenPopup}
              >
                Запросить <p className={styles.separator__text}></p> презентацию
                в PDF
              </button>
            )}

            {isToggleLang==="ro"
            ? <button
              className={styles.button__planning}
              onClick={hanlerIsCallOpenPopup}
            >
              rezervă timpul pentru <p className={styles.separator__text}></p>a
              fi telefonat
            </button>
            : <button
            className={styles.button__planning}
            onClick={hanlerIsCallOpenPopup}
          >
            Зарезервировать <p className={styles.separator__text}></p> время звонка
          </button>}
          </div>
        </article>
      </div>
    </>
  );
}
