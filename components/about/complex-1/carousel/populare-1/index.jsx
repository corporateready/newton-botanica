import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import item__img_1 from "../../../../../public/static/planning-page/complex/items-images/image-14.webp";
import item__img_2 from "../../../../../public/static/planning-page/complex/items-images/image-11.webp";
import item__img_3 from "../../../../../public/static/planning-page/complex/items-images/image-8.webp";
import item__img_4 from "../../../../../public/static/planning-page/complex/items-images/image-5.webp";
import item__img_5 from "../../../../../public/static/planning-page/complex/items-images/image-6.webp";
import item__img_6 from "../../../../../public/static/planning-page/complex/items-images/image-12.webp";

import icon_1 from "../../../../../public/static/planning-page/complex/icons/parking.svg";
import icon_2 from "../../../../../public/static/planning-page/complex/icons/11-parc.svg";
import icon_3 from "../../../../../public/static/planning-page/complex/icons/swiming.svg";
import icon_4 from "../../../../../public/static/planning-page/complex/icons/04-acces_prin_3_intrari.svg";
import icon_5 from "../../../../../public/static/planning-page/complex/icons/05-interfon_smart.svg";
import icon_6 from "../../../../../public/static/planning-page/complex/icons/15-spatii_de_joaca.svg";

export default function Index() {
  return (
    <div className={styles.complex__grid_month}>

      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={item__img_1} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_1} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Parcare subterană multietajată 
          </p>
        </div>
        <div className={styles.item__info}>
          <div className={styles.info__icon_wrapper}>
            <div className={styles.item__description_icon}>
            <Image src={icon_1} height={33} width={39} priority alt="" />
            </div>
          </div>
          <div className={styles.info__description}>
            <p className={styles.info__text}>Curte sigură fără mașini</p>
          </div>
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
          Lanț de lacuri și parc 
          </p>
        </div>
        <div className={styles.item__info}>Supraveghere video 24/7</div>
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
          Fitness centru cu bazin 
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
          Acces prin 3 intrări 
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
          Interfon smart 
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
          Spații de joacă 
          </p>
        </div>
      </div>
    </div>
  );
}
