import React from "react";
import styles from "./name-phone-popup.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import close__button from "../../../../../public/static/planning-page/close-button-popup.svg";

export default function Index({ hanlerIsComplexOpen1 }) {
  return (
    <>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div className={styles.offer__inner}>
            <button
              type="button"
              className={styles.offer__button_close}
              onClick={hanlerIsComplexOpen1}
            >
              <Image
                src={close__button}
                height={13}
                width={13}
                alt="close button icon"
              />
            </button>

            <motion.div 
            className={styles.image__item}
            initial={{scale:1}}
            whileTap={{scale:2}}
            exit={{scale:1}}
            >
              <span></span>
            </motion.div>

            {/* <h2 className={styles.offer__title}>Spații de joacă</h2> */}
          </div>
        </div>
      </section>
    </>
  );
}
