import React, { useRef, useState, useEffect } from "react";
import {
  MeFeature,
  PageHero,
  TitleTextImage,
  Collaborations,
  Cta,
} from "@/components";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

import { client } from "@/lib/client";

const MusicEducation = ({ musicEducationContent }) => {
  const {
    heroImage,
    title,
    content,
    titleTextImage,
    sponsors,
    ctaText,
    ctaButton,
  } = musicEducationContent[0];

  return (
    <>
      <PageHero img={heroImage} title={title} />
      <div className="section-me-about">
        <div className="page-padding">
          <div className="container">
            <div className="rich-text">
              <PortableText value={content} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-me-subjects">
        {titleTextImage.map((item, id) => (
          <TitleTextImage content={item} key={id} />
        ))}
      </div>
      <div className="section-me-collaborations">
        <div className="page-padding">
          <div className="container">
            <div className="collaborations_list">
              {sponsors?.map((item, id) => (
                <Collaborations content={item} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Cta mainText={ctaText} btnText={ctaButton} />
    </>
  );
};

export const getServerSideProps = async () => {
  const musicEducationQuery = '*[_type == "musicEducation"]';
  const musicEducationContent = await client.fetch(musicEducationQuery);

  return {
    props: { musicEducationContent },
  };
};

export default MusicEducation;
