import React from "react";
import styles from "./name-phone-popup.module.scss";
import { motion } from "framer-motion";

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
              <span className="text-white text-[6vw]">&#215;</span>
            </button>

            <motion.div 
            className={styles.image__item}
            initial={{scale:1}}
            whileTap={{scale:2}}
            exit={{scale:1}}
            >
              <span></span>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
