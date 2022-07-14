import React, {useState, useContext} from "react";
import Image from "next/image";
import styles from "./Populare.module.scss";
import location__bg from "../../../../../public/static/planning/populare/populare-1/p-1.png";
import {usePopup} from '../../../../../pages/planning'

export default function Index() {
  const {handlerSetModal} = usePopup()

  return (
    <div className={styles.complex__grid_month}>

      <div className={styles.complex__grid_item}
      onClick={()=>handlerSetModal()}
      >
        <div className={styles.item__bg}>
          <Image src={location__bg} height={157} width={178} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description__up}>
            <p className={styles.item__description_name}>2 CAMERE</p>
            <p className={styles.item__description_text}>
              63.55 M<sup>2</sup>
            </p>
          </div>
          <div className={styles.item__description__down}>
            <button
              // onClick={handlerOpenDetails}
              type="button"
              className={styles.details__button}
            >
              AFLĂ DETALII
            </button>
          </div>
        </div>
      </div>
      <div className={styles.complex__grid_item_info}
      onClick={()=>handlerSetModal()}>
        <p className={styles.item__info}>
          Vedere spre parcul natural
          <br />
          Grădina Botanică
        </p>
        <div className={styles.item__bg_info}>
          <Image src={location__bg} height={115} width={130} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description__up}>
            <p className={styles.item__description_name}>2 CAMERE</p>
            <p className={styles.item__description_text}>
              63.55 M<sup>2</sup>
            </p>
          </div>
          <div className={styles.item__description__down}>
            <button type="button" className={styles.details__button}>
              AFLĂ DETALII
            </button>
          </div>
        </div>
      </div>
      <div className={styles.complex__grid_item}
      onClick={()=>handlerSetModal()}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={157} width={178} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description__up}>
            <p className={styles.item__description_name}>2 CAMERE</p>
            <p className={styles.item__description_text}>
              63.55 M<sup>2</sup>
            </p>
          </div>
          <div className={styles.item__description__down}>
            <button type="button" className={styles.details__button}>
              AFLĂ DETALII
            </button>
          </div>
        </div>
      </div>
      <div className={styles.complex__grid_item}
      onClick={()=>handlerSetModal()}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={157} width={178} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description__up}>
            <p className={styles.item__description_name}>2 CAMERE</p>
            <p className={styles.item__description_text}>
              63.55 M<sup>2</sup>
            </p>
          </div>
          <div className={styles.item__description__down}>
            <button type="button" className={styles.details__button}>
              AFLĂ DETALII
            </button>
          </div>
        </div>
      </div>
      <div className={styles.complex__grid_item}
      onClick={()=>handlerSetModal()}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={157} width={178} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description__up}>
            <p className={styles.item__description_name}>2 CAMERE</p>
            <p className={styles.item__description_text}>
              63.55 M<sup>2</sup>
            </p>
          </div>
          <div className={styles.item__description__down}>
            <button type="button" className={styles.details__button}>
              AFLĂ DETALII
            </button>
          </div>
        </div>
      </div>
      <div className={styles.complex__grid_item}
      onClick={()=>handlerSetModal()}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={157} width={178} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description__up}>
            <p className={styles.item__description_name}>2 CAMERE</p>
            <p className={styles.item__description_text}>
              63.55 M<sup>2</sup>
            </p>
          </div>
          <div className={styles.item__description__down}>
            <button type="button" className={styles.details__button}>
              AFLĂ DETALII
            </button>
          </div>
        </div>
      </div>
      <div className={styles.complex__grid_item}
      onClick={()=>handlerSetModal()}>
        <p className={styles.item__info_attention}>ULTIMA DISPONIBILITATE</p>
        <div className={styles.item__bg_info}>
          <Image src={location__bg} height={115} width={130} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description__up}>
            <p className={styles.item__description_name}>2 CAMERE</p>
            <p className={styles.item__description_text}>
              63.55 M<sup>2</sup>
            </p>
          </div>
          <div className={styles.item__description__down}>
            <button type="button" className={styles.details__button}>
              AFLĂ DETALII
            </button>
          </div>
        </div>
      </div>
      <div className={styles.complex__grid_item}
      onClick={()=>handlerSetModal()}>
        <div className={styles.item__bg}>
          <Image src={location__bg} height={157} width={178} priority alt="" />
        </div>
        <div className={styles.item__description}>
          <div className={styles.item__description__up}>
            <p className={styles.item__description_name}>2 CAMERE</p>
            <p className={styles.item__description_text}>
              63.55 M<sup>2</sup>
            </p>
          </div>
          <div className={styles.item__description__down}>
            <button type="button" className={styles.details__button}>
              AFLĂ DETALII
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
