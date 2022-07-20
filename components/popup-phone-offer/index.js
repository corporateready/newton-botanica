import React from "react";
import Image from "next/image";
import styles from "./OfferPopUp.module.scss";
import close__button from "../../public/static/planning-page/close-button-popup.svg";

export default function OfferPDFOpenSending({ hanlerCloseCallPopup }) {
  const [isSend, setIsSend] = React.useState(false);
  const [timeValue, setTimeValue] = React.useState("");
  const [difHourValue, setDifHourlValue] = React.useState("");

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "ora": timeValue,
        "Diferența de timp": difHourValue,
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
      setTimeValue("");
      setDifHourlValue("");
    }
  //   if (isSend) {
  //     console.log(isSend);
  //     Router.push("/thanks");
  //   }
  }, [isSend]);

  return (
    <section className={styles.offer__section}>
      <div className={styles.offer__container}>
        <div className={styles.offer__inner}>
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
          <h2 className={styles.offer__title}>
            Rezervă timpul pentru
            <br />a fi telefonat:
          </h2>

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
            >
              <option>8:00 </option>
              <option>8:30</option>
              <option>9:00</option>
              <option>9:30</option>
              <option>10:00</option>
            </select>
            <select
              name="Diferența de timp"
              value={difHourValue}
              onChange={(e) => setDifHourlValue(e.target.value)}
            >
              <option>+ 1 ore </option>
              <option>+ 2 ore </option>
              <option>+ 3 ore </option>
              <option>+ 4 ore </option>
            </select>
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
