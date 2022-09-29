import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function DesItem_7({ setIsVisible7 }) {
    
  return (
    <motion.div
      className={styles.video__main_wrapper}
      initial={{ height: "0px", width: "0px" }}
      animate={{
        position: "absolute",
        height: "115%",
        width: "100%",
        display: "block",
        "z-index": "20",
      }}
      exit={{ height: "0px", width: "0px" }}
    >
      <button
        className={styles.video__close_btn}
        onClick={() => setIsVisible7(false)}
      >
        închide
      </button>
      <div className={styles.video__wrapper}>
        <iframe
          id="ytplayer"
          type="text/html"
          height="500px"
          width="100%"
          className={styles.video__body}
          src={`https://www.youtube-nocookie.com/embed/B4fC-lWRYJY?origin=1&modestbranding=0&controls=0&rel=0amp&showinfo=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}
