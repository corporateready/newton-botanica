import React from "react";
import styles from "./SliderSnake.module.scss";
import Link from "next/link";
import Image from "next/image";
// import location__bg from "../../../public/static/planning-page/news/january/jan-1.jpeg";
// import location__bg_2 from "../../../public/static/planning-page/news/ferbrary/feb-1.jpeg";
// import cart from "../../../public/static/planning-page/complex/cart-icon.svg";
// import prev__button from "../../../public/static/planning-page/complex/prev-button.svg";
// import next__button from "../../../public/static/planning-page/complex/next-button.svg";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// // import required modules
// import { Navigation } from "swiper";

import body__image from "../../../public/static/planning-page/gallery/Gradina Botanica transa 2_View15.png";
import thumbnail__image from "../../../public/static/planning-page/gallery/Gradina Botanica transa 2_View05.png";

export default function index() {
  return (
    <>
      <div className={styles.slider__section}>
        <div className={styles.slider__wrapper}>
          <h1 className={styles.slider__title}>
            Galerie
            <span></span>
          </h1>
          <div className={styles.slider__inner}>
            <Gallery />
          </div>
        </div>
      </div>
    </>
  );
}

export function Gallery() {
  return (
    <>
    <div className={styles.slider__grid_inner}>
      <div className={styles.slider__body}>
        <Image src={body__image} height={525} width={672} alt="" />
      </div>
      <div className={styles.slider__thumbnail}>
        <div className={styles.slider__thumbnail_wrapper}>
          <Image src={thumbnail__image} height={253} width={372} priority alt="" />
        </div>
        <div className={styles.slider__thumbnail_wrapper}>
          <Image src={body__image} height={253} width={372} priority alt="" />
        </div>
      </div>
    </div>
     <div className={styles.trance__paggination_inner_toggler}>
     <button className={styles.paggination__inner_button}>1</button>
     <button className={styles.paggination__inner_button}>2</button>
     <button className={styles.paggination__inner_button}>3</button>
     <button className={styles.paggination__inner_button}>4</button>
   </div>
   </>
  );
}
