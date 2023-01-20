import React from "react";
import Image from "next/image";
import pinIcon from "../../../../../public/static/planning-page/location/pin-GB.png"
import { motion } from "framer-motion";
import styles from './styles.module.scss'

import { useMediaQuery } from "react-responsive";

export default function MarkButton_8({handlerIsOpen8}) {
  const isMobile = useMediaQuery({
    query: "(max-width: 576px)",
  });
  
  return (
    <motion.button
      className={styles.loaction__mark}
      disabled={isMobile ? true : null}
      onClick={handlerIsOpen8}
    >
      <Image
      src={pinIcon}
      className="absolute bottom-0 left-0 z-20"
      height="60vw"
      width="150vw"
      alt="pin icon"
      priority={true}
      />
    </motion.button>
  );
}
