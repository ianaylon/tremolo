import React from "react";
import { PageHero, RepertoireItem } from "@/components";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/client";

const tremolo = ({ tremoloContent }) => {
  const { title, heroImage, content, tremoloVideos } = tremoloContent[0];

  return (
    <>
      <div className="ltr-page page-background-light">
        <PageHero img={heroImage} title={title} />
        <div className="section-tremolo">
          <div className="page-padding">
            <div className="container">
              <div className="rich-text">
                <PortableText value={content} />
              </div>
              <div className="repertoire_list">
                {tremoloVideos?.map((item, id) => (
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
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const tremoloQuery = '*[_type == "tremolo"]';
  const tremoloContent = await client.fetch(tremoloQuery);

  return {
    props: { tremoloContent },
  };
};

export default tremolo;
