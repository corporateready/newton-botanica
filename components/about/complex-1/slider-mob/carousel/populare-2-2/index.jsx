import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import item__img_3 from "../../../../../../public/static/planning-page/complex/items-images/image-1.webp";
import item__img_4 from "../../../../../../public/static/planning-page/complex/items-images/image-10.webp";

import icon_3 from "../../../../../../public/static/planning-page/complex/icons/09-piste_pentru_ciclism.svg";
import icon_4 from "../../../../../../public/static/planning-page/complex/icons/no-voice-place.svg";

import { LangContext } from "../../../../../../pages/_app";

export default function Index() {

  const { isToggleLang } = React.useContext(LangContext);

  return (
    <div className={styles.complex__grid_month}>
      <div className={styles.complex__grid_item}
      >
        <div className={styles.item__bg}>
          <Image src={item__img_3} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_3} height={39} width={38} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
            {
              isToggleLang === "ro"
              ? "Piste pentru ciclism"
              : "Велодорожки"
            }
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}
      >
        <div className={styles.item__bg}>
          <Image src={item__img_4} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_4} height={35} width={35} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          {
              isToggleLang === "ro"
              ? "Mediu fără bariere"
              : "Безбарьерная среда"
            }
           
          </p>
        </div>
      </div>
    </div>
  );
}
