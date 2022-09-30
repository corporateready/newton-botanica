import React, {useEffect,useState} from 'react'
import Image from 'next/image';
import styles from './OfferPopUp.module.scss'
import close__button from "../../public/static/planning-page/close-button-popup.svg";

export default function OfferPDFOpenSending({ hanlerClosePopup }) {
  const [isSend, setIsSend] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        numele: nameValue,
      }),
    })
      .then((response) => {
        response.json();
        setIsSend(true);
      })
      .then((data) => data)
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (isSend) {
      setPhoneValue("");
      setEmailValue("");
    }
  }, [isSend]);

  return (
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
          Solicită prezentarea
          <br/><span>NEWTON HOUSE GRĂDINA BOTANICĂ</span> PDF
          </h2>

          <form
            id="about__hero_presentation_btn"
            className={styles.offer__form}
            action="https://formsubmit.co/nev30inbox@gmail.com"
            method="POST"
            onSubmit={useHandlerOnClickToSend}
          >
            <input
              type="email"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Adresa de email"
              required
            />
            <input
              type="tel"
              name="tel"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Numărul de telefon"
              required
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Everyone is important for as!"
            />
            <button type="submit" className={styles.button__sending}>
            Solicită prezentarea
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
