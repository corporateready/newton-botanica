import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
// import image_1 from "";

export default function Index() {
  const images = [
    {
      id: 0,
      url: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
    },
    {
      id: 1,
      url: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
    },
    {
      id: 3,
      url: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
    },
    {
      id: 4,
      url: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
    },
  ];

  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = (idx) => {
    const currentSlide = images[idx];
    return setSliderData(currentSlide);
  };

  console.log(sliderData.id);

  return (
    <>
    <div className={styles.slider__wrapper}>
      <div className={styles.slider}>
        <div className={styles.image__wrap}>
          <img
            src={sliderData.url}
            className={styles.image_}
            height="525"
            width="100%"
            alt=""
          />
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
              <img
                src={itemUrl.url}
                className={styles.image_}
                height="243"
                width="362"
                alt=""
              />
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
                className={sliderData.id === idx ? styles.active__toggle_item : styles.toggle__item}
                onClick={() => handleClick(idx)}
                >
              {itemUrl.id+1}
            </li>
          );
        })}
    </ul>
    </>
  );
}
