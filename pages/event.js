import Head from "next/head";
import React from "react";
import Header from "../components/about/layout/header"
import EventsPage from "../components/events";
import EventPopup from "../components/popup-event"

export default function Events() {
  const [isEventVisible, setIsEventVisible] = React.useState(false);

  const handlerCloseEventPopup = () => {
    setIsEventVisible(false)
  }

  const handlerOpenEventPopup = () => {
    setIsEventVisible(true)
  }

  return (
    <div className="h-screen w-full relative top-0 left-0 flex flex-col">
      <Head>
        <title>NHGB | Events</title>
      </Head>
      <Header/>
      <EventsPage handlerOpenEventPopup={handlerOpenEventPopup}/>
      {
        isEventVisible && <EventPopup handlerCloseEventPopup={handlerCloseEventPopup}/>
      }
    </div>
  );
}
