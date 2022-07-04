import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import styles from "./Carousel.module.scss";
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  console.log(velocity);
  return Math.abs(offset) * velocity;
};

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          // exit="exit"
          transition={{
            x: { stiffness: 500, damping: 10 },
            opacity: { duration: 0.3 },
          }}
          // drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          // dragElastic={1}
          // onDragEnd={(e, { offset, velocity }) => {
          //   const swipe = swipePower(offset.x, velocity.x);

          //   if (swipe < -swipeConfidenceThreshold) {
          //     paginate(1);
          //   } else if (swipe > swipeConfidenceThreshold) {
          //     paginate(-1);
          //   }
          // }}
          className={styles.img__body}
        >{images[imageIndex]}</motion.div>
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
