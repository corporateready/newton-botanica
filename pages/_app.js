import React from "react";
import "../styles/globals.scss";
import Head from "next/head";

export const LangContext = React.createContext();

function MyApp({ Component, pageProps }) {

  const options = [
    { value: "ro", id: 1, name: "RO" },
    { value: "ru", id: 2, name: "RU" }
  ];

  const [isToggleLang, setToggleLang] = React.useState(
    "ro"
  );

  React.useEffect(() => {
    const savedValue = localStorage.getItem('language');
    if (savedValue) {
      setToggleLang(savedValue);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('language', isToggleLang);
  }, [isToggleLang]);

  const handleLanguageChange = (e) => {
    setToggleLang( e.target.value);
  };

  const value = React.useMemo(
    () => ({ isToggleLang, setToggleLang, handleLanguageChange, options }),
    [isToggleLang]
  );

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
    <>
    <Head>
    <meta name="viewport" content="width=device-width"/>
    </Head>
    <LangContext.Provider value={value}>
      <Component {...pageProps} />
    </LangContext.Provider>
    </>
  );
}

export default MyApp;
