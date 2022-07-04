import React, {useState, useEffect} from "react";
import styles from "../styles/About.module.scss";
import Layout from "../components/layout";
import Image from "next/image";
import planning__bg from "../public/static/planning-page/Group_2678.png";
import image__detail from "../public/static/planning/populare/populare-1/63 55 2d.svg";
import close__button from "../public/static/planning/populare/close-icon.svg";
import {
  Payment,
  Populare,
  Transe,
  Plan,
  InfoForm
} from "../components/planning";
import Link from "next/link";

export default function Planning() {
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  const hanlerCloseOpenDetails = () => {
    setIsOpenDetails(false);
  };
  const handlerOpenDetails = () => {
    setIsOpenDetails(true)
    // alert('!')
  };

  useEffect(() => {
    if (isOpenDetails) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpenDetails) {
      document.body.style.overflow = "auto";
    }
  }, [isOpenDetails]);

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
          <Payment />
          <Populare handlerOpenDetails={handlerOpenDetails}/>
          <Transe/>
          <Plan/>
          <InfoForm/>
        </div>
      </Layout>
      {isOpenDetails && (
        <section className={styles.details__section}>
          <div className={styles.details__wrapper}>
            <button
              className={styles.details__close_button}
              onClick={hanlerCloseOpenDetails}
            >
              <Image src={close__button} height={37} width={37} alt="" />
            </button>
            <div className={styles.details__inner}>
              <div className={styles.details__slider}>
                <Image
                  src={image__detail}
                  height={442}
                  width={500}
                  priority
                  alt=""
                />
              </div>
              <div className={styles.details__description}>
                <div className={styles.details__content}>
                  <div className={styles.details__content_inner}>
                    <p className={styles.details__content_name}>1 cameră</p>
                    <p className={styles.details__content_perimeter}>
                      63.55 M<sup>2</sup>
                    </p>
                    <p className={styles.details__content_name_}>
                      Prima rată 10%
                    </p>
                    <p className={styles.details__content_perimeter}>2300 €</p>
                  </div>
                </div>
                <p className={styles.details__form__title}>
                  Pentru a rezerva sau a lu-a legătura cu mănăgerul
                  <br />
                  de vânzări completați formularul de mai jos:
                </p>
                <div className={styles.details__form}>
                  <input type="text" placeholder="Nume, Prenume"/>
                  <input type="text" placeholder="Numărul de telefon"/>
                  <button 
                  type="submit"
                  className={styles.button__sending}>Solicită informații</button>
                </div>
                <p className={styles.details__suptitle}>
                S-au apelați la numărul de telefon: <Link href={'/'}><a className={styles.details__suptitle_tel}>060 80 20 20 <span></span></a></Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* {isPDFOpen && <PDFOfferPopUp setIsPDFOpen={setIsPDFOpen} />}
      {isPhoneOfferOpen && (
        <PhoneOfferPopUp setIsPhoneOfferOpen={setIsPhoneOfferOpen} />
      )} */}
    </section>
  );
}
