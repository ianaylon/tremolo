import React from "react";
import { PageHero } from "@/components";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/client";

const contact = ({ contactContent }) => {
  const { title, heroImage, content, credit } = contactContent[0];

  return (
    <>
      <PageHero img={heroImage} title={title} credit={credit} />
      <div className="section-contact">
        <div className="page-padding">
          <div className="container">
            <div className="rich-text">
              <PortableText value={content} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const contactQuery = '*[_type == "contact"]';
  const contactContent = await client.fetch(contactQuery);

  return {
    props: { contactContent },
  };
};

export default contact;
