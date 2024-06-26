import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Router from "next/router";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import close__button from "../public/static/planning-page/close-button-popup.svg";

import Messengers from "../components/messengers";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";

import Header from "../components/about/layout/header";

import { LangContext } from "../pages/_app";

const ImageRo = dynamic(() => import("../components/hero/image-ro"), {
  ssr: false,
});

const ImageRu = dynamic(() => import("../components/hero/image-ru"), {
  ssr: false,
});

const ImageDeskRo = dynamic(() => import("../components/hero/image-desk-ro"), {
  ssr: false,
});

const ImageDeskRu = dynamic(() => import("../components/hero/image-desk-ru"), {
  ssr: false,
});

export default function Home() {
  const { isToggleLang, setToggleLang } = React.useContext(LangContext);

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
        <script></script>
      </Head>

      <div className={styles.home__screen}>
        <Header />

        <div className={styles.home}>
          <div className={styles.container}>
            <div className={styles.inner}>
              {isToggleLang === "ro" ? <ImageDeskRo /> : <ImageDeskRu />}

              {isToggleLang === "ro" ? <ImageRo /> : <ImageRu />}

              <div className={styles.navigate__side}>
                <div className={styles.buttons__up}>
                  <button
                    className={styles.button__about}
                    onClick={handlerAboutClick}
                  >
                    {isToggleLang === "ro" ? "Despre CASĂ" : "О проекте"}
                  </button>
                  <a
                    className={styles.button__planning}
                    onClick={handlerPlanningClick}
                  >
                    {isToggleLang === "ro" ? "PLANIMETRII" : "Планировки"}
                  </a>
                </div>

                <button
                  className={styles.button__send}
                  onClick={() => setIsOfferOpen(true)}
                >
                  {isToggleLang === "ro" ? "vezi detalii" : "Подробности"}
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
          <OfferPopUpSending
            hanlerClosePopup={hanlerClosePopup}
            isToggleLang={isToggleLang}
          />
        )}

        {isAboutPopUp && (
          <AboutPopUpSending
            hanlerCloseAboutPopup={hanlerCloseAboutPopup}
            isToggleLang={isToggleLang}
          />
        )}

        {isPlanningPopUp && (
          <PlanningPopUpSending
            hanlerClosePlanningPopup={hanlerClosePlanningPopup}
            isToggleLang={isToggleLang}
          />
        )}
      </div>
    </>
  );
}

export function OfferPopUpSending({ hanlerClosePopup, isToggleLang }) {
  const [isSend, setIsSend] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();
    setSpinner(true);
    fetch("https://formsubmit.co/ajax/salut@newton.md", {
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
      Router.push("/thanks");
    }
  }, [isSend]);

  return (
    <>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div
            className={styles.offer__inner}
            style={{ transform: "none!important" }}
          >
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
            {isToggleLang === "ro" ? (
              <h2 className={styles.offer__title_}>
                OBȚINE CONSULTAȚIA MANAGERULUI
              </h2>
            ) : (
              <h2 className={styles.offer__title_}>
                Получи консультацию менеджера
              </h2>
            )}

            {isToggleLang === "ro" ? (
              <h3 className={styles.offer__subtitle}>
                Expediază-ne datele de contact și revenim cu un apel în curând
              </h3>
            ) : (
              <h3 className={styles.offer__subtitle}>
                Отправь нам свои контактные данные <br />и мы свяжемся с тобой в
                ближайшее время
              </h3>
            )}

            <form
              id="home__form_send_details_btn"
              className={styles.offer__form}
              action="https://formsubmit.co/salut@newton.md"
              method="POST"
              onSubmit={useHandlerOnClickToSend}
            >
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder={
                  isToggleLang === "ro" ? "NUMELE, PRENUMELE" : "ИМЯ, ФАМИЛИЯ"
                }
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
                  borderRadius: 0,
                  border: 0,
                }}
                placeholder="+373-XXX-XXX-XX"
                country={"md"}
                value={phoneValue}
                onChange={setPhoneValue}
                masks={{ md: "(...) ...-.." }}
                isValid={(value, country) => {
                  if (
                    phoneValue.length >= 4 &&
                    phoneValue[3] === "0" &&
                    phoneValue[3] !== undefined &&
                    country.name === "Moldova"
                  ) {
                    setIsPhoneValid(true);
                    return isToggleLang === "ro"
                      ? "fără prefixul zero în față"
                      : "без префикса ноль в начале";
                  } else {
                    setIsPhoneValid(false);
                    return true;
                  }
                }}
                enableLongNumbers={true}
              />
              {phoneValue.length < 11 &&
                (isToggleLang === "ro" ? (
                  <p className="text-xs text-red-400 pb-[2%]">
                    Exact 8 cifre, fără prefixul zero în față
                  </p>
                ) : (
                  <p className="text-xs text-red-400 pb-[2%]">
                    ровно 8 цифр, без префикса ноль в начале
                  </p>
                ))}

              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://botanica.newton.md/about"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />

              <button
                type="submit"
                className={styles.button__sending}
                disabled={
                  phoneValue.length < 11 ||
                  nameValue.length < 3 ||
                  isPhoneValid ||
                  spinner ||
                  isSend
                }
              >
                {spinner
                  ? isToggleLang === "ro"
                    ? "trimitere..."
                    : "Отправляется..."
                  : isToggleLang === "ro"
                  ? "AFLĂ DETALII"
                  : "Узнать подробности"}
              </button>
            </form>

            <div className={styles.terms__policy}>
              <Link href="/terms">
                <a className={styles.terms}>
                  {isToggleLang === "ro"
                    ? "Terms and Conditions"
                    : "Условия и положения"}{" "}
                </a>
              </Link>
              {isToggleLang === "ro" ? "and" : "и"}
              <Link href="/policy">
                <a className={styles.policy}>
                  {" "}
                  {isToggleLang === "ro"
                    ? "Privacy Policy"
                    : "Конфиденциальность"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PlanningPopUpSending({ hanlerClosePlanningPopup, isToggleLang }) {
  const [isPlanningSend, setIsPlanningSend] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();
    setSpinner(true);
    fetch("https://formsubmit.co/ajax/salut@newton.md", {
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
          <div
            className={styles.offer__inner}
            style={{ transform: "none!important" }}
          >
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
            {isToggleLang === "ro" ? (
              <h2 className={styles.offer__title_}>
                Vrei să vizualizezi <br />
                planimetriile disponibile?
              </h2>
            ) : (
              <h2 className={styles.offer__title_}>
                Хочешь увидеть <br />
                доступные планировки?
              </h2>
            )}
            {isToggleLang === "ro" ? (
              <h3 className={styles.offer__subtitle}>
                Expediază-ne datele de contact și managerul revine <br />
                cu informații suplimentare:
              </h3>
            ) : (
              <h3 className={styles.offer__subtitle}>
                Отправь нам контактные данные и менеджер свяжется с тобой,
                <br /> чтобы предоставить дополнительную информацию:
              </h3>
            )}

            <form
              id="home__form_send_planning_btn"
              className={styles.offer__form}
              action="https://formsubmit.co/salut@newton.md"
              method="POST"
              onSubmit={useHandlerOnClickToSend}
            >
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder={
                  isToggleLang === "ro" ? "NUMELE, PRENUMELE" : "ИМЯ, ФАМИЛИЯ"
                }
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
                  borderRadius: "3px",
                  border:0,
                }}
                placeholder="+373-XXX-XXX-XX"
                country={"md"}
                value={phoneValue}
                onChange={setPhoneValue}
                masks={{ md: "(...) ...-.." }}
                isValid={(value, country) => {
                  if (
                    phoneValue.length >= 4 &&
                    phoneValue[3] === "0" &&
                    phoneValue[3] !== undefined &&
                    country.name === "Moldova"
                  ) {
                    setIsPhoneValid(true);
                    return isToggleLang === "ro"
                      ? "fără prefixul zero în față"
                      : "без префикса ноль в начале";
                  } else {
                    setIsPhoneValid(false);
                    return true;
                  }
                }}
                enableLongNumbers={true}
              />
              {phoneValue.length < 11 &&
                (isToggleLang === "ro" ? (
                  <p className="text-xs text-red-400 pb-[2%]">
                    Exact 8 cifre, fără prefixul zero în față
                  </p>
                ) : (
                  <p className="text-xs text-red-400 pb-[2%]">
                    ровно 8 цифр, без префикса ноль в начале
                  </p>
                ))}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://botanica.newton.md/about"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />
              <button
                type="submit"
                className={styles.button__sending}
                disabled={
                  phoneValue.length < 11 ||
                  nameValue.length < 3 ||
                  isPhoneValid ||
                  spinner ||
                  isPlanningSend
                }
              >
                {spinner
                  ? isToggleLang === "ro"
                    ? "trimitere..."
                    : "Отправляется..."
                  : isToggleLang === "ro"
                  ? "Plasează solicitarea"
                  : "Оставить заявку"}
              </button>
            </form>

            <div className={styles.terms__policy}>
              <Link href="/terms">
                <a className={styles.terms}>
                  {isToggleLang === "ro"
                    ? "Terms and Conditions"
                    : "Условия и положения"}{" "}
                </a>
              </Link>
              {isToggleLang === "ro" ? "and" : "и"}
              <Link href="/policy">
                <a className={styles.policy}>
                  {" "}
                  {isToggleLang === "ro"
                    ? "Privacy Policy"
                    : "Конфиденциальность"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPopUpSending({ hanlerCloseAboutPopup, isToggleLang }) {
  const [isAboutSend, setIsAboutSend] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();
    setSpinner(true);
    fetch("https://formsubmit.co/ajax/salut@newton.md", {
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
      Router.push("/about");
    }
  }, [isAboutSend]);

  return (
    <>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div
            className={styles.offer__inner}
            style={{ transform: "none!important" }}
          >
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

            {isToggleLang === "ro" ? (
              <h2 className={styles.offer__title}>
                Află mai multe informații înainte <br />
                de a-ți alege locuința de vis!
              </h2>
            ) : (
              <h2 className={styles.offer__title}>
                Получи больше информации перед тем, как выбрать квартиру своей
                мечты!
              </h2>
            )}

            {isToggleLang === "ro" ? (
              <h3 className={styles.offer__subtitle}>
                Introdu datele de contact corect, iar noi te vom contacta <br />
                pentru a-ți prezenta detalii despre proiect:
              </h3>
            ) : (
              <h3 className={styles.offer__subtitle}>
                Оставь свои контактные данные, мы перезвоним и предоставим
                <br />
                подробную информацию о проекте:
              </h3>
            )}

            <form
              className={styles.offer__form}
              action="https://formsubmit.co/salut@newton.md"
              method="POST"
              onSubmit={useHandlerOnClickToSend}
              id="home__form_send_about_btn"
            >
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder={
                  isToggleLang === "ro" ? "NUMELE, PRENUMELE" : "имя фамилия"
                }
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
                  borderRadius: "3px",
                  border:0,
                }}
                placeholder="+373-XXX-XX-XXX"
                country={"md"}
                value={phoneValue}
                onChange={setPhoneValue}
                masks={{ md: "(...) ...-.." }}
                isValid={(value, country) => {
                  console.log("value ", value);
                  console.log("phoneValue ", phoneValue[3]);
                  if (
                    phoneValue.length >= 4 &&
                    phoneValue[3] === "0" &&
                    phoneValue[3] !== undefined &&
                    country.name === "Moldova"
                  ) {
                    setIsPhoneValid(true);
                    return isToggleLang === "ro"
                      ? "fără prefixul zero în față"
                      : "без префикса ноль в начале";
                  } else {
                    setIsPhoneValid(false);
                    return true;
                  }
                }}
                enableLongNumbers={true}
              />
              {phoneValue.length < 11 &&
                (isToggleLang === "ro" ? (
                  <p className="text-xs text-red-400 pb-[2%]">
                    Exact 8 cifre, fără prefixul zero în față
                  </p>
                ) : (
                  <p className="text-xs text-red-400 pb-[2%]">
                    ровно 8 цифр, без префикса ноль в начале
                  </p>
                ))}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://botanica.newton.md/about"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />
              <button
                type="submit"
                className={styles.button__sending}
                disabled={
                  phoneValue.length < 11 ||
                  nameValue.length < 3 ||
                  isPhoneValid ||
                  spinner ||
                  isAboutSend
                }
              >
                {spinner
                  ? isToggleLang === "ro"
                    ? "trimitere..."
                    : "Отправляется..."
                  : isToggleLang === "ro"
                  ? "Vreau să fiu contactat"
                  : "Хочу получить звонок"}
              </button>
            </form>

            <div className={styles.terms__policy}>
              <Link href="/terms">
                <a className={styles.terms}>
                  {isToggleLang === "ro"
                    ? "Terms and Conditions"
                    : "Условия и положения"}{" "}
                </a>
              </Link>
              {isToggleLang === "ro" ? "and" : "и"}
              <Link href="/policy">
                <a className={styles.policy}>
                  {" "}
                  {isToggleLang === "ro"
                    ? "Privacy Policy"
                    : "Конфиденциальность"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
