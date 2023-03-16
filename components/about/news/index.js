import React, { useState } from "react";
import {
  styles,
  TimlineNav,
  January,
  March,
  June,
  November21,
} from "./imports";

import { LangContext } from "../../../pages/_app";

export default function News() {
  const { isToggleLang } = React.useContext(LangContext);
  
  const isMounth = ["","November/21","January/22","March/22", "June/22"];
  const isMounthRu = ["Ноябрь/21","Январь/22","Март/22", "Июнь/22", ];

  const [isMounthDesk, setIsMounthDesk] = useState(0);
  const [isMounthMob, setIsMounthMob] = useState("November/21");
  const [isItem] = useState(4);
  const [isActive, setIsActive] = useState(0);
  const [isToggle, setIsToggle] = useState(1);

  const handlerTabClick = (i) => {
    setIsToggle(i);
    setIsMounthDesk(i);
  };

  return (
    <>
      <div className={styles.news__section}>
        <div className={styles.news__wrapper}>
          <h1 className={styles.news__title}>
            {isToggleLang==="ro"
            ? "Noutăți de șantier"
          :"Новости со стройплощадки"}
            <span></span>
          </h1>
          <div className={styles.news__inner}>
            <div className={styles.news__navigation}>

              <TimlineNav
                mounthes={isMounth}
                mounthesRu={isMounthRu}
                isActive={isActive}
                setIsActive={setIsActive}
                isItem={isItem}
                handlerTabClick={handlerTabClick}
                isToggle={isToggle}
                setIsToggle={setIsToggle}
                isMounthDesk={isMounthDesk}
                setIsMounthDesk={setIsMounthDesk}
                isToggleLang={isToggleLang}
              />
              <select
        className={styles.news__navigation_mounth_mob}
        onChange={(e) => {
          setIsMounthMob(e.target.value);
        }}
      >
        {isMounth.map((mounth, idx) => (
          <option
            key={idx}
            value={mounth}
            onClick={() => setIsMounthMob(mounth)}
          >
            {mounth}
          </option>
        ))}
      </select>
            </div>
            <div className={styles.news__grids}>

              <Year22 isMounthDesk={isMounthDesk} isMounthMob={isMounthMob} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Year22({ isMounthDesk, isMounthMob }) {
  const { isToggleLang } = React.useContext(LangContext);
  return (
    <>
      <div className={styles.mounth__desk}>
        {isMounthDesk === 0 && <November21 />}
        {isMounthDesk === 1 && <January />}
        {isMounthDesk === 2 && <March />}
        {isMounthDesk === 3 && <June />}
      </div>
      <div className={styles.mounth__mob}>
        {isMounthMob === "November/21" && <November21 />}
        {isMounthMob === "January/22" && <January />}
        {isMounthMob === "March/22" && <March />}
        {isMounthMob === "June/22" && <June />}
      </div>
    </>
  );
}