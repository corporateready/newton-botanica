import React from "react";
import Image from "next/image";
import image__side_ro from "../../../public/static/home-page/dobanda.svg";
import styles from "./styles.module.scss";

export default function Index() {
  return (

    <>
    <div className={styles.image__side_mobile}>
      <Image
        src={image__side_ro}
        height={466}
        width={381}
        alt="home inner mobile "
        priority={true}
      />
    </div>
    </>
  );
}
