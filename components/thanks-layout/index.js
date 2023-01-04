import React from "react";
import Header from "../about/layout/header";
import Footer from "./footer";

export default function Index({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
