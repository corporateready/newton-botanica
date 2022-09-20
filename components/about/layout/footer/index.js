import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import footer__logo from "../../../../public/static/footer/logo-footer.svg";
import phone__icon from "../../../../public/static/footer/phone-icon.svg";
import loc__icon from "../../../../public/static/footer/location.svg";
import mail__icon from "../../../../public/static/footer/mail-icon.svg";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

export default function index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__logo}>
            <Image
              src={footer__logo}
              height={86}
              width={171}
              priority
              alt="home header logo"
            />
          </div>
          <div className={styles.footer__socials}>
            <Link href={"https://www.instagram.com/newtonhouse.md/"}>
              <a className={styles.social__item}>
                <span className={styles.social__item_icon}>
                  <FiInstagram size={24} />
                </span>
              </a>
            </Link>
            <Link href={"https://www.facebook.com/NewtonHouse.md/"}>
              <a className={styles.social__item}>
                <span className={styles.social__item_icon}>
                  <FaFacebookF size={24} />
                </span>
              </a>
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCEOJ9KTW-kbMUnb_r_wVLbQ"}
            >
              <a className={styles.social__item}>
                <span className={styles.social__item_icon_YT}>
                  <FaYoutube size={24} />
                </span>
              </a>
            </Link>
          </div>
          <div className={styles.footer__contact}>
            <a className={styles.footer__contact_item} href="tel:37360802020">
              <span className={styles.footer__contact_icon}>
                <Image
                  src={phone__icon}
                  height={24}
                  width={24}
                  priority
                  alt="footer phone icon"
                />
              </span>
              <span className={styles.footer__contact_text}>060 80 20 20</span>
            </a>
            <Link href="https://www.google.com/maps/dir/47.7626368,28.9898496/newton+house+google+map+location/@47.3618199,28.3867357,9.42z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40c97dc3398a2559:0x71d4f48a93ea6096!2m2!1d28.8776605!2d46.9768761">
            <a className={styles.footer__contact_item}>
              <span className={styles.footer__contact_icon}>
                <Image
                  src={loc__icon}
                  height={24}
                  width={24}
                  priority
                  alt="footer phone icon"
                />
              </span>
              <span className={styles.footer__contact_text}>
                str. Grădina Botanică, 18
              </span>
            </a>
            </Link>
            <a className={styles.footer__contact_item} href="mailto:botanica@mail.com">
              <span className={styles.footer__contact_icon}>
                <Image
                  src={mail__icon}
                  height={24}
                  width={24}
                  priority
                  alt="footer phone icon"
                />
              </span>
              <span className={styles.footer__contact_text}>
              salut@newton.md
              </span>
            </a>
          </div>
        </div>
        <div className={styles.footer__contact_mob}>
            <a className={styles.footer__contact_item} href="tel:37360802020">
              <span className={styles.footer__contact_icon}>
                <Image
                  src={phone__icon}
                  height={24}
                  width={24}
                  priority
                  alt="footer phone icon"
                />
              </span>
              <span className={styles.footer__contact_text}>060 80 20 20</span>
            </a>
            <Link href="https://www.google.com/maps/dir/47.7626368,28.9898496/newton+house+google+map+location/@47.3618199,28.3867357,9.42z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40c97dc3398a2559:0x71d4f48a93ea6096!2m2!1d28.8776605!2d46.9768761">
            <a className={styles.footer__contact_item}>
              <span className={styles.footer__contact_icon}>
                <Image
                  src={loc__icon}
                  height={24}
                  width={24}
                  priority
                  alt="footer phone icon"
                />
              </span>
              <span className={styles.footer__contact_text}>
                str. Grădina Botanică, 18
              </span>
            </a>
            </Link>
          </div>
        <p className={styles.footer__bottom}>
          Toate drepturile rezervate NEWTON HOUSE GRĂDINA BOTANICĂ © 2022.
        </p>
      </div>
    </footer>
  );
}
