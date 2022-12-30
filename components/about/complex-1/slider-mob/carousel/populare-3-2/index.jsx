import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import item__img_3 from "../../../../../../public/static/planning-page/complex/items-images/image-12.webp";
import item__img_4 from "../../../../../../public/static/planning-page/complex/items-images/image-5.webp";

import icon_3 from "../../../../../../public/static/planning-page/complex/icons/15-spatii_de_joaca.svg";
import icon_4 from "../../../../../../public/static/planning-page/complex/icons/04-acces_prin_3_intrari.svg";

export default function Index() {
  

  return (
    <div className={styles.complex__grid_month}>
      <div
        className={styles.complex__grid_item}
      >
        <div className={styles.item__bg}>
          <Image src={item__img_3} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_3} height={39} width={38} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Spații de joacă</p>
        </div>
      </div>

      <div
        className={styles.complex__grid_item}
      >
        <div className={styles.item__bg}>
          <Image src={item__img_4} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_4} height={39} width={38} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Acces prin 3 intrări
          </p>
        </div>
      </div>
    </div>
  );
}
