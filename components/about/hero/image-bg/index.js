import React from "react";
import styles from "./image.bg.module.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'

export default function Index() {
  const isMobile = useMediaQuery({
    query: '(max-width: 576px)'
  })
  return (
    <div className={styles.hero__bg}>
      <div className={styles.hero__cloude}></div>

      <motion.div
        className={styles.hero__cloude_animate__grey_1}
        initial={{ x: 0, opacity: 0.2, scale: 1 }}
        animate={{ x: isMobile ? [-500, 500] : [-700, 1300],y: -300, opacity: 0.6, scale: 3 }}
        transition={{
          duration: 70,
          ease: "easeInOut",
          times: 5,
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
        className={styles.hero__cloude_animate__grey_2}
        initial={{ x: 0, opacity: 0.3, scale: 0.7 }}
        animate={{ x: isMobile ? [-500, 600] : [-1000, 1500],y: -300, opacity: 0.6, scale: 3 }}
        transition={{
          duration: 50,
          ease: "easeInOut",
          times: 5,
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
        className={styles.hero__cloude_animate__grey_3}
        initial={{ x: "50vw", y: "30vw", opacity: 0.1, scale: 0.5 }}
        animate={{ x: isMobile ? [-600, 800] : [-600, 1400],y: -300, opacity: 0.5, scale: 3 }}
        transition={{
          duration: 80,
          ease: "easeInOut",
          times: 5,
          repeat: Infinity,
        }}
      ></motion.div>

      <div className={styles.hero__build}></div>
    </div>
  );
}
