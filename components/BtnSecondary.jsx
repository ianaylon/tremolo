import React from "react";
import Link from "next/link";

const BtnSecondary = ({ destination, text, target }) => {
  return (
    <Link href={destination} className="btn-secondary" target={target}>
      {text}
    </Link>
  );
};

export default BtnSecondary;
