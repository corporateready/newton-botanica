import React, { useState } from "react";
import styles from "./News.module.scss";
// import Link from "next/link";
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/news/january/jan-1.jpeg";
import location__bg_2 from "../../../public/static/planning-page/news/ferbrary/feb-1.jpeg";
import icon__checked from "../../../public/static/planning-page/news/nhgb-icon-checked.svg";
import TimlineNav from "./timeline-nav";

import { motion } from "framer-motion";

export default function News() {

  const [isYear, setIsYear] = useState();
  const [current, setCurrent] = React.useState(1);

  const [currentStep, setCurrentStep] = useState(1);

  const mounthes = [
    {id: 1, mounth:"January"},
    {id: 2, mounth:"February"},
    {id: 3, mounth:"March"},
    {id: 4, mounth:"April"},
    {id: 5, mounth:"May"},
    {id: 6, mounth:"June"},
    {id: 7, mounth:"July"},
    {id: 8, mounth:"August"},
    {id: 9, mounth:"September"},
    {id: 10, mounth:"October"},
    {id: 11, mounth:"November"},
    {id: 12, mounth:"December"}  
  ];

  const updateStep = (step) => {
    setCurrentStep(step)
    console.log(step);
  }

  // const updateCurrent = () => {
  //   setCurrent(current);
  // };

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
              <TimlineNav
               mounthes={mounthes}
              />
              <select className={styles.news__navigation_mounth_mob}>
                {mounthes.map((mounth)=>(
                  <option key={mounth.id}>{mounth.mounth}</option>
                ))}
              </select>
            </div>
            <div className={styles.news__grids}>
              {isYear === "2021" ? <Year21 /> : <Year22 />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Year21() {
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

function Year22() {
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
        <div className={styles.item__info}>
          <div className={styles.item__info_l}>
            <p>TRANȘA 1</p>
          </div>
          <div className={styles.item__info_r}>
            <div className={styles.item__info_r_up}>
              <div className={styles.icon__checked_wrapp}>
                <Image
                  src={icon__checked}
                  height={11}
                  width={11}
                  priority
                  alt=""
                />
              </div>
              <p>Se execută marcarea coloanelor în parcare</p>
            </div>
            <div className={styles.item__info_r_down}>
              <div className={styles.icon__checked_wrapp}>
                <Image
                  src={icon__checked}
                  height={11}
                  width={11}
                  priority
                  alt=""
                />
              </div>
              <p>Se execută marcarea coloanelor în parcare</p>
            </div>
          </div>
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
        <div className={styles.item__info}>
          <div className={styles.item__info_l}>
            <p>TRANȘA 1</p>
          </div>
          <div className={styles.item__info_r}>
            <div className={styles.item__info_r_up}>
              <div className={styles.icon__checked_wrapp}>
                <Image
                  src={icon__checked}
                  height={11}
                  width={11}
                  priority
                  alt=""
                />
              </div>
              <p>Se execută marcarea coloanelor în parcare</p>
            </div>
            <div className={styles.item__info_r_down}>
              <div className={styles.icon__checked_wrapp}>
                <Image
                  src={icon__checked}
                  height={11}
                  width={11}
                  priority
                  alt=""
                />
              </div>
              <p>Se execută marcarea coloanelor în parcare</p>
            </div>
          </div>
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
        <div className={styles.item__info}>
          <div className={styles.item__info_l}>
            <p>TRANȘA 2</p>
          </div>
          <div className={styles.item__info_r}>
            <div className={styles.item__info_r_up}>
              <div className={styles.icon__checked_wrapp}>
                <Image
                  src={icon__checked}
                  height={11}
                  width={11}
                  priority
                  alt=""
                />
              </div>
              <p>Se execută marcarea coloanelor în parcare</p>
            </div>
            <div className={styles.item__info_r_down}>
              <div className={styles.icon__checked_wrapp}>
                <Image
                  src={icon__checked}
                  height={11}
                  width={11}
                  priority
                  alt=""
                />
              </div>
              <p>Se execută marcarea coloanelor în parcare</p>
            </div>
          </div>
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
        <div className={styles.item__info}>
          <div className={styles.item__info_l}>
            <p>TRANȘA 2</p>
          </div>
          <div className={styles.item__info_r}>
            <div className={styles.item__info_r_up}>
              <div className={styles.icon__checked_wrapp}>
                <Image
                  src={icon__checked}
                  height={11}
                  width={11}
                  priority
                  alt=""
                />
              </div>
              <p>Se execută marcarea coloanelor în parcare</p>
            </div>
            <div className={styles.item__info_r_down}>
              <div className={styles.icon__checked_wrapp}>
                <Image
                  src={icon__checked}
                  height={11}
                  width={11}
                  priority
                  alt=""
                />
              </div>
              <p>Se execută marcarea coloanelor în parcare</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
