import React, { useState } from "react";
import styles from "./TimelineNav.module.scss";
import StepNavigation from "./step-navigation";

export default function Index(props) {

  return (
    <div className={styles.tl__navigation}>
      <StepNavigation
        labelArray={props.labelArray}
        currentStep={props.currentStep}
        updateStep={props.updateStep}
      ></StepNavigation>
    </div>
  );
}
