import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import location__bg from "../../../../public/static/planning-page/location/panoramic-botanica.webp";
import location__bg_ru from "../../../../public/static/planning-page/location/panoramic-botanica-pins-ru.webp";
import close__button from "../../../../public/static/planning-page/close-button-popup.svg";
import { motion } from "framer-motion";

import { LangContext } from "../../../../pages/_app";

export default function Index({ hanlerCloseLocationPopup }) {
  const { isToggleLang } = React.useContext(LangContext);

  const [isTap, setIsTap] = React.useState(false)

  return (
    <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div className={styles.offer__inner}>
            <button
              type="button"
              className={styles.offer__button_close}
              onClick={hanlerCloseLocationPopup}
            >
              <span className="text-white text-[6vw]">&#215;</span>
            </button>

            <motion.button 
            className={isToggleLang === "ro" ? styles.image__item : styles.image__item_ru}
            initial={{scale:1, opacity:0}}
            animate={{opacity:1}}
            whileTap={{scale:3}}
            onDrag="y"
            transition={{duration:0.5, ease:"easeOut"}}
            >
              <span></span>
            </motion.button>

          </div>
        </div>
      </section>
  );
}
