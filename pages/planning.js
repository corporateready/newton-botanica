import React from "react";
import styles from "../styles/Plannig.module.scss";
import Layout from "../components/layout";
import Image from "next/image";
import planning__bg from "../public/static/home-page/background.webp";
import { Hero, Complex, Designs, Location, Payment, News } from "../components/planning";

export default function planning() {
  return (
    <Layout>
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

        <div className={styles.container}>
          <Hero />
          <Complex/>
          <Designs/>
          <Location/>
          <Payment/>
          <News/>
        </div>

      </section>
    </Layout>
  );
}
