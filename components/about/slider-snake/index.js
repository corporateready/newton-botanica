import React from 'react'
import styles from './Styles.module.scss'
import Gallery from './gallery-2'
import Head from 'next/head';

import { LangContext } from "../../../pages/_app";

export default function Index({setImageURL}) {
  const { isToggleLang } = React.useContext(LangContext);

    return (
      <>
      <Head>
      </Head>
        <div className={styles.complex__section}>
          <div className={styles.complex__wrapper}>
            <h1 className={styles.complex__title}>
              {isToggleLang === "ro" ? "Galerie" : "Галерея"}
              <span></span>
            </h1>
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                <Gallery setImageURL={setImageURL}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
