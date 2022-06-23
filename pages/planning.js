import React, {useState, useEffect} from "react";
import styles from "../styles/Plannig.module.scss";
import Layout from "../components/layout";
import Image from "next/image";
import planning__bg from "../public/static/planning-page/Group 2678.png";
import {
  Hero,
  Complex,
  Designs,
  Location,
  Payment,
  News,
} from "../components/planning";
import OfferPopUp from "../components/popup-offer";
import PDFOfferPopUp from "../components/popup-pdf-offer";
import PhoneOfferPopUp from "../components/popup-phone-offer";

export default function planning() {

  const [isOpen, setIsOpen] = useState(false);
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [isPhoneOfferOpen, setIsPhoneOfferOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  useEffect(() => {
    if (isPDFOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isPDFOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isPDFOpen]);
  useEffect(() => {
    if (isPhoneOfferOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isPhoneOfferOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isPhoneOfferOpen]);

  return (
    <section className={styles.planning__section}>
      <div className={styles.planning__bg}>
        <Image
          src={planning__bg}
          layout="fill"
          objectFit="cover"
          priority
          alt="home background"
        />
      </div>
      <Layout>
        <div className={styles.container}>
          <Hero
            isPDFOpen={isPDFOpen}
            setIsPDFOpen={setIsPDFOpen}
            isPhoneOfferOpen={isPhoneOfferOpen}
            setIsPhoneOfferOpen={setIsPhoneOfferOpen}
          />
          <Complex />
          <Designs />
          <Location />
          <Payment isOpen={isOpen} setIsOpen={setIsOpen} />
          <News />
        </div>
      </Layout>
      {isOpen && <OfferPopUp setIsOpen={setIsOpen} />}
      {isPDFOpen && <PDFOfferPopUp setIsPDFOpen={setIsPDFOpen} />}
      {isPhoneOfferOpen && (
        <PhoneOfferPopUp setIsPhoneOfferOpen={setIsPhoneOfferOpen} />
      )}
    </section>
  );
}
