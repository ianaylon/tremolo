import React from "react";
import { Cta, PageHero, RepertoireItem } from "@/components";
import { PortableText } from "@portabletext/react";

import { client } from "@/lib/client";

const repertoire = ({ repertoireContent }) => {
  const { title, heroImage, content, repertoireItems, ctaText, ctaButton } =
    repertoireContent[0];
  return (
    <>
      <PageHero img={heroImage} title={title} />
      <div className="section-repertoire">
        <div className="page-padding">
          <div className="container">
            <div className="rich-text">
              <PortableText value={content} />
            </div>
            <div className="repertoire_list">
              {repertoireItems?.map((item, id) => (
                <RepertoireItem
                  key={id}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  video={item.video}
                  approved={item.approved}
                />
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
  const repertoireQuery = '*[_type == "repertoire"]';
  const repertoireContent = await client.fetch(repertoireQuery);

  return {
    props: { repertoireContent },
  };
};

export default repertoire;
