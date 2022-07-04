import React from "react";
import styles from "../styles/Plannig.module.scss";
import Layout from "../components/about/layout";
import Image from "next/image";
// import planning__bg from "../public/static/planning-page/Group 2678.png";
import {
  Hero,
  Complex,
  Designs,
  SliderSnake,
  Location,
  Payment,
  News,
} from "../components/about";

export default function About() {
  // const [isOpen, setIsOpen] = React.useState(false);

  // React.useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   }
  //   if (!isOpen) {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [isOpen]);

  return (
    <section className={styles.planning__section}>
      <div className={styles.planning__bg}></div>
      <div className={styles.planning__bg}> 
        <Image
          src={"/../public/static/planning-page/Group 2678.png"}
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          alt="home background"
        />
      </div> 
     <Layout>
        <div className={styles.container}>
          <Hero/>
          <Complex />
          <Designs />
          <SliderSnake/>
          <Location />
          <Payment />
          <News />
        </div>
      </Layout>
    </section>
  );
}
