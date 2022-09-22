import React from "react"
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export function January() {
  React.useEffect(() => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      // cookies.remove("userInfo");
    });
  }, []);

  React.useEffect(() => {
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

  // React.useEffect(()=>{
  //   (function() {
  //     player = new YT.Player('video', {
  //       events: {
  //         // call this function when player is ready to use
  //         'onReady': onPlayerReady,
  //       },
  //     })()
  //   })
  // },[])

  const opts = {
    height: "590px",
    width: "100%",
    loading: "lazy",
    playerVars: {
      passive: false,
      controls: 2,
      autoplay: 1,
      rel:0
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <div className={styles.video__wrapper}>
          <iframe
            id="ytplayer"
            type="text/html"
            height="590px"
            width="100%"
            className={styles.video__body}
            src={`https://www.youtube-nocookie.com/embed/rFUvaWXDvPc?rel=0amp;&origin=http://localhost:3000/`}
            title="YouTube video player"
            frameBorder="0"
            loading="lazy"
            controls={0}
            opts={opts}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            rel="0"
          />
      </div>
    </motion.div>
  );
}