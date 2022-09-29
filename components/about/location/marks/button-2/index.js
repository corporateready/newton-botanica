import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_2({handlerIsOpen2}) {
  return (
    <motion.span
      className={styles.loaction__mark_2}
      onClick={handlerIsOpen2}
    ></motion.span>
  );
}
