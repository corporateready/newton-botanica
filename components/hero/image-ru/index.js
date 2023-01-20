import React from "react";
import Image from "next/image";
import image__side_ru from "../../../public/static/home-page/mobile.svg";
import styles from "./styles.module.scss";
import Head from "next/head";

export default function Index() {
  return (
    <>
    <Head>
    {/* <link rel="preload" as="image" href="/mobile.svg"/> */}
    </Head>
    <div className={styles.image__side_mobile}>
      <Image
        src={image__side_ru}
        height={466}
        width={381}
        alt="home inner mobile "
        priority={true}
      />
    </div>
    </>
  );
}
