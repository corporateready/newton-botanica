import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";

import styles from "./Slider.module.scss";
import Image from "next/image";

import arrow__icon from "../../../../public/static/planning-page/complex/next-arrow.svg";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
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
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={styles.slider__body}>
      <div
        className={page === 0 ? styles.prev__disabled : styles.prev}
        onClick={() => paginate(-1)}
      >
        <Image src={arrow__icon} height={32} width={21} alt="" />
      </div>
      <div
        className={
          page > images.length - 2 ? styles.next__disabled : styles.next
        }
        onClick={() => paginate(1)}
      >
        <Image src={arrow__icon} height={32} width={21} alt="" />
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className={styles.img}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div key={page}>{images[imageIndex]}</div>
        </motion.div>
      </AnimatePresence>
      <div className={styles.slider__pagination}>
        <span className={styles.inner__counter}>{page + 1}</span>/
        <span className={styles.inner__counter_length}>{images.length}</span>
      </div>
    </div>
  );
};
