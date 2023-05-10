import React from "react";
import styles from "../events.module.scss"

export default function Index() {
  return (
    <div className={styles.screen}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.2598707848374!2d28.875129011887342!3d46.97623017101852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9796b601e2b23%3A0x8bf8e4380cc66836!2z0JHQvtGC0LDQvdC40YfQtdGB0LrQuNC5INCh0LDQtA!5e0!3m2!1sru!2s!4v1682613916405!5m2!1sru!2s"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
