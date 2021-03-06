import React, { useState } from "react";
import styles from "./News.module.scss";
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/news/january/jan-1.jpeg";
import location__bg_2 from "../../../public/static/planning-page/news/ferbrary/feb-1.jpeg";
import icon__checked from "../../../public/static/planning-page/news/nhgb-icon-checked.svg";
import TimlineNav from "./timeline-nav";

import { motion } from "framer-motion";

export default function News() {
  const [isYear, setIsYear] = useState();
  const [isMounth, setIsMounth] = useState([
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
    "December",
  ]);
  const [isMounthMob, setIsMounthMob] = useState("January");
  const [isItem] = useState(12);
  const [isActive, setIsActive] = useState(0);
  const [isLine, setIsLine] = useState(0);
  const [isToggle, setIsToggle] = useState(1);

  const handlerTabClick = (i) => {
    console.log("Clicked", i);
    console.log("isToggle", isToggle);
    setIsToggle(i)
  };
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
                mounthes={isMounth}
                isLine={isLine}
                isActive={isActive}
                setIsActive={setIsActive}
                isItem={isItem}
                setIsLine={setIsLine}
                handlerTabClick={handlerTabClick}
                isToggle={isToggle}
                setIsToggle={setIsToggle}
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
                    onClick={() => console.log(isMounthMob)}
                  >
                    {mounth}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.news__grids}>
              {isYear === "2021" ? (
                <Year21 />
              ) : (
                <Year22 isToggle={isToggle} isMounthMob={isMounthMob} />
              )}
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
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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

function Year22({ isMounthMob }) {
  return (
    <>
      {isMounthMob === "January" && <January />}
      {isMounthMob === "February" && <February />}
      {isMounthMob === "March" && <March />}
      {isMounthMob === "April" && <April />}
      {isMounthMob === "May" && <May />}
      {isMounthMob === "June" && <June />}
      {isMounthMob === "July" && <July />}
      {isMounthMob === "August" && <August />}
      {isMounthMob === "September" && <September />}
      {isMounthMob === "October" && <October />}
      {isMounthMob === "November" && <November />}
      {isMounthMob === "December" && <December />}
    </>
  );
}

function January() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
    </motion.div>
  );
}
function February() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function March() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function April() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function May() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function June() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function July() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function August() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function September() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function October() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function November() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
function December() {
  return (
    <motion.div
      className={styles.news__grid_month}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
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
