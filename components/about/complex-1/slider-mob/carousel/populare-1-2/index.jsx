import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import item__img_3 from "../../../../../../public/static/planning-page/complex/items-images/image-18.webp";
import item__img_4 from "../../../../../../public/static/planning-page/complex/items-images/image-7.webp";

import icon_3 from "../../../../../../public/static/planning-page/complex/icons/16-terenuri_sportive.svg";
import icon_4 from "../../../../../../public/static/planning-page/complex/icons/03-o_cheie_de_acces.svg";

import { LangContext } from "../../../../../../pages/_app";

export default function Index() {

  const { isToggleLang } = React.useContext(LangContext);

  return (
    <>
      <div className={styles.complex__grid_month}>

        <div className={styles.complex__grid_item}>
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
              ? "Terenuri sportive"
              : "Спортплощадки"
            }
              </p>
          </div>
        </div>

        <div className={styles.complex__grid_item}>
          <div className={styles.item__bg}>
            <Image src={item__img_4} height={303} width={435} priority alt="" />
          </div>
          <div className={styles.item__description}>
            <div className={styles.item__description_icon}>
              <Image src={icon_4} height={26} width={47} priority alt="" />
            </div>
            <p className={styles.item__description_text}>
            {
              isToggleLang === "ro"
              ? "O cheie de acces"
              : "Единый ключ доступа"
            }
            
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
