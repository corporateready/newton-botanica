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
import LayerTopMob from "./LayerTopMob_";
import LayerMediumMob from "./LayerMediumMob";
import LayerTopBottomMob from "./LayerTopBottomMob";
import LayerTopBottomMediumMob from "./LayerTopBottomMediumMob";
import LayerTopBottomBottomMob from "./LayerTopBottomBottomMob";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { LangContext } from "../../../pages/_app";

export default function Index() {
  const { isToggleLang } = React.useContext(LangContext);

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
          {isToggleLang === "ro" && (
            <h2 className={styles.willbe__title}>
              ce va fi <span>la cel mai verde picnic al verii</span> 2023
            </h2>
          )}
          {isToggleLang === "ru" && (
            <h2 className={styles.willbe__title}>
              что будет <span>на самом зеленом пикнике лета</span> 2023
            </h2>
          )}

          <div className={styles.willbe__items}>
            <LayerTopMob />
            <LayerMediumMob />
            <div className={styles.willbe__item}>
              <div className={styles.item__image_wrapper}>
                <Image
                  src={circle__image_1}
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
                {isToggleLang === "ro" && (
                  <p className={styles.item__subtitle}>
                    Zbor cu balonul
                    <span />
                    de aer cald
                  </p>
                )}
                {isToggleLang === "ru" && (
                  <p className={styles.item__subtitle}>
                    Полет на
                    <span />
                    воздушном шаре
                  </p>
                )}
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

              {isToggleLang === "ro" && (
                <p className={styles.item__descrition}>
                  Trăiește o experiență unică, admiră priveliști impresionante
                  asupra naturii și frumusețea <b>parcului Grădina Botanică</b>{" "}
                  dintr-o perspectivă absolut diferită.
                </p>
              )}
              {isToggleLang === "ru" && (
                <p className={styles.item__descrition}>
                  Испытайте уникальные ощущения, восхититесь впечатляющими
                  видами природы и красотой <b>Ботанического сада</b> с высоты
                  птичьего полета.
                </p>
              )}

              {isMobile &&
                isRotate &&
                (isToggleLang === "ro" ? (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Trăiește o experiență unică, admiră priveliști impresionante
                    asupra naturii și frumusețea{" "}
                    <b>parcului Grădina Botanică</b> dintr-o perspectivă absolut
                    diferită.
                  </motion.p>
                ) : (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Испытайте уникальные ощущения, восхититесь впечатляющими
                    видами природы и красотой <b>Ботанического сада</b> с высоты
                    птичьего полета.
                  </motion.p>
                ))}
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
                {isToggleLang === "ro" && (
                  <p className={styles.item__subtitle}>
                    Zone de recreere
                    <span />
                    în aer liber
                  </p>
                )}
                {isToggleLang === "ru" && (
                  <p className={styles.item__subtitle}>
                    Зона отдыха на свежем
                    <span />
                    воздухе
                  </p>
                )}
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
              {isToggleLang === "ro" && (
                <p className={styles.item__descrition}>
                  O oportunitate excelentă de a te conecta cu natura și relaxa
                  din toată agitația de zi cu zi – la zonele amenajate comod cu
                  scaune, hamacuri și bean bag.
                </p>
              )}
              {isToggleLang === "ru" && (
                <p className={styles.item__descrition}>
                  Великолепная возможность расслабиться на лоне природе и
                  отдохнуть от повседневной суеты в комфорте удобно обустроенных
                  зон со стульями, гамаками и мешками-креслами.
                </p>
              )}
              {isMobile &&
                isRotate2 &&
                (isToggleLang === "ro" ? (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    O oportunitate excelentă de a te conecta cu natura și relaxa
                    din toată agitația de zi cu zi – la zonele amenajate comod
                    cu scaune, hamacuri și bean bag.
                  </motion.p>
                ) : (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Великолепная возможность расслабиться на лоне природе и
                    отдохнуть от повседневной суеты в комфорте удобно
                    обустроенных зон со стульями, гамаками и мешками-креслами.
                  </motion.p>
                ))}
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
                {isToggleLang === "ro" && (
                  <p className={styles.item__subtitle}>Photo zone</p>
                )}
                {isToggleLang === "ru" && (
                  <p className={styles.item__subtitle}>Фотозона</p>
                )}
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
              {isToggleLang === "ro" && (
                <p className={styles.item__descrition}>
                  Creează amintiri deosebite la zonele de fotografiere
                  distractive și nu uita să împărtășești pe rețelele de
                  socializare momentele memorabile de la picnic.
                </p>
              )}
              {isToggleLang === "ru" && (
                <p className={styles.item__descrition}>
                  Запечатлейте яркие воспоминания в зоне развлекательной
                  фотографии и не забудьте запоминающимися моментами с пикника в
                  социальных сетях.
                </p>
              )}
              {isMobile &&
                isRotate3 &&
                (isToggleLang === "ro" ? (
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
                ) : (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Запечатлейте яркие воспоминания в зоне развлекательной
                    фотографии и не забудьте запоминающимися моментами с пикника
                    в социальных сетях.
                  </motion.p>
                ))}
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
                {isToggleLang === "ro" && (
                  <p className={styles.item__subtitle}>Muzică live și DJ</p>
                )}
                {isToggleLang === "ru" && (
                  <p className={styles.item__subtitle}>Живая музыка и DJ</p>
                )}
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
              {isToggleLang === "ro" && (
                <p className={styles.item__descrition}>
                  Pentru o atmosferă mai plăcută și o doză de distracție la
                  picnic vom invita un DJ, iar acordurile de muzică live vor
                  menține nivelul de energie și entuziasm.
                </p>
              )}
              {isToggleLang === "ru" && (
                <p className={styles.item__descrition}>
                  Приятную атмосферу веселья и развлечений на пикнике поддержит
                  приглашенный DJ, а живая музыка усилит уровень энергии и
                  энтузиазма
                </p>
              )}
              {isMobile &&
                isRotate4 &&
                (isToggleLang === "ro" ? (
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
                ) : (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Приятную атмосферу веселья и развлечений на пикнике
                    поддержит приглашенный DJ, а живая музыка усилит уровень
                    энергии и энтузиазма
                  </motion.p>
                ))}
            </div>
          </div>
          <div className={styles.willbe__items_b}>
            <LayerTopBottomMob />
            <LayerTopBottomMediumMob />
            <LayerTopBottomBottomMob />
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
                {isToggleLang === "ro" && (
                  <p className={styles.item__subtitle}>
                    Fourchette, înghețată,
                    <span />
                    cocktail bar
                  </p>
                )}
                {isToggleLang === "ru" && (
                  <p className={styles.item__subtitle}>
                    Фуршет, мороженое,
                    <span />
                    коктейль-бар
                  </p>
                )}
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
              {isToggleLang === "ro" && (
                <p className={styles.item__descrition}>
                  Atmosfera cu adevărat festivă la picnic va fi asigurată și de
                  o varietate de gustări delicioase, înghețată răcoritoare și
                  cocktail bar cu băuturi revigorante.
                </p>
              )}
              {isToggleLang === "ru" && (
                <p className={styles.item__descrition}>
                  Настоящую праздничную атмосферу пикника обеспечат
                  разнообразные вкусные закуски, прохладное мороженое и
                  коктейль-бар с освежающими напитками.
                </p>
              )}
              {isMobile &&
                isRotate5 &&
                (isToggleLang === "ro" ? (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Atmosfera cu adevărat festivă la picnic va fi asigurată și
                    de o varietate de gustări delicioase, înghețată răcoritoare
                    și cocktail bar cu băuturi revigorante.
                  </motion.p>
                ) : (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Настоящую праздничную атмосферу пикника обеспечат
                    разнообразные вкусные закуски, прохладное мороженое и
                    коктейль-бар с освежающими напитками.
                  </motion.p>
                ))}
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
                {isToggleLang === "ro" && (
                  <p className={styles.item__subtitle}>
                    Tombolă și multe
                    <span /> surprize
                  </p>
                )}
                {isToggleLang === "ru" && (
                  <p className={styles.item__subtitle}>
                    Розыгрыш и множество
                    <span /> сюрпризов
                  </p>
                )}
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
              {isToggleLang === "ro" && (
                <p className={styles.item__descrition}>
                  Posibilitatea de a câștiga un proiect de design original
                  pentru apartamentul tău și certificate cadou pentru procurarea
                  oricărui bun imobil în complexul{" "}
                  <b>NEWTON HOUSE Grădina Botanică.</b>
                </p>
              )}
              {isToggleLang === "ru" && (
                <p className={styles.item__descrition}>
                  У вас есть возможность выиграть оригинальный дизайн-проект для
                  вашей квартиры, а также подарочные сертификаты на покупку
                  любой недвижимости в жилом комплексе{" "}
                  <strong>NEWTON HOUSE Grădina Botanică.</strong>
                </p>
              )}
              {isMobile &&
                isRotate6 &&
                (isToggleLang === "ro" ? (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Posibilitatea de a câștiga un proiect de design original
                    pentru apartamentul tău și certificate cadou pentru
                    procurarea oricărui bun imobil în complexul{" "}
                    <b>NEWTON HOUSE Grădina Botanică.</b>
                  </motion.p>
                ) : (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    У вас есть возможность выиграть оригинальный дизайн-проект
                    для вашей квартиры, а также подарочные сертификаты на
                    покупку любой недвижимости в жилом комплексе{" "}
                    <strong>NEWTON HOUSE Grădina Botanică.</strong>
                  </motion.p>
                ))}
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
                {isToggleLang === "ro" && (
                  <p className={styles.item__subtitle}>Zona Arka Buro</p>
                )}
                {isToggleLang === "ru" && (
                  <p className={styles.item__subtitle}>Зона Arka Buro</p>
                )}
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
              {isToggleLang === "ro" && (
                <p className={styles.item__descrition}>
                  Unde vei putea vizualiza viitorul tău apartament și să alegi
                  designul de interior personalizat pentru a crea o viziune
                  clară asupra locuinței tale de vis.
                </p>
              )}
              {isToggleLang === "ru" && (
                <p className={styles.item__descrition}>
                  Здесь вы сможете визуализировать свою будущую квартиру и
                  выбрать индивидуальный дизайн интерьера, чтобы вживую увидеть
                  дом вашей мечты.
                </p>
              )}
              {isMobile &&
                isRotate7 &&
                (isToggleLang === "ro" ? (
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
                ) : (
                  <motion.p
                    className={styles.item__descrition_mob}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Здесь вы сможете визуализировать свою будущую квартиру и
                    выбрать индивидуальный дизайн интерьера, чтобы вживую
                    увидеть дом вашей мечты.
                  </motion.p>
                ))}
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
