import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import location__bg from "../../../../../../public/static/planning-page/complex/items-images/image-7.webp";
import item__img_2 from "../../../../../../public/static/planning-page/complex/items-images/image-8.webp";
import item__img_3 from "../../../../../../public/static/planning-page/complex/items-images/image-9.webp";
import item__img_4 from "../../../../../../public/static/planning-page/complex/items-images/image-10.webp";
import item__img_5 from "../../../../../../public/static/planning-page/complex/items-images/image-11.webp";
import item__img_6 from "../../../../../../public/static/planning-page/complex/items-images/image-12.webp";

import cart from "../../../../../../public/static/planning-page/complex/cart-icon.svg";
import icon_2 from "../../../../../../public/static/planning-page/complex/pasarela.svg";
import icon_3 from "../../../../../../public/static/planning-page/complex/parking.svg";
import icon_4 from "../../../../../../public/static/planning-page/complex/swiming.svg";
import icon_5 from "../../../../../../public/static/planning-page/complex/kids-place.svg";
import icon_6 from "../../../../../../public/static/planning-page/complex/no-voice-place.svg";

export default function Index() {
  return (
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
          Parcare subterană multietajată 
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={item__img_2} height={303} width={435} priority alt="" />
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
    </div>
  );
}
