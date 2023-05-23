import React from "react";
import { EventDate, PageHero, Cta } from "@/components";

import { client } from "@/lib/client";

const tour = ({ dates, tour }) => {
  const { title, heroImage, ctaText, ctaButton } = tour[0];
  return (
    <>
      <div className="section-tour-hero">
        <PageHero img={heroImage} title={title} />
      </div>
      <div className="section-dates">
        <div className="page-padding">
          <div className="container">
            <ul className="dates-list">
              {dates?.map((date) => (
                <li key={date._id}>
                  <EventDate date={date} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Cta text={ctaText} btn={ctaButton} />
    </>
  );
};

export const getServerSideProps = async () => {
  const datesQuery = '*[_type == "dates"]';
  const dates = await client.fetch(datesQuery);

  const tourQuery = '*[_type == "tour"]';
  const tour = await client.fetch(tourQuery);

  return {
    props: { dates, tour },
  };
};

export default tour;
