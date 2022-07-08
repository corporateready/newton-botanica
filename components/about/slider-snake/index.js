import React from 'react'
import styles from './Styles.module.scss'
import {Gallery} from './gallery'
import Head from 'next/head';

export default function index() {
    return (
      <>
      <Head>
      <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css"/>
      <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css"/>
      </Head>
        <div className={styles.complex__section}>
          <div className={styles.complex__wrapper}>
            <h1 className={styles.complex__title}>
              Galerie
              <span></span>
            </h1>
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                <Gallery />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
