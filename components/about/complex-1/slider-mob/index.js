import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";

import styles from "./Slider.module.scss";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 500 : -500,
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
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const SliderMob = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className={styles.slider__body}>
        <button
          type="button"
          disabled={page <= 0}
          className={styles.prev}
          onClick={() => paginate(-1)}
        >
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_101_2128)">
              <path
                d="M7.2105 22.4505C6.8999 22.0512 6.89985 21.4036 7.21055 21.0042L14.6026 11.5003L7.2105 1.99596C6.8999 1.59662 6.89985 0.949027 7.21055 0.549618C7.52121 0.150209 8.02483 0.150209 8.33549 0.549618L16.29 10.7772C16.4392 10.969 16.523 11.2291 16.523 11.5003C16.523 11.7715 16.4392 12.0317 16.29 12.2234L8.33543 22.4504C8.02483 22.8499 7.52115 22.8499 7.2105 22.4505Z"
                fill={page <= 0 ? "#2BB018" : "#fff"}
              />
            </g>
            <g clipPath="url(#clip1_101_2128)">
              <path
                d="M3.7471 20.017C3.50749 19.7064 3.50745 19.2027 3.74714 18.8921L9.44958 11.5002L3.7471 4.10792C3.50749 3.79732 3.50745 3.29364 3.74714 2.98299C3.98678 2.67234 4.3753 2.67234 4.61494 2.98299L10.7513 10.9377C10.8664 11.0869 10.931 11.2892 10.931 11.5002C10.931 11.7111 10.8663 11.9135 10.7513 12.0626L4.6149 20.017C4.3753 20.3277 3.98674 20.3277 3.7471 20.017Z"
                fill={page <= 0 ? "#2BB018" : "#fff"}
              />
            </g>
            <defs>
              <clipPath id="clip0_101_2128">
                <rect
                  width="22.5"
                  height="17.5"
                  rx="8.75"
                  transform="matrix(0 1 1 0 3.00049 0.25)"
                  fill="white"
                />
              </clipPath>
              <clipPath id="clip1_101_2128">
                <rect
                  width="17.5"
                  height="13.5"
                  rx="6.75"
                  transform="matrix(0 1 1 0 0.499023 2.75)"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button
          type="button"
          className={styles.next}
          disabled={page > images.length - 2}
          onClick={() => paginate(1)}
        >
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_101_2128)">
              <path
                d="M7.2105 22.4505C6.8999 22.0512 6.89985 21.4036 7.21055 21.0042L14.6026 11.5003L7.2105 1.99596C6.8999 1.59662 6.89985 0.949027 7.21055 0.549618C7.52121 0.150209 8.02483 0.150209 8.33549 0.549618L16.29 10.7772C16.4392 10.969 16.523 11.2291 16.523 11.5003C16.523 11.7715 16.4392 12.0317 16.29 12.2234L8.33543 22.4504C8.02483 22.8499 7.52115 22.8499 7.2105 22.4505Z"
                fill={page > images.length - 2 ? "#2BB018" : "#fff"}
              />
            </g>
            <g clipPath="url(#clip1_101_2128)">
              <path
                d="M3.7471 20.017C3.50749 19.7064 3.50745 19.2027 3.74714 18.8921L9.44958 11.5002L3.7471 4.10792C3.50749 3.79732 3.50745 3.29364 3.74714 2.98299C3.98678 2.67234 4.3753 2.67234 4.61494 2.98299L10.7513 10.9377C10.8664 11.0869 10.931 11.2892 10.931 11.5002C10.931 11.7111 10.8663 11.9135 10.7513 12.0626L4.6149 20.017C4.3753 20.3277 3.98674 20.3277 3.7471 20.017Z"
                fill={page > images.length - 2 ? "#2BB018" : "#fff"}
              />
            </g>
            <defs>
              <clipPath id="clip0_101_2128">
                <rect
                  width="22.5"
                  height="17.5"
                  rx="8.75"
                  transform="matrix(0 1 1 0 3.00049 0.25)"
                  fill="white"
                />
              </clipPath>
              <clipPath id="clip1_101_2128">
                <rect
                  width="17.5"
                  height="13.5"
                  rx="6.75"
                  transform="matrix(0 1 1 0 0.499023 2.75)"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <AnimatePresence initial={true} custom={direction}>
          <motion.div
            key={page}
            className={styles.img}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { damping: 30 },
              opacity: { duration: 0.5 },
            }}
            dragConstraints={{ left: 0, right: 0 }}
            drag="x"
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                return page > 7 ? paginate(0) : paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                return page < 1 ? paginate(0) : paginate(-1);
              }
            }}
          >
            <motion.div key={page}>{images[imageIndex]}</motion.div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.slider__pagination}>
          <span className={styles.inner__counter}>{page + 1}</span>/
          <span className={styles.inner__counter_length}>{images.length}</span>
        </div>
      </div>
    </>
  );
};
