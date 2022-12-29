import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import item__img_5 from "../../../../../../public/static/planning-page/complex/items-images/image-13.webp";
import item__img_6 from "../../../../../../public/static/planning-page/complex/items-images/image-4.webp";

import icon_5 from "../../../../../../public/static/planning-page/complex/icons/17-mobilier_modern.svg";
import icon_6 from "../../../../../../public/static/planning-page/complex/icons/18-havuz.svg";

import { Item9Context } from "../../../../../../pages/about";
import { Item10Context } from "../../../../../../pages/about";

export default function Index() {
  const [setIsComplexOpen9] = React.useContext(Item9Context);
  const [setIsComplexOpen10] = React.useContext(Item10Context);
  return (
    <div className={styles.complex__grid_month}>
      <div
        className={styles.complex__grid_item}
        onClick={() => {
          setIsComplexOpen9(true);
        }}
      >
        <div className={styles.item__bg}>
          <Image src={item__img_5} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_5} height={37} width={37} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mobilier urban modern</p>
        </div>
      </div>
      <div
        className={styles.complex__grid_item}
        onClick={() => {
          setIsComplexOpen10(true);
        }}
      >
        <div className={styles.item__bg}>
          <Image src={item__img_6} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_6} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Havuz artistic</p>
        </div>
      </div>
    </div>
  );
}
