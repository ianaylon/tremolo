import React, { useRef, useState, useEffect } from "react";
import { MeFeature, PageHero, TitleTextImage, Cta } from "@/components";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

import { client } from "@/lib/client";

const MusicEducation = ({ musicEducationContent }) => {
  const {
    heroImage,
    title,
    content,
    features,
    titleTextImage,
    ctaText,
    ctaButton,
  } = musicEducationContent[0];
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <PageHero img={heroImage} title={title} />
      <div className="section-me-about">
        <div className="page-padding">
          <div className="container">
            <PortableText value={content} />
            <motion.div className="me-features_carousel" ref={carousel}>
              <motion.div
                className="me-features_inner-carousel"
                drag="x"
                dragConstraints={{ right: width, left: 0 }}
              >
                {features?.map((item, id) => (
                  <MeFeature feature={item} key={id} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="section-me-subjects">
        {titleTextImage.map((item, id) => (
          <TitleTextImage content={item} key={id} />
        ))}
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
