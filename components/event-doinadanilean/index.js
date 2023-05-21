import React from "react";
import styles from "./events.module.scss";
import Image from "next/image";
import { LangContext } from "../../pages/_app";
import { motion } from "framer-motion";
import balloon__up from "../../public/static/event-page/red-balloon.webp";

export default function Index({ handlerOpenEventPopup }) {
  const { isToggleLang } = React.useContext(LangContext);
  return (
    <div className="relative top-0 left-0">
      <motion.div
        className={styles.events__inner__balloon_up}
        animate={{ y: [0, 20, 0], x: [20, 0, 20] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <Image src={balloon__up} layout="fill" priority alt="red balloon" />
      </motion.div>
      <div className={styles.events__inner}>
        {isToggleLang === "ro" ? (
          <h2 className={styles.events__title}>
            Câștigă un bilet la cel mai verde picnic al verii
            <br className="block sm:hidden" />
            <p>
              exclusiv pentru 50 de
              <br className="block sm:hidden" />
              participanți norocoși de la
            </p>
            <span> Doina Danilean</span>
          </h2>
        ) : (
          <h2 className={styles.events__title}>
            Стань одним из 50 счастливчиков!
            <br className="block sm:hidden" />
            <p>
              Выиграй эксклюзивный
              <br className="block sm:hidden" /> билет от Дойны Данилян
            </p>
            <span> на самый зеленый пикник этого лета!</span>
          </h2>
        )}

        <button
          type="button"
          className={styles.events__btn}
          onClick={handlerOpenEventPopup}
        >
          {isToggleLang === "ro" ? "Vreau biletul" : "Хочу билет"}
        </button>

        <p className={styles.events__copy}>
          Toate drepturile rezervate NEWTON HOUSE GRĂDINA BOTANICĂ © 2022.
        </p>
      </div>
    </div>
  );
}
