import React from "react";
import styles from "./News.module.scss";
// import Link from "next/link";
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/news/january/jan-1.jpeg";
import location__bg_2 from "../../../public/static/planning-page/news/ferbrary/feb-1.jpeg";

import { motion } from "framer-motion";

export default function index() {
  const mounthes = [
    { mounth: "January" },
    { mounth: "February" },
    { mounth: "March" },
    { mounth: "April" },
    { mounth: "May" },
    { mounth: "June" },
    { mounth: "July" },
    { mounth: "August" },
    { mounth: "September" },
    { mounth: "October" },
    { mounth: "November" },
    { mounth: "December" },
  ];
  const [isYear, setIsYear] = React.useState();
  const [current, setCurrent] = React.useState("");

  return (
    <>
      <div className={styles.news__section}>
        <div className={styles.news__wrapper}>
          <h1 className={styles.news__title}>
            Noutăți de șantier
            <span></span>
          </h1>
          <div className={styles.news__inner}>
            <div className={styles.news__navigation}>
              <select
                className={styles.news__navigation_years}
                value={isYear}
                onChange={(e) => {
                  setIsYear(e.target.value);
                }}
              >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
              <div className={styles.news__navigation_line}>
                <div className={styles.navigation__items}>
                  {mounthes.map((mounth, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        // console.log(setCurrent(current));
                        console.log(mounth.mounth);
                      }}
                      className={styles.navigation__item}
                      value={current}
                      onChange={(e) => {
                        console.log(setCurrent(e.target.value));
                      }}
                    >
                      <p className={styles.navigation__item_name}>
                        {mounth.mounth}
                      </p>
                      <p
                        className={
                          current === "March"
                            ? styles.navigation__item_visible_active
                            : styles.navigation__item_visible
                        }
                      ></p>
                      <button
                        className={styles.navigation__item_button}
                      ></button>
                    </div>
                  ))}
                </div>
              </div>
              <select className={styles.news__navigation_mounth_mob}>
                <option>IUNIE</option>
                <option>IULIE</option>
              </select>
            </div>
            <div className={styles.news__grids}>
              {isYear === "2021" ? <January /> : <Febuary />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function January() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
    >
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={333} width={499} priority alt="" />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={333} width={499} priority alt="" />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={333} width={499} priority alt="" />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={333} width={499} priority alt="" />
        </div>
      </div>
    </motion.div>
  );
}

function Febuary() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
    >
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={333}
            width={499}
            priority
            alt=""
          />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={333}
            width={499}
            priority
            alt=""
          />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={333}
            width={499}
            priority
            alt=""
          />
        </div>
      </div>
      <div className={styles.news__grid_item}>
        <div className={styles.item__bg}>
          <Image
            src={location__bg_2}
            height={333}
            width={499}
            priority
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}
