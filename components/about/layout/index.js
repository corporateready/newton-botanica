import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Index({ children }) {
  return (
    <div className="flex flex-col relative h-full w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
