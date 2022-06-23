import Image from "next/image";
import React from "react";
import styles from "./OfferPopUp.module.scss";
import close__button from "../../public/static/planning-page/close-button-popup.svg";

export default function index({ setIsPDFOpen }) {
  const hanlerClosePDFPopup = () => {
    setIsPDFOpen(false);
  };
  return (
    <section className={styles.offer__section}>
      <div className={styles.offer__inner}>
        <button
          type="button"
          className={styles.offer__button_close}
          onClick={hanlerClosePDFPopup}
        >
          <Image
            src={close__button}
            height={24}
            width={24}
            alt="close button icon"
          />
        </button>
        <h2 className={styles.offer__title}>
          Solicită prezentarea
          <br />
          <span>NEWTON HOUSE GRĂDINA BOTANICĂ</span> PDF
        </h2>
        <form className={styles.offer__form}>
          <input type="email" placeholder="Adresa de email" />
          <input type="text" placeholder="Numărul de telefon" />
        </form>
        <button type="button" className={styles.button__sending}>
          Solicită prezentarea
        </button>
      </div>
    </section>
  );
}
