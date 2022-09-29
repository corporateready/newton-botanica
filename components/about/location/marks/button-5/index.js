import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_5({handlerIsOpen5}) {
  return (
    <motion.span
      className={styles.loaction__mark}
      onClick={handlerIsOpen5}
    ></motion.span>
  );
}
