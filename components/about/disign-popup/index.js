import React from "react";
import Image from "next/image";
import Link from "next/link";
import close__button from "../../../public/static/planning-page/close-button-popup.svg";
import PhoneInput from "react-phone-input-2";
import styles from './DisidnPopup.module.scss'

export default function FromDisignPopUp({ hanlerDesignClosePopup }) {
    const [isSend, setIsSend] = React.useState(false);
    const [nameValue, setNameValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
  
    const useHandlerOnClickToSend = (e) => {
      // e.preventDefault();
  
      fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          From : "AFLĂ DETALII",
          Numele: nameValue.toUpperCase(),
          Telefon: emailValue,
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
                onClick={hanlerDesignClosePopup}
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