import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { client } from "@/lib/client";

import { BtnPrimary, EventDate, Cta } from "@/components";
import logo from "../public/tremolo-logo.png";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Home = ({ dates, homeContent }) => {
  const { title, content, button1, image, credit, ctaButton, ctaText } =
    homeContent[0];
  const { scrollYProgress } = useScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <div className="section-home-hero">
        <Image src={logo} alt="logo" className="hero_logo" />
        <video
          className="home-hero_video"
          src="/home-bg-video.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="section-home-about">
        <div className="page-padding">
          <div className="container">
            <div className="title-holder">
              <h1>{title}</h1>
            </div>
            <div className="rich-text margin-top">
              <PortableText value={content} />
            </div>
            <div className="margin-top">
              <BtnPrimary destination={"/about"} text={button1} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-home-parallax">
        <div className="credit-holder">
          <div className="container">
            {credit && <p className="">צילום: {credit}</p>}
          </div>
        </div>
        <div className="home-parallax_image-holder">
          <motion.div
            className="home-parallax_image-container"
            style={{ y: yValue }}
          >
            <img src={urlFor(image && image)} alt={title} />
          </motion.div>
        </div>
      </div>
      <div className="section-home-dates">
        <div className="page-padding">
          <div className="container">
            <div className="home-dates_title">
              <h2>אירועים קרובים</h2>
            </div>
            <ul className="dates-list">
              {dates?.map((date) => (
                <li key={date._id}>
                  <EventDate date={date} />
                </li>
              ))}
            </ul>
            <div className="margin-top">
              <BtnPrimary destination={"/tour"} text="לכל האירועים" />
            </div>
          </div>
        </div>
      </div>
      <Cta text={ctaText} btn={ctaButton} />
    </>
  );
};

export const getServerSideProps = async () => {
  const datesQuery = '*[_type == "dates"] | order(date asc)';
  const dates = await client.fetch(datesQuery);

  const homeQuery = '*[_type == "home"]';
  const homeContent = await client.fetch(homeQuery);

  return {
    props: { dates, homeContent },
  };
};

export default Home;
