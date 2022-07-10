import styles from "./Populare.module.scss";
import { Slider } from "./slider";

export default function Populare() {
  return (
    <>
      <div className={styles.complex__section}>
        <div className={styles.complex__wrapper}>
          <div className={styles.container}>
            <h1 className={styles.complex__title}>
            Cel mai modern complez rezidențial <div className={styles.separator}></div>de la botanica
            <span></span>
            </h1>
            <div className={styles.complex__inner}>
              <div className={styles.complex__grids}>
                <Slider/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
