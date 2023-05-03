import React from "react";
import Teams from "../Teams/Teams";
import "./Community.css";

const Community = () => {
  return (
    <>
      <div className="community-wrapper">
        <div className="community-text">
          <h2>Join Your Community</h2>
          <span>
            As a community member, you'll come together with others living with
            your condition to support each other, learn from each other, inspire
            each other, to feel a sense of fellowship, safety and belonging
            together.
          </span>
        </div>
      </div>
      <Teams />
    </>
  );
};

export default Community;
