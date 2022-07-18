import React, { useEffect, useState } from "react";
import styles from "./Styles.module.scss";

export default function Index({ mounthes }) {
    const [isItem] = useState(12)
    const [isActive, setIsActive] = useState(0)
    const [isLine, setIsLine] = useState(0)
    useEffect(()=>{
        setIsLine(100/(isItem-1)*isActive)
    },[isLine, isActive])

    const arr = []
    for (let i = 0; i < isItem; i++) {
        arr.push(<div
            className={i <= isActive ? styles.timeline__step_active : styles.timeline__step}
            key={i}
            onClick={() => i > isActive ? setIsActive(isActive+i) : setIsActive(isActive-i)}
          >
            {i}
          </div>)
        
    }
  const hendlerClickItem = (item) => {
    console.log(item.target.value);
  };
  return (
    <div className={styles.timeline}>
      {/* {mounthes.map((mounth) => (
        
      ))} */}
      {arr}
    </div>
  );
}
