import React from "react";
import styles from "../styles/Plannig.module.scss";
import Layout from "../components/layout";
import Image from "next/image";
import planning__bg from "../public/static/planning-page/Group 2678.png";
import { Hero, Complex, Designs, Location, Payment, News } from "../components/planning";
import OfferPopUp from '../components/popup-offer'

export default function planning() {
  const [isOpen, setIsOpen] = React.useState(true)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!isOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
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
          <Hero />
          <Complex/>
          <Designs/>
          <Location/>
          <Payment isOpen={isOpen} setIsOpen={setIsOpen}/>
          <News/>
        </div>
        </Layout>
        {
          isOpen && (
            <OfferPopUp setIsOpen={setIsOpen}/>
          )
        }
      </section>
    
  );
}
