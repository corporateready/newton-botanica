import React from "react";
import styles from "./Payment.module.scss";
import Link from "next/link";
import Image from "next/image";
import payment__image from "../../../public/static/planning/payment-image-about.svg";
import payment__image_mob from "../../../public/static/planning/payment-image-mob.svg";
import logo__icon from "../../../public/static/planning-page/payment/logo-icon.svg";

import Messenger from "../../../components/messengers";

export default function index() {
  return (
    <>
      <div className={styles.payment__section}>
        <div className={styles.payment__wrapper}>
          <div className={styles.payment__inner}>
            <div className={styles.image__side}>
              <div className={styles.image__side_img}>
                <Image
                  src={payment__image}
                  height={267}
                  width={507}
                  priority
                  alt=""
                />
              </div>
              <div className={styles.image__side_img_mob}>
                <Image
                  src={payment__image_mob}
                  height={276}
                  width={513}
                  priority
                  alt=""
                />
              </div>
              <button className={styles.location__detail}>
              Cere detalii despre metoda de achitare 
              </button>
            </div>
            <div className={styles.description__side}>
              <div className={styles.description__item}>
                <div className={styles.description__icon}>
                  <Image
                    src={logo__icon}
                    height={32}
                    width={25}
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
                    height={32}
                    width={25}
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
                    height={32}
                    width={25}
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
                    height={32}
                    width={25}
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
                    height={32}
                    width={25}
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
                    height={32}
                    width={25}
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
                    height={32}
                    width={25}
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
                    height={32}
                    width={25}
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
                    height={32}
                    width={25}
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.description__text}>
                  CU AVANS DE MINIM <span>1000 €</span>
                </p>
              </div>
            </div>
            <Link href="/planning">
              <a className={styles.location__detail_mobile}>
              Cere detalii despre metoda de achitare 
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.payment__messengers}>
          <Messenger />
        </div>
      </div>
    </>
  );
}
