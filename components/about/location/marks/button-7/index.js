import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_7({handlerIsOpen7}) {
  return (
    <motion.span
      className={styles.loaction__mark}
      onClick={handlerIsOpen7}
    ></motion.span>
  );
}
