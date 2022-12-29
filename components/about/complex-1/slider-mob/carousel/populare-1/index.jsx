import React from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";

import location__bg from "../../../../../../public/static/planning-page/complex/items-images/image-17.webp";
import item__img_2 from "../../../../../../public/static/planning-page/complex/items-images/image-3.webp";

import icon_1 from "../../../../../../public/static/planning-page/complex/icons/01-сurte_fara_masini.svg";
import icon_2 from "../../../../../../public/static/planning-page/complex/icons/06-lifturi_moderne.svg";

import { Item7Context } from "../../../../../../pages/about";
import { Item8Context } from "../../../../../../pages/about";

export default function Index() {
  const [setIsComplexOpen7] = React.useContext(Item7Context);
  const [setIsComplexOpen8] = React.useContext(Item8Context);
  return (
    <>
    <div className={styles.complex__grid_month}>

      <div className={styles.complex__grid_item}
      onClick={() => {
          setIsComplexOpen7(true);
        }}
      >
        <div className={styles.item__bg}>
          <Image src={location__bg} height={303} width={435} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={icon_1} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
          Curte fără mașini
          </p>
        </div>
      </div>

       <div className={styles.complex__grid_item}
       onClick={() => {
          setIsComplexOpen8(true);
        }}
       >
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
          Lifturi moderne 
          </p>
        </div>
      </div>

    </div>
    </>
  );
}
