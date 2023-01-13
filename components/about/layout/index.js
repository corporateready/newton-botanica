import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Index({ children,isToggleLang,setToggleLang }) {
  return (
    <div className="flex flex-col relative h-full w-full">
      <Header isToggleLang={isToggleLang} setToggleLang={setToggleLang}/>
      {children}
      <Footer />
    </div>
  );
}
