/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

const TitleTextImage = ({
  content: { title, text, image, btntext, btnlink },
}) => {
  return (
    <div className="tc-features_item">
      <div className="tc-features_content-holder">
        <h2>{title}</h2>
        <p>{text}</p>
        {btntext && (
          <Link
            className="btn-primary margin-top"
            href={btnlink}
            target="blank"
          >
            {btntext}
          </Link>
        )}
      </div>
      <div className="tc-features_image-holder">
        {image && (
          <img
            src={urlFor(image ?? image)}
            alt={title}
            className={"tc-features_image"}
          />
        )}
      </div>
    </div>
  );
};

export default TitleTextImage;
