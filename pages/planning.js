import React, { useState, useEffect, useContext, useCallback } from "react";
import styles from "../styles/About.module.scss";
import Layout from "../components/layout";
import Image from "next/image";
import planning__bg from "/public/static/planning-page/Group_2678.webp";
import planning__bg_mob from "/public/static/planning-page/bg-about-mob.webp";
import image__detail from "../public/static/planning/populare/populare-1/63 55 2d.svg";
import close__button from "../public/static/planning/populare/close-icon.svg";
import { motion } from "framer-motion";
import {
  Payment,
  Populare,
  Transe,
  Plan,
  InfoForm,
} from "../components/planning";
import Head from "next/head";

const ModalContext = React.createContext();

export default function Planning() {
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  const handlerSetModal = useCallback(() => {
    setIsOpenDetails(true);
  }, [setIsOpenDetails]);

  const hanlerCloseOpenDetails = () => {
    setIsOpenDetails(false);
  };
  const handlerOpenDetails = () => {
    setIsOpenDetails(true);
  };

  useEffect(() => {
    if (isOpenDetails) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpenDetails) {
      document.body.style.overflow = "auto";
    }
  }, [isOpenDetails]);

  return (
    <>
      <Head>
        <title>NGHB | DESPRE CASA</title>
      </Head>

      <ModalContext.Provider value={{ handlerSetModal }}>
        <section className={styles.planning__section}>
        <div className={styles.planning__bg}>
          <Image
            src={planning__bg}
            layout="fill"
            quality={100}
            priority
            alt="home background"
          />
        </div>
        <div className={styles.planning__bg_mob}>
          <Image
            src={planning__bg_mob}
            layout="fill"
            priority
            alt="mobile home background"
          />
        </div>
          <Layout>
            <div className={styles.container}>
              <Payment />
              <Populare handlerOpenDetails={handlerOpenDetails} />
              <Transe />
              <Plan />
              <InfoForm />
            </div>
          </Layout>
          {isOpenDetails && (
            <section className={styles.details__section}>
              <motion.div className={styles.details__wrapper}>
                <button
                  className={styles.details__close_button}
                  onClick={hanlerCloseOpenDetails}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0, transition: { duration: 2 } }}
                >
                  <Image
                    src={close__button}
                    height={15}
                    width={15}
                    priority
                    alt=""
                  />
                </button>
                <div className={styles.details__inner}>
                  <div className={styles.details__content_inner_mob}>
                    <div>
                      <p className={styles.details__content_name}>1 cameră</p>
                      <p className={styles.details__content_perimeter}>
                        63.55 M<sup>2</sup>
                      </p>
                    </div>

                    <div>
                      <p className={styles.details__content_name_}>
                        Prima rată 10%
                      </p>
                      <p className={styles.details__content_perimeter}>
                        2300 €
                      </p>
                    </div>
                  </div>
                  <div className={styles.details__slider}>
                    <div className={styles.details__slider_body}>
                      <Image
                        src={image__detail}
                        height={398}
                        width={450}
                        priority
                        alt=""
                      />
                    </div>
                    <div className={styles.details__slider_counter}>
                      <span className={styles.slider__counter_current}>1</span>/
                      <span className={styles.slider__counter_length}>2</span>
                    </div>
                  </div>
                  <div className={styles.details__description}>
                    <div className={styles.details__content}>
                      <div className={styles.details__content_inner}>
                        <p className={styles.details__content_name}>1 cameră</p>
                        <p className={styles.details__content_perimeter}>
                          63.55 M<sup>2</sup>
                        </p>

                        <p className={styles.details__content_name_}>
                          Prima rată 10%
                        </p>
                        <p className={styles.details__content_perimeter}>
                          2300 €
                        </p>
                      </div>
                    </div>
                    <p className={styles.details__form__title}>
                      Pentru a rezerva sau a lu-a legătura cu mănăgerul
                      <br />
                      de vânzări completați formularul de mai jos:
                    </p>
                    <div className={styles.details__form}>
                      <input type="text" placeholder="Nume, Prenume" />
                      <input type="text" placeholder="Numărul de telefon" />
                      <button type="submit" className={styles.button__sending}>
                        Solicită informații
                      </button>
                    </div>
                    <p className={styles.details__suptitle}>
                      S-au apelați la numărul de telefon:{" "}
                      <a className={styles.details__suptitle_tel}>
                        060 80 20 20 <span></span>
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>
          )}
        </section>
      </ModalContext.Provider>
    </>
  );
}

export const usePopup = () => useContext(ModalContext);
