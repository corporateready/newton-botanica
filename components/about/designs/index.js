import React from "react";
import styles from "./Designs.module.scss";
import Image from "next/image";
import grid__item_1 from "../../../public/static/planning-page/designs-grid/geam.png";
import grid__item_2 from "../../../public/static/planning-page/designs-grid/cazan.png";
import grid__item_3 from "../../../public/static/planning-page/designs-grid/caraida.png";
import grid__item_4 from "../../../public/static/planning-page/designs-grid/floor.png";
import grid__item_5 from "../../../public/static/planning-page/designs-grid/dubble-wall.webp";
import grid__item_6 from "../../../public/static/planning-page/designs-grid/mineral-wool.png";
import grid__item_7 from "../../../public/static/planning-page/designs-grid/elevator.png";
import grid__item_8 from "../../../public/static/planning-page/designs-grid/white-variant.png";
import { motion } from "framer-motion";

import {
  DesItem_1,
  DesItem_2,
  DesItem_3,
  DesItem_4,
  DesItem_5,
  DesItem_6,
  DesItem_7,
  DesItem_8,
} from "./descriptions";

export default function Index({ setIsPopUpSend }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);
  const [isVisible3, setIsVisible3] = React.useState(false);
  const [isVisible4, setIsVisible4] = React.useState(false);
  const [isVisible5, setIsVisible5] = React.useState(false);
  const [isVisible6, setIsVisible6] = React.useState(false);
  const [isVisible7, setIsVisible7] = React.useState(false);
  const [isVisible8, setIsVisible8] = React.useState(false);

  const hanlerIsOpenPopup = () => {
    setIsPopUpSend(true);
  };

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
              <motion.div
                className={styles.designs__item}
                // onClick={() => setIsVisible(!isVisible)}
              >
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_1}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Geamuri Rehau Low-e
                  <br />5 camere
                </p>
              </motion.div>
              {isVisible && <DesItem_1 setIsVisible={setIsVisible} />}

              <motion.div
                className={styles.designs__item}
                // onClick={() => setIsVisible(!isVisible2)}
              >
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_2}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Cazan de ultimă
                  <br />
                  generație (2 contoare)
                </p>
              </motion.div>
              {isVisible2 && <DesItem_2 setIsVisible2={setIsVisible2} />}

              <motion.div
                className={styles.designs__item}
                // onClick={() => setIsVisible3(!isVisible3)}
              >
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_3}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Pereți exteriori
                  <br />
                  din K-Bloc
                </p>
              </motion.div>
              {isVisible3 && <DesItem_3 setIsVisible3={setIsVisible3} />}

              <motion.div
                className={styles.designs__item}
                // onClick={() => setIsVisible4(!isVisible4)}
              >
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_4}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Tehnologie italiană de izolare
                  <br />a pereților și pardoselii
                </p>
              </motion.div>
              {isVisible4 && <DesItem_4 setIsVisible4={setIsVisible4} />}

              <motion.div
                className={styles.designs__item}
                // onClick={() => setIsVisible5(!isVisible5)}
              >
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_5}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Pereți în 3 straturi
                  <br />
                  între apartamente
                </p>
              </motion.div>
              {isVisible5 && <DesItem_5 setIsVisible5={setIsVisible5} />}

              <motion.div
                className={styles.designs__item}
                // onClick={() => setIsVisible6(!isVisible6)}
              >
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_6}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Fațadă izolată
                  <br />
                  cu vată bazaltică
                </p>
              </motion.div>
              {isVisible6 && <DesItem_6 setIsVisible6={setIsVisible6} />}

              <motion.div
                className={styles.designs__item}
                // onClick={() => setIsVisible6(!isVisible6)}
              >
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_7}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>
                  Ascensoare silențioase
                  <br />
                  de înaltă viteză
                </p>
              </motion.div>
              {isVisible7 && <DesItem_7 setIsVisible7={setIsVisible7} />}

              <motion.div
                className={styles.designs__item}
                // onClick={() => setIsVisible8(!isVisible8)}
              >
                <div className={styles.designs__image}>
                  <Image
                    src={grid__item_8}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
                <p className={styles.designs__item_name}>Variantă albă</p>
              </motion.div>
              {isVisible8 && <DesItem_8 setIsVisible8={setIsVisible8} />}
            </div>
            <button
              type="button"
              className={styles.button__detail}
              onClick={hanlerIsOpenPopup}
            >
              Află mai multe detalii despre proiect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
