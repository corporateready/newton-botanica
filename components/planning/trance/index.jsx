import React, { useState } from "react";
import styles from "./Trance.module.scss";
import Image from "next/image";
import { one__room_floats } from "./data";
import { two__room_floats } from "./data";
import { three__room_floats } from "./data";
import { four__room_floats } from "./data";
import { motion } from "framer-motion";

export default function Index() {
  const [isTab, setIsTab] = useState(1);

  return (
    <div className={styles.trance__section}>
      <div className={styles.trance__wrapper}>
        <div className={styles.trance__toggler}>
          <button className={styles.trance__toggler_l}>
            <p>vândut</p>
            <p>Tranșa 1</p>
          </button>
          <button className={styles.trance__toggler_r}>Tranșa 2</button>
        </div>

        <div className={styles.trance__paggination}>
          <button
            type="button"
            className={
              isTab == 1
                ? styles.trance__paggination_btn_active
                : styles.trance__paggination_btn
            }
            onClick={() => setIsTab(1)}
          >
            1 cameră
          </button>
          <button
            type="button"
            className={
              isTab === 2
                ? styles.trance__paggination_btn_active
                : styles.trance__paggination_btn
            }
            onClick={() => setIsTab(2)}
          >
            2 cameră
          </button>
          <button
            type="button"
            className={
              isTab === 3
                ? styles.trance__paggination_btn_active
                : styles.trance__paggination_btn
            }
            onClick={() => setIsTab(3)}
          >
            3 cameră
          </button>
          <button
            type="button"
            className={
              isTab === 4
                ? styles.trance__paggination_btn_active
                : styles.trance__paggination_btn
            }
            onClick={() => setIsTab(4)}
          >
            4 cameră
          </button>
        </div>

        <div className={styles.trance__paggination_inner}>
          <motion.div
            className={
              isTab === 1
                ? styles.complex__grid_floats
                : styles.complex__grid_hidden
            }
            hidden={isTab != 1}
            initial={{opacity: 0}}
            animate={isTab===1 ? {opacity: 1 } : null}
            transition= {{duration: 1}}
          >
            {one__room_floats.map((float) => (
              <div key={float.id} className={styles.complex__grid_item}>
                <div className={styles.item__bg}>
                  <Image
                    src={float.image}
                    height={221}
                    width={250}
                    priority
                    // placeholder="blur"
                    alt=""
                  />
                </div>
                <div className={styles.item__description}>
                  <div className={styles.item__description__up}>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.title}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.quantity}
                        <sup>2</sup>
                      </span>
                    </p>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.subtitle}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.coast} €
                      </span>
                    </p>
                  </div>
                  <div className={styles.item__description__down}>
                    <button
                      //   onClick={handlerOpenDetails}
                      type="button"
                      className={styles.details__button}
                    >
                      AFLĂ DETALII
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            className={
              isTab === 2
                ? styles.complex__grid_floats
                : styles.complex__grid_hidden
            }
            hidden={isTab != 2}
            initial={{opacity: 0}}
            animate={isTab===2 ? {opacity: 1 } : null}
            transition= {{duration: 1}}
          >
            {two__room_floats.map((float) => (
              <div key={float.id} className={styles.complex__grid_item}>
                <div className={styles.item__bg}>
                  <Image
                    src={float.image}
                    height={221}
                    width={250}
                    priority
                    // placeholder="blur"
                    alt=""
                  />
                </div>
                <div className={styles.item__description}>
                  <div className={styles.item__description__up}>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.title}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.quantity}
                        <sup>2</sup>
                      </span>
                    </p>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.subtitle}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.coast} €
                      </span>
                    </p>
                  </div>
                  <div className={styles.item__description__down}>
                    <button
                      //   onClick={handlerOpenDetails}
                      type="button"
                      className={styles.details__button}
                    >
                      AFLĂ DETALII
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            className={
              isTab === 3
                ? styles.complex__grid_floats
                : styles.complex__grid_hidden
            }
            hidden={isTab != 3}
            initial={{opacity: 0}}
            animate={isTab===3 ? {opacity: 1 } : null}
            transition= {{duration: 1}}
          >
            {three__room_floats.map((float) => (
              <div key={float.id} className={styles.complex__grid_item}>
                <div className={styles.item__bg}>
                  <Image
                    src={float.image}
                    height={221}
                    width={250}
                    priority
                    // placeholder="blur"
                    alt=""
                  />
                </div>
                <div className={styles.item__description}>
                  <div className={styles.item__description__up}>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.title}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.quantity}
                        <sup>2</sup>
                      </span>
                    </p>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.subtitle}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.coast} €
                      </span>
                    </p>
                  </div>
                  <div className={styles.item__description__down}>
                    <button
                      //   onClick={handlerOpenDetails}
                      type="button"
                      className={styles.details__button}
                    >
                      AFLĂ DETALII
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            className={
              isTab === 4
                ? styles.complex__grid_floats
                : styles.complex__grid_hidden
            }
            hidden={isTab != 4}
            initial={{opacity: 0}}
            animate={isTab===4 ? {opacity: 1 } : null}
            transition= {{duration: 1}}
          >
            {four__room_floats.map((float) => (
              <div key={float.id} className={styles.complex__grid_item}>
                <div className={styles.item__bg}>
                  <Image
                    src={float.image}
                    height={221}
                    width={250}
                    priority
                    // placeholder="blur"
                    alt=""
                  />
                </div>
                <div className={styles.item__description}>
                  <div className={styles.item__description__up}>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.title}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.quantity}
                        <sup>2</sup>
                      </span>
                    </p>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.subtitle}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.coast} €
                      </span>
                    </p>
                  </div>
                  <div className={styles.item__description__down}>
                    <button
                      //   onClick={handlerOpenDetails}
                      type="button"
                      className={styles.details__button}
                    >
                      AFLĂ DETALII
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <div className={styles.trance__paggination_2}></div>
        </div>
        <div className={styles.trance__paggination_inner_toggler}>
          <button className={styles.paggination__inner_button}>1</button>
          <button className={styles.paggination__inner_button}>2</button>
          <button className={styles.paggination__inner_button}>3</button>
          <button className={styles.paggination__inner_button}>4</button>
        </div>
      </div>
    </div>
  );
}
