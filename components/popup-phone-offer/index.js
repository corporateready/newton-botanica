import React from "react";
import Image from "next/image";
import styles from "./OfferPopUp.module.scss";
import Router from "next/router";
import timezone from "./Taimezone.module.scss";
import close__button from "../../public/static/planning-page/close-button-popup.svg";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import PhoneInput from "react-phone-input-2";

import { LangContext } from "../../pages/_app";

export default function OfferCallOpenSending({ hanlerCloseCallPopup }) {
  const { isToggleLang } = React.useContext(LangContext);

  const [isSend, setIsSend] = React.useState(false);
  const [timeValue, setTimeValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [selectedTimezone, setSelectedTimezone] = React.useState({});
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
        Ora: timeValue.toString(),
        "Fusul orar": selectedTimezone.label,
        Telfon: phoneValue,
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
      setTimeValue("");
      setPhoneValue("");
    }
  }, [isSend]);

  React.useEffect(() => {
    if (isSend) {
      Router.push("/thanks");
    }
  }, [isSend]);

  const options = [
    { option: "8:00" },
    { option: "8:15" },
    { option: "8:30" },
    { option: "8:45" },
    { option: "9:00" },
    { option: "9:15" },
    { option: "9:30" },
    { option: "9:45" },
    { option: "10:00" },
    { option: "10:15" },
    { option: "10:30" },
    { option: "10:45" },
    { option: "11:00" },
    { option: "11:15" },
    { option: "11:30" },
    { option: "11:45" },
    { option: "12:00" },
    { option: "12:15" },
    { option: "12:30" },
    { option: "12:45" },
    { option: "13:00" },
    { option: "13:15" },
    { option: "13:30" },
    { option: "13:45" },
  ];

  return (
    <section className={styles.offer__section}>
      <div className={styles.offer__container}>
        <div className={styles.offer__inner} style={{transform:"none"}}>
          <button
            type="button"
            className={styles.offer__button_close}
            onClick={hanlerCloseCallPopup}
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
              Rezervă timpul pentru
              <br />a fi telefonat:
            </h2>
          ) : (
            <h2 className={styles.offer__title}>
              Зарезервируй время
              <br />
              для звонка
            </h2>
          )}

          <form
            className={styles.offer__form}
            action="https://formsubmit.co/nev30inbox@gmail.com"
            method="POST"
            onSubmit={useHandlerOnClickToSend}
          >
            <select
              name="Ora"
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
              required
            >
              {options.map((opt, idx) => {
                console.log();
                return (
                  <option
                    key={opt.option}
                    value={opt.option}
                    onChange={(e) => setTimeValue(e.target.value)}
                    id={idx}
                    required
                  >
                    {opt.option}
                  </option>
                );
              })}
            </select>

            <div className={timezone.select__app}>
              <TimezoneSelect
                name="Fusul orar"
                value={selectedTimezone}
                onChange={setSelectedTimezone}
                placeholder={
                  isToggleLang === "ro" ? "Fus orar" : "Часовой пояс"
                }
                timezones={{
                  ...allTimezones,
                }}
                required
              />
            </div>

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
                phoneValue.length < 11 ||
                timeValue ||
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
                ? "Programează un apel"
                : "Запрограммировать звонок"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
