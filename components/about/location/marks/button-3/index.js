import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_3({handlerIsOpen3}) {
  return (
    <motion.span
      className={styles.loaction__mark_3}
      onClick={handlerIsOpen3}
    ></motion.span>
  );
}
