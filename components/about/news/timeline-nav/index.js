import React, { useEffect, useState } from "react";
import styles from "./Styles.module.scss";

export default function Index({
  mounthes,
  isLine,
  setIsLine,
  isActive,
  setIsActive,
  isItem,
  handlerTabClick
}) {

  useEffect(() => {
    setIsLine((100 / (isItem - 1)) * isActive);
  }, [isLine, isActive]);

  const arr = [];
  for (let i = 0; i < isItem; i++) {
    arr.push(
      <div
        className={
          i <= isActive ? styles.timeline__step_active : styles.timeline__step
        }
        key={i}
        onClick={() => {
          console.log(isActive);
          handlerTabClick(i)
          i > isActive ? setIsActive(isActive + i) : setIsActive(isActive - i);
        }}
      >
        <div key={i}
        
        >{mounthes[i]}</div>
      </div>
    );
  }

  return <div className={styles.timeline}>{arr}</div>;
}
