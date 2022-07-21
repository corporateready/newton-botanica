import React, { useEffect, useState } from "react";
import styles from "./Styles.module.scss";

export default function Index({ mounthes, setIsMounth }) {
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
            onClick={() => {
              console.log(i)
              setIsMounth('Tab clicked!')
              i > isActive ? setIsActive(isActive+i) : setIsActive(isActive-i)}}
          >
            <div key={i}>
              {mounthes[i]}
            </div>
          </div>)
        
    }

  return (
    <div className={styles.timeline}>
      {arr}
    </div>
  );
}
