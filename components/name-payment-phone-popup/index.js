import React from "react";
import styles from "./name-phone-popup.module.scss";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import close__button from "../../public/static/planning-page/close-button-popup.svg";
import PhoneInput from "react-phone-input-2";

import { LangContext } from "../../pages/_app";

export default function Index({ hanlerClosePaymentPopup }) {
  const { isToggleLang } = React.useContext(LangContext);

  const [isSend, setIsSend] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [isPhoneValid, setIsPhoneValid] = React.useState(false)

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
        From: "solicită ofertă",
        Numele: nameValue,
        Telefon: phoneValue,
      }),
    })
      .then((response) => {
        response.json();
        setIsSend(true);
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
    if (isSend) {
      setNameValue("");
      setPhoneValue("");
    }
  }, [isSend]);

  React.useEffect(() => {
    if (isSend) {
      Router.push("/thanks");
    }
  }, [isSend]);

  return (
    <>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div className={styles.offer__inner} style={{transform:"none!important"}}>

            <button
              type="button"
              className={styles.offer__button_close}
              onClick={hanlerClosePaymentPopup}
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
              Получи больше информации перед тем,<br />
              как выбрать квартиру своей мечты!
            </h2>
          )}

            {isToggleLang === "ro"
            ? <h3 className={styles.offer__subtitle}>
              Introdu datele de contact corect, iar noi te vom contacta <br />
              pentru a-ți prezenta detalii despre proiect:
            </h3>
            : <h3 className={styles.offer__subtitle}>
            Оставь свои контактные данные, мы перезвоним и <br />
            предоставим подробную информацию о проекте:
          </h3>}

            <form
              id="about__form_send_payment_btn"
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
                placeholder={isToggleLang === "ro" ? "NUMELE, PRENUMELE" : "ИМЯ, ФАМИЛИЯ"}
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
                  border:
                    phoneValue.length !== 11
                      ? " 1px solid red"
                      : " 1px solid green",
                }}
                placeholder="+373-XXX-XXX-XX"
                country={"md"}
                value={phoneValue}
                onChange={setPhoneValue}
                masks={{ md: "(...) ...-.." }}
                isValid={(value, country) => {
                  if (
                    phoneValue.length >= 4 &&
                    value.match(/0/) &&
                    country.name === "Moldova"
                  ) {
                    setIsPhoneValid(true)
                    return isToggleLang === "ro" ? "fără prefixul zero în față" : "без префикса ноль в начале";
                  } else {
                    setIsPhoneValid(false)
                    return true;
                  }
                }}
              />
              {phoneValue.length < 11 && (
                <p className="text-xs text-red-400 pb-[2%]">
                  {isToggleLang === "ro"
                  ? "Exact 8 cifre, fără prefixul zero în față"
                  : "ровно 8 цифр, без префикса ноль в начале"}
                </p>
              )}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://botanica.newton.md/thanks"
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
