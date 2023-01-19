import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import location__bg from "../../../../public/static/planning-page/location/panoramic-botanica.webp";
import location__bg_ru from "../../../../public/static/planning-page/location/panoramic-botanica-pins-ru.webp";
import close__button from "../../../../public/static/planning-page/close-button-popup.svg";
import { motion,
  useMotionValue,
  useTransform, } from "framer-motion";

import { LangContext } from "../../../../pages/_app";

export default function Index({ hanlerCloseLocationPopup }) {
  const { isToggleLang } = React.useContext(LangContext);

  const [isClicked, setIsClicked] = React.useState(false)

  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["", "", ""],
  )

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
            initial={{scale:1, opacity:0,left: 0, right: 0 }}
            animate={{opacity:1,stiffness: 2000, type:"spring"}}
            whileDrag={{scale:2}}
            style={{ background }}
            // onClick={()=>{
            //   console.log("isClicked ", isClicked);
            //   setIsClicked(!isClicked)}}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            transition={{duration:0.5, ease:"easeOut"}}
            >
              <span></span>
            </motion.button>

          </div>
        </div>
      </section>
  );
}
