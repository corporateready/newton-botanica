import React from "react";
import styles from "./Location.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MarkButton_1,
  MarkButton_2,
  MarkButton_3,
  MarkButton_4,
  MarkButton_5,
  MarkButton_6,
  MarkButton_7,
  MarkButton_8,
  MarkButton_9,
} from "./marks";
import {
  MarkImage,
  MarkImage_2,
  MarkImage_3,
  MarkImage_4,
  MarkImage_5,
  MarkImage_6,
  MarkImage_7,
  MarkImage_8,
  MarkImage_9,
} from "./mark-images";
import Head from "next/head";
import MagnifyComponent from './magnify'
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/location/panoramic-botanica.webp"
import location__bg_ru from "../../../public/static/planning-page/location/panoramic-botanica-pins-ru.webp"

import { LangContext } from "../../../pages/_app";

export default function Index({hanlerOpenLocationPopup}) {

  const { isToggleLang } = React.useContext(LangContext);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);
  const [isOpen6, setIsOpen6] = React.useState(false);
  const [isOpen7, setIsOpen7] = React.useState(false);
  const [isOpen8, setIsOpen8] = React.useState(false);
  const [isOpen9, setIsOpen9] = React.useState(false);

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
  const handlerIsOpen6 = (e) => {
    e.stopPropagation();
    setIsOpen6(!isOpen6);
  };
  const handlerIsOpen7 = (e) => {
    e.stopPropagation();
    setIsOpen7(!isOpen7);
  };
  const handlerIsOpen8 = (e) => {
    e.stopPropagation();
    setIsOpen8(!isOpen8);
  };
  const handlerIsOpen9 = (e) => {
    e.stopPropagation();
    setIsOpen9(!isOpen9);
  };

  return (
    <>
      <Head></Head>
      <div className={styles.location__section}>
        <div className={styles.location__wrapper}>
          <h1 className={styles.location__title}>
            {isToggleLang === "ro" ? "Amplasare execlentă în zonă verde" : "Великолепное расположение в зеленой зоне"}
            <span></span>
          </h1>
          <div className={styles.location__inner}>
            {isOpen && <MarkImage setIsOpen={setIsOpen} />}
            {isOpen2 && <MarkImage_2 setIsOpen2={setIsOpen2} />}
            {isOpen3 && <MarkImage_3 setIsOpen3={setIsOpen3} />}
            {isOpen4 && <MarkImage_4 setIsOpen4={setIsOpen4} />}
            {isOpen5 && <MarkImage_5 setIsOpen5={setIsOpen5} />}
            {isOpen6 && <MarkImage_6 setIsOpen6={setIsOpen6} />}
            {isOpen7 && <MarkImage_7 setIsOpen7={setIsOpen7} />}
            {isOpen8 && <MarkImage_8 setIsOpen8={setIsOpen8} />}
            {isOpen9 && <MarkImage_9 setIsOpen9={setIsOpen9} />}
            
            <div className={styles.location__bg_inner}>
              {/* <MagnifyComponent /> */}
              <div className={styles.magnifier__body_desktop}
              onClick={hanlerOpenLocationPopup}
              >
                <Image
                src={isToggleLang==="ro" ? location__bg : location__bg_ru}
                layout="responsive"
                width={"100%"}
                height="50px"
                priority
                alt="sity location image"
                />
              </div>
              <MarkButton_1 handlerIsOpen={handlerIsOpen} />

              <MarkButton_2 handlerIsOpen2={handlerIsOpen2} />

              <MarkButton_3 handlerIsOpen3={handlerIsOpen3} />

              <MarkButton_4 handlerIsOpen4={handlerIsOpen4} /> 

              <MarkButton_5 handlerIsOpen5={handlerIsOpen5} />

              <MarkButton_6 handlerIsOpen6={handlerIsOpen6} />

              <MarkButton_7 handlerIsOpen7={handlerIsOpen7} />

              <MarkButton_8 handlerIsOpen8={handlerIsOpen8} />

              <MarkButton_9 handlerIsOpen9={handlerIsOpen9} />

              <motion.span
                className={styles.loaction__mark_3}
                onClick={handlerIsOpen}
              ></motion.span>

            </div>

            <div className={styles.location__address}>
              <Link href="https://g.page/Newton-House-srl?share">
                <a className={styles.location__address_name}>
                  {
                    isToggleLang==="ro"
                    ? "str. Grădina Botanică, 18"
                    : "ул. Грэдина Ботаникэ, 18"
                  }
                </a>
              </Link>
              <Link href="https://g.page/Newton-House-srl?share">
                <a className={styles.location__address_detail} target="_blank">
                  {isToggleLang==="ro"
                  ?"Vezi traseul"
                :"Посмотреть маршрут"}
                </a>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

