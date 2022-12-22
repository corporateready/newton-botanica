import React from "react";
import Image from "next/image";
import pinIcon from "../../../../../public/static/planning-page/location/pin-GB.png"
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export default function MarkButton_8({handlerIsOpen8}) {
  return (
    <motion.button
      className={styles.loaction__mark}
      onClick={handlerIsOpen8}
    >
      <Image
      src={pinIcon}
      className="absolute bottom-0 left-0 z-20"
      height="60vw"
      width="150vw"
      alt="pin icon"
      />
    </motion.button>
  );
}
