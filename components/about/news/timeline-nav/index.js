import React, { useState } from "react";
import styles from "./TimelineNav.module.scss";
import StepNavigation from "./step-navigation";

export default function Index(props) {
  // const mounthes = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const [currentStep, setCurrentStep] = useState(1);

  // const updateStep = (step) => {
  //   setCurrentStep(step)
  //   console.log(step);
  // }

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
