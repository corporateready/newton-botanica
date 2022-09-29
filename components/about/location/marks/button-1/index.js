import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_1({handlerIsOpen}) {
  return (
    <motion.span
      className={styles.loaction__mark}
      onClick={handlerIsOpen}
    ></motion.span>
  );
}
