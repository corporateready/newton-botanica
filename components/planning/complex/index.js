import React from "react";
import styles from "./Complex.module.scss";
import Link from "next/link";
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/news/january/jan-1.jpeg";
import cart from "../../../public/static/planning-page/complex/cart-icon.svg";

export default function index() {
  return (
    <>
      <div className={styles.complex__section}>
        <div className={styles.complex__wrapper}>
          <h1 className={styles.complex__title}>
            Cel mai modern complex rezidențial<p className={styles.separator}></p> de la Botanica
            <span></span>
          </h1>
          <div className={styles.complex__inner}>
            <div className={styles.complex__grids}>
              <Complex1 />
              {/* <Complex2 /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Complex1() {
  return (
    <div className={styles.complex__grid_month}>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>
            Centru comercial
            <br />
            la Parter și Etajul 1
          </p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
      <div className={styles.complex__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={223} width={335} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description_icon}>
            <Image src={cart} height={33} width={39} priority alt="" />
          </div>
          <p className={styles.item__description_text}>Mediu fără bariere</p>
        </div>
      </div>
    </div>
  );
}
function Complex2() {
  return (
    <div className={styles.news__grid_month}>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={333} width={499} priority alt="" />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={333} width={499} priority alt="" />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={333} width={499} priority alt="" />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={333} width={499} priority alt="" />
        </div>
      </div>
    </div>
  );
}
