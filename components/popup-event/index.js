import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./OfferPopUp.module.scss";
import Router from "next/router";
import close__button from "../../public/static/planning-page/close-button-popup.svg";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

import { LangContext } from "../../pages/_app";

export default function OfferPDFOpenSending({ handlerCloseEventPopup }) {
  const { isToggleLang } = React.useContext(LangContext);

  const [isSend, setIsSend] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);

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
        Email: emailValue,
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

  useEffect(() => {
    if (isSend) {
      setNameValue("")
      setPhoneValue("");
      setEmailValue("");
    }
  }, [isSend]);

  React.useEffect(() => {
    if (isSend) {
      Router.push("/about");
    }
  }, [isSend]);

  return (
    <section className={styles.offer__section}>
      <div className={styles.offer__container}>
        <div className={styles.offer__inner} style={{transform:"none!important"}}>
          <button
            type="button"
            className={styles.offer__button_close}
            onClick={handlerCloseEventPopup}
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
              Lasă-ne datele de contact mai jos și înscrie-te în 
              <br/>concurs, iar noi îți expediem biletul online
            </h2>
          ) : (
            <h2 className={styles.offer__title}>
              Укажи свои контактные данные ниже и стань участником 
              <br/>конкурса, а мы вышлем тебе онлайн-билет
            </h2>
          )}

          <form
            id="about__hero_presentation_btn"
            className={styles.offer__form}
            action="https://formsubmit.co/nev30inbox@gmail.com"
            method="POST"
            onSubmit={useHandlerOnClickToSend}
          >
            <input
              type="name"
              name="name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder={isToggleLang === "ro" ? "Nume, Prenume" : "Имя, Фамилия"}
              required
            />
            <input
              type="email"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder={isToggleLang === "ro" ? "E-mail" : "Почта"}
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
                  setIsPhoneValid(true);
                  return isToggleLang === "ro" ? "fără prefixul zero în față" : "без префикса ноль в начале";
                } else {
                  setIsPhoneValid(false);
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
                nameValue.length < 3 ||
                phoneValue.length < 11 ||
                emailValue.match(/@/) ||
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
                ? "tremite"
                : "отправить"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
