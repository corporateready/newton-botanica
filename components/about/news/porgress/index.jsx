import React from "react";
import styles from "./Progress.module.scss";

export default function index() {
  const [current, setCurrent] = React.useState([
    { mounth: "January" },
    { mounth: "February" },
    { mounth: "March" },
    { mounth: "April" },
    { mounth: "May" },
    { mounth: "June" },
    { mounth: "July" },
    { mounth: "August" },
    { mounth: "September" },
    { mounth: "October" },
    { mounth: "November" },
    { mounth: "December" },
  ]);
  const [isActive, setIsActive] = React.useState(false);
  //   const mounthValueRef = React.useRef()
  //   console.log(`mounthValueRef: ${mounthValueRef}`);
  const mounthes = [
    { mounth: "January" },
    { mounth: "February" },
    { mounth: "March" },
    { mounth: "April" },
    { mounth: "May" },
    { mounth: "June" },
    { mounth: "July" },
    { mounth: "August" },
    { mounth: "September" },
    { mounth: "October" },
    { mounth: "November" },
    { mounth: "December" },
  ];

  return (
    <div className={styles.news__navigation_line}>
      <div className={styles.navigation__items}>
        {mounthes.map((mounth, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              setCurrent(current);
              setIsActive(!isActive);
              console.log("mounth", mounth.mounth);
            }}
            className={styles.navigation__item}
            value={current}
            onChange={(e) => {
              setCurrent(e.target.value);
            }}
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
