import React from "react";
import styles from "./News.module.scss";
import Link from "next/link";
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/news/january/jan-1.jpeg";

export default function index() {
  const [isSelect, setIsSelect] = React.useState('');
  const [mounth, setMounth] = React.useState('')
  // const years=['2022','2021']
  const mounthes= [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  // let lastMounth = ''
  const lastMounth = () => {
    console.log(mounthes[mounthes.length - 1])
  }
  lastMounth()
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
              <select className={styles.news__navigation_years}>
                <option>2022</option>
                <option>2021</option>
              </select>
              <div className={styles.news__navigation_line}>
                <div className={styles.navigation__items}>
                  {
                    mounthes.map(mounth=>(
                      <div key={mounth} className={styles.navigation__item}>
                        <p className={styles.navigation__item_name}>{mounth}</p>
                        <p className={styles.navigation__item_visible}>
                          
                        </p>
                        <button className={styles.navigation__item_button}></button>
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
              <January/>
              {/* <Febuary/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function January() {
  return (
    <div className={styles.news__grid_month}>
                <div className={styles.news__grid_item}>
                  <div className={styles.item__bg}>
                    <Image
                      src={location__bg}
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
                      src={location__bg}
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
                      src={location__bg}
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
                      src={location__bg}
                      height={333}
                      width={499}
                      priority
                      alt=""
                    />
                  </div>
                </div>
              </div>
  )
}

function Febuary() {
  return (
    <div className={styles.news__grid_month}>
                <div className={styles.news__grid_item}>
                  <div className={styles.item__bg}>
                    <Image
                      src={location__bg}
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
                      src={location__bg}
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
                      src={location__bg}
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
                      src={location__bg}
                      height={333}
                      width={499}
                      priority
                      alt=""
                    />
                  </div>
                </div>
              </div>
  )
}

