import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import image_1 from "../../../../public/static/planning-page/gallery/Gradina_1.webp";
import image_2 from "../../../../public/static/planning-page/gallery/Gradina_2.webp";
import image_3 from "../../../../public/static/planning-page/gallery/Gradina_3.webp";
import image_4 from "../../../../public/static/planning-page/gallery/Gradina_5.webp";
import image_5 from "../../../../public/static/planning-page/gallery/Gradina_4.webp";
import image_6 from "../../../../public/static/planning-page/gallery/Gradina_6.webp";
import image_7 from "../../../../public/static/planning-page/gallery/Gradina_7.webp";
import image_8 from "../../../../public/static/planning-page/gallery/Gradina_8.webp";

import { useMediaQuery } from "react-responsive";

export default function Index({ setImageURL }) {
  
  const isMobile = useMediaQuery({
    query: "(min-width: 576px)",
  });

  const images = [
    {
      id: 0,
      url: image_1,
    },
    {
      id: 1,
      url: image_2,
    },
    {
      id: 2,
      url: image_3,
    },
    {
      id: 3,
      url: image_5,
    },
    {
      id: 4,
      url: image_4,
    },
    {
      id: 5,
      url: image_5,
    },
    {
      id: 6,
      url: image_7,
    },
    {
      id: 7,
      url: image_8,
    },
  ];

  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = (idx) => {
    const currentSlide = images[idx];
    setSliderData(currentSlide);
  };

  return (
    <>
      <div className={styles.slider__wrapper}>
        <div className={styles.slider}>
          <div className={styles.image__wrap}>
            <div
              className={styles.image_}
              onClick={() => {
                setImageURL(sliderData.id);
              }}
            >
              <Image src={sliderData.url} layout="fill" priority alt="" />
            </div>
          </div>

          <motion.div
            className={styles.thumbsnail__wrapper}
            drag={isMobile ? "y" : "x"}
            dragConstraints={
              isMobile ? { top: -300, bottom: 0 } : { left: -225, right: 0 }
            }
          >
            {images.map((itemUrl, idx) => (
              <div
                key={itemUrl.id}
                className={
                  sliderData.id == idx
                    ? styles.active__thumbs_wrap
                    : styles.image__thumbs_wrap
                }
                onClick={() => handleClick(idx)}
              >
                <div className={styles.image_}>
                  <Image src={itemUrl.url} layout="fill" priority alt="" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <ul className={styles.toggle__list}>
        {images.map((itemUrl, idx) => {
          return (
            <li
              key={itemUrl.id}
              className={
                sliderData.id === idx
                  ? styles.active__toggle_item
                  : styles.toggle__item
              }
              onClick={() => handleClick(idx)}
            >
              {itemUrl.id + 1}
            </li>
          );
        })}
      </ul>
    </>
  );
}
