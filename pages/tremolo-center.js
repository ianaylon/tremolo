/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Cta, PageHero, TitleTextImage } from "@/components";
import { PortableText } from "@portabletext/react";

import { client } from "@/lib/client";

const TremoloCenter = ({ tremoloCenterContent }) => {
  const { heroImage, title, content, titleTextImage, ctaText, ctaButton } =
    tremoloCenterContent[0];
  console.log(titleTextImage);
  return (
    <>
      <PageHero img={heroImage} title={title} />
      <div className="section-tc-about">
        <div className="page-padding">
          <div className="container">
            <div className="rich-text">
              <PortableText value={content} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-tc-features">
        <div className="tc-features-container">
          {titleTextImage.map((item, id) => (
            <TitleTextImage content={item} key={id} />
          ))}
        </div>
      </div>
      <Cta text={ctaText} btn={ctaButton} />
    </>
  );
};

export const getServerSideProps = async () => {
  const tremoloCenterQuery = '*[_type == "tremoloCenter"]';
  const tremoloCenterContent = await client.fetch(tremoloCenterQuery);

  return {
    props: { tremoloCenterContent },
  };
};

export default TremoloCenter;
