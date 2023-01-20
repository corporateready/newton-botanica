import React from "react";
import Image from "next/image";
import image__desk_ru from "../../../public/static/home-page/descktop.svg";
import styles from "./styles.module.scss";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        {/* <link rel="preload" as="image" href="/home-image-inner-mobile.svg"/> */}
      </Head>
      <div className={styles.image__side}>
        <Image
          src={image__desk_ru}
          height={400}
          width={536}
          alt="home inner "
          priority={true}
        />
      </div>
    </>
  );
}
