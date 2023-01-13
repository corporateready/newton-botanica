import React from "react";
import "../styles/globals.scss";

export const LangContext = React.createContext("ru");

function MyApp({ Component, pageProps }) {
  const [isToggleLang, setToggleLang] = React.useState("ro");
  const value = React.useMemo(() => ({ isToggleLang, setToggleLang }), [isToggleLang]);
  return (
    <LangContext.Provider value={value}>
      <Component
        {...pageProps}
        isToggleLang={isToggleLang}
        setToggleLang={setToggleLang}
      />
    </LangContext.Provider>
  );
}

export default MyApp;
