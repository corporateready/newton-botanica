import React from "react";
import styles from "./Designs.module.scss";
import Link from "next/link";
import Image from "next/image";
import grid__item_1 from "../../../public/static/planning-page/designs-grid/geam.png";
import grid__item_2 from "../../../public/static/planning-page/designs-grid/cazan.png";
import grid__item_3 from "../../../public/static/planning-page/designs-grid/caraida.png";
import grid__item_4 from "../../../public/static/planning-page/designs-grid/floor.png";
import grid__item_5 from "../../../public/static/planning-page/designs-grid/dubble-wall.png";
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
              Calitatea construcției sporite
              <span></span>
            </h1>
            <div className={styles.designs__grid}>
              <div className={styles.designs__item}>
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_1}
                    height={164}
                    width={105}
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
                    height={160}
                    width={80}
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
                    src={grid__item_3}
                    height={134}
                    width={144}
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
                    src={grid__item_4}
                    height={98}
                    width={172}
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
                    src={grid__item_5}
                    height={119}
                    width={122}
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
                    src={grid__item_6}
                    height={92}
                    width={111}
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
                    src={grid__item_7}
                    height={147}
                    width={96}
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
                    src={grid__item_8}
                    height={158}
                    width={144}
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Geamuri Rehau Low-e
                  <br />5 camere
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
