import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import image_1 from "../../../../public/static/planning-page/gallery/Gradina_1.jpg";
import image_2 from "../../../../public/static/planning-page/gallery/Gradina_2.jpg";
import image_3 from "../../../../public/static/planning-page/gallery/Gradina_3.jpg";
import image_4 from "../../../../public/static/planning-page/gallery/Gradina_4.jpg";

export default function Index() {
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
      url: image_4,
    },
    {
      id: 4,
      url: image_1,
    },
  ];

  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = (idx) => {
    const currentSlide = images[idx];
    setSliderData(currentSlide);
  };

  console.log(sliderData.id);

  return (
    <>
      <div className={styles.slider__wrapper}>
        <div className={styles.slider}>
          <div className={styles.image__wrap}>
            <div className={styles.image_}>
              <Image src={sliderData.url} layout="fill" priority alt="" />
            </div>
          </div>
          <div className={styles.thumbsnail__wrapper}>
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
          </div>
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
