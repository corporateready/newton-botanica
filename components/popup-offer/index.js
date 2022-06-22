import Image from "next/image";
import React from "react";
import styles from "./OfferPopUp.module.scss";
import close__button from "../../public/static/planning-page/close-button-popup.svg";

export default function index({setIsOpen}) {
    const hanlerClosePopup = () => {
        setIsOpen(false)
      }
  return (
    <section className={styles.offer__section}>
      <div className={styles.offer__inner}>
        <button 
        type="button"
        className={styles.offer__button_close}
        onClick={hanlerClosePopup}
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
            <br/><span>NEWTON HOUSE GRĂDINA BOTANICĂ</span> PDF
        </h2>
      </div>
    </section>
  );
}
