import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import header__logo from "../../../public/static/home-page/header-logo.svg";
import phone__icon from "../../../public/static/home-page/phone.svg";

export default function index() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <Link href="/">
            <a className={styles.header__logo}>
              <Image
                src={header__logo}
                height={45}
                width={90}
                priority
                alt="home header logo"
              />
            </a>
          </Link>

          <Link href="tel:+3736082020">
            <a className={styles.header__phone_link}>
              <div className={styles.header__phone_icon}>
                <Image
                  src={phone__icon}
                  height={19}
                  width={20}
                  alt="home header phone icon"
                />
              </div>
              <span className={styles.header__phone_link_number}>
                + 373 60 80 20 20
              </span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
