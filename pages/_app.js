import React from "react";
import "../styles/globals.scss";

export const LangContext = React.createContext("ru");

function MyApp({ Component, pageProps }) {
  const [isToggleLang, setToggleLang] = React.useState(( () => {
    if(typeof window !== "undefined"){
      const savedItem = localStorage.getItem("language");
   const parsedItem = JSON.stringify(savedItem);
   return parsedItem || isToggleLang;}
   }));

  React.useEffect(() => {
    localStorage.setItem("language",  JSON.stringify(isToggleLang))
  }, [isToggleLang]);

  const changeSelect = (e) => {
    window.localStorage.setItem('language', e.target.value);
    setToggleLang(e.target.value);
  }

  const value = React.useMemo(
    () => ({ isToggleLang, setToggleLang,changeSelect }),
    [isToggleLang]
  );

  console.log("isToggleLang ", isToggleLang);

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
    <LangContext.Provider value={value}>
      <Component
        {...pageProps}
      />
    </LangContext.Provider>
  );
}

export default MyApp;
