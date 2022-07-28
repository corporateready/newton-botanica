// ======================================>

import styles from "./Styles.module.scss";
import Image from "next/image";
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
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import image_1 from "../../../../public/static/planning-page/gallery/Gradina Botanica transa 2_View05.png";
// import image_1 from "../../../../public/static/planning-page/gallery/Gradina Botanica transa 2_View05.png";
// import image_1 from "../../../../public/static/planning-page/gallery/Gradina Botanica transa 2_View05.png";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const thumb__hero = [image_1, image_1, image_1, image_1, image_1, image_1];

function SwiperThumbs() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const pagination = {
    clickable: true,
    bulletActiveClass: ".--swiper-pagination-bullet-active",
    bulletClass: ".--swiper-pagination-bullet",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        autoHeight={true}
        spaceBetween={10}
        navigation={false}
        pagination={pagination}
        direction={"horizontal"}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        {thumb__hero.map((thumb, index) => (
          <SwiperSlide className="" key={index}>
            <Image src={thumb} layout="responsive" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
            direction: "horizontal",
          },
          576: {
            slidesPerView: 2,
            direction: "vertical",
          },
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper}
      >
        {thumb__hero.map((thumb, index) => (
          <SwiperSlide className="" key={index}>
            <Image src={thumb} layout="fill" alt="" />
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
