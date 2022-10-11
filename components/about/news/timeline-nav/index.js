import React from "react";
import styles from "./Styles.module.scss";

export default function Index({
  mounthes,
  isActive,
  setIsActive,
  isItem,
  handlerTabClick,
  isMounthDesk,
  setIsMounthDesk,
  // isYear
}) {
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
        }}
      >
        <div key={i}>{mounthes[i]}</div>
      </div>
    );
  }

  return <div className={styles.timeline}>{arr}</div>;
}
