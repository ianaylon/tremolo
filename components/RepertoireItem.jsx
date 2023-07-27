/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";
import { AiFillPlayCircle } from "react-icons/ai";

const RepertoireItem = ({ title, text, image, video, approved }) => {
  return (
    <div className="repertoire_item">
      {approved && (
        <img
          className="repertoire_approved"
          src={"/approved.png"}
          alt={"מאושר סל תרבות"}
        />
      )}

      <div className="repertoire_img-holder">
        {image ? (
          <img className="repertoire_img" src={urlFor(image)} alt={title} />
        ) : (
          false
        )}
        {video ? (
          <Link
            href={video}
            className="repertoire_video-link"
            target={"_blank"}
          >
            <AiFillPlayCircle size={50} color={"white"} />
          </Link>
        ) : (
          false
        )}
      </div>
      <div className="repertoire_content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default RepertoireItem;
