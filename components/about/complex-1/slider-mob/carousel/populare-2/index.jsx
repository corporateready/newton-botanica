import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import location__bg from "../../../../../../public/static/planning-page/complex/items-images/image-14.webp";
import item__img_2 from "../../../../../../public/static/planning-page/complex/items-images/image-8.webp";

import cart from "../../../../../../public/static/planning-page/complex/icons/parking.svg";
import icon_2 from "../../../../../../public/static/planning-page/complex/icons/swiming.svg";

import { LangContext } from "../../../../../../pages/_app";

export default function Index() {

  const { isToggleLang } = React.useContext(LangContext);

  return (
    <div className={styles.complex__grid_month}>

      <div className={styles.complex__grid_item}
      >
        <div className={styles.item__bg}>
          <Image src={location__bg} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          {isToggleLang === "ro"
          ? "Parcare subterană multietajată "
        : "Многоуровневая подземная парковка"}
          </p>
        </div>
      </div>

      <div className={styles.complex__grid_item}
      >
        <div className={styles.item__bg}>
          <Image src={item__img_2} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_2} height={35} width={56} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          {isToggleLang === "ro"
          ? "Fitness centru cu bazin "
        : "Фитнес-центр с бассейном"
        }
          </p>
        </div>
      </div>

    </div>
  );
}
