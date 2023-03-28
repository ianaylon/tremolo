/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/lib/client";

const TeamMember = ({ name, role, content, image1, image2 }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseOut = () => {
    setHovered(false);
  };
  const firstImage = urlFor(image1 ?? image1);
  const secondImage = urlFor(image2 ?? image2);
  return (
    <div className="team-member">
      <img
        src={hovered ? secondImage : firstImage}
        alt={name}
        className="team-member_img"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <div className="team-member_content">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <PortableText value={content} />
      </div>
    </div>
  );
};

export default TeamMember;
