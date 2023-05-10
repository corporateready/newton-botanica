import React from "react";
import Image from "next/image";
import image__desk_ro from "../../../public/static/home-page/home-image-inner.svg";
import styles from "./styles.module.scss";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <div className={styles.image__side}>
        <Image
          src={image__desk_ro}
          height={400}
          width={536}
          alt="home inner "
          priority={true}
        />
      </div>
    </>
  );
}
