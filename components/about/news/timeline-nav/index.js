import React, { useEffect, useState } from "react";
import styles from "./Styles.module.scss";

export default function Index({
  mounthes,
  isLine,
  isActive,
  setIsActive,
  isItem,
  handlerTabClick,
  isMounthDesk,
  setIsMounthDesk,
}) {
  console.log("isLine: " + isLine);
  console.log("isActive: " + isActive);
  const arr = [];
  for (let i = 0; i < isItem; i++) {
    arr.push(
      <div
        className={
          i <= isActive ? styles.timeline__step_active : styles.timeline__step
        }
        key={i}
        value={isMounthDesk}
        onChange={(e) => {
          setIsMounthDesk(e.target.value);
        }}
        onClick={() => {
          handlerTabClick(i);
          setIsActive(i);
          console.log(isActive);
        }}
      >
        <div key={i}>{mounthes[i]}</div>
      </div>
    );
  }

  return <div className={styles.timeline}>{arr}</div>;
}
