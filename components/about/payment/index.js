import React from "react";
import styles from "./Payment.module.scss";
import Image from "next/image";
import payment__image from "../../../public/static/planning-page/payment/payment-image.svg";
import logo__icon from "../../../public/static/planning-page/payment/logo-icon.svg";

import leaf_1 from "../../../public/static/planning-page/payment/leaf-t-l-desk.png";
import leaf_2 from "../../../public/static/planning-page/payment/leaf-t-r-desk.png";
import leaf_4 from "../../../public/static/planning-page/payment/leaf-b-r-desk.png";
import leaf_3 from "../../../public/static/planning-page/payment/leaf-b-l-desk.png";

import leaf_1__mob from "../../../public/static/planning-page/payment/leaf-t-l-mob.png";
import leaf_2__mob from "../../../public/static/planning-page/payment/leaf-t-r-mob.png";
import leaf_3__mob from "../../../public/static/planning-page/payment/leaf-c-r-mob.png";
import leaf_4__mob from "../../../public/static/planning-page/payment/leaf-b-r-mob.png";
import leaf_5__mob from "../../../public/static/planning-page/payment/leaf-b-l-mob.png";

export default function index({ setIsPaymentPopUp }) {

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
                  src={payment__image}
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
                solicită oferta
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
                  ÎN RATE DIRECT DE LA DEZVOLTATOR
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
                  PE UN TERMEN DE <span>5 ANI</span>
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
                  CU DOAR <span>10% PRIMA RATĂ</span>
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
                  CU <span>0% dobândă </span>
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
                  FĂRĂ CERTIFICAT DE SALARIU
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
                <p className={styles.description__text}>DOAR CU BULETINUL</p>
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
                  FĂRĂ GAJ, TIMP DE O ORĂ
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
                  FĂRĂ IMPLICAREA BĂNCII
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
                  CU AVANS DE MINIM <span>1000 €</span>
                </p>
              </div>
            </div>
              <button 
              className={styles.location__detail_mobile}
              onClick={hanlerIsOpenPopup}
              >
              Solicită oferta
              </button>
          </div>
        </div>
        <div className={styles.leaf}>
          <Image
            src={leaf_1}
            layout="intrinsic"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf__mob}>
          <Image
            src={leaf_1__mob}
            height={376}
            width={406}
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
            layout="intrinsic"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf_2__mob}>
          <Image
            src={leaf_2__mob}
            layout="intrinsic"
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
            layout="intrinsic"
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf_3__mob}>
          <Image
            src={leaf_3__mob}
            layout="intrinsic"
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
            layout="intrinsic"
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
            layout="intrinsic"
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
            layout="intrinsic"
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
