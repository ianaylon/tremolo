/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import PageHero from "@/components/PageHero";
import { PortableText } from "@portabletext/react";

import { client, urlFor } from "@/lib/client";

import tremoloCenterBg from "../public/tremolo-center-bg.jpeg";

const TremoloCenter = ({ tremoloCenterContent }) => {
  const {
    heroImage,
    title,
    content,
    feature1,
    featureContent1,
    featureImage1,
    feature2,
    featureContent2,
    featureImage2,
  } = tremoloCenterContent[0];
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
          <div className="tc-features_item">
            <div className="tc-features_content-holder">
              <h2>{feature1}</h2>
              <p>{featureContent1}</p>
            </div>
            <div className="tc-features_image-holder">
              <img
                src={urlFor(featureImage1 ?? featureImage1)}
                alt={title}
                className={"tc-features_image"}
              ></img>
            </div>
          </div>
          <div className="tc-features_item">
            <div className="tc-features_content-holder">
              <h2>{feature2}</h2>
              <p>{featureContent2}</p>
            </div>
            <div className="tc-features_image-holder">
              <img
                src={urlFor(featureImage2 ?? featureImage2)}
                alt={title}
                className={"tc-features_image"}
              ></img>
            </div>
          </div>
        </div>
      </div>
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
