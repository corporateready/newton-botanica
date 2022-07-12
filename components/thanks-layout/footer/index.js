import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import footer__logo from "../../../public/static/footer/logo-footer.svg";
import phone__icon from "../../../public/static/footer/phone-icon.svg";
import loc__icon from "../../../public/static/footer/location.svg";
import mail__icon from "../../../public/static/footer/mail-icon.svg";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

export default function index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__inner}>
          <Link href="/">
            <a className={styles.footer__logo}>
              <Image
                src={footer__logo}
                height={79}
                width={171}
                priority
                alt="home header logo"
              />
            </a>
          </Link>

          <div className={styles.footer__socials}>
            <Link href={"/"}>
              <a className={styles.social__item}>
                <span className={styles.social__item_icon}>
                  <FiInstagram size={30} />
                </span>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.social__item}>
                <span className={styles.social__item_icon}>
                  <FaFacebookF size={30} />
                </span>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.social__item}>
                <span className={styles.social__item_icon_YT}>
                  <FaYoutube size={35} />
                </span>
              </a>
            </Link>
          </div>

          <div className={styles.footer__contact}>
            <div className={styles.footer__contact_item}>
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
            </div>
            <div className={styles.footer__contact_item}>
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
            </div>
            <div className={styles.footer__contact_item}>
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
                newton botanica@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footer__contact_mob}>
          <div className={styles.footer__contact_bottom}>
            <div className={styles.footer__contact_item}>
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
            </div>
            <div className={styles.footer__contact_item}>
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
            </div>
            <div className={styles.footer__contact_item}>
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
                newton botanica@gmail.com
              </span>
            </div>
          </div>
        </div>
        <p className={styles.footer__bottom}>
          Toate drepturile rezervate NEWTON HOUSE GRĂDINA BOTANICĂ © 2022.
        </p>
      </div>
    </footer>
  );
}
