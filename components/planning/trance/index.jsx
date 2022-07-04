import React from "react";
import styles from "./Trance.module.scss";
import Image from "next/image";
import { one__room_floats } from "./data";

export default function index({data}) {
  const [floats, setFloats] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [floatsPaerPage] = React.useState(6)

  // React.useEffect(()=>{

  //   const getFloats= async ()=>{
  //   const res = await fetch(`/components/planning/trance/data`)
  //   const data = await res.json()
  //   setFloats(data)
  //   console.log(data);
  //   }
  //   getFloats()
  // },[])
  
  console.log(data);
  return (
    <div className={styles.trance__section}>
      <div className={styles.trance__wrapper}>
        <div className={styles.trance__toggler}>
          <button className={styles.trance__toggler_l}>
            <p>vândut</p>
            <p>Tranșa 1</p>
          </button>
          <button className={styles.trance__toggler_r}>Tranșa 2</button>
        </div>
        <div className={styles.trance__paggination}>
          <button>1 cameră</button>
          <button>2 cameră</button>
          <button>3 cameră</button>
          <button>4 cameră</button>
        </div>
        <div className={styles.trance__paggination_inner}>
          <div className={styles.complex__grid_floats}>

            {floats.map((float) => (
              <div key={float.id} className={styles.complex__grid_item}>
                <div className={styles.item__bg}>
                  <Image
                    src={float.image}
                    height={221}
                    width={250}
                    priority
                    placeholder="blur"
                    alt=""
                  />
                </div>
                <div className={styles.item__description}>
                  <div className={styles.item__description__up}>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.title}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.quantity}
                        <sup>2</sup>
                      </span>
                    </p>
                    <p className={styles.item__description_name}>
                      <span className={styles.item__description_name_up}>
                        {float.subtitle}
                      </span>
                      <span className={styles.item__description_name_down}>
                        {float.coast} €
                      </span>
                    </p>
                  </div>
                  <div className={styles.item__description__down}>
                    <button
                      //   onClick={handlerOpenDetails}
                      type="button"
                      className={styles.details__button}
                    >
                      AFLĂ DETALII
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
          <div className={styles.trance__paggination_2}></div>
        </div>
        <div className={styles.trance__paggination_inner_toggler}>
          <button className={styles.paggination__inner_button}>1</button>
          <button className={styles.paggination__inner_button}>2</button>
          <button className={styles.paggination__inner_button}>3</button>
          <button className={styles.paggination__inner_button}>4</button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // const res = await fetch(`/components/planning/trance/data`)
  // const data = await res.json()
  // console.log(data);

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: {data}, // will be passed to the page component as props
  }
}
