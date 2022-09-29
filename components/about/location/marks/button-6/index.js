import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_6({handlerIsOpen6}) {
  return (
    <motion.span
      className={styles.loaction__mark}
      onClick={handlerIsOpen6}
    ></motion.span>
  );
}
