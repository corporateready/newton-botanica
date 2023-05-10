import React from "react";
import styles from "../events.module.scss";
import circle__image_1 from "../../../public/static/event-page/circle-image-1.webp";
import circle__image_2 from "../../../public/static/event-page/circle-image-2.webp";
import circle__image_3 from "../../../public/static/event-page/circle-image-3.webp";
import circle__image_4 from "../../../public/static/event-page/circle-image-4.webp";
import circle__image_5 from "../../../public/static/event-page/circle-image-5.webp";
import circle__image_6 from "../../../public/static/event-page/circle-image-6.webp";
import circle__image_7 from "../../../public/static/event-page/circle-image-7.webp";
import Image from "next/image";
import layers__bottom_right from "../../../public/static/event-page/layers-bottom-right.webp";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const itemsEvent = [
  {
    id: "1",
    itemImage: circle__image_1,
    itemTitle: `Zbor cu balonul de aer cald`,
    itemText: `Trăiește o experiență unică, admiră priveliști impresionante asupra naturii și frumusețea parcului Grădina Botanică dintr-o perspectivă absolut diferită.
    `,
    itemChevron: false,
  },
  {
    id: "2",
    itemImage: circle__image_2,
    itemTitle: `Zone derecreere în aer liber`,
    itemText:
      "O oportunitate excelentă de a te conecta cu natura și relaxa din toată agitația de zi cu zi – la zonele amenajate comod cu scaune, hamacuri și bean bag.",
    itemChevron: false,
  },
  {
    id: "3",
    itemImage: circle__image_3,
    itemTitle: "Photo zone",
    itemText:
      "Creează amintiri deosebite la zonele de fotografiere distractive și nu uita să împărtășești pe rețelele de socializare momentele memorabile de la picnic.",
    itemChevron: false,
  },
  {
    id: "4",
    itemImage: circle__image_4,
    itemTitle: "Muzică live și DJ",
    itemText:
      "Pentru o atmosferă mai plăcută și o doză de distracție la picnic vom invita un DJ, iar acordurile de muzică live vor menține nivelul de energie și entuziasm.",
    itemChevron: false,
  },
];

export default function Index() {
  const [isRotate, setIsRotate] = React.useState(false);
  const [isRotate2, setIsRotate2] = React.useState(false);
  const [isRotate3, setIsRotate3] = React.useState(false);
  const [isRotate4, setIsRotate4] = React.useState(false);

  const [isRotate5, setIsRotate5] = React.useState(false);
  const [isRotate6, setIsRotate6] = React.useState(false);
  const [isRotate7, setIsRotate7] = React.useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 576px)",
  });

  const hanleClickTitle = () => {
    setIsRotate(!isRotate);
  };
  const hanleClickTitle2 = () => {
    setIsRotate2(!isRotate2);
  };
  const hanleClickTitle3 = () => {
    setIsRotate3(!isRotate3);
  };
  const hanleClickTitle4 = () => {
    setIsRotate4(!isRotate4);
  };

  const hanleClickTitle5 = () => {
    setIsRotate5(!isRotate5);
  };
  const hanleClickTitle6 = () => {
    setIsRotate6(!isRotate6);
  };
  const hanleClickTitle7 = () => {
    setIsRotate7(!isRotate7);
  };

  return (
    <div className={styles.willbe__screen}>
      <div className={styles.willbe__container}>
        <div className={styles.willbe__inner}>
          <h2 className={styles.willbe__title}>
            ce va fi <span>la cel mai verde picnic al primăverii</span> 2023
          </h2>

          <div className={styles.willbe__items}>
            <div className={styles.willbe__item}>
              <div className={styles.item__image_wrapper}>
                <Image
                  src={circle__image_1}
                  w="100%"
                  h="100%"
                  priority
                  placeholder="onblur"
                  blurDataURL
                  alt=""
                />
              </div>
              <div
                className={styles.item__subtitle_wrapper}
                onClick={hanleClickTitle}
              >
                <p className={styles.item__subtitle}>
                  Zbor cu balonul
                  <span />
                  de aer cald
                </p>
                <motion.p
                  className={styles.chevron}
                  animate={{ rotate: isRotate ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1148_140)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7281 6.74376C13.0906 6.40211 13.0906 5.848 12.7281 5.50634L7.1567 0.256444C6.79413 -0.0852088 6.20609 -0.0852088 5.84351 0.256445L0.272149 5.50634C-0.0904256 5.848 -0.0904255 6.40211 0.272149 6.74376C0.634723 7.08541 1.22276 7.08541 1.58534 6.74376L6.50033 2.11237L11.4149 6.74376C11.7775 7.08541 12.3655 7.08541 12.7281 6.74376Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1148_140">
                        <rect
                          width="13"
                          height="7"
                          fill="white"
                          transform="translate(13 7) rotate(180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </div>

              <p className={styles.item__descrition}>
                Trăiește o experiență unică, admiră priveliști impresionante
                asupra naturii și frumusețea <b>parcului Grădina Botanică</b>{" "}
                dintr-o perspectivă absolut diferită.
              </p>

              {isMobile && isRotate && (
                <motion.p
                  className={styles.item__descrition_mob}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                >
                  Trăiește o experiență unică, admiră priveliști impresionante
                  asupra naturii și frumusețea <b>parcului Grădina Botanică</b>{" "}
                  dintr-o perspectivă absolut diferită.
                </motion.p>
              )}
            </div>
            <div className={styles.willbe__item}>
              <div className={styles.item__image_wrapper}>
                <Image
                  src={circle__image_2}
                  w="100%"
                  h="100%"
                  priority
                  placeholder="onblur"
                  blurDataURL
                  alt=""
                />
              </div>
              <div
                className={styles.item__subtitle_wrapper}
                onClick={hanleClickTitle2}
              >
                <p className={styles.item__subtitle}>
                  Zone de recreere
                  <span />
                  în aer liber
                </p>
                <motion.p
                  className={styles.chevron}
                  animate={{ rotate: isRotate2 ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1148_140)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7281 6.74376C13.0906 6.40211 13.0906 5.848 12.7281 5.50634L7.1567 0.256444C6.79413 -0.0852088 6.20609 -0.0852088 5.84351 0.256445L0.272149 5.50634C-0.0904256 5.848 -0.0904255 6.40211 0.272149 6.74376C0.634723 7.08541 1.22276 7.08541 1.58534 6.74376L6.50033 2.11237L11.4149 6.74376C11.7775 7.08541 12.3655 7.08541 12.7281 6.74376Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1148_140">
                        <rect
                          width="13"
                          height="7"
                          fill="white"
                          transform="translate(13 7) rotate(180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </div>

              <p className={styles.item__descrition}>
                O oportunitate excelentă de a te conecta cu natura și relaxa din
                toată agitația de zi cu zi – la zonele amenajate comod cu
                scaune, hamacuri și bean bag.
              </p>

              {isMobile && isRotate2 && (
                <motion.p
                  className={styles.item__descrition_mob}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                >
                  O oportunitate excelentă de a te conecta cu natura și relaxa
                  din toată agitația de zi cu zi – la zonele amenajate comod cu
                  scaune, hamacuri și bean bag.
                </motion.p>
              )}
            </div>
            <div className={styles.willbe__item}>
              <div className={styles.item__image_wrapper}>
                <Image
                  src={circle__image_3}
                  w="100%"
                  h="100%"
                  priority
                  placeholder="onblur"
                  blurDataURL
                  alt=""
                />
              </div>
              <div
                className={styles.item__subtitle_wrapper}
                onClick={hanleClickTitle3}
              >
                <p className={styles.item__subtitle}>Photo zone</p>
                <motion.p
                  className={styles.chevron}
                  animate={{ rotate: isRotate3 ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1148_140)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7281 6.74376C13.0906 6.40211 13.0906 5.848 12.7281 5.50634L7.1567 0.256444C6.79413 -0.0852088 6.20609 -0.0852088 5.84351 0.256445L0.272149 5.50634C-0.0904256 5.848 -0.0904255 6.40211 0.272149 6.74376C0.634723 7.08541 1.22276 7.08541 1.58534 6.74376L6.50033 2.11237L11.4149 6.74376C11.7775 7.08541 12.3655 7.08541 12.7281 6.74376Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1148_140">
                        <rect
                          width="13"
                          height="7"
                          fill="white"
                          transform="translate(13 7) rotate(180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </div>

              <p className={styles.item__descrition}>
                Creează amintiri deosebite la zonele de fotografiere distractive
                și nu uita să împărtășești pe rețelele de socializare momentele
                memorabile de la picnic.
              </p>

              {isMobile && isRotate3 && (
                <motion.p
                  className={styles.item__descrition_mob}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                >
                  Creează amintiri deosebite la zonele de fotografiere
                  distractive și nu uita să împărtășești pe rețelele de
                  socializare momentele memorabile de la picnic.
                </motion.p>
              )}
            </div>
            <div className={styles.willbe__item}>
              <div className={styles.item__image_wrapper}>
                <Image
                  src={circle__image_4}
                  w="100%"
                  h="100%"
                  priority
                  placeholder="onblur"
                  blurDataURL
                  alt=""
                />
              </div>
              <div
                className={styles.item__subtitle_wrapper}
                onClick={hanleClickTitle4}
              >
                <p className={styles.item__subtitle}>Muzică live și DJ</p>
                <motion.p
                  className={styles.chevron}
                  animate={{ rotate: isRotate4 ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1148_140)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7281 6.74376C13.0906 6.40211 13.0906 5.848 12.7281 5.50634L7.1567 0.256444C6.79413 -0.0852088 6.20609 -0.0852088 5.84351 0.256445L0.272149 5.50634C-0.0904256 5.848 -0.0904255 6.40211 0.272149 6.74376C0.634723 7.08541 1.22276 7.08541 1.58534 6.74376L6.50033 2.11237L11.4149 6.74376C11.7775 7.08541 12.3655 7.08541 12.7281 6.74376Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1148_140">
                        <rect
                          width="13"
                          height="7"
                          fill="white"
                          transform="translate(13 7) rotate(180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </div>

              <p className={styles.item__descrition}>
                Pentru o atmosferă mai plăcută și o doză de distracție la picnic
                vom invita un DJ, iar acordurile de muzică live vor menține
                nivelul de energie și entuziasm.
              </p>

              {isMobile && isRotate4 && (
                <motion.p
                  className={styles.item__descrition_mob}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                >
                  Pentru o atmosferă mai plăcută și o doză de distracție la
                  picnic vom invita un DJ, iar acordurile de muzică live vor
                  menține nivelul de energie și entuziasm.
                </motion.p>
              )}
            </div>
          </div>
          <div className={styles.willbe__items_b}>
            <div className={styles.willbe__item}>
              <div className={styles.item__image_wrapper}>
                <Image
                  src={circle__image_5}
                  w="100%"
                  h="100%"
                  priority
                  placeholder="onblur"
                  blurDataURL
                  alt=""
                />
              </div>
              <div
                className={styles.item__subtitle_wrapper}
                onClick={hanleClickTitle5}
              >
                <p className={styles.item__subtitle}>
                  Fourchette, înghețată,
                  <span />
                  cocktail bar
                </p>
                <motion.p
                  className={styles.chevron}
                  animate={{ rotate: isRotate5 ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1148_140)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7281 6.74376C13.0906 6.40211 13.0906 5.848 12.7281 5.50634L7.1567 0.256444C6.79413 -0.0852088 6.20609 -0.0852088 5.84351 0.256445L0.272149 5.50634C-0.0904256 5.848 -0.0904255 6.40211 0.272149 6.74376C0.634723 7.08541 1.22276 7.08541 1.58534 6.74376L6.50033 2.11237L11.4149 6.74376C11.7775 7.08541 12.3655 7.08541 12.7281 6.74376Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1148_140">
                        <rect
                          width="13"
                          height="7"
                          fill="white"
                          transform="translate(13 7) rotate(180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </div>

              <p className={styles.item__descrition}>
                Atmosfera cu adevărat festivă la picnic va fi asigurată și de o
                varietate de gustări delicioase, înghețată răcoritoare și
                cocktail bar cu băuturi revigorante.
              </p>

              {isMobile && isRotate5 && (
                <motion.p
                  className={styles.item__descrition_mob}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                >
                  Atmosfera cu adevărat festivă la picnic va fi asigurată și de
                  o varietate de gustări delicioase, înghețată răcoritoare și
                  cocktail bar cu băuturi revigorante.
                </motion.p>
              )}
            </div>
            <div className={styles.willbe__item}>
              <div className={styles.item__image_wrapper}>
                <Image
                  src={circle__image_6}
                  w="100%"
                  h="100%"
                  priority
                  placeholder="onblur"
                  blurDataURL
                  alt=""
                />
              </div>
              <div
                className={styles.item__subtitle_wrapper}
                onClick={hanleClickTitle6}
              >
                <p className={styles.item__subtitle}>
                  Tombolă și multe
                  <span /> surprize
                </p>
                <motion.p
                  className={styles.chevron}
                  animate={{ rotate: isRotate6 ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1148_140)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7281 6.74376C13.0906 6.40211 13.0906 5.848 12.7281 5.50634L7.1567 0.256444C6.79413 -0.0852088 6.20609 -0.0852088 5.84351 0.256445L0.272149 5.50634C-0.0904256 5.848 -0.0904255 6.40211 0.272149 6.74376C0.634723 7.08541 1.22276 7.08541 1.58534 6.74376L6.50033 2.11237L11.4149 6.74376C11.7775 7.08541 12.3655 7.08541 12.7281 6.74376Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1148_140">
                        <rect
                          width="13"
                          height="7"
                          fill="white"
                          transform="translate(13 7) rotate(180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </div>

              <p className={styles.item__descrition}>
                Posibilitatea de a câștiga un proiect de design original pentru
                apartamentul tău și certificate cadou pentru procurarea oricărui
                bun imobil în complexul <b>NEWTON HOUSE Grădina Botanică.</b>
              </p>

              {isMobile && isRotate6 && (
                <motion.p
                  className={styles.item__descrition_mob}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                >
                  Posibilitatea de a câștiga un proiect de design original
                  pentru apartamentul tău și certificate cadou pentru procurarea
                  oricărui bun imobil în complexul{" "}
                  <b>NEWTON HOUSE Grădina Botanică.</b>
                </motion.p>
              )}
            </div>
            <div className={styles.willbe__item}>
              <div className={styles.item__image_wrapper}>
                <Image
                  src={circle__image_7}
                  w="100%"
                  h="100%"
                  priority
                  placeholder="onblur"
                  blurDataURL
                  alt=""
                />
              </div>
              <div
                className={styles.item__subtitle_wrapper}
                onClick={hanleClickTitle7}
              >
                <p className={styles.item__subtitle}>Zona Arka Buro</p>
                <motion.p
                  className={styles.chevron}
                  animate={{ rotate: isRotate7 ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1148_140)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7281 6.74376C13.0906 6.40211 13.0906 5.848 12.7281 5.50634L7.1567 0.256444C6.79413 -0.0852088 6.20609 -0.0852088 5.84351 0.256445L0.272149 5.50634C-0.0904256 5.848 -0.0904255 6.40211 0.272149 6.74376C0.634723 7.08541 1.22276 7.08541 1.58534 6.74376L6.50033 2.11237L11.4149 6.74376C11.7775 7.08541 12.3655 7.08541 12.7281 6.74376Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1148_140">
                        <rect
                          width="13"
                          height="7"
                          fill="white"
                          transform="translate(13 7) rotate(180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </div>

              <p className={styles.item__descrition}>
                Unde vei putea vizualiza viitorul tău apartament și să alegi
                designul de interior personalizat pentru a crea o viziune clară
                asupra locuinței tale de vis.
              </p>

              {isMobile && isRotate7 && (
                <motion.p
                  className={styles.item__descrition_mob}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                >
                  Unde vei putea vizualiza viitorul tău apartament și să alegi
                  designul de interior personalizat pentru a crea o viziune
                  clară asupra locuinței tale de vis.
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layers__br}>
        <Image src={layers__bottom_right} alt="layers bottom" />
      </div>
    </div>
  );
}
