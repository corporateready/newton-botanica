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
import { motion } from "framer-motion";

export default function Home() {
  React.useEffect(() => {
    (function (w, d, s, h, id) {
      w.roistatProjectId = id;
      w.roistatHost = h;
      var p = d.location.protocol == "https:" ? "https://" : "http://";
      var u = /^.roistat_visit=[^;]+(.)?$/.test(d.cookie)
        ? "/dist/module.js"
        : "/api/site/1.0/" +
          id +
          "/init?referrer=" +
          encodeURIComponent(d.location.href);
      var js = d.createElement(s);
      js.charset = "UTF-8";
      js.async = 1;
      js.src = p + h + u;
      var js2 = d.getElementsByTagName(s)[0];
      js2.parentNode.insertBefore(js, js2);
    })(
      window,
      document,
      "script",
      "cloud.roistat.com",
      "e39442a8581e616d741b8f0786da960e"
    );
  }, []);

  React.useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-KRLSSZN");
  }, []);

  const [isAboutPopUp, setIsAboutPopUp] = React.useState(false);
  const [isPlanningPopUp, setIsPlanningPopUp] = React.useState(false);
  const [isOfferOpen, setIsOfferOpen] = React.useState(false);

  const handlerAboutClick = () => {
    setIsAboutPopUp(true);
  };

  const hanlerCloseAboutPopup = () => {
    setIsAboutPopUp(false);
  };

  const handlerPlanningClick = () => {
    setIsPlanningPopUp(true);
  };

  const hanlerClosePlanningPopup = () => {
    setIsPlanningPopUp(false);
  };

  const hanlerClosePopup = () => {
    setIsOfferOpen(false);
  };
  return (
    <>
      <Head>
        <title>
          NEWTON HOUSE Grădina Botanică | Apartamente de vanzare în Chisinău
        </title>
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

              <div className={styles.phone__number_wrapper}>
                <motion.div 
                className={styles.phone__icon}
                initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5}}
                >
                  <Image
                    src={phone__icon}
                    height={23}
                    width={24}
                    alt="home header phone icon"
                  />
                </motion.div>
                <a
                  href="tel:+37372608020"
                  className={styles.header__phone_link_number}
                ></a>
              </div>
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
                  <button
                    className={styles.button__about}
                    onClick={handlerAboutClick}
                  >
                    Despre CASĂ
                  </button>
                  <a
                    className={styles.button__planning}
                    onClick={handlerPlanningClick}
                  >
                    PLANIMETRII
                  </a>
                </div>

                <button
                  className={styles.button__send}
                  onClick={() => setIsOfferOpen(true)}
                >
                  vezi detalii
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

        {isAboutPopUp && (
          <AboutPopUpSending hanlerCloseAboutPopup={hanlerCloseAboutPopup} />
        )}

        {isPlanningPopUp && (
          <PlanningPopUpSending
            hanlerClosePlanningPopup={hanlerClosePlanningPopup}
          />
        )}
      </div>
    </>
  );
}

export function OfferPopUpSending({ hanlerClosePopup }) {
  const [isSend, setIsSend] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();
    setSpinner(true);
    fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        From: "AFLĂ DETALII",
        Numele: nameValue.toUpperCase(),
        Telefon: phoneValue,
      }),
    })
      .then((response) => {
        response.json();
        setIsSend(true);
      })
      .then((data) => data)
      .then(function () {
        setSpinner(false);
      })
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
              id="home__form_send_details_btn"
              className={styles.offer__form}
              action="https://formsubmit.co/nev30inbox@gmail.com"
              method="POST"
              onSubmit={useHandlerOnClickToSend}
            >
              <input
                type="text"
                name="name"
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
                value={phoneValue}
                onChange={setPhoneValue}
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://main--mellifluous-queijadas-43440a.netlify.app/thanks"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />
              <button type="submit" className={styles.button__sending}>
                {spinner ? "trimiteri..." : "AFLĂ DETALII"}
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

function PlanningPopUpSending({ hanlerClosePlanningPopup }) {
  const [isPlanningSend, setIsPlanningSend] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();
    setSpinner(true);
    fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        From: "Plasează solicitarea",
        Numele: nameValue.toUpperCase(),
        Telefon: phoneValue,
      }),
    })
      .then((response) => {
        response.json();
        setIsPlanningSend(true);
      })
      .then((data) => data)
      .then(function () {
        setSpinner(false);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    if (isPlanningSend) {
      Router.push("/about");
    }
  }, [isPlanningSend]);

  return (
    <>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div className={styles.offer__inner}>
            <button
              type="button"
              className={styles.offer__button_close}
              onClick={hanlerClosePlanningPopup}
            >
              <Image
                src={close__button}
                height={13}
                width={13}
                alt="close button icon"
              />
            </button>
            <h2 className={styles.offer__title}>
              Vrei să vizualizezi <br />
              planimetriile disponibile?
            </h2>
            <h3 className={styles.offer__subtitle}>
              Expediază-ne datele de contact și managerul revine <br />
              cu informații suplimentare:
            </h3>

            <form
              id="home__form_send_planning_btn"
              className={styles.offer__form}
              action="https://formsubmit.co/nev30inbox@gmail.com"
              method="POST"
              onSubmit={useHandlerOnClickToSend}
            >
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder="NUMELE, PRENUMELE"
                required
              />
              <PhoneInput
                className={styles.input}
                name="phone"
                style={{
                  height: "auto",
                  width: "100%",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
                placeholder="Numărul de telefon"
                country={"md"}
                value={phoneValue}
                onChange={setPhoneValue}
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/about"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />
              <button type="submit" className={styles.button__sending}>
                {spinner ? "trimitere..." : "Plasează solicitarea"}
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

function AboutPopUpSending({ hanlerCloseAboutPopup }) {
  const [isAboutSend, setIsAboutSend] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();
    setSpinner(true);
    fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        From: "Vreau să fiu contactat",
        Numele: nameValue,
        Telefon: phoneValue,
      }),
    })
      .then((response) => {
        response.json();
        setIsAboutSend(true);
      })
      .then((data) => {
        data;
      })
      .then(function () {
        setSpinner(false);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    if (isAboutSend) {
      console.log(isAboutSend);
      Router.push("/about");
    }
  }, [isAboutSend]);

  return (
    <>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div className={styles.offer__inner}>
            <button
              type="button"
              className={styles.offer__button_close}
              onClick={hanlerCloseAboutPopup}
            >
              <Image
                src={close__button}
                height={13}
                width={13}
                alt="close button icon"
              />
            </button>
            <h2 className={styles.offer__title}>
              Află mai multe informații înainte <br />
              de a-ți alege locuința de vis!
            </h2>
            <h3 className={styles.offer__subtitle}>
              Introdu datele de contact corect, iar noi te vom contacta <br />
              pentru a-ți prezenta detalii despre proiect:
            </h3>

            <form
              className={styles.offer__form}
              action="https://formsubmit.co/nev30inbox@gmail.com"
              method="POST"
              onSubmit={useHandlerOnClickToSend}
              id="home__form_send_about_btn"
            >
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder="NUMELE, PRENUMELE"
                required
              />
              <PhoneInput
                className={styles.input}
                name="phone"
                style={{
                  height: "auto",
                  width: "100%",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
                placeholder="Numărul de telefon"
                country={"md"}
                value={phoneValue}
                onChange={setPhoneValue}
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/about/"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />
              <button type="submit" className={styles.button__sending}>
                {spinner ? "trimitere..." : "Vreau să fiu contactat"}
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
