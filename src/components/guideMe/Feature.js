import React from "react";
import "./Feature.css";

const Feature = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        {/* <BsHexagon color="#fc5412" size={55} /> */}
        {/* <div className="inner-icon">{icon}</div> */}
      </div>

      <div className="feature-text">
        <h3 className="w-max navitem text-green-500">{heading}</h3>
        <p className="u-text-small mb-5">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
