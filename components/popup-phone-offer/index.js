import React from "react";
import Image from "next/image";
import styles from "./OfferPopUp.module.scss";
import timezone from "./Taimezone.module.scss";
import close__button from "../../public/static/planning-page/close-button-popup.svg";
import TimezoneSelect from "react-timezone-select";
import CSSModules from 'react-css-modules'

Object.assign(styles, timezone)

export default function OfferPDFOpenSending ({ hanlerCloseCallPopup }) {
  const [isSend, setIsSend] = React.useState(false);
  const [timeValue, setTimeValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [selectedTimezone, setSelectedTimezone] = React.useState({});
  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ora: timeValue,
        "Diferența de timp": selectedTimezone,
        "telfon": phoneValue
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
      // setDifHourlValue("");
      setPhoneValue("");
    }
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
              <option value="8:00">8:00</option>
              <option value="8:15">8:15</option>
              <option value="8:30">8:30</option>
              <option value="8:45">8:45</option>
              <option value="9:00">9:00</option>
              <option value="9:15">9:15</option>
              <option value="9:30">9:30</option>
              <option value="9:45">9:45</option>
              <option value="10:00">10:00</option>
              <option value="10:15">10:15</option>
              <option value="10:30">10:30</option>
              <option value="10:45">10:45</option>
            </select>
            <TaimeZone 
            selectedTimezone={selectedTimezone}
            setSelectedTimezone={setSelectedTimezone}
            />
            <input
              type="text"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              placeholder="Telefon"
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


const TaimeZone = ({selectedTimezone,setSelectedTimezone}) => {
  

  return (
    <div className={timezone.select__app}>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          className={timezone.select__wrapper}
          placeholder="Fus orar"
        />
    </div>
  );
};

CSSModules(TaimeZone, styles, {allowMultiple: true} )