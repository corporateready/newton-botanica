import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import header__logo from "../../../../public/static/home-page/header-logo.svg";
import phone__icon from "../../../../public/static/home-page/phone.svg";
import { motion } from "framer-motion";

import { LangContext } from "../../../../pages/_app";

export default function Index() {
  const { isToggleLang, handleLanguageChange, options } = React.useContext(LangContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <Link href="/">
            <a className={styles.header__logo}>
              <Image
                src={header__logo}
                height={45}
                width={90}
                priority
                alt="home header logo"
              />
            </a>
          </Link>

          <motion.div className="absolute top-[28%] right-[4%] sm:right-[30%]">
            <select
              value={isToggleLang}
              onChange={handleLanguageChange}
              multiple={false}
              id="select"
              className="text-sm text-green-600 font-bold focus-visible:outline-none hover:cursor-pointer"
            >
              {options.map((o) => (
                <option key={o.id} value={o.value}>
                  {o.name}
                </option>
              ))}
            </select>
          </motion.div>

          <div className={styles.header__phone_link}>
            <motion.div
              className={styles.header__phone_icon}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Image
                src={phone__icon}
                height={19}
                width={20}
                alt="home header phone icon"
              />
            </motion.div>
            <a
              href="tel:+37360044040"
              className={styles.header__phone_link_number}
            >
              +373 600 440 40
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
