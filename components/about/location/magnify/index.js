import React from "react";
import ReactImageMagnify from "react-image-magnify";

import styles from "./styles.module.scss";

import watchImg300 from "../../../../public/static/planning-page/location/botanica-location.webp";
import watchImg1200 from "../../../../public/static/planning-page/location/botanica-location.webp";

export function Magnify() {
  return (
    <div className={styles.fluid__image_container}>
      {/* <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: `${watchImg300}`,
          },
          largeImage: {
            src: `${watchImg1200}`,
            width: 1200,
            height: 1800,
          },
        }}
      /> */}
    </div>
  );
}
