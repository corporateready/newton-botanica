import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import location__bg from "../../../../../public/static/planning-page/complex/items-images/image-8.webp";
import item__img_2 from "../../../../../public/static/planning-page/complex/items-images/image-16.webp";
import item__img_3 from "../../../../../public/static/planning-page/complex/items-images/image-12.webp";
import item__img_4 from "../../../../../public/static/planning-page/complex/items-images/image-18.webp";
import item__img_5 from "../../../../../public/static/planning-page/complex/items-images/image-17.webp";
import item__img_6 from "../../../../../public/static/planning-page/complex/items-images/image-4.webp";

import icon_1 from "../../../../../public/static/planning-page/complex/icons/swiming.svg";
import icon_2 from "../../../../../public/static/planning-page/complex/icons/kids-place.svg";
import icon_3 from "../../../../../public/static/planning-page/complex/icons/15-spatii_de_joaca.svg";
import icon_4 from "../../../../../public/static/planning-page/complex/icons/16-terenuri_sportive.svg";
import icon_5 from "../../../../../public/static/planning-page/complex/icons/17-mobilier_modern.svg";
import icon_6 from "../../../../../public/static/planning-page/complex/icons/18-havuz.svg";

export default function Index() {
  return (
    <div className={styles.complex__grid_month}>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_1} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Fitness centru cu bazin 
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={item__img_2}
            height={223}
            width={335}
            quality={100}
            priority
            alt=""
          />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_2} height={35} width={56} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Grădiniță modernă
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={item__img_3} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_3} height={39} width={38} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Spații de joacă 
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={item__img_4} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_4} height={26} width={47} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Terenuri sportive 
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={item__img_5} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_5} height={37} width={37} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Mobilier urban modern 
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={item__img_6} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_6} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Havuz artistic
          </p>
        </div>
      </div>
    </div>
  );
}
