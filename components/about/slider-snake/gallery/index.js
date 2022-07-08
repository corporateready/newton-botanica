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
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const thumb__hero = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
  "https://swiperjs.com/demos/images/nature-10.jpg",
];

function SwiperThumbs() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const prevRef = useRef();
  const nextRef = useRef();
  const bulletRef = useRef();

  React.useEffect(() => {
    if (thumbsSwiper) {
      console.log("Swiper instance:", thumbsSwiper);
      thumbsSwiper.params.navigation.prevEl = prevRef.current;
      thumbsSwiper.params.navigation.nextEl = nextRef.current;
      thumbsSwiper.navigation.init();
      thumbsSwiper.navigation.update();
    }
  }, [thumbsSwiper]);

  return (
    <>
      <div className="swiper-button" ref={prevRef}>
        prev
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#2BB018",
          "--swiper-pagination-bullet-active": "#000",
          "--swiper-pagination-bullet": {
            "border": "#2BB018",
            "border": "1px",
          }
        }}
        autoplay
        spaceBetween={10}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletElement: "span",
          bulletClass: "--swiper-pagination-bullet",
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        {thumb__hero.map((thumb, index) => (
          <SwiperSlide key={index}>
            <Image src={thumb} height={525} width={672} priority alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper}
        // direction = 'vertical'
        style={{ 
          "--":""
        }}
      >
        {thumb__hero.map((thumb, index) => (
          <SwiperSlide key={index} className={styles.thumb__wrapper}>
            <Image src={thumb} height={243} width={362} priority alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button" ref={nextRef}>
        next
      </div>
      
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
