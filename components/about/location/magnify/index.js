import React from "react";
import Magnifier from "react-magnifier";
import styles from "./styles.module.scss";
const yourImage = require("../../../../public/static/planning-page/location/botanica-location.webp");

export default function MagnifyComponent() {
  console.log(yourImage.default);
  return (
    <div className={styles.magnifier__body}>
      <Magnifier
        className={styles.magnifier}
        src={yourImage.default.src}
        width={"100%"}
        alt="image location"
        mgShowOverflow={true}
        mgMouseOffsetY={0}
        mgMouseOffsetX={0}
        mgTouchOffsetX={0}
        mgTouchOffsetY={-120}
        mgShape={"circle"}
        mgWidth={200}
        mgHeight={200}
      />
    </div>
  );
}
