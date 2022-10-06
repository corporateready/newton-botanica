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
    irl: "https://api.whatsapp.com/send?phone=+37360802020&text=I'm%20interested%20in%20your%20car%20for%20sale",
    title: "whatsapp",
  },
  {
    id: 2,
    icon: <FaViber size={30} color="white" />,
    irl: "viber://chat?number=37360802020",
    title: "viber",
  },
  {
    id: 3,
    icon: <FaFacebookMessenger size={30} color="#2D9CDB" />,
    irl: "https://www.facebook.com/NewtonHouse.md",
    title: "messenger",
  },
  {
    id: 4,
    icon: <FaPhoneAlt size={25} color="white" />,
    irl: "tel:+3736082020",
    title: "phone",
  },
];
export default function Index() {
  return (
    <>
    {/* <article className={styles.messengers}> */}
      {messengers.map((item) => (
        <Link href={item.irl} key={item.title}>
          <a className={styles[item.title]}>{item.icon}</a>
        </Link>
      ))}
    {/* </article> */}
    </>
  );
}
