import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images_1 } from "./image-data";
import styles from "./Plan-1.module.scss";
import back__icon from "../../../../public/static/planning-page/complex/next-button.svg";

const variants = {
  enter: (direction) => {
    return {
      x: 0,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: 0,
      opacity: 1,
    };
  },
};

export default function Plan_1 () {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images_1.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  console.log(imageIndex);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div
          key={imageIndex-1}
          className="w-[13%] absolute bottom-[0%] left-[3%] duration-200"
        >
          {images_1[imageIndex - 1]}
        </div>

        <motion.div
          // key={imageIndex}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{
            opacity: { duration: 0.3 },
          }}
          dragConstraints={{ left: 0, right: 0 }}
          className={styles.img__body}
        >
          {images_1[imageIndex]}
        </motion.div>

        <div key={imageIndex} className="w-[13%] absolute bottom-[0%] right-[3%] z-10">
          {images_1[imageIndex]}
        </div>
      </AnimatePresence>
      <div
        className={page > 2 ? styles.next__disabled : styles.next}
        onClick={() => paginate(1)}
      >
        <Image src={back__icon} height={30} width={40} alt="" />
      </div>
      <div
        className={page === 0 ? styles.prev__disabled : styles.prev}
        onClick={() => paginate(-1)}
      >
        <Image src={back__icon} height={30} width={40} alt="" />
      </div>
    </>
  );
};
