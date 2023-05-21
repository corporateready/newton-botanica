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
import { LangContext } from "../../../pages/_app";

export default function Index() {
const { isToggleLang } = React.useContext(LangContext);
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
          {isToggleLang === "ro" && (
            <h2 className={styles.title}>
              despre{" "}
              <span>
                cel mai verde
                <br className="flex sm:hidden" />
                picnic al verii
              </span>{" "}
              2023
            </h2>
          )}
          {isToggleLang === "ru" && (
            <h2 className={styles.title}>
              про <span>самый зеленый пикник лета</span> 2023
            </h2>
          )}
          <br />
          {isToggleLang === "ro" && (
            <>
              <div className={styles.text__top}>
                Petrece o zi de neuitat la cel mai verde picnic al verii,
                găzduit de parcul natural
                <span>
                  <b className="font-bold"> Grădina Botanică</b>.
                </span>
                <br className="block sm:hidden" />
                <br className="block sm:hidden" />
              </div>
              <div className={styles.text}>
                Experimentează senzația de a zbura cu balonul de aer cald
                deasupra bijuterii botanice a capitalei, cunoaște mai aproape
                toți invitații speciali și influenceri, savurează atmosfera
                extraordinară cu:
              </div>
            </>
          )}
          {isToggleLang === "ru" && (
            <>
              <div className={styles.text__top}>
                Проведи незабываемый день на самом зеленом пикнике лета, который
                состоится в
                <br className="block sm:hidden" /> <b>Ботаническом саду!</b>
              </div>
              <br />
              <div className={styles.text}>
                Открой для себя полет на воздушном шаре над ботанической
                жемчужиной столицы, познакомься с приглашенными гостями и
                блогерами, почувствуй необыкновенную атмосферу, наполненную
                живой музыкой, насладись изысканными закусками, вкуснейшим
                мороженым и освежающими напитками из коктейль-бара. Сделай фото
                с теми, кто тебе дорог, и позволь себе расслабиться в уютных
                зонах отдыха. 
              </div>
            </>
          )}
          <br />
          {isToggleLang === "ro" && (
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
          )}
          <br />
          {isToggleLang === "ro" && (
            <>
              <div className={styles.text}>
                Multe surprize, cadouri și oportunitatea excelentă de a câștiga
                un proiect original de design pentru apartamentul tău la marea
                tombolă și certificate cadou pentru procurarea oricărui bun
                imobil în complexul <b>NEWTON HOUSE Grădina Botanică</b>, precum
                și o prezentare a proiectului.
              </div>
              <br className="block sm:hidden" />
              <div className={styles.text}>
                Nu rata cel mai verde picnic al verii, unde vei avea ocazia să
                te bucuri de timpul petrecut alături de cei dragi înconjurat de
                frumusețea naturii și de a crea amintiri de neuitat atât în
                memoria telefonului tău cât și în inima ta.
              </div>
            </>
          )}
          {isToggleLang === "ru" && (
            <>
              <div className={styles.text__ru}>
                Помимо презентации проекта жилого комплекса, гостей пикника
                ожидает множество сюрпризов и подарков, а также беспрецедентная
                возможность выиграть оригинальный дизайн-проект для квартиры и
                подарочные сертификаты на покупку любой недвижимости в комплексе
                <br className="block" />
                <strong className="font-semibold">
                  NEWTON HOUSE Grădina Botanică.
                </strong>
              </div>
              <br className="hidden sm:block"/>
              <div className={styles.text__ru}>
                Не пропусти самый зеленый пикник лета и насладись временем,
                проведенным с близкими в окружении природы, чтобы сохранить
                незабываемые воспоминания не только в своем телефоне,
                <br /> но и в своем сердце!
              </div>
            </>
          )}
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
