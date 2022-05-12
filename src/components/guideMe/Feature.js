import React from "react";
import "./Feature.css";

const Feature = ({ index, heading, text }) => {
  return (
    <div  key={index} data-aos={index%2===0 ? "fade-right" : "fade-left"}
    >
      <div className="px-12 sm:px-2">
        <div className="">
          <div className="">
            <div className="md:w-2/3 xl:w-1/2 mx-auto text-center">
              <div className="w-full">
                <div className="w-max mx-auto mb-3">
                  <h3 className="text-xl w-full text-center navitem text-green-500">{heading}</h3>
                </div>
              </div>
              <div>
                <p className="u-text-small mb-5">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
