import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import location__bg from "../../../../../../public/static/planning-page/complex/items-images/image-1.webp";
import item__img_2 from "../../../../../../public/static/planning-page/complex/items-images/image-2.webp";

import cart from "../../../../../../public/static/planning-page/complex/cart-icon.svg";
import icon_2 from "../../../../../../public/static/planning-page/complex/pasarela.svg";

export default function Index() {
  return (
    <>
    <div className={styles.complex__grid_month}>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Curte fără mașini
          </p>
        </div>
        <div className={styles.item__info}>
          <div className={styles.info__icon_wrapper}>
            <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
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
            height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_2} height={35} width={56} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Supraveghere video 24/7
          </p>
        </div>
        <div className={styles.item__info}>Supraveghere video 24/7</div>
      </div>
    </div>
    </>
  );
}
