import React from "react";
import Magnifier from "react-magnifier";
import styles from "./styles.module.scss";
const yourImage = require("../../../../public/static/planning-page/location/panoramic-botanica.webp");
const yourImage_ru = require("../../../../public/static/planning-page/location/panoramic-botanica-pins-ru.webp");

import { LangContext } from "../../../../pages/_app";

export default function MagnifyComponent() {
  const { isToggleLang } = React.useContext(LangContext);

  return (
    <div className={styles.magnifier__body}>
      <Magnifier
        className={styles.magnifier}
        src={isToggleLang === "ro" ? yourImage.default.src : yourImage_ru.default.src}
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
