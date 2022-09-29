import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import location__bg from "../../../../../public/static/planning-page/complex/items-images/image-14.webp";
import item__img_2 from "../../../../../public/static/planning-page/complex/items-images/image-15.webp";
import item__img_3 from "../../../../../public/static/planning-page/complex/items-images/image-1.webp";
import item__img_4 from "../../../../../public/static/planning-page/complex/items-images/image-10.webp";
import item__img_5 from "../../../../../public/static/planning-page/complex/items-images/image-11.webp";
import item__img_6 from "../../../../../public/static/planning-page/complex/items-images/image-9.webp";

import icon_1 from "../../../../../public/static/planning-page/complex/icons/parking.svg";// check it
import icon_2 from "../../../../../public/static/planning-page/complex/icons/08-parking_carucioare_biciclete.svg";
import icon_3 from "../../../../../public/static/planning-page/complex/icons/09-piste_pentru_ciclism.svg";
import icon_4 from "../../../../../public/static/planning-page/complex/icons/no-voice-place.svg";
import icon_5 from "../../../../../public/static/planning-page/complex/icons/11-parc.svg";
import icon_6 from "../../../../../public/static/planning-page/complex/icons/cart-icon.svg";

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
          Parcare subterană multietajată 
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
          Parking cărucioare și biciclete
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
          Piste pentru ciclism
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
          Mediu fără bariere 
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
          Lanț de lacuri și parc 
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
          Facilități de shopping 
          </p>
        </div>
      </div>
    </div>
  );
}
