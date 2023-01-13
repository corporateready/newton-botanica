import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import item__img_5 from "../../../../../../public/static/planning-page/complex/items-images/image-11.webp";
import item__img_6 from "../../../../../../public/static/planning-page/complex/items-images/image-9.webp";

import icon_5 from "../../../../../../public/static/planning-page/complex/icons/11-parc.svg";
import icon_6 from "../../../../../../public/static/planning-page/complex/icons/cart-icon.svg";

import { LangContext } from "../../../../../../pages/_app";

export default function Index() {

  const { isToggleLang } = React.useContext(LangContext);
 
  return (
    <div className={styles.complex__grid_month}>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={item__img_5} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_5} height={37} width={37} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
            {
              isToggleLang === "ro"
              ? "Lanț de lacuri și parc"
              : "Цепь озер и парк"
            }
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={item__img_6} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_6} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          
          {
              isToggleLang === "ro"
              ? "Facilități de shopping"
              : "Шоппинг"
            }
          </p>
        </div>
      </div>
    </div>
  );
}
