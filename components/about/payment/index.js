import React from "react";
import styles from "./Payment.module.scss";
import Image from "next/image";
import payment__image from "../../../public/static/planning-page/payment/payment-image.svg";
import payment__image_ru from "../../../public/static/planning-page/payment/metoda-de-achitare-rus.svg";
import logo__icon from "../../../public/static/planning-page/payment/logo-icon.svg";

import leaf_1 from "../../../public/static/planning-page/payment/leaf-t-l-desk.png";
import leaf_2 from "../../../public/static/planning-page/payment/leaf-t-r-desk.png";
import leaf_4 from "../../../public/static/planning-page/payment/leaf-b-r-desk.png";
import leaf_3 from "../../../public/static/planning-page/payment/leaf-b-l-desk.png";

import leaf_4__mob from "../../../public/static/planning-page/payment/leaf-t-r-desk.png";
import leaf_5__mob from "../../../public/static/planning-page/payment/leaf-t-l-desk.png";

import { LangContext } from "../../../pages/_app";

export default function index({ setIsPaymentPopUp }) {
  const { isToggleLang } = React.useContext(LangContext);

  const hanlerIsOpenPopup = () => {
    setIsPaymentPopUp(true);
  };

  return (
    <>
      <div className={styles.payment__section}>
        <div className={styles.payment__wrapper}>
          <div className={styles.payment__inner}>

            <div className={styles.image__side}>
              <div className={styles.image__side_img}>
                <Image
                  src={isToggleLang==="ro" ? payment__image : payment__image_ru}
                  height={265}
                  width={507}
                  priority
                  alt=""
                />
              </div>
              <button
                className={styles.location__detail}
                onClick={hanlerIsOpenPopup}
              >
                {isToggleLang === "ro"
                  ? "solicită oferta"
                  : "Запросить предложение"}
              </button>
            </div>

            <div className={styles.description__side}>
              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={19}
                    width={15}
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.description__text}>
                  {isToggleLang === "ro"
                    ? "ÎN RATE DIRECT DE LA DEZVOLTATOR"
                    : "в рассрочку, от застройщика"}
                </p>
              </div>
              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={19}
                    width={15}
                    priority
                    alt=""
                  />
                </div>
                {isToggleLang === "ro" ? (
                  <p className={styles.description__text}>
                    PE UN TERMEN DE <span>5 ANI</span>
                  </p>
                ) : (
                  <p className={styles.description__text}>
                    сроком на <span>5 лет</span>
                  </p>
                )}
              </div>

              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={19}
                    width={15}
                    priority
                    alt=""
                  />
                </div>
                {isToggleLang === "ro" ? (
                  <p className={styles.description__text}>
                    CU <span>0% dobândă </span>
                  </p>
                ) : (
                  <p className={styles.description__text}>
                    под <span>0% годовых</span>
                  </p>
                )}
              </div>

              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={19}
                    width={15}
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.description__text}>
                  {isToggleLang === "ro"
                    ? "FĂRĂ CERTIFICAT DE SALARIU"
                    : "без справки о доходах"}
                </p>
              </div>
              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={19}
                    width={15}
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.description__text}>
                  {isToggleLang === "ro"
                    ? "DOAR CU BULETINUL"
                    : "только удостоверения личности"}
                </p>
              </div>
              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={19}
                    width={15}
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.description__text}>
                  {isToggleLang === "ro"
                    ? "FĂRĂ GAJ, TIMP DE O ORĂ"
                    : "без залога, в течение 1 часа"}
                </p>
              </div>
              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={19}
                    width={15}
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.description__text}>
                  {isToggleLang === "ro"
                    ? "FĂRĂ IMPLICAREA BĂNCII"
                    : "без привлечения банков"}
                </p>
              </div>
              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={19}
                    width={15}
                    priority
                    alt=""
                  />
                </div>
                {isToggleLang === "ro" ? (
                  <p className={styles.description__text}>
                    CU AVANS DE MINIM <span>1000 €</span>
                  </p>
                ) : (
                  <p className={styles.description__text}>
                    минимальный аванс <span>1000 €</span>
                  </p>
                )}
              </div>
            </div>

            <button
              className={styles.location__detail_mobile}
              onClick={hanlerIsOpenPopup}
            >
              {
                isToggleLang === "ro"
                ? "Solicită oferta"
                : "Запросить предложение"
              }
              
            </button>
          </div>
        </div>

        <div className={styles.leaf}>
          <Image
            src={leaf_1}
            layout="responsive"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf__2}>
          <Image
            src={leaf_2}
            layout="responsive"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf__3}>
          <Image
            src={leaf_3}
            layout="responsive"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf__4}>
          <Image
            src={leaf_4}
            layout="responsive"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf_4__mob}>
          <Image
            src={leaf_4__mob}
            layout="responsive"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf_5__mob}>
          <Image
            src={leaf_5__mob}
            layout="responsive"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>

      </div>
    </>
  );
}
