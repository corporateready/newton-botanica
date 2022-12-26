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
      {/* <motion.div className={styles.hero__cloude}
      initial={{ x: 0,y:0, opacity: 1, scale: 1 }}
      animate={{ x: [0, 1300],y: -300, opacity: 1, scale: 1 }}
      transition={{
        duration: 30,
        ease: "easeInOut",
        times: 5,
        repeat: Infinity,
      }}
      ></motion.div> */}

      {/* <motion.div
        className={styles.hero__cloude_animate__grey_1}
        initial={{ x: 0, opacity: 0.2, scale: 1 }}
        animate={{
          x: isMobile ? [-500, 500] : [-700, 1300],
          y: -300,
          opacity: 0.4,
          scale: 3,
        }}
        transition={{
          duration: 70,
          ease: "easeInOut",
          times: 5,
          repeat: Infinity,
        }}
      ></motion.div> */}

      {/* <motion.div
        className={styles.hero__cloude_animate__grey_2}
        initial={{ x: 0, opacity: 0.2, scale: 0.7 }}
        animate={{
          x: isMobile ? [-500, 600] : [-1000, 1500],
          y: -300,
          opacity: 0.4,
          scale: 3,
        }}
        transition={{
          duration: 50,
          ease: "easeInOut",
          times: 5,
          repeat: Infinity,
        }}
      ></motion.div> */}

      <motion.div
        className={styles.hero__cloude_animate__grey_3}
        initial={{ x: 0, y: 0, opacity: 0.1, scale: isMobile ? 1 : 0.5 }}
        animate={{
          x: isMobile ? [50, -700] : [100, -1800],
          y: isMobile ? -100 : -900,
          opacity: 1,
          scale: 3,
        }}
        transition={{
          duration: 80,
          ease: "easeInOut",
          times: 1,
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
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
      ></motion.div>

      <div className={styles.hero__build}></div>
    </div>
  );
}
