import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import location__bg from "../../../../../public/static/planning-page/complex/items-images/image-7.webp";
import item__img_2 from "../../../../../public/static/planning-page/complex/items-images/image-8.webp";
import item__img_3 from "../../../../../public/static/planning-page/complex/items-images/image-9.webp";
import item__img_4 from "../../../../../public/static/planning-page/complex/items-images/image-10.webp";
import item__img_5 from "../../../../../public/static/planning-page/complex/items-images/image-11.webp";
import item__img_6 from "../../../../../public/static/planning-page/complex/items-images/image-12.webp";

import cart from "../../../../../public/static/planning-page/complex/cart-icon.svg";
import icon_2 from "../../../../../public/static/planning-page/complex/pasarela.svg";
import icon_3 from "../../../../../public/static/planning-page/complex/parking.svg";
import icon_4 from "../../../../../public/static/planning-page/complex/swiming.svg";
import icon_5 from "../../../../../public/static/planning-page/complex/kids-place.svg";
import icon_6 from "../../../../../public/static/planning-page/complex/no-voice-place.svg";

export default function Index() {
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
          Locuri de parcare calde și uscate 
            <br />
            în parcarea subterană
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
          Parcare pentru cărucioare și 
          <br/>rasteluri (parcări) pentru biciclete
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
          Piste comode pentru bicicliști, 
            <br />
            conectate cu pistele din oraș
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
          Mediu fără bariere comod pentru deplasarea părinților 
          <br/>cu cărucioare, copiilor și persoanelor cu dizabilități 
            <br />
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
          Lacuri și parc – un loc minunat 
          <br/>pentru plimbări și relaxare
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
          Tot de ce ai nevoie pentru casă și 
          <br/>familie la câțiva pași distanță
          </p>
        </div>
      </div>
    </div>
  );
}
