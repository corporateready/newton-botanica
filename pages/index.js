import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import header__home_logo from "../public/static/home-page/header-logo.svg";
import image__side from "../public/static/home-page/home-image-inner.svg";
import image__side_mobile from "../public/static/home-page/home-image-inner-mobile.svg";
import close__button from "../public/static/planning-page/close-button-popup.svg";

import phone__icon from "../public/static/home-page/phone.svg";
import Messengers from "../components/messengers";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Home() {
  const [isOfferOpen, setIsOfferOpen] = React.useState(false);

  const hanlerClosePopup = () => {
    setIsOfferOpen(false);
  };
  return (
    <>
      <Head>
      
      {/* <link
          rel="preload"
          href="Home.module.scss"
          as="style"
          onLoad="rel='stylesheet'"
        /> */}
        <link rel="preconnect" href="http://localhost:3000/" />
        <title>Newton House Grădina Botanica</title>
        <meta
          name="description"
          content="Apartamente în rate, pe 5 ani, cu doar 10% prima rată, 0% dobândă,"
        />
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
                    + 373 608 020 20
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </header>

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

              <div className={styles.desktop__messengers}>
                <Messengers />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mobile__messengers}>
          <Messengers />
        </div>

        {isOfferOpen && (
          <OfferPopUpSending hanlerClosePopup={hanlerClosePopup} />
        )}
      </div>
    </>
  );
}

function OfferPopUpSending({ hanlerClosePopup }) {
  const [isSend, setIsSend] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        numele: nameValue,
        email: emailValue,
      }),
    })
      .then((response) => {
        response.json();
        setIsSend(true);
      })
      .then((data) => data)
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    if (isSend) {
      console.log(isSend);
      Router.push("/thanks");
    }
  }, [isSend]);

  return (
    <>
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
                height={13}
                width={13}
                alt="close button icon"
              />
            </button>
            <h2 className={styles.offer__title}>
              OBȚINE CONSULTAȚIA MANAGERULUI
            </h2>
            <h3 className={styles.offer__subtitle}>
              Expediază-ne datele de contact și revenim cu un apel în curând
            </h3>

            <form
              className={styles.offer__form}
              action="https://formsubmit.co/nev30inbox@gmail.com"
              method="POST"
              onSubmit={useHandlerOnClickToSend}
            >
              <input
                type="text"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder="NUMELE, PRENUMELE"
                required
              />
              <PhoneInput
                className={styles.input}
                style={{
                  height: "auto",
                  width: "100%",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
                placeholder="Numărul de telefon"
                country={"md"}
                value={emailValue}
                onChange={setEmailValue}
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />
              <button type="submit" className={styles.button__sending}>
                AFLĂ DETALII
              </button>
            </form>

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
    </>
  );
}
