import React from "react";
import styles from "./Mesengers.module.scss";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaViber } from "@react-icons/all-files/fa/FaViber";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import Link from "next/link";

const messengers = [
  {
    id: 1,
    icon: <FaWhatsapp size={30} color="white" />,
    irl: "https://api.whatsapp.com/send?phone=+37360044040",
    title: "whatsapp",
  },
  {
    id: 2,
    icon: <FaViber size={30} color="white" />,
    irl: "viber://chat?number=37360044040",
    title: "viber",
  },
  {
    id: 3,
    icon: <FaFacebookMessenger size={30} color="#2D9CDB" />,
    irl: "http://m.me/NewtonHouse.md?roistat_visit=666144",
    title: "messenger",
  }
];
export default function Index() {
 
  return (
    <article className={styles.messengers}>
      {messengers.map((item) => (
        <Link href={item.irl} key={item.title}>
          <a className={styles[item.title]}>{item.icon}</a>
        </Link>
      ))}
      <div className={styles.item__phone}>
        <a href="tel:+37360044040" className={styles.item__mess_phone}></a>
        <FaPhoneAlt
          size={22}
          color="#ffffff"
          className={styles.item__phone_icon}
        />
      </div>
    </article>
  );
}
