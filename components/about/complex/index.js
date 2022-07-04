import React from "react";
import styles from "./Complex.module.scss";
import Link from "next/link";
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/news/january/jan-1.jpeg";
import location__bg_2 from "../../../public/static/planning-page/news/ferbrary/feb-1.jpeg";
import cart from "../../../public/static/planning-page/complex/cart-icon.svg";
import prev__button from "../../../public/static/planning-page/complex/prev-button.svg";
import next__button from "../../../public/static/planning-page/complex/next-button.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function index() {
  return (
    <>
      <div className={styles.complex__section}>
        <div className={styles.complex__wrapper}>
          <h1 className={styles.complex__title}>
            Cel mai modern complex rezidențial
            <p className={styles.separator}></p> de la Botanica
            <span></span>
          </h1>
          <div className={styles.complex__inner}>
            <div className={styles.complex__grids}>
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Gallery() {
  const sliderRef = React.useRef(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        <div>
          <SwiperSlide>
            <Complex1 />
          </SwiperSlide>
          <SwiperSlide>
            <Complex2 />
          </SwiperSlide>
        </div>
        
      </Swiper>
      <div className={styles.button__toggle}>
      <button onClick={handlePrev} className={styles.prevButton}>
          <span className={styles.prevButton__icon}>
          <Image src={prev__button} width={21} height={34} alt="" />
          </span>
        </button>
        <button onClick={handleNext} className={styles.nextButton}>
          <Image src={next__button} width={21} height={34} alt="" />
        </button>
      </div>
    </>
  );
}

export function Complex1() {
  return (
    <div className={styles.complex__grid_month}>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
            Centru comercial la Parter 
            <br />și Etajul 1
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Pasarelă pietonală modernă</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          parcare multietajată,
<br/>3000+  locuri de parcare
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Complex sportiv 
<br/>cu bazin de înot acoperit
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Grădiniță proprie conform
<br/>standardelor contemporane
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
    </div>
  );
}

export function Complex2() {
  return (
    <div className={styles.complex__grid_month}>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={223}
            width={335}
            priority
            alt=""
          />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
            Centru comercial
            <br />
            la Parter și Etajul 1
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={223}
            width={335}
            priority
            alt=""
          />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={223}
            width={335}
            priority
            alt=""
          />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={223}
            width={335}
            priority
            alt=""
          />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={223}
            width={335}
            priority
            alt=""
          />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={223}
            width={335}
            priority
            alt=""
          />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
    </div>
  );
}
