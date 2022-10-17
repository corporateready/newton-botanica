import React from "react"
import { motion } from "framer-motion";
import styles from './styles.module.scss'

export function March() {
  // React.useEffect(() => {
  //   window.addEventListener("beforeunload", (ev) => {
  //     ev.preventDefault();
  //     // cookies.remove("userInfo");
  //   });
  // }, []);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className={styles.video__wrapper}>
      <div className={styles.video__wrapper_frame}>
          <iframe
            type="text/html"
            height="100%"
            width="100%"
            src={`https://www.youtube-nocookie.com/embed/P8BNoZZgzSk?origin=https://main--mellifluous-queijadas-43440a.netlify.app&modestbranding=0&controls=0&rel=0amp&showinfo=0&iv_load_policy=1&disablekb=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          </div>
      </div>
    </motion.div>
  );
}