import React from "react";
import styles from "./Step.module.scss";

export default function Step(props) {
  return (
    <div
      className={styles.step__block}
      onClick={() => props.updateStep(props.index + 1)}
    >
      <span className={styles.step__block_circle}></span>
      <p className={styles.step__item}>{props.label}</p>
      <span className={styles.step__block_line}></span>
    </div>
  );
}
