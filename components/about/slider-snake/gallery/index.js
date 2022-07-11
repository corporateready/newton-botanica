// ======================================>

import styles from "./Styles.module.scss";
import Image from "next/image";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  FreeMode,
} from "swiper";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import image_1 from '../../../../public/static/planning-page/gallery/Gradina Botanica transa 2_View05.png'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const thumb__hero = [
  image_1,
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
];

function SwiperThumbs() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const prevRef = useRef();
  // const nextRef = useRef();
  // const bulletRef = useRef();

  // React.useEffect(() => {
  //   if (thumbsSwiper) {
  //     // console.log("Swiper instance:", thumbsSwiper);
  //     thumbsSwiper.params.navigation.prevEl = prevRef.current;
  //     thumbsSwiper.params.navigation.nextEl = nextRef.current;
  //     thumbsSwiper.navigation.init();
  //     thumbsSwiper.navigation.update();
  //   }
  // }, [thumbsSwiper]);

  return (
    <>
      <Head></Head>

      <Swiper
        spaceBetween={10}
        navigation={false}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletElement: "span",
          bulletClass: "--swiper-pagination-bullet",
          bulletActiveClass: "--swiper-pagination-bullet-active",
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        {thumb__hero.map((thumb, index) => (
          <SwiperSlide key={index} className={styles.thumb__wrapper}>
            <div className={styles.swiper_slide}>
              <Image src={thumb} height={525} width={672} priority alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
          575: {
            slidesPerView: 2,
            direction: "vertical"
          },
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
            direction:"horizontal"
          },
        }}
        direction={"vertical"}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper}
        style={{
          // thumbsContainerClass: ".swiper-thumbs",
        }}
      >
        {thumb__hero.map((thumb, index) => (
          <SwiperSlide key={index} className={styles.thumb__wrapper}>
            <div className={styles.swiper_thumb_slide}>
            <Image src={thumb} height={243} width={362} priority alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}

export function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__inner}>
        <SwiperThumbs />
      </div>
    </div>
  );
}
