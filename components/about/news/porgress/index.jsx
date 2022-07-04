import React, { useState } from "react";
import styles from "./Progress.module.scss";

export default function ProgressNav({ mounthes, updateCurrent }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.news__navigation_line}>
      <div className={styles.navigation__items}>
        {mounthes.map((mounth, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              setIsActive(!isActive);
              updateCurrent(mounth.mounth)
              console.log("mounth", mounth.mounth);
            }}
            className={styles.navigation__item}
          >
            <p className={styles.navigation__item_name}>
              {mounth.mounth && mounth.mounth}
            </p>
            <p
              className={
                isActive
                  ? styles.navigation__item_visible_active
                  : styles.navigation__item_visible
              }
            ></p>
            <button
              className={
                isActive
                  ? styles.navigation__item_button_active
                  : styles.navigation__item_button
              }
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}
