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

  const [isDesktopSize, setIsDesktopSize] = useState(false)

  React.useEffect((e)=>{
    window.addEventListener("resize", (event) => {
      console.log("event ", event);
    });

    onresize = (event) => {};

  if(isToggleLang){
    // const docBody = document.querySelector('.offer__section')
    // docBody.addEventListener("touchstart", (e) => {
    //   console.log("Moved!", e);
    // docBody.style.overflow = "hidden"
      // docBody.style.overflow="hidden"
    // });
  }
    // return image
  },[isToggleLang])

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
            animate={{opacity:1, scale: isDesktopSize ? 2 : 1}}
            transition={{duration:0.5, ease:"easeOut"}}
            onClick={()=>setIsDesktopSize(!isDesktopSize)}
            drag="x"
            dragConstraints={isDesktopSize ? {left:-200, right:200} : {left:0, right:0}}

            >
              <span></span>
            </motion.button>

          </div>
        </div>
      </section>
  );
}
