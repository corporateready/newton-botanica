import React from "react";
import styles from "../events.module.scss"
import Link from "next/link";

export default function Index() {
  return (
    <div className={styles.screen__map}>
      <div className={styles.screen__block}>
        <h4>
          cum <span>să ajung acolo</span>
        </h4>
        <Link href="https://www.google.com/maps/place/Gradina+Botanica,+Chi%C8%99in%C4%83u,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D1%8F/@46.9759189,28.8834804,17z/data=!4m6!3m5!1s0x40c9796a52bfde4b:0x21daaa64ffe4182e!8m2!3d46.9759189!4d28.8834804!16s%2Fg%2F1tvry6_4">
          <a target="_blank">Grădina Botanica or. Chișinău</a>
        </Link>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.2598707848374!2d28.875129011887342!3d46.97623017101852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9796b601e2b23%3A0x8bf8e4380cc66836!2z0JHQvtGC0LDQvdC40YfQtdGB0LrQuNC5INCh0LDQtA!5e0!3m2!1sru!2s!4v1682613916405!5m2!1sru!2s"
        className="h-full w-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
