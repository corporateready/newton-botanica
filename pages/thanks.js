import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Thanks.module.scss";
import Layout from "../components/thanks-layout";
import Messenger from "../components/messengers";
import Head from "next/head";
import Router from "next/router";

export default function Thanks() {
  return (
    <>
      <Head></Head>
      <div className={styles.thanks__screen}>
        <div className={styles.thanks__massangers}>
          <Messenger />
        </div>
        <Layout>
          <div className={styles.thanks}>
            <div className={styles.container}>
              <div className={styles.thanks__wrapper}>
                <h1 className={styles.thanks__title}>
                  thank you
                  <span> NEWTON HOUSE GRĂDINA BOTANICĂ</span>
                </h1>
                <div className={styles.video__wrapper}>
                  <div className={styles.video__wrapper_frame}>
                    <YoutubeVideo />
                  </div>
                  <button
                    className={styles.back__button}
                    onClick={() => Router.push("/about")}
                  >
                    <svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.68212 5.25001H16.0311C16.6209 5.25001 16.96 5.49344 16.997 5.93317C17.031 6.3349 16.8086 6.64658 16.4035 6.73593C16.2498 6.76401 16.0933 6.77557 15.9369 6.77041C11.6863 6.77041 7.43561 6.77041 3.18495 6.77041H2.68647C2.82269 6.91112 2.90383 7.00681 2.99368 7.09335C4.22251 8.288 5.45133 9.48242 6.68015 10.6766C6.96997 10.958 7.02867 11.2922 6.85696 11.6039C6.68524 11.9156 6.41498 12.0436 6.07517 11.9838C5.89972 11.9506 5.73762 11.8696 5.60782 11.7502C3.82544 10.0331 2.04863 8.30981 0.277359 6.58045C-0.0957814 6.21741 -0.0943324 5.80019 0.277359 5.43575C2.05008 3.70826 3.8257 1.98382 5.60422 0.262436C5.95272 -0.0752753 6.41859 -0.0893473 6.73377 0.211075C7.06851 0.529086 7.0591 0.968813 6.68813 1.33185C5.4622 2.52932 4.23337 3.72374 3.00165 4.91511C2.91543 5.00516 2.82993 5.09804 2.68212 5.25001Z"
                        fill="#3BAA35"
                      />
                    </svg>
                    <button>înapoi la site</button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

function YoutubeVideo() {
  useEffect(() => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      cookies.remove("userInfo");
    });
  }, []);

  useEffect(() => {
    document.addEventListener("fetch", (event) => {
      event.respondWith(
        (async function () {
          // Respond from the cache if we can
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) return cachedResponse; // Else, use the preloaded response, if it's there
          const response = await event.preloadResponse;
          if (response) return response; // Else try the network.
          return fetch(event.request);
        })()
      );
    });
  }, []);

  const opts = {
    height: "590px",
    width: "100%",
    loading: "lazy",
    playerVars: {
      passive: false,
      controls: 2,
      autoplay: 1,
    },
  };

  return (
    <iframe
      id="ytplayer"
      type="text/html"
      height="590px"
      width="100%"
      className={styles.video__body}
      src={`https://www.youtube.com/embed/VdszNPYn5dU?autoplay=1&origin=http://example.com&controls=0&rel=1`}
      title="YouTube video player"
      // frameBorder="0"
      opts={opts}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      autoPlay
    />
  );
}
