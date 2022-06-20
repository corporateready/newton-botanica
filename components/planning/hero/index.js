import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import hero__bg from "../../../public/static/planning-page/planning-hero-bg.webp";

export default function index() {
  return (
    <>
      <div className={styles.hero__section}>
        <div className={styles.hero__bg}>
          <Image
            src={hero__bg}
            height={751}
            width={1170}
            objectFit="cover"
            priority
            alt="home background"
          />
        </div>
        <div className={styles.hero__bg_mobile}>
          <Image
            src={hero__bg}
            objectFit="cover"
            priority
            alt="home background"
          />
        </div>
        <article className={styles.hero__inner}>
          <h1 className={styles.hero__title}>
            ALEGE UN REFUGIU URBAN<span className={styles.separotor}></span> MAI APROAPE DE NATURĂ,
            <span className={styles.separotor__hide}></span> ALEGE
            <span className={styles.separotor}></span>
            <span className={styles.hero__text_decor}>
              NEWTON HOUSE GRĂDINA BOTANICĂ
            </span>
          </h1>
          <div className={styles.hero__buttons}>
            <Link href="/about">
              <a className={styles.button__about}>SOLICITĂ <br/> PREZENTAREA PDF</a>
            </Link>
            <Link href="/planning">
              <a className={styles.button__planning}>
                REZERVĂ TIMPUL PENTRU
                <br />A FI TELEFONAT
              </a>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
