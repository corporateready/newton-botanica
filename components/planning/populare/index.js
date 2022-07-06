import styles from "./Populare.module.scss";
import { Slider } from "./slider";

export default function Populare({setIsOpenDetails}) {
  return (
    <>
      <div className={styles.complex__section}>
        <div className={styles.complex__wrapper}>
          <div className={styles.container}>
            <h1 className={styles.complex__title}>
              Cele mai populare planimetrii
              <span></span>
            </h1>
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                <Slider setIsOpenDetails={setIsOpenDetails}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
