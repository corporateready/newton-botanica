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
import ComplexScreen9 from "../components/about/complex-1/carousel/full-screen-image-9";
import ComplexScreen10 from "../components/about/complex-1/carousel/full-screen-image-10";
import ComplexScreen11 from "../components/about/complex-1/carousel/full-screen-image-11";
import ComplexScreen12 from "../components/about/complex-1/carousel/full-screen-image-12";
import ComplexScreen13 from "../components/about/complex-1/carousel/full-screen-image-13";
import ComplexScreen14 from "../components/about/complex-1/carousel/full-screen-image-14";
import ComplexScreen15 from "../components/about/complex-1/carousel/full-screen-image-15";
import ComplexScreen16 from "../components/about/complex-1/carousel/full-screen-image-16";
import ComplexScreen17 from "../components/about/complex-1/carousel/full-screen-image-17";
import ComplexScreen18 from "../components/about/complex-1/carousel/full-screen-image-18";

export const Item1Context = React.createContext();
export const Item2Context = React.createContext();
export const Item3Context = React.createContext();
export const Item4Context = React.createContext();
export const Item5Context = React.createContext();
export const Item6Context = React.createContext();
export const Item7Context = React.createContext();
export const Item8Context = React.createContext();
export const Item9Context = React.createContext();
export const Item10Context = React.createContext();
export const Item11Context = React.createContext();
export const Item12Context = React.createContext();
export const Item13Context = React.createContext();
export const Item14Context = React.createContext();
export const Item15Context = React.createContext();
export const Item16Context = React.createContext();
export const Item17Context = React.createContext();
export const Item18Context = React.createContext();

export default function About() {
  const [isComplexOpen1, setIsComplexOpen1] = React.useState(false);
  const [isComplexOpen2, setIsComplexOpen2] = React.useState(false);
  const [isComplexOpen3, setIsComplexOpen3] = React.useState(false);
  const [isComplexOpen4, setIsComplexOpen4] = React.useState(false);
  const [isComplexOpen5, setIsComplexOpen5] = React.useState(false);
  const [isComplexOpen6, setIsComplexOpen6] = React.useState(false);
  const [isComplexOpen7, setIsComplexOpen7] = React.useState(false);
  const [isComplexOpen8, setIsComplexOpen8] = React.useState(false);
  const [isComplexOpen9, setIsComplexOpen9] = React.useState(false);
  const [isComplexOpen10, setIsComplexOpen10] = React.useState(false);
  const [isComplexOpen11, setIsComplexOpen11] = React.useState(false);
  const [isComplexOpen12, setIsComplexOpen12] = React.useState(false);
  const [isComplexOpen13, setIsComplexOpen13] = React.useState(false);
  const [isComplexOpen14, setIsComplexOpen14] = React.useState(false);
  const [isComplexOpen15, setIsComplexOpen15] = React.useState(false);
  const [isComplexOpen16, setIsComplexOpen16] = React.useState(false);
  const [isComplexOpen17, setIsComplexOpen17] = React.useState(false);
  const [isComplexOpen18, setIsComplexOpen18] = React.useState(false);

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

  const hanlerIsComplexOpen1 = () => {
    setIsComplexOpen1(!isComplexOpen1);
  };

  const hanlerIsComplexOpen2 = () => {
    setIsComplexOpen2(!isComplexOpen2);
  };

  const hanlerIsComplexOpen3 = () => {
    setIsComplexOpen3(!isComplexOpen3);
  };

  const hanlerIsComplexOpen4 = () => {
    setIsComplexOpen4(!isComplexOpen4);
  };

  const hanlerIsComplexOpen5 = () => {
    setIsComplexOpen5(!isComplexOpen5);
  };

  const hanlerIsComplexOpen6 = () => {
    setIsComplexOpen6(!isComplexOpen6);
  };

  const hanlerIsComplexOpen7 = () => {
    setIsComplexOpen7(!isComplexOpen7);
  };

  const hanlerIsComplexOpen8 = () => {
    setIsComplexOpen8(!isComplexOpen8);
  };

  const hanlerIsComplexOpen9 = () => {
    setIsComplexOpen9(!isComplexOpen9);
  };

  const hanlerIsComplexOpen10 = () => {
    setIsComplexOpen10(!isComplexOpen10);
  };

  const hanlerIsComplexOpen11 = () => {
    setIsComplexOpen11(!isComplexOpen11);
  };

  const hanlerIsComplexOpen12 = () => {
    setIsComplexOpen12(!isComplexOpen12);
  };

  const hanlerIsComplexOpen13 = () => {
    setIsComplexOpen13(!isComplexOpen13);
  };

  const hanlerIsComplexOpen14 = () => {
    setIsComplexOpen14(!isComplexOpen14);
  };

  const hanlerIsComplexOpen15 = () => {
    setIsComplexOpen15(!isComplexOpen15);
  };

  const hanlerIsComplexOpen16 = () => {
    setIsComplexOpen16(!isComplexOpen16);
  };

  const hanlerIsComplexOpen17 = () => {
    setIsComplexOpen17(!isComplexOpen17);
  };

  const hanlerIsComplexOpen18 = () => {
    setIsComplexOpen18(!isComplexOpen18);
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
    <Item1Context.Provider value={[setIsComplexOpen1]}>
      <Item2Context.Provider value={[setIsComplexOpen2]}>
        <Item3Context.Provider value={[setIsComplexOpen3]}>
          <Item4Context.Provider value={[setIsComplexOpen4]}>
            <Item5Context.Provider value={[setIsComplexOpen5]}>
              <Item6Context.Provider value={[setIsComplexOpen6]}>
                <Item7Context.Provider value={[setIsComplexOpen7]}>
                  <Item8Context.Provider value={[setIsComplexOpen8]}>
                    <Item9Context.Provider value={[setIsComplexOpen9]}>
                      <Item10Context.Provider value={[setIsComplexOpen10]}>
                        <Item11Context.Provider value={[setIsComplexOpen11]}>
                          <Item12Context.Provider value={[setIsComplexOpen12]}>
                            <Item13Context.Provider
                              value={[setIsComplexOpen13]}
                            >
                              <Item14Context.Provider
                                value={[setIsComplexOpen14]}
                              >
                                <Item15Context.Provider
                                  value={[setIsComplexOpen15]}
                                >
                                  <Item16Context.Provider
                                    value={[setIsComplexOpen16]}
                                  >
                                    <Item17Context.Provider
                                      value={[setIsComplexOpen17]}
                                    >
                                      <Item18Context.Provider
                                        value={[setIsComplexOpen18]}
                                      >
                                        <div className="relative">
                                          <Head>
                                            <link rel="prefetch" />
                                            <link
                                              rel="preconnect"
                                              href="http://localhost:3000/about/"
                                            />
                                            <title description="">
                                              NHGB | DESPRE CASĂ
                                            </title>
                                          </Head>

                                          <section
                                            className={styles.planning__section}
                                          >
                                            <Layout>
                                              <div className={styles.container}>
                                                <Hero
                                                  setIsPDFOpen={setIsPDFOpen}
                                                  hanlerClosePopup={
                                                    hanlerClosePopup
                                                  }
                                                  setIsCallRezervePopUp={
                                                    setIsCallRezervePopUp
                                                  }
                                                />
                                                <Complex
                                                />
                                                <Designs
                                                  setIsPopUpSend={
                                                    setIsPopUpSend
                                                  }
                                                  hanlerCloseDesignPopup={
                                                    hanlerCloseDesignPopup
                                                  }
                                                />
                                                <SliderSnake />
                                                <Location />
                                                <Payment
                                                  setIsPaymentPopUp={
                                                    setIsPaymentPopUp
                                                  }
                                                  hanlerClosePaymentPopup={
                                                    hanlerClosePaymentPopup
                                                  }
                                                />
                                                <News />
                                              </div>
                                            </Layout>

                                            {isComplexOpen1 && (
                                              <ComplexScreen1
                                                hanlerIsComplexOpen1={
                                                  hanlerIsComplexOpen1
                                                }
                                              />
                                            )}
                                            {isComplexOpen2 && (
                                              <ComplexScreen2
                                                hanlerIsComplexOpen2={
                                                  hanlerIsComplexOpen2
                                                }
                                              />
                                            )}
                                            {isComplexOpen3 && (
                                              <ComplexScreen3
                                                hanlerIsComplexOpen3={
                                                  hanlerIsComplexOpen3
                                                }
                                              />
                                            )}
                                            {isComplexOpen4 && (
                                              <ComplexScreen4
                                                hanlerIsComplexOpen4={
                                                  hanlerIsComplexOpen4
                                                }
                                              />
                                            )}
                                            {isComplexOpen5 && (
                                              <ComplexScreen5
                                                hanlerIsComplexOpen5={
                                                  hanlerIsComplexOpen5
                                                }
                                              />
                                            )}
                                            {isComplexOpen6 && (
                                              <ComplexScreen6
                                                hanlerIsComplexOpen6={
                                                  hanlerIsComplexOpen6
                                                }
                                              />
                                            )}
                                            {isComplexOpen7 && (
                                              <ComplexScreen7
                                                hanlerIsComplexOpen7={
                                                  hanlerIsComplexOpen7
                                                }
                                              />
                                            )}
                                            {isComplexOpen8 && (
                                              <ComplexScreen8
                                                hanlerIsComplexOpen8={
                                                  hanlerIsComplexOpen8
                                                }
                                              />
                                            )}
                                            {isComplexOpen9 && (
                                              <ComplexScreen9
                                                hanlerIsComplexOpen9={
                                                  hanlerIsComplexOpen9
                                                }
                                              />
                                            )}
                                            {isComplexOpen10 && (
                                              <ComplexScreen10
                                                hanlerIsComplexOpen10={
                                                  hanlerIsComplexOpen10
                                                }
                                              />
                                            )}
                                             {isComplexOpen11 && (
                                              <ComplexScreen11
                                                hanlerIsComplexOpen11={
                                                  hanlerIsComplexOpen11
                                                }
                                              />
                                            )}
                                            {isComplexOpen12 && (
                                              <ComplexScreen12
                                                hanlerIsComplexOpen12={
                                                  hanlerIsComplexOpen12
                                                }
                                              />
                                            )}
                                           {isComplexOpen13 && (
                                              <ComplexScreen13
                                                hanlerIsComplexOpen13={
                                                  hanlerIsComplexOpen13
                                                }
                                              />
                                            )}
                                            {isComplexOpen14 && (
                                              <ComplexScreen14
                                                hanlerIsComplexOpen14={
                                                  hanlerIsComplexOpen14
                                                }
                                              />
                                            )}
                                            {isComplexOpen15 && (
                                              <ComplexScreen15
                                                hanlerIsComplexOpen15={
                                                  hanlerIsComplexOpen15
                                                }
                                              />
                                            )}
                                            {isComplexOpen16 && (
                                              <ComplexScreen16
                                                hanlerIsComplexOpen16={
                                                  hanlerIsComplexOpen16
                                                }
                                              />
                                            )}
                                            {isComplexOpen17 && (
                                              <ComplexScreen17
                                                hanlerIsComplexOpen17={
                                                  hanlerIsComplexOpen17
                                                }
                                              />
                                            )}
                                            {isComplexOpen18 && (
                                              <ComplexScreen18
                                                hanlerIsComplexOpen18={
                                                  hanlerIsComplexOpen18
                                                }
                                              />
                                            )}

                                            {isPDFOpen && (
                                              <OfferPDFOpenSending
                                                hanlerClosePopup={
                                                  hanlerClosePopup
                                                }
                                              />
                                            )}
                                            {isCallRezervePopUp && (
                                              <OfferCallRezerve
                                                hanlerCloseCallPopup={
                                                  hanlerCloseCallPopup
                                                }
                                              />
                                            )}
                                            {isPopUpSend && (
                                              <FromDesignPopUp
                                                hanlerCloseDesignPopup={
                                                  hanlerCloseDesignPopup
                                                }
                                              />
                                            )}
                                            {isPaymentPopUp && (
                                              <FromPaymentPopUp
                                                hanlerClosePaymentPopup={
                                                  hanlerClosePaymentPopup
                                                }
                                              />
                                            )}
                                          </section>

                                          <div
                                            className={
                                              styles.about__messenger_mob
                                            }
                                          >
                                            <AnimatePresence>
                                              {scroll && (
                                                <motion.div
                                                  className={
                                                    scroll
                                                      ? styles.scroll__visible
                                                      : ""
                                                  }
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
                                      </Item18Context.Provider>
                                    </Item17Context.Provider>
                                  </Item16Context.Provider>
                                </Item15Context.Provider>
                              </Item14Context.Provider>
                            </Item13Context.Provider>
                          </Item12Context.Provider>
                        </Item11Context.Provider>
                      </Item10Context.Provider>
                    </Item9Context.Provider>
                  </Item8Context.Provider>
                </Item7Context.Provider>
              </Item6Context.Provider>
            </Item5Context.Provider>
          </Item4Context.Provider>
        </Item3Context.Provider>
      </Item2Context.Provider>
    </Item1Context.Provider>
  );
}
