import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_4({handlerIsOpen4}) {
  return (
    <motion.span
      className={styles.loaction__mark_4}
      onClick={handlerIsOpen4}
    ></motion.span>
  );
}
