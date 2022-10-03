import React from "react";
import styles from "./name-phone-popup.module.scss";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import close__button from "../../public/static/planning-page/close-button-popup.svg";
import PhoneInput from "react-phone-input-2";

export default function Index({ hanlerCloseDesignPopup }) {
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
        From: "Vreau să fiu contactat",
        Numele: nameValue,
        Telefon: phoneValue,
      }),
    })
      .then((response) => {
        response.json();
        setIsSend(true);
      })
      .then((data) => {
          data
        }
      )
      .then(function(){
        setSpinner(false);
       }
      )
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
      Router.push("/about");
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
              onClick={hanlerCloseDesignPopup}
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
              <input type="hidden" name="_next" value="http://localhost:3000/about/" />
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
