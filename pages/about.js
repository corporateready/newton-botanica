import React, { useEffect, useState } from "react";
import styles from "../styles/Plannig.module.scss";
import Layout from "../components/about/layout";
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

import ComplexScreen1 from "../components/about/complex-1/carousel/full-screen-image-1";
import ComplexScreen2 from "../components/about/complex-1/carousel/full-screen-image-2";
import ComplexScreen3 from "../components/about/complex-1/carousel/full-screen-image-3";
import ComplexScreen4 from "../components/about/complex-1/carousel/full-screen-image-4";
import ComplexScreen5 from "../components/about/complex-1/carousel/full-screen-image-5";
import ComplexScreen6 from "../components/about/complex-1/carousel/full-screen-image-6";
import ComplexScreen7 from "../components/about/complex-1/carousel/full-screen-image-7";
import ComplexScreen8 from "../components/about/complex-1/carousel/full-screen-image-8";

export default function About() {
  const [imageURL, setImageURL] = React.useState(null);

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

  const hanlerIsClouseFuulScreen = (url) => {
    setImageURL(null);
  };

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
    if (
      imageURL === 0 
      || imageURL === 1 
      || imageURL === 2 
      || imageURL === 3
      || imageURL === 4
      || imageURL === 5
      || imageURL === 6
      || imageURL === 7
      ) {
      document.body.style.overflow = "hidden";
    }
    if (imageURL === null) {
      document.body.style.overflow = "auto";
    }
  }, [imageURL]);

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
        <link rel="prefetch" />
        <title description="">NHGB | DESPRE CASĂ</title>
      </Head>

      <section className={styles.planning__section}>
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
            <SliderSnake setImageURL={setImageURL} />
            <Location />
            <Payment
              setIsPaymentPopUp={setIsPaymentPopUp}
              hanlerClosePaymentPopup={hanlerClosePaymentPopup}
            />
            <News />
          </div>
        </Layout>

        {imageURL === 0 && (
          <ComplexScreen1 hanlerIsComplexOpen1={hanlerIsClouseFuulScreen} />
        )}
        {imageURL === 1 && (
          <ComplexScreen2 hanlerIsComplexOpen1={hanlerIsClouseFuulScreen} />
        )}
        {imageURL === 2 && (
          <ComplexScreen3 hanlerIsComplexOpen1={hanlerIsClouseFuulScreen} />
        )}
        {imageURL === 3 && (
          <ComplexScreen4 hanlerIsComplexOpen1={hanlerIsClouseFuulScreen} />
        )}
        {imageURL === 4 && (
          <ComplexScreen5 hanlerIsComplexOpen1={hanlerIsClouseFuulScreen} />
        )}
        {imageURL === 5 && (
          <ComplexScreen6 hanlerIsComplexOpen1={hanlerIsClouseFuulScreen} />
        )}
        {imageURL === 6 && (
          <ComplexScreen7 hanlerIsComplexOpen1={hanlerIsClouseFuulScreen} />
        )}
        {imageURL === 7 && (
          <ComplexScreen8 hanlerIsComplexOpen1={hanlerIsClouseFuulScreen} />
        )}

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
