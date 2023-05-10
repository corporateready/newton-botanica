import React from "react";
import styles from "../events.module.scss";
import Icon__1 from "./icons/Icon__1";
import Icon__2 from "./icons/Icon__2";
import Icon__3 from "./icons/Icon__3";
import Icon__4 from "./icons/Icon__4";
import Icon__5 from "./icons/Icon__5";
import Image from "next/image";
import balloon__up from "../../../public/static/event-page/red-balloon.webp";
import balloon__bottom from "../../../public/static/event-page/red-balloon-botton.webp";
import cloud__up from "../../../public/static/event-page/cloud-top.webp";
import cloud__bottom from "../../../public/static/event-page/cloud-bottom.webp";
import cloud__bottom_mob from "../../../public/static/event-page/cloud-bottom-mob.webp";
import { motion } from "framer-motion";

export default function Index() {

  return (
    <div className={styles.about__screen}>
      <motion.div
        className={styles.cloud__up}
        initial={{ opacity: 1, x: 500, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 10 }}
      >
        <Image src={cloud__up} layout="fill" priority alt="cloude top" />
      </motion.div>

        <motion.div
          className={styles.cloud__bottom_mob}
          initial={{ x: -100, y: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <Image
            src={cloud__bottom_mob}
            layout="fill"
            priority
            alt="red balloon"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </motion.div>
        <motion.div
          className={styles.cloud__bottom_desk}
          initial={{ x: -100, y: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <Image
            src={cloud__bottom}
            layout="fill"
            priority
            alt="red balloon"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </motion.div>
      <div className={styles.about__container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            despre{" "}
            <span>
              cel mai verde
              <br className="flex sm:hidden" />
              picnic al primăverii
            </span>{" "}
            2023
          </h2>
          <div className={styles.text__top}>
            Petrece o zi de neuitat la cel mai verde picnic al primăverii,
            găzduit de parcul
            <span>
              natural <b>Grădina Botanică</b>.
            </span>
            <br className={styles.separate} />
            <br className={styles.separate} />
          </div>
          <div className={styles.text}>
            Experimentează senzația de a zbura cu balonul de aer cald deasupra
            bijuterii botanice a capitalei, cunoaște mai aproape toți invitații
            speciali și influenceri, savurează atmosfera extraordinară cu:
          </div>
          <br className={styles.separate} />
          <ul className={styles.items}>
            <li className={styles.items__item}>
              <Icon__1 />
              <span className={styles.item__text}>
                zone de recreere cu bean bag și scaune
              </span>
            </li>
            <li className={styles.items__item}>
              <Icon__2 />
              <span className={styles.item__text}>
                mâncare delicioase la fourchette
              </span>
            </li>
            <li className={styles.items__item}>
              <Icon__3 />
              <span className={styles.item__text}>
                înghețată și cocktail bar
              </span>
            </li>
            <li className={styles.items__item}>
              <Icon__4 />
              <span className={styles.item__text}>zonă photo</span>
            </li>
            <li className={styles.items__item}>
              <Icon__5 />
              <span className={styles.item__text}>muzică live</span>
            </li>
          </ul>
          <br className={styles.separate} />
          <div className={styles.text}>
            Multe surprize, cadouri și oportunitatea excelentă de a câștiga un
            proiect original de design pentru apartamentul tău la marea tombolă
            și certificate cadou pentru procurarea oricărui bun imobil în
            complexul <b>NEWTON HOUSE Grădina Botanică</b>, precum și o
            prezentare a proiectului.
          </div>
          <div className={styles.text}>
            Nu rata cel mai verde picnic al primăverii, unde vei avea ocazia să
            te bucuri de timpul petrecut alături de cei dragi înconjurat de
            frumusețea naturii și de a crea amintiri de neuitat atât în memoria
            telefonului tău cât și în inima ta.
          </div>
        </div>
      </div>
      <motion.div
        className={styles.balloon__up}
        initial={{ opacity: 1, x: -100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <Image src={balloon__up} layout="fill" priority alt="red balloon" />
      </motion.div>
      <motion.div
        className={styles.balloon__bottom}
        initial={{ opacity: 1, x: -100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <Image src={balloon__bottom} layout="fill" priority alt="red balloon" />
      </motion.div>
    </div>
  );
}
