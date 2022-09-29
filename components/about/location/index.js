import React from "react";
import styles from "./Location.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/location/botanica-location.webp";
import { MarkButton_1, MarkButton_2, MarkButton_3, MarkButton_4, MarkButton_5 } from "./marks";
import { MarkImage, MarkImage_2, MarkImage_3, MarkImage_4, MarkImage_5 } from "./mark-images";

export default function index() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);

  const handlerIsOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  const handlerIsOpen2 = (e) => {
    e.stopPropagation();
    setIsOpen2(!isOpen2);
  };
  const handlerIsOpen3 = (e) => {
    e.stopPropagation();
    setIsOpen3(!isOpen3);
  };
  const handlerIsOpen4 = (e) => {
    e.stopPropagation();
    setIsOpen4(!isOpen4);
  };
  const handlerIsOpen5 = (e) => {
    e.stopPropagation();
    setIsOpen5(!isOpen5);
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
            {isOpen && <MarkImage setIsOpen={setIsOpen} />}
            {isOpen2 && <MarkImage_2 setIsOpen2={setIsOpen2} />}
            {isOpen3 && <MarkImage_3 setIsOpen3={setIsOpen3} />}
            {isOpen4 && <MarkImage_4 setIsOpen4={setIsOpen4} />}
            {isOpen5 && <MarkImage_5 setIsOpen5={setIsOpen5} />}
            

            <div className={styles.location__bg_inner}>
              <MarkButton_1 handlerIsOpen={handlerIsOpen} />

              <MarkButton_2 handlerIsOpen2={handlerIsOpen2} />

              <MarkButton_3 handlerIsOpen3={handlerIsOpen3} />

              <MarkButton_4 handlerIsOpen4={handlerIsOpen4} />

              <MarkButton_5 handlerIsOpen5={handlerIsOpen5} />

              <motion.span
                className={styles.loaction__mark_3}
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
