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
  
  const isMounth = ["November/21","January/22","March/22", "June/22", ];
  const isMounthRu = ["Ноябрь/21","Январь/22","Март/22", "Июнь/22", ];

  // const [isYear, setIsYear] = useState("2022");
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
              {/* <select
                className={styles.news__navigation_years}
                value={isYear}
                onChange={(e) => {
                  setIsYear(e.target.value);
                }}
              >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select> */}
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
                // isYear={isYear}
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
                    onClick={() => setIsYear(mounth)}
                  >
                    {mounth}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.news__grids}>
              {/* {isYear === "2021" ? (
                <Year21 />
              ) : ( */}
              <Year22 isMounthDesk={isMounthDesk} isMounthMob={isMounthMob} />
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// function Year21() {
//   return <>{<November21 />}</>;
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
// function February() {
//   return (
//     <motion.div
//       className={styles.news__grid_month}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.7 } }}
//     >
//       <div className={styles.news__grid_item}>
//         <div className={styles.item__bg}>
//           <Image
//             src={location__bg_2}
//             height={333}
//             width={499}
//             priority
//             alt=""
//           />
//         </div>
//         <div className={styles.item__info}>
//           <div className={styles.item__info_l}>
//             <p>TRANȘA 2</p>
//           </div>
//           <div className={styles.item__info_r}>
//             <div className={styles.item__info_r_up}>
//               <div className={styles.icon__checked_wrapp}>
//                 <Image
//                   src={icon__checked}
//                   height={11}
//                   width={11}
//                   priority
//                   alt=""
//                 />
//               </div>
//               <p>Se execută marcarea coloanelor în parcare</p>
//             </div>
//             <div className={styles.item__info_r_down}>
//               <div className={styles.icon__checked_wrapp}>
//                 <Image
//                   src={icon__checked}
//                   height={11}
//                   width={11}
//                   priority
//                   alt=""
//                 />
//               </div>
//               <p>Se execută marcarea coloanelor în parcare</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.news__grid_item}>
//         <div className={styles.item__bg}>
//           <Image
//             src={location__bg_2}
//             height={333}
//             width={499}
//             priority
//             alt=""
//           />
//         </div>
//         <div className={styles.item__info}>
//           <div className={styles.item__info_l}>
//             <p>TRANȘA 2</p>
//           </div>
//           <div className={styles.item__info_r}>
//             <div className={styles.item__info_r_up}>
//               <div className={styles.icon__checked_wrapp}>
//                 <Image
//                   src={icon__checked}
//                   height={11}
//                   width={11}
//                   priority
//                   alt=""
//                 />
//               </div>
//               <p>Se execută marcarea coloanelor în parcare</p>
//             </div>
//             <div className={styles.item__info_r_down}>
//               <div className={styles.icon__checked_wrapp}>
//                 <Image
//                   src={icon__checked}
//                   height={11}
//                   width={11}
//                   priority
//                   alt=""
//                 />
//               </div>
//               <p>Se execută marcarea coloanelor în parcare</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.news__grid_item}>
//         <div className={styles.item__bg}>
//           <Image
//             src={location__bg_2}
//             height={333}
//             width={499}
//             priority
//             alt=""
//           />
//         </div>
//         <div className={styles.item__info}>
//           <div className={styles.item__info_l}>
//             <p>TRANȘA 2</p>
//           </div>
//           <div className={styles.item__info_r}>
//             <div className={styles.item__info_r_up}>
//               <div className={styles.icon__checked_wrapp}>
//                 <Image
//                   src={icon__checked}
//                   height={11}
//                   width={11}
//                   priority
//                   alt=""
//                 />
//               </div>
//               <p>Se execută marcarea coloanelor în parcare</p>
//             </div>
//             <div className={styles.item__info_r_down}>
//               <div className={styles.icon__checked_wrapp}>
//                 <Image
//                   src={icon__checked}
//                   height={11}
//                   width={11}
//                   priority
//                   alt=""
//                 />
//               </div>
//               <p>Se execută marcarea coloanelor în parcare</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.news__grid_item}>
//         <div className={styles.item__bg}>
//           <Image
//             src={location__bg_2}
//             height={333}
//             width={499}
//             priority
//             alt=""
//           />
//         </div>
//         <div className={styles.item__info}>
//           <div className={styles.item__info_l}>
//             <p>TRANȘA 2</p>
//           </div>
//           <div className={styles.item__info_r}>
//             <div className={styles.item__info_r_up}>
//               <div className={styles.icon__checked_wrapp}>
//                 <Image
//                   src={icon__checked}
//                   height={11}
//                   width={11}
//                   priority
//                   alt=""
//                 />
//               </div>
//               <p>Se execută marcarea coloanelor în parcare</p>
//             </div>
//             <div className={styles.item__info_r_down}>
//               <div className={styles.icon__checked_wrapp}>
//                 <Image
//                   src={icon__checked}
//                   height={11}
//                   width={11}
//                   priority
//                   alt=""
//                 />
//               </div>
//               <p>Se execută marcarea coloanelor în parcare</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
