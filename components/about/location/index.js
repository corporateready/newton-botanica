import React from "react";
import styles from "./Location.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import stadion from '../../../public/static/planning-page/location/stadion.webp'
import location__bg from "../../../public/static/planning-page/location/botanica-location.webp";

export default function index() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handlerIsOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.location__section}>
        <div className={styles.location__wrapper}>
          <h1 className={styles.location__title}>
            Amplasare execlentă în zonă verde
            <span></span>
          </h1>
          <div className={styles.location__inner}>
          {isOpen && (
            <span
              className={styles.loaction__mark_description}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Image
                src={stadion}
                layout="fill"
                priority
                alt=""
              />
            </span>
          )}
            <div
              className={styles.location__bg_inner}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <motion.span
                className={styles.loaction__mark}
                onClick={handlerIsOpen}
              ></motion.span>
              <Image
                src={location__bg}
                height={506}
                width={1043}
                sizes="(max-width: 75em) 33vw,
              (max-width: 48em) 50vw,
              100vw"
                priority
                alt=""
              />
            </div>
            <div className={styles.location__address}>
              <Link href="https://g.page/Newton-House-srl?share">
                <a className={styles.location__address_name}>
                  str. Grădina Botanică, 18
                </a>
              </Link>
              <Link href="https://g.page/Newton-House-srl?share">
                <a className={styles.location__address_detail}>Vezi traseul</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
