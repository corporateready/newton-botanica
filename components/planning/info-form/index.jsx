import React from "react";
import styles from "./InfoForm.module.scss";
import timezone from "./Taimezone.module.scss";
import TimezoneSelect, { allTimezones } from "react-timezone-select";

Object.assign(styles, timezone);

export default function Index() {
  const [isSend, setIsSend] = React.useState(false);
  const [timeValue, setTimeValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [selectedTimezone, setSelectedTimezone] = React.useState({});

  const useHandlerOnClickToSend = () => {
    fetch("https://formsubmit.co/ajax/nev30inbox@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Ora: timeValue,
        "Fusul orar": selectedTimezone.label,
        Telfon: phoneValue,
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
      setPhoneValue("");
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
    <section className={styles.details__section}>
      <div className={styles.details__wrapper}>
        <div className={styles.container}>
          <div className={styles.details__inner}>
            <p className={styles.details__form__title}>
              Pentru informații suplimentare
              <br />
              completați formularul
            </p>
            <p className={styles.details__form__title_mob}>
              Rezervă timpul pentru a fi telefonat:
            </p>
            <form
              className={styles.details__form}
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
                  placeholder="Fus orar"
                  timezones={{
                    ...allTimezones,
                  }}
                  required
                />
              </div>
              <input
                type="text"
                name="Telefon"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                placeholder="Telefon"
                required
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/thanks"
              />
              <button type="submit" className={styles.button__sending}>
                Programează un apel
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
