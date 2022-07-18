import React from 'react'
import styles from './Styles.module.scss'
import {Gallery} from './gallery'
import Head from 'next/head';

export default function Index() {
    return (
      <>
      <Head>
      </Head>
        <div className={styles.complex__section}>
          <div className={styles.complex__wrapper}>
            <h1 className={styles.complex__title}>
              Galerie
              <span></span>
            </h1>
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                {/* <Gallery /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
