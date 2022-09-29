import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_8({handlerIsOpen8}) {
  return (
    <motion.span
      className={styles.loaction__mark}
      onClick={handlerIsOpen8}
    ></motion.span>
  );
}
