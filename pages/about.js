import React, { useState } from "react";
import styles from "../styles/Plannig.module.scss";
import Layout from "../components/about/layout";
import Image from "next/image";
import planning__bg from "/public/static/planning-page/Group_2678.webp";
import planning__bg_mob from "/public/static/planning-page/bg-group-mob.png";
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

export default function Planning() {
  return (
    <>
      <Head>
        <link rel="prefetch" />
        <link rel="preconnect" href="http://localhost:3000/about/" />
        <title>NGNB | PLANIMETRII</title>
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
            quality={100}
            priority
            alt="home background"
          />
        </div>
        <Layout>
          <div className={styles.container}>
            <Hero />
            <Complex />
            <Designs />
            <SliderSnake />
            <Location />
            <Payment />
            <News />
          </div>
        </Layout>
      </section>
    </>
  );
}
