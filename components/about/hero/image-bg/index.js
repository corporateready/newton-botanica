import React from "react";
import styles from "./image.bg.module.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Index() {

  const isMobile = useMediaQuery({
    query: "(max-width: 576px)",
  });
  
  return (
    <div className={styles.hero__bg}>

      {/* <motion.div
        className={styles.hero__cloude_animate__grey_3}
        initial={{ x: "-100vw", y: "10vw", opacity: 0, scale: 0.2 }}
        animate={{
          x: "100vw",
          y: '-10vw',
          opacity: 1,
          scale: 1.2,
        }}
        // exit={{opacity:0, transition: {duration:2}}}
        transition={{
          duration: 120,
          ease: "easeOut",
          // times: 1,
          repeat: Infinity,
        }}
      ></motion.div>
       <motion.div
        className={styles.hero__cloude_animate__grey_3}
        initial={{ x: "-100vw", y: "10vw", opacity: 0, scale: 0.2 }}
        animate={{
          x: "100vw",
          y: '-10vw',
          opacity: 1,
          scale: 1.2,
        }}
        // exit={{opacity:0, transition: {duration:2}}}
        transition={{
          duration: 100,
          delay: 7,
          ease: "easeOut",
          // times: 1,
          repeat: Infinity,
        }}
      ></motion.div> */}

      {/* <motion.div
        className={styles.hero__cloude_animate__grey_4}
        initial={{ x: 0, y: 0, opacity: 0.1, scale: isMobile ? 1 : 0.5 }}
        animate={{
          x: isMobile ? [50, -300] : [100, -2000],
          y: isMobile ? -200 : -700,
          opacity: 1,
          scale: 3,
        }}
        transition={{
          duration: 100,
          ease: "easeInOut",
          times: 1,
          repeat: Infinity,
        }}
      ></motion.div> */}

      <div className={styles.hero__build}></div>
    </div>
  );
}
