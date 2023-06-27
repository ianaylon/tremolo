import React from "react";
import { BtnSecondary } from ".";

const EventDate = ({ date: { title, date, venue, url } }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  return (
    <>
      <div className="event-date">
        <div className="event-date_details">
          <p>{formattedDate}</p>
          <h3>{title}</h3>
          <h4>{venue}</h4>
        </div>
        <BtnSecondary
          destination={url}
          text="קניית כרטיסים"
          target={"_blank"}
        />
      </div>
    </>
  );
};

export default EventDate;
