import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from "./Plan-1.module.scss";
import back__icon from "../../../../public/static/planning-page/complex/next-button.svg";

import image_1_1 from "../../../../public/static/planning/plan/plan-1-1.png";
import image_1_2 from "../../../../public/static/planning/plan/trance-2-faze-1.png";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 100 : -100,
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
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

export default function Plan_1() {
  const images_1 = [
    <Image src={image_1_1} height={515} width={478} alt="" />,
    <Image src={image_1_2} height={515} width={478} alt="" />,
    <Image src={image_1_1} height={515} width={478} alt="" />,
  ];
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images_1.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  console.log(imageIndex);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div key={imageIndex - 1} className={styles.complex__grid_prev_item}>
          {images_1[imageIndex - 1]}
        </div>

        <motion.div
          key={page}
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

        <div
          className={styles.complex__grid_next_item}
          key={images_1[imageIndex]}
        >
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
}
