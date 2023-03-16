import React from "react";
import styles from "./Styles.module.scss";

export default function Index({
  mounthes,
  mounthesRu,
  isActive,
  setIsActive,
  isItem,
  handlerTabClick,
  isMounthDesk,
  setIsMounthDesk,
  isToggleLang
}) {

  React.useEffect(() => {})
  
  const arr = [];
  for (let i = 0; i < isItem + 1; i++) {
    arr.push(
      <button
      type="button"
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
        disabled={ i === isItem}
      >
        <span></span>
        <div key={i}>
          {mounthes[i]}
          </div>
      </button>
    );
  }

  return <div className={styles.timeline}>{arr}</div>;
}
