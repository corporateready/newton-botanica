import Image from "next/image";
import React from "react";
import styles from "./OfferPopUp.module.scss";
import close__button from "../../public/static/planning-page/close-button-popup.svg";

export default function index({ setIsPhoneOfferOpen }) {
  const hanlerClosePhonePopup = () => {
    setIsPhoneOfferOpen(false);
  };
  return (
    <section className={styles.offer__section}>
      <div className={styles.offer__inner}>
        <button
          type="button"
          className={styles.offer__button_close}
          onClick={hanlerClosePhonePopup}
        >
          <Image
            src={close__button}
            height={24}
            width={24}
            alt="close button icon"
          />
        </button>
        <h2 className={styles.offer__title}>
        Rezervă timpul pentru
        <br/>a fi telefonat:
        </h2>
        <form className={styles.offer__form}>
          <select placeholder="Ora">
            <option>8:00</option>
            <option>8:30</option>
            <option>9:00</option>
          </select>
          {/* <input type="datetime-local" placeholder="Ora" /> */}
          <input type="text" placeholder="Diferența de timp" />
        </form>
        <button type="button" className={styles.button__sending}>
        Transmite
        </button>
      </div>
    </section>
  );
}
