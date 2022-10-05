import React, { useEffect, useState } from "react";
import styles from "../styles/Plannig.module.scss";
import Layout from "../components/about/layout";
import Image from "next/image";
import planning__bg from "/public/static/planning-page/Group_2678-.webp";
import planning__bg_mob from "/public/static/planning-page/bg-about-mob.webp";
import {
  Hero,
  Complex,
  Designs,
  Location,
  SliderSnake,
  Payment,
  News,
} from "../components/about";
import Head from "next/head";
import "react-phone-input-2/lib/style.css";
import OfferPDFOpenSending from "../components/popup-pdf-offer";
import OfferCallRezerve from "../components/popup-phone-offer";
import FromDesignPopUp from "../components/name-design-phone-popup";
import FromPaymentPopUp from "../components/name-payment-phone-popup";

export default function About() {
  const [isPopUpSend, setIsPopUpSend] = useState(false);
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [isCallRezervePopUp, setIsCallRezervePopUp] = useState(false);
  const [isPaymentPopUp, setIsPaymentPopUp] = useState(false);

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
    <>
      <Head>
        {/* <link rel="preload" as="image" href="Group_2678-.webp" /> */}
        <link rel="prefetch" />
        <link rel="preconnect" href="http://localhost:3000/about/" />
        <title>NGNB | DESPRE CASĂ</title>
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
            hanlerClosePaymentPopup={hanlerClosePaymentPopup} />
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
    </>
  );
}
