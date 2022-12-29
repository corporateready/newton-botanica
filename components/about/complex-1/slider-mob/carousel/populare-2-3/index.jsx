import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import item__img_5 from "../../../../../../public/static/planning-page/complex/items-images/image-11.webp";
import item__img_6 from "../../../../../../public/static/planning-page/complex/items-images/image-9.webp";

import icon_5 from "../../../../../../public/static/planning-page/complex/icons/11-parc.svg";
import icon_6 from "../../../../../../public/static/planning-page/complex/icons/cart-icon.svg";

import { Item11Context } from "../../../../../../pages/about";
import { Item12Context } from "../../../../../../pages/about";

export default function Index() {
  const [setIsComplexOpen11] = React.useContext(Item11Context);
  const [setIsComplexOpen12] = React.useContext(Item12Context);
  return (
    <div className={styles.complex__grid_month}>
      <div className={styles.complex__grid_item}
      onClick={() => {
          setIsComplexOpen11(true);
        }}>
        <div className={styles.item__bg}>
          <Image src={item__img_5} height={303} width={435} priority alt="" />
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
      <div className={styles.complex__grid_item}
      onClick={() => {
          setIsComplexOpen12(true);
        }}>
        <div className={styles.item__bg}>
          <Image src={item__img_6} height={303} width={435} priority alt="" />
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
