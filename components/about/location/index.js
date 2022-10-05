import React from "react";
import styles from "./Location.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import location__bg from "../../../public/static/planning-page/location/botanica-location.webp";
import {
  MarkButton_1,
  MarkButton_2,
  MarkButton_3,
  MarkButton_4,
  MarkButton_5,
  MarkButton_6,
  MarkButton_7,
  MarkButton_8,
  MarkButton_9,
} from "./marks";
import {
  MarkImage,
  MarkImage_2,
  MarkImage_3,
  MarkImage_4,
  MarkImage_5,
  MarkImage_6,
  MarkImage_7,
  MarkImage_8,
  MarkImage_9,
} from "./mark-images";
import Head from "next/head";
import {Magnify} from './magnify'
// import Magnifier from "react-magnifier";

export default function index() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);
  const [isOpen6, setIsOpen6] = React.useState(false);
  const [isOpen7, setIsOpen7] = React.useState(false);
  const [isOpen8, setIsOpen8] = React.useState(false);
  const [isOpen9, setIsOpen9] = React.useState(false);

  const handlerIsOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  const handlerIsOpen2 = (e) => {
    e.stopPropagation();
    setIsOpen2(!isOpen2);
  };
  const handlerIsOpen3 = (e) => {
    e.stopPropagation();
    setIsOpen3(!isOpen3);
  };
  const handlerIsOpen4 = (e) => {
    e.stopPropagation();
    setIsOpen4(!isOpen4);
  };
  const handlerIsOpen5 = (e) => {
    e.stopPropagation();
    setIsOpen5(!isOpen5);
  };
  const handlerIsOpen6 = (e) => {
    e.stopPropagation();
    setIsOpen6(!isOpen6);
  };
  const handlerIsOpen7 = (e) => {
    e.stopPropagation();
    setIsOpen7(!isOpen7);
  };
  const handlerIsOpen8 = (e) => {
    e.stopPropagation();
    setIsOpen8(!isOpen8);
  };
  const handlerIsOpen9 = (e) => {
    e.stopPropagation();
    setIsOpen9(!isOpen9);
  };

  React.useEffect(() => {
    // (function (imgID, zoom) {
    //   var img, glass, w, h, bw;
    //   img = document.getElementById(imgID);
    //   /*create magnifier glass:*/
    //   glass = document.createElement("DIV");
    //   glass.setAttribute("class", "img-magnifier-glass");
    //   /*insert magnifier glass:*/
    //   img.parentElement.insertBefore(glass, img);
    //   /*set background properties for the magnifier glass:*/
    //   glass.style.backgroundImage = "url('" + img.src + "')";
    //   glass.style.backgroundRepeat = "no-repeat";
    //   glass.style.backgroundSize =
    //     img.width * zoom + "px " + img.height * zoom + "px";
    //   bw = 3;
    //   w = glass.offsetWidth / 2;
    //   h = glass.offsetHeight / 2;
    //   /*execute a function when someone moves the magnifier glass over the image:*/
    //   glass.addEventListener("mousemove", moveMagnifier);
    //   img.addEventListener("mousemove", moveMagnifier);
    //   /*and also for touch screens:*/
    //   glass.addEventListener("touchmove", moveMagnifier);
    //   img.addEventListener("touchmove", moveMagnifier);
    //   function moveMagnifier(e) {
    //     let pos, x, y;
    //     /*prevent any other actions that may occur when moving over the image*/
    //     e.preventDefault();
    //     /*get the cursor's x and y positions:*/
    //     pos = getCursorPos(e);
    //     x = pos.x;
    //     y = pos.y;
    //     /*prevent the magnifier glass from being positioned outside the image:*/
    //     if (x > img.width - w / zoom) {
    //       x = img.width - w / zoom;
    //     }
    //     if (x < w / zoom) {
    //       x = w / zoom;
    //     }
    //     if (y > img.height - h / zoom) {
    //       y = img.height - h / zoom;
    //     }
    //     if (y < h / zoom) {
    //       y = h / zoom;
    //     }
    //     /*set the position of the magnifier glass:*/
    //     glass.style.left = x - w + "px";
    //     glass.style.top = y - h + "px";
    //     /*display what the magnifier glass "sees":*/
    //     glass.style.backgroundPosition =
    //       "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    //   }
    //   function getCursorPos(e) {
    //     let a,
    //       x = 0,
    //       y = 0;
    //     e = e || window.event;
    //     /*get the x and y positions of the image:*/
    //     a = img.getBoundingClientRect();
    //     /*calculate the cursor's x and y coordinates, relative to the image:*/
    //     x = e.pageX - a.left;
    //     y = e.pageY - a.top;
    //     /*consider any page scrolling:*/
    //     x = x - window.pageXOffset;
    //     y = y - window.pageYOffset;
    //     console.log(x, y);
    //     return { x: x, y: y };
    //   }
    // })()
  }, []);

  return (
    <>
      <Head>
      </Head>
      <div className={styles.location__section}>
        <div className={styles.location__wrapper}>
          <h1 className={styles.location__title}>
            Amplasare execlentă în zonă verde
            <span></span>
          </h1>
          <div className={styles.location__inner}>
            {isOpen && <MarkImage setIsOpen={setIsOpen} />}
            {isOpen2 && <MarkImage_2 setIsOpen2={setIsOpen2} />}
            {isOpen3 && <MarkImage_3 setIsOpen3={setIsOpen3} />}
            {isOpen4 && <MarkImage_4 setIsOpen4={setIsOpen4} />}
            {isOpen5 && <MarkImage_5 setIsOpen5={setIsOpen5} />}
            {isOpen6 && <MarkImage_6 setIsOpen6={setIsOpen6} />}
            {isOpen7 && <MarkImage_7 setIsOpen7={setIsOpen7} />}
            {isOpen8 && <MarkImage_8 setIsOpen8={setIsOpen8} />}
            {isOpen9 && <MarkImage_9 setIsOpen9={setIsOpen9} />}

            <div className={styles.location__bg_inner}>
              <MarkButton_1 handlerIsOpen={handlerIsOpen} />

              <MarkButton_2 handlerIsOpen2={handlerIsOpen2} />

              <MarkButton_3 handlerIsOpen3={handlerIsOpen3} />

              <MarkButton_4 handlerIsOpen4={handlerIsOpen4} />

              <MarkButton_5 handlerIsOpen5={handlerIsOpen5} />

              <MarkButton_6 handlerIsOpen6={handlerIsOpen6} />

              <MarkButton_7 handlerIsOpen7={handlerIsOpen7} />

              <MarkButton_8 handlerIsOpen8={handlerIsOpen8} />

              <MarkButton_9 handlerIsOpen9={handlerIsOpen9} />

              <motion.span
                className={styles.loaction__mark_3}
                onClick={handlerIsOpen}
              ></motion.span>

              {/* <Magnify/> */}
            {/* <div className="img-magnifier-container">
          
            </div>*/}
              <Image
                src={location__bg}
                id="myimage"
                height={506}
                width={1043}
                sizes="(max-width: 75em) 33vw,
                  (max-width: 48em) 50vw,
                  100vw"
                priority
                alt=""
              />
            </div> 

            <div className={styles.location__address}>
              <Link href="https://g.page/Newton-House-srl?share">
                <a className={styles.location__address_name}>
                  str. Grădina Botanică, 18
                </a>
              </Link>
              <Link href="https://g.page/Newton-House-srl?share">
                <a className={styles.location__address_detail}>Vezi traseul</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// function ExampleComponent() {
//   console.log(<Magnifier className={styles.magnifier}/>);
//   return <Magnifier src={location__bg} width="100%" height="500px" className={styles.magnifier} />;
// }
