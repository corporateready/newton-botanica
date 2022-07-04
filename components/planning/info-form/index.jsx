import React from "react";
import styles from "./InfoForm.module.scss";

export default function index() {
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
            <div className={styles.details__form}>
              <input type="text" placeholder="Nume, Prenume" />
              <input type="text" placeholder="Numărul de telefon" />
              <button type="submit" className={styles.button__sending}>
                Solicită informații
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
