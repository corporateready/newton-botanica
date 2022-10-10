import React from "react";
import Magnifier from "react-magnifier";
import { styles } from "../../news/imports";
const yourImage = require("../../../../public/static/planning-page/location/botanica-location.webp");

export default function MagnifyComponent() {
  console.log(yourImage.default.src);
  return (
    <Magnifier
      className={styles.magnifier}
      src={yourImage.default.src}
      width={"100%"}
      alt="image location"
      mgMouseOffsetY={-100}
      mgMouseOffsetX={100}
      mgTouchOffsetX={30}
      mgTouchOffsetY={30}
      mgShape={"square"}
      mgWidth={200}
    />
  );
}
