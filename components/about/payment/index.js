import React from "react";
import styles from "./Payment.module.scss";
import Link from "next/link";
import Image from "next/image";
import payment__image from "../../../public/static/planning-page/payment/payment-image.svg";
import logo__icon from "../../../public/static/planning-page/payment/logo-icon.svg";
import leaf_1 from "../../../public/static/planning-page/payment/leaf-t-l.svg";
import leaf_2 from "../../../public/static/planning-page/payment/leaf-t-r.svg";
import leaf_3 from "../../../public/static/planning-page/payment/leaf-b-l.svg";
import leaf_4 from "../../../public/static/planning-page/payment/leaf-b-r.svg";
import leaf_1__mob from "../../../public/static/planning-page/payment/leaf-t-l-mob.svg";
import leaf_2__mob from "../../../public/static/planning-page/payment/leaf-t-r-mob.png";
import leaf_3__mob from "../../../public/static/planning-page/payment/leaf-b-r.svg";
import leaf_4__mob from "../../../public/static/planning-page/payment/leaf-b-r.svg";
import leaf_5__mob from "../../../public/static/planning-page/payment/leaf-b-l-mob.svg";

export default function index({ isOpen, setIsOpen }) {
  const hanlerOpenPopup = () => {
    setIsOpen(true);
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
                onClick={hanlerOpenPopup}
              >
                SOLICITĂ OFERTA
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
            <Link href="/about">
              <a className={styles.location__detail_mobile}>SOLICITĂ OFERTA</a>
            </Link>
          </div>
        </div>
        <div className={styles.leaf}>
          <Image
            src={leaf_1}
            height={376}
            width={406}
            sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
            priority
            alt=""
          />
        </div>
        <div className={styles.leaf__mob}>
          <Image src={leaf_1__mob} height={376} width={406} priority alt="" />
        </div>
        <div className={styles.leaf__2}>
          <Image src={leaf_2} height={376} width={406} priority alt="" />
        </div>
        <div className={styles.leaf_2__mob}>
          <Image src={leaf_2__mob} height={376} width={406} priority alt="" />
        </div>
        <div className={styles.leaf__3}>
          <Image src={leaf_3} height={376} width={406} priority alt="" />
        </div>
        <div className={styles.leaf_3__mob}>
          <Image src={leaf_3__mob} height={376} width={406} priority alt="" />
        </div>
        <div className={styles.leaf__4}>
          <Image src={leaf_4} height={376} width={406} priority alt="" />
        </div>
        <div className={styles.leaf_4__mob}>
          <Image src={leaf_4__mob} height={376} width={406} priority alt="" />
        </div>
        <div className={styles.leaf_5__mob}>
          <Image src={leaf_5__mob} height={276} width={306} priority alt="" />
        </div>
      </div>
    </>
  );
}
