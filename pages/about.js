import React, { useEffect, useState } from "react";
import styles from "../styles/Plannig.module.scss";
import Layout from "../components/about/layout";
import Image from "next/image";
import planning__bg from "/public/static/planning-page/about-bg-desktop.webp";
import planning__bg_mob from "/public/static/planning-page/about-bg-mob.webp";
import {
  Hero,
  Complex,
  Designs,
  Location,
  SliderSnake,
  Payment,
  News,
} from "../components/about";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import "react-phone-input-2/lib/style.css";
import OfferPDFOpenSending from "../components/popup-pdf-offer";
import OfferCallRezerve from "../components/popup-phone-offer";
import FromDesignPopUp from "../components/name-design-phone-popup";
import FromPaymentPopUp from "../components/name-payment-phone-popup";
import MessengerMobile from "../components/messengers-mobile";

export default function About() {
  const [isPopUpSend, setIsPopUpSend] = useState(false);
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [isCallRezervePopUp, setIsCallRezervePopUp] = useState(false);
  const [isPaymentPopUp, setIsPaymentPopUp] = useState(false);
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const hanlerCloseDesignPopup = () => {
    setIsPopUpSend(!isPopUpSend);
  };

  const hanlerClosePaymentPopup = () => {
    setIsPaymentPopUp(!isPaymentPopUp);
  };

  const hanlerClosePopup = () => {
    setIsPDFOpen(!isPDFOpen);
  };

  const hanlerCloseCallPopup = () => {
    setIsCallRezervePopUp(!isCallRezervePopUp);
  };

  useEffect(() => {
    if (isPDFOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isPDFOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isPDFOpen]);

  useEffect(() => {
    if (isCallRezervePopUp) {
      document.body.style.overflow = "hidden";
    }
    if (!isCallRezervePopUp) {
      document.body.style.overflow = "auto";
    }
  }, [isCallRezervePopUp]);

  useEffect(() => {
    if (isPopUpSend) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPopUpSend]);

  useEffect(() => {
    if (isPaymentPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPaymentPopUp]);

  return (
    <div className="relative">
      <Head>
        {/* <link rel="preload" as="image" href="Group_2678-.webp" /> */}
        <link rel="prefetch" />
        <link rel="preconnect" href="http://localhost:3000/about/" />
        <title description="">NHGB | DESPRE CASĂ</title>
      </Head>

      <section className={styles.planning__section}>
        <div className={styles.planning__bg}>
          <Image
            src={planning__bg}
            layout="fill"
            quality={100}
            priority
            alt="home background"
          />
        </div>
        <div className={styles.planning__bg_mob}>
          <Image
            src={planning__bg_mob}
            layout="fill"
            priority
            alt="mobile home background"
          />
        </div>

        <Layout>
          <div className={styles.container}>
            <Hero
              setIsPDFOpen={setIsPDFOpen}
              hanlerClosePopup={hanlerClosePopup}
              setIsCallRezervePopUp={setIsCallRezervePopUp}
            />
            <Complex />
            <Designs
              setIsPopUpSend={setIsPopUpSend}
              hanlerCloseDesignPopup={hanlerCloseDesignPopup}
            />
            <SliderSnake />
            <Location />
            <Payment
              setIsPaymentPopUp={setIsPaymentPopUp}
              hanlerClosePaymentPopup={hanlerClosePaymentPopup}
            />
            <News />
          </div>
        </Layout>
        {isPDFOpen && (
          <OfferPDFOpenSending hanlerClosePopup={hanlerClosePopup} />
        )}
        {isCallRezervePopUp && (
          <OfferCallRezerve hanlerCloseCallPopup={hanlerCloseCallPopup} />
        )}
        {isPopUpSend && (
          <FromDesignPopUp hanlerCloseDesignPopup={hanlerCloseDesignPopup} />
        )}
        {isPaymentPopUp && (
          <FromPaymentPopUp hanlerClosePaymentPopup={hanlerClosePaymentPopup} />
        )}
      </section>
      <div className={styles.about__messenger_mob}>
        <AnimatePresence>
          {scroll && (
            <motion.div
              className={scroll ? styles.scroll__visible : ""}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 1 }}
            >
              <div className="flex justify-around items-center h-full">
                <MessengerMobile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
