import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_9({handlerIsOpen9}) {
  return (
    <motion.span
      className={styles.loaction__mark}
      onClick={handlerIsOpen9}
    ></motion.span>
  );
}
