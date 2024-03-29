import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import Plan_1 from "./plan-1";
import Plan_2 from "./plan-2";

export default function Plan() {

  const [isPlan, setIsPlan] = useState(2);
  const [isButtonActive, setIsButtonActive] = useState(2);

  const handlerToggleTrance1 = () => {
    setIsPlan(1);
    setIsButtonActive(1);
  };

  const handlerToggleTrance2 = () => {
    setIsPlan(2);
    setIsButtonActive(2);
  };

  return (
    <>
      <div className={styles.complex__section}>
        <div className={styles.complex__wrapper}>
          <h1 className={styles.complex__title}>
            Plan etaj
            <span></span>
          </h1>
          <div className={styles.trance__toggler}>
            <button
              type="button"
              className={
                isButtonActive == 1
                  ? styles.trance__toggler_r__active
                  : styles.trance__toggler_r
              }
              onClick={handlerToggleTrance1}
            >
              Tranșa 1
            </button>

            <button
              type="button"
              className={
                isButtonActive == 2
                  ? styles.trance__toggler_r__active
                  : styles.trance__toggler_r
              }
              onClick={handlerToggleTrance2}
            >
              Tranșa 2
            </button>
          </div>
          <div className={styles.container}>
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                {isPlan === 1 && <Plan_1 /> }
                {isPlan === 2 && <Plan_2 /> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
