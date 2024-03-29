import React from "react";
import { Cta, PageHero, TeamMember } from "@/components";

import { client } from "@/lib/client";

const team = ({ teamContent, teamMembersContent }) => {
  const { title, heroImage, ctaText, ctaButton } = teamContent[0];
  return (
    <>
      <PageHero title={title} img={heroImage} />
      <div className="section-team-members">
        <div className="page-padding">
          <div className="container-large">
            <div className="team-members-list">
              {teamMembersContent.map((item, id) => (
                <TeamMember
                  name={item.name}
                  role={item.role}
                  content={item.content}
                  image1={item.image1}
                  image2={item.image2}
                  key={id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Cta text={ctaText} btn={ctaButton} />
    </>
  );
};

export const getServerSideProps = async () => {
  const teamQuery = '*[_type == "team"]';
  const teamContent = await client.fetch(teamQuery);

  const teamMembersQuery = '*[_type == "teamMembers"]|order(orderRank)';
  const teamMembersContent = await client.fetch(teamMembersQuery);

  return {
    props: { teamContent, teamMembersContent },
  };
};

export default team;
