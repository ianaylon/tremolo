/* eslint-disable @next/next/no-img-element */
import React from "react";

import { urlFor } from "@/lib/client";

const Collaborations = ({ content }) => {
  const { title, image } = content;
  const img = urlFor(image ?? image);
  return (
    <div className="collaboration">
      <img src={img} alt={title} className={"collaboration_img"} />
    </div>
  );
};

export default Collaborations;
