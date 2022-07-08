import React from "react";
import Step from "../step";
import styles from './StepNav.module.scss'

export default function StepNavigation(props) {
  return (
    <div className={styles.tl__navigation}>
      {props.labelArray.map((item, index) => (
        <Step key={index} index={index} label={item}
        selected={props.currentStep}
        updateStep={props.updateStep}>
        </Step>
      ))}
    </div>
  );
}
