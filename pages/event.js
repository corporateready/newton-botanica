import Head from "next/head";
import React from "react";
import Header from "../components/about/layout/header"
import EventsPage from "../components/events";
import EventPopup from "../components/popup-event"
import EventAbout from "../components/events/about-event"
import EventWillBi from "../components/events/willBe"
import EventMap from "../components/events/map"

export default function Events() {
  const [isEventVisible, setIsEventVisible] = React.useState(false);

  const handlerCloseEventPopup = () => {
    setIsEventVisible(false)
  }

  const handlerOpenEventPopup = () => {
    setIsEventVisible(true)
  }

  return (
    <div className="h-full min-h-screen max-w-full flex flex-col overflow-x-hidden">
      <Head>
        <title>NHGB | Events</title>
      </Head>
      <Header/>
      <EventsPage handlerOpenEventPopup={handlerOpenEventPopup}/>
      <EventAbout/>
      <EventWillBi/>
      <EventMap/>
      {
        isEventVisible && <EventPopup handlerCloseEventPopup={handlerCloseEventPopup}/>
      }
    </div>
  );
}
