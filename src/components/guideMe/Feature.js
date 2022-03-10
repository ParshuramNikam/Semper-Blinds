import React from "react";
import "./Feature.css";

const Feature = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        {/* <BsHexagon color="#fc5412" size={55} /> */}
        {/* <div className="inner-icon">{icon}</div> */}
      </div>
      {/* <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <h1> I am centered </h1>
</div> */}
      <div className="flex justify-center items-center flex-col	 feature-text">
        <div className="flex w-1/2 justify-center items-center flex-col	 feature-text">
          <div>
            <h3 className="w-max navitem text-green-500">{heading}</h3>
          </div>
          <div>
            <p className="u-text-small mb-5">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
