import React from "react";
import styles from "./Gallery.module.scss";
import { Plan_1 } from "./plan-1";
import { Plan_2 } from "./plan-2";

export default function index() {
  const buttons__toggle = [
    { name: "Tranșa 1", id: 1, tag: "trance-1" },
    { name: "Tranșa 2", id: 2, tag: "trance-2" },
  ];

  const [isPlan, setIsPlan] = React.useState(true);
  const [isButtonActive, setIsButtonActive] = React.useState(false)

  const handlerToggleTrance2 = () => {
    setIsPlan(!isPlan);
    setIsButtonActive(!isButtonActive)
  };

  console.log(isPlan);

  return (
    <>
      <div className={styles.complex__section}>
        <div className={styles.complex__wrapper}>
          <h1 className={styles.complex__title}>
            Plan etaj
            <span></span>
          </h1>
          <div className={styles.trance__toggler}>
            {buttons__toggle.map((btg) => (
              <button
                key={btg.id}
                className={
                  isButtonActive
                    ? styles.trance__toggler_r__active
                    : styles.trance__toggler_r
                }
                onClick={handlerToggleTrance2}
              >
                {btg.name}
              </button>
            ))}
          </div>
          <div className={styles.container}>
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                {isPlan ? <Plan_1 /> : <Plan_2 />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
