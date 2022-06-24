import React from "react";
import Link from "next/link";
import styles from "../styles/Thanks.module.scss";
import Layout from "../components/thanks-layout";

export default function Thanks() {
  return (
    <div className={styles.thanks__screen}>
      <Layout>
        <div className="flex justify-center items-center h-screen w-full relative mt-[7%]">
          <div className="flex flex-col">
            <h1 className="text-[50px] text-white leading-none text-center font-semibold">
              Thank you!
            </h1>
            <div className={styles.video__wrapper}>
              <Video />
            </div>
            <Link href="/">
              <a className="text-white border py-[3%] mt-[-3%] w-[50%] mx-auto rounded-md text-center hover:bg-white hover:text-[#2BB018] duration-200">
                HOME
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

function Video() {
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        width="600"
        height="280"
        src="https://player.vimeo.com/external/394180138.sd.mp4?s=a5512e7c2923c4f290018495cc65f856f4e37259&profile_id=165&oauth2_token_id=57447761"
        title="Soft Music Radio — Chillout Station — Work, Study, Relax"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
