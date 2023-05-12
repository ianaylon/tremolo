import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/tremolo-logo.png";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const PageHero = ({ img, credit, title }) => {
  return (
    <div className="section-hero">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="hero_logo" />
      </Link>
      <div className="section-hero_img-holder">
        <img
          src={urlFor(img && img)}
          className="section-hero_img"
          alt={title}
        />
        <div className="credit-holder">
          <div className="container">
            {credit && <p className="">צילום: {credit}</p>}
          </div>
        </div>
      </div>
      <div className="section-hero_content">
        <div className="page-padding">
          <div className="container">
            <div className="hero_title-holder">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
