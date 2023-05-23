import React from "react";
import Link from "next/link";

const Cta = ({ text, btn }) => {
  return (
    <div className="cta">
      <div className="page-padding">
        <div className="container">
          <p>{text}</p>
          <Link className="btn-dark margin-top" href={"/contact"}>
            {btn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
