import React from "react";
import { PortableText } from "@portabletext/react";

import { Collaborations, Cta, PageHero } from "@/components";

import { client } from "@/lib/client";

const about = ({ aboutContent }) => {
  const { title, heroImage, content, collaborations, ctaText, ctaButton } =
    aboutContent[0];
  return (
    <>
      <PageHero img={heroImage} title={title} />
      <div className="section-about-about">
        <div></div>
        <div className="page-padding">
          <div className="container">
            <div className="rich-text">
              <PortableText value={content} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about-collaborations">
        <div className="page-padding">
          <div className="container">
            <div className="collaborations_list">
              {collaborations?.map((item, id) => (
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
  const aboutQuery = '*[_type == "about"]';
  const aboutContent = await client.fetch(aboutQuery);

  return {
    props: { aboutContent },
  };
};

export default about;
