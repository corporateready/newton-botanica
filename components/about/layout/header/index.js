import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import header__logo from "../../../../public/static/home-page/header-logo.svg";
import phone__icon from "../../../../public/static/home-page/phone.svg";
import { motion } from "framer-motion";

export default function index() {
  React.useEffect(() => {
    (function (w, d, s, h, id) {
      w.roistatProjectId = id;
      w.roistatHost = h;
      var p = d.location.protocol == "https:" ? "https://" : "http://";
      var u = /^.roistat_visit=[^;]+(.)?$/.test(d.cookie)
        ? "/dist/module.js"
        : "/api/site/1.0/" +
          id +
          "/init?referrer=" +
          encodeURIComponent(d.location.href);
      var js = d.createElement(s);
      js.charset = "UTF-8";
      js.async = 1;
      js.src = p + h + u;
      var js2 = d.getElementsByTagName(s)[0];
      js2.parentNode.insertBefore(js, js2);
    })(
      window,
      document,
      "script",
      "cloud.roistat.com",
      "e39442a8581e616d741b8f0786da960e"
    );
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
            <div className={styles.header__logo}>
              <Image
                src={header__logo}
                height={45}
                width={90}
                priority
                alt="home header logo"
              />
            </div>
          {/* <Link href="/planning">
            <a className={styles.button__planning}>PLANIMETRII</a>
          </Link> */}
          <div className={styles.header__phone_link}>
            <motion.div 
            className={styles.header__phone_icon}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5}}
            >
              <Image
                src={phone__icon}
                height={23}
                width={24}
                alt="home header phone icon"
              />
            </motion.div>
            <a
              href="tel:+3736082020"
              className={styles.header__phone_link_number}
            ></a>
          </div>
        </div>
      </div>
    </header>
  );
}
