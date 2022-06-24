import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import header__home_logo from "../public/static/home-page/header-logo.svg";
import image__side from "../public/static/home-page/home-image-inner.svg";
import image__side_mobile from "../public/static/home-page/home-image-inner-mobile.svg";
import home__bg from "../public/static/home-page/background.webp";
import close__button from "../public/static/planning-page/close-button-popup.svg";

import phone__icon from "../public/static/home-page/phone.svg";
import Messengers from "../components/messengers";

export default function Home() {
  const [isOfferOpen, setIsOfferOpen] = React.useState(false);

  const hanlerClosePopup = () => {
    setIsOfferOpen(false);
  };
  return (
    <>
      <Head>
        <title>Newton House Grădina Botanica</title>
        <meta name="description" content="Apartamente în rate, pe 5 ani, cu doar 10% prima rată, 0% dobândă," />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home__screen}>
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.header__inner}>
              <Link href="/">
                <a className={styles.header__logo}>
                  <Image
                    src={header__home_logo}
                    height={54}
                    width={108}
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

        <div className={styles.home__bg}>
        </div>

        <div className={styles.home}>
          <div className={styles.container}>
            <div className={styles.inner}>
              <div className={styles.image__side}>
                <Image
                  src={image__side}
                  height={400}
                  width={536}
                  alt="home inner "
                  priority
                />
              </div>

              <div className={styles.image__side_mobile}>
                <Image
                  src={image__side_mobile}
                  height={466}
                  width={381}
                  alt="home inner mobile "
                  priority
                />
              </div>
              <div className={styles.navigate__side}>
                <div className={styles.buttons__up}>
                  <Link href="/about">
                    <a className={styles.button__about}>Despre CASĂ</a>
                  </Link>
                  <Link href="/planning">
                    <a className={styles.button__planning}>PLANIMETRII</a>
                  </Link>
                </div>

                <button
                  className={styles.button__send}
                  onClick={() => setIsOfferOpen(true)}
                >
                  SOLICITĂ OFERTA
                </button>
              </div>
            </div>
            <div className={styles.mobile__messengers}>
              <Messengers />
            </div>
          </div>
          <div className={styles.desktop__messengerrs}>
          <Messengers />
        </div>
        </div>
        

        {isOfferOpen && (
          <section className={styles.offer__section}>
            <div className={styles.offer__container}>
            <div className={styles.offer__inner}>
              <button
                type="button"
                className={styles.offer__button_close}
                onClick={hanlerClosePopup}
              >
                <Image
                  src={close__button}
                  height={24}
                  width={24}
                  alt="close button icon"
                />
              </button>
              <h2 className={styles.offer__title}>
                OBȚINE CONSULTAȚIA MANAGERULUI
              </h2>
              <h3 className={styles.offer__subtitle}>
                Expediază-ne datele de contact și revenim cu un apel în curând
              </h3>
              <form className={styles.offer__form}>
                <input type="email" placeholder="NUMELE, PRENUMELE" />
                <input type="text" placeholder="Numărul de telefon" />
              </form>
              <button type="button" className={styles.button__sending}>
                AFLĂ DETALII
              </button>
              <div className={styles.terms__policy}>
                <Link href="/terms">
                  <a className={styles.terms}>Terms and Conditions </a>
                </Link> 
                and
                <Link href="/policy">
                  <a className={styles.policy}> Privacy Policy</a>
                </Link>
              </div>
            </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
