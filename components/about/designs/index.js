import React from "react";
import styles from "./Designs.module.scss";
import Link from "next/link";
import Image from "next/image";
import grid__item_1 from "../../../public/static/planning-page/designs-grid/geam.png";
import grid__item_2 from "../../../public/static/planning-page/designs-grid/cazan.png";
import grid__item_3 from "../../../public/static/planning-page/designs-grid/caraida.png";
import grid__item_4 from "../../../public/static/planning-page/designs-grid/floor.png";
import grid__item_5 from "../../../public/static/planning-page/designs-grid/dubble-wall.webp";
import grid__item_6 from "../../../public/static/planning-page/designs-grid/mineral-wool.png";
import grid__item_7 from "../../../public/static/planning-page/designs-grid/elevator.png";
import grid__item_8 from "../../../public/static/planning-page/designs-grid/white-variant.png";

export default function index() {
  return (
    <>
      <div className={styles.designs__section}>
        <div className={styles.designs__wrapper}>
          <div className={styles.designs__inner}>
            <h1 className={styles.designs__title}>
            Calitate sporită a construcției
              <span></span>
            </h1>
            <div className={styles.designs__grid}>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_1}
                    layout="intrinsic"
                    sizes="(max-width: 71em) 33vw,
                      (max-width: 48em) 50vw,
                      100vw"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Geamuri Rehau Low-e
                  <br />5 camere
                </p>
              </div>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_2}
                    layout="intrinsic"
                    sizes="(max-width: 71em) 33vw,
                      (max-width: 48em) 50vw,
                      100vw"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                Cazan de ultimă 
                <br/>generație (2 contoare)
                </p>
              </div>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_3}
                    layout="intrinsic"
                    sizes="(max-width: 71em) 33vw,
                      (max-width: 48em) 50vw,
                      100vw"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                Pereți exteriori 
                <br/>din K-Bloc 
                </p>
              </div>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_4}
                    layout="intrinsic"
                    sizes="(max-width: 71em) 33vw,
                      (max-width: 48em) 50vw,
                      100vw"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Tehnologie italiană de izolare
                  <br/>a pereților și pardoselii
                </p>
              </div>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_5}
                    layout="intrinsic"
                    sizes="(max-width: 71em) 33vw,
                      (max-width: 48em) 50vw,
                      100vw"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Pereți în 3 straturi
                  <br/>între apartamente
                </p>
              </div>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_6}
                    layout="intrinsic"
                    sizes="(max-width: 71em) 33vw,
                      (max-width: 48em) 50vw,
                      100vw"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Fațadă izolată
                  <br/>cu vată bazaltică
                </p>
              </div>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_7}
                    layout="intrinsic"
                    sizes="(max-width: 71em) 33vw,
                      (max-width: 48em) 50vw,
                      100vw"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Ascensoare silențioase
                  <br/>de înaltă viteză
                </p>
              </div>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_8}
                    layout="intrinsic"
                    sizes="(max-width: 71em) 33vw,
                      (max-width: 48em) 50vw,
                      100vw"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                Variantă albă
                </p>
              </div>
            </div>
            <Link href="/planning">
            <a className={styles.button__detail}>Află detalii</a>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
