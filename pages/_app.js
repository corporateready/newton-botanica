import React from "react";
import "../styles/globals.scss";

export const LangContext = React.createContext("ru");

function MyApp({ Component, pageProps }) {

const [isToggleLang, setToggleLang] = React.useState('')


React.useEffect(() => {
  getLanguageFromLocalStorage();
}, [])

const getLanguageFromLocalStorage = () => {
  const language = localStorage.setItem('ru', "ru");
  if (language) {
    setToggleLang(language);
  } else {
    setToggleLang('ro');
  }
}

  const value = React.useMemo(
    () => ({ isToggleLang, setToggleLang }),
    [isToggleLang]
  );
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
